<script lang="ts" setup>
import { computed, ref } from 'vue';
import { CreateUser, Gender } from '@/helpers/getUser';
import { DisabilityType } from '@/enums/disabilityType';
import { useUser } from '@/composables/useUser';

const { createUser } = useUser();
const props = defineProps<{
  value: boolean;
}>();

const emit = defineEmits<{
  (e: 'onClose'): void;
}>();

const name = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const gender = ref<Gender>();
const birthDate = ref<Date>();
const hasDisability = ref(false);
const disabilityType = ref();
const disabilityDegree = ref(0);
const phoneNumber = ref('');
const street = ref('');
const city = ref('');
const number = ref();
const province = ref('');
const zipCode = ref('');
const window = ref(1);
const visible = ref(false);
const isFirstFormValid = ref(false);
const isAddressFormValid = ref(false);
const loading = ref(false);

const show = computed(() => {
  return props.value;
});

const rules = ref({
  required: (value: any) => !!value || 'Este campo es obligatorio.',
  counter: (value: any) => value.length <= 20 || 'Max 20 characters',
  email: (value: any) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || 'El formato de email es incorrecto. Ej. nombre@dominio.com';
  },
  password: (value: any) => {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    return pattern.test(value) || 'La contraseña debe tener al menos 6 caracteres, un número y una letra';
  },
});

function passwordConfirmationRule() {
  return () => password.value === confirmPassword.value || 'Las contraseñas deben ser iguales';
}

async function onRegister() {
  loading.value = true;
  if (password.value !== confirmPassword.value) {
    return;
  }

  const registerUser: CreateUser = {
    name: name.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    gender: gender.value!,
    birthDate: birthDate.value!,
    hasDisability: hasDisability.value,
    disabilityType: disabilityType.value,
    disabilityDegree: disabilityDegree.value,
    phoneNumber: phoneNumber.value,
    street: street.value,
    city: city.value,
    number: number.value,
    province: province.value,
    zipCode: zipCode.value,
  };
  await createUser(registerUser);
  loading.value = false;
  emit('onClose');
}
</script>

<template>
  <v-dialog v-model="show" class="pa-6" close-on-back persistent width="1024">
    <v-window v-model="window" class="bg-white pa-10">
      <div class="d-flex">
        <span class="text-h3 text-primary font-weight-bold mb-6">Únete</span>
        <v-spacer />
        <span class="font-italic">{{ window }} de 2.</span>
      </div>
      <v-window-item :value="1">
        <v-form v-model="isFirstFormValid">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                :rules="[rules.required, rules.email]"
                color="primary"
                label="Email"
                type="email"
                validate-on="blur" />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-model="name" :rules="[rules.required]" color="primary" label="Nombre" required validate-on="blur" />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastName"
                :rules="[rules.required]"
                color="primary"
                label="Apellido"
                required
                validate-on="blur" />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="phoneNumber"
                :rules="[rules.required]"
                color="primary"
                label="Número de teléfono"
                required
                type="tel"
                validate-on="blur" />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="password"
                :append-inner-icon="!visible ? 'mdi-eye-off' : 'mdi-eye'"
                :rules="[rules.required, rules.password]"
                :type="visible ? 'text' : 'password'"
                color="primary"
                label="Contraseña"
                required
                validate-on="blur"
                @click:append-inner="visible = !visible" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="confirmPassword"
                :append-inner-icon="!visible ? 'mdi-eye-off' : 'mdi-eye'"
                :rules="[rules.required, passwordConfirmationRule()]"
                :type="visible ? 'text' : 'password'"
                color="primary"
                label="Confirmar contraseña"
                required
                validate-on="blur"
                @click:append-inner="visible = !visible" />
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="gender"
                :items="[
                  {
                    value: Gender.Male,
                    title: 'Masculino',
                  },
                  {
                    value: Gender.Female,
                    title: 'Femenino',
                  },
                  {
                    value: Gender.NonBinary,
                    title: 'No binario',
                  },
                ]"
                label="Género"
                required />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="birthDate"
                :rules="[rules.required]"
                color="primary"
                hint="Ej. 24/06/1998"
                label="Fecha de nacimiento"
                persistent-hint
                required
                type="date"
                validate-on="blur" />
            </v-col>
            <v-col cols="12">
              <v-radio-group v-model="hasDisability" label="¿Tienes alguna discapacidad?">
                <v-radio :value="true" label="Si" />
                <v-radio :value="false" label="No" />
              </v-radio-group>
            </v-col>
            <v-col v-if="hasDisability" cols="12" md="6">
              <v-select
                v-model="disabilityType"
                :items="[
                  {
                    id: DisabilityType.Motor,
                    name: 'Motora',
                  },
                  {
                    id: DisabilityType.Visual,
                    name: 'Visual',
                  },
                  {
                    id: DisabilityType.Hearing,
                    name: 'Auditiva',
                  },
                  {
                    id: DisabilityType.Intellectual,
                    name: 'Intelectual',
                  },
                  {
                    id: DisabilityType.Psychosocial,
                    name: 'Psicosocial',
                  },
                  {
                    id: DisabilityType.Multiple,
                    name: 'Múltiple',
                  },
                ]"
                label="¿Cuál es tu discapacidad?" />
            </v-col>
            <v-col v-if="hasDisability" cols="12" md="6">
              <v-radio-group v-model="disabilityDegree" label="¿Cual es tu grado de discapacidad?">
                <v-radio :value="1" label="Grado 1"></v-radio>
                <v-radio :value="2" label="Grado 2"></v-radio>
                <v-radio :value="3" label="Grado 3"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-form>
        <v-row clas="w-100">
          <div class="d-flex w-100">
            <v-btn :text="'Cerrar'" color="secondary" @click="emit('onClose')" />
            <v-spacer />
            <v-btn :disabled="!isFirstFormValid" :text="'Siguiente'" color="primary" type="submit" @click="window++" />
          </div>
        </v-row>
      </v-window-item>
      <v-window-item :value="2">
        <!-- CRUD Dirección -->
        <v-form v-model="isAddressFormValid">
          <v-row>
            <!-- street: '',
    city: '',
    number: 0,
    province: '',
    zipCode: ''            -->
            <v-col cols="12">
              <v-text-field v-model="street" :rules="[rules.required]" color="primary" label="Dirección" required validate-on="blur" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="number" :rules="[rules.required]" color="primary" label="Número" required validate-on="blur" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="city" :rules="[rules.required]" color="primary" label="Ciudad" required validate-on="blur" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="province"
                :rules="[rules.required]"
                color="primary"
                label="Provincia"
                required
                validate-on="blur" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="zipCode"
                :rules="[rules.required]"
                color="primary"
                label="Código postal"
                required
                validate-on="blur" />
            </v-col>
          </v-row>
        </v-form>
        <v-row clas="w-100">
          <div class="d-flex w-100">
            <v-btn :text="'Atrás'" color="secondary" @click="window--" />
            <v-spacer />
            <v-btn
              :disabled="!isAddressFormValid"
              :loading="loading"
              :text="'Registrarse'"
              color="primary"
              type="submit"
              @click="onRegister" />
          </div>
        </v-row>
      </v-window-item>
    </v-window>
  </v-dialog>
</template>

<style lang="scss" scoped></style>
