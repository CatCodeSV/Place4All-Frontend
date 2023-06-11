import { BaseValidation, ErrorObject, ValidationRule, ValidationRuleCollection } from '@vuelidate/core';
import { MessageProps } from '@vuelidate/validators';
import { Ref, isRef } from 'vue';
import { ValidationBuilder } from './ValidationBuilder';

export function compareString(a: string, b: string): number {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

export function required<T = unknown>(message: string | ((params: MessageProps) => string)): Record<string, ValidationRule<T>> {
  return new ValidationBuilder<T>().required(message).build();
}

export function requiredUnless<T = unknown>(
  message: string | ((params: MessageProps) => string),
  unless: (() => boolean) | Ref<boolean>
): Record<string, ValidationRule<T>> {
  return new ValidationBuilder<T>().requiredUnless(message, unless).build();
}

export function email<T = unknown>(
  message: string | ((params: MessageProps) => string) | undefined = undefined
): Record<string, ValidationRule<T>> {
  return new ValidationBuilder<T>().email(message).build();
}

export function numeric<T = unknown>(
  isDecimal: boolean = true,
  numericMessage: string | ((params: MessageProps) => string) | undefined = undefined,
  minValue: number | Ref<number> = -9999999999.99,
  maxValue: number | Ref<number> = 9999999999.99
): Record<string, ValidationRule<T>> {
  return new ValidationBuilder<T>().numeric(isDecimal, numericMessage).minValue(minValue).maxValue(maxValue).build();
}

export function web<T = unknown>(
  message: string | ((params: MessageProps) => string) | undefined = undefined
): Record<string, ValidationRule<T>> {
  return new ValidationBuilder<T>().web(message).build();
}

export function getErrorMessages<T>(validationProperty?: BaseValidation<T, ValidationRuleCollection<T>>): string[] {
  if (validationProperty == undefined) {
    return [];
  }
  return parseErrorMessages(validationProperty.$errors);
}

export function parseErrorMessages(errors: ErrorObject[]): string[] {
  return errors.map(e => (isRef(e.$message) ? e.$message.value : e.$message)).sort((a, b) => compareString(a, b));
}
