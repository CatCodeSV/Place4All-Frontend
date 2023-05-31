<script setup lang="ts">
import { computed, ref } from 'vue';
import { CreateUser, Gender } from '@/helpers/getUser';
import { DisabilityType } from '@/enums/disabilityType';

const props = defineProps<{
  value: boolean;
  onClose: Function;
}>();

const name = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const gender = ref<Gender>();
const birthDate = ref('');
const hasDisability = ref(false);
const disabilityType = ref('');
const disabilityDegree = ref(0);
const window = ref(1);
const visible = ref(false);

const show = computed(() => {
  return props.value;
});

function onRegister() {
  if (password.value !== confirmPassword.value) {
    return;
  }

  const registerUser: CreateUser = {
    name: name.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    gender: gender.value!,
    birthDate: birthDate.value,
    hasDisability: hasDisability.value,
    disabilityType: disabilityType.value,
    disabilityDegree: disabilityDegree.value,
    phoneNumber: '',
    street: '',
    city: '',
    number: 0,
    province: '',
    zipCode: '',
  };
  console.log(registerUser);
  props.onClose();
}
</script>

<template>
  <v-dialog v-model="show" persistent close-on-back width="1024" class="pa-6">
    <v-window class="bg-white pa-10" v-model="window">
      <div class="d-flex">
        <span class="text-h3 text-primary font-weight-bold mb-6">Únete</span>
        <v-spacer />
        <span class="font-italic">{{ window }} de 2</span>
      </div>
      <v-window-item :value="1">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field color="primary" label="Nombre" v-model="name" required />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field color="primary" label="Apellido" v-model="lastName" required />
          </v-col>
          <v-col cols="12">
            <v-text-field color="primary" label="Email" v-model="email" required />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              color="primary"
              label="Contraseña"
              v-model="password"
              :append-inner-icon="!visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              @click:append-inner="visible = !visible"
              required />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              color="primary"
              label="Confirmar contraseña"
              v-model="confirmPassword"
              :append-inner-icon="!visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              @click:append-inner="visible = !visible"
              required />
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              label="Género"
              v-model="gender"
              required
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
              ]" />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              color="primary"
              label="Fecha de nacimiento"
              v-model="birthDate"
              persistent-hint
              hint="Ej. 24/06/1998"
              type="date"
              required />
          </v-col>
          <v-col cols="12">
            <v-radio-group label="¿Tienes alguna discapacidad?" v-model="hasDisability">
              <v-radio label="Si" :value="true" />
              <v-radio label="No" :value="false" />
            </v-radio-group>
          </v-col>
          <v-col cols="12" md="6" v-if="hasDisability">
            <v-select
              label="¿Cuál es tu discapacidad?"
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
              ]" />
          </v-col>
          <v-col cols="12" md="6" v-if="hasDisability">
            <v-radio-group label="¿Cual es tu grado de discapacidad?" v-model="disabilityDegree">
              <v-radio label="Grado 1" :value="1"></v-radio>
              <v-radio label="Grado 2" :value="2"></v-radio>
              <v-radio label="Grado 3" :value="3"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
      </v-window-item>
      <v-window-item :value="2">
        <!-- CRUD Dirección -->
      </v-window-item>
      <v-row clas="w-100">
        <div class="d-flex w-100">
          <v-btn color="secondary" @click="window--" :text="window == 1 ? 'Cerrar' : 'Atrás'" />
          <v-spacer />
          <v-btn
            color="primary"
            @click="
              window == 1
                ? window++
                : () => {
                    onRegister();
                  }
            "
            :text="window == 1 ? 'Siguiente' : 'Registrarse'" />
        </div>
      </v-row>
    </v-window>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
