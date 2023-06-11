import { ValidationRule, ValidationRuleWithoutParams } from '@vuelidate/core';
import { MessageProps, decimal, email, helpers, integer, maxValue, required, requiredUnless, minValue } from '@vuelidate/validators';
import { Ref } from 'vue';

const urlRegexValidation: ValidationRuleWithoutParams = helpers.regex(
  /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
);

export class ValidationBuilder<T> {
  private readonly _validationRules: Record<string, ValidationRule<T>>;

  constructor() {
    this._validationRules = {};
  }

  required(message: string | ((params: MessageProps) => string)): ValidationBuilder<T> {
    this._validationRules.required = helpers.withMessage(message, required);
    return this;
  }

  requiredUnless(message: string | ((params: MessageProps) => string), unless: (() => boolean) | Ref<boolean>): ValidationBuilder<T> {
    this._validationRules.requiredUnless = helpers.withMessage(message, requiredUnless(unless));
    return this;
  }

  numeric(isDecimal: boolean, message: string | ((params: MessageProps) => string) | undefined = undefined): ValidationBuilder<T> {
    if (message == undefined) {
      message = 'El campos solo admite números';
    }
    if (isDecimal) {
      this._validationRules.decimal = helpers.withMessage(message, decimal);
    } else {
      this._validationRules.integer = helpers.withMessage(message, integer);
    }
    return this;
  }

  maxValue(
    value: number | Ref<number>,
    message: string | ((params: MessageProps) => string) | undefined = undefined
  ): ValidationBuilder<T> {
    if (message == undefined) {
      message = 'Se ha superado el máximo valor permitido';
    }
    this._validationRules.maxValue = helpers.withMessage(message, maxValue(value));
    return this;
  }

  minValue(
    value: number | Ref<number>,
    message: string | ((params: MessageProps) => string) | undefined = undefined
  ): ValidationBuilder<T> {
    if (message == undefined) {
      message = 'No se ha superado el mínimo valor permitido';
    }
    this._validationRules.minValue = helpers.withMessage(message, minValue(value));
    return this;
  }

  email(message: string | ((params: MessageProps) => string) | undefined = undefined): ValidationBuilder<T> {
    if (message == undefined) {
      message = 'El formato del email no es válido';
    }
    this._validationRules.email = helpers.withMessage(message, email);
    return this;
  }

  web(message: string | ((params: MessageProps) => string) | undefined = undefined): ValidationBuilder<T> {
    if (message == undefined) {
      message = 'El formato del enlace no es válido';
    }
    this._validationRules.web = helpers.withMessage(message, urlRegexValidation);
    return this;
  }

  build(): Record<string, ValidationRule<T>> {
    return this._validationRules;
  }
}
