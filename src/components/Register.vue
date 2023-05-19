<script setup lang="ts">
import { computed, ref } from 'vue';

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

const show = computed(() => {
  return props.value;
});
</script>

<template>
  <v-dialog v-model="show" persistent width="1024">
    <v-window
      ><v-window-item value="personalInformaition">
        <v-row>
          <v-col cols="12" md="6"><v-text-field label="Nombre" required /> </v-col>
          <v-col cols="12" md="6"><v-text-field label="Apellido" required /> </v-col>
          <v-col cols="12"><v-text-field label="Email" required /> </v-col>
          <v-col cols="12" md="6"><v-text-field label="Contraseña" required /> </v-col>
          <v-col cols="12" md="6"><v-text-field label="Confirmar contraseña" required /> </v-col>
          <v-col cols="12" md="6"
            ><v-select
              label="Género"
              required
              :items="[
                {
                  id: Gender.Male,
                  name: 'Masculino',
                },
                {
                  id: Gender.Female,
                  name: 'Femenino',
                },
                {
                  id: Gender.NonBinary,
                  name: 'No binario',
                },
              ]" />
          </v-col>
          <v-col cols="12" md="6"><v-text-field label="Fecha de nacimiento" persistent-hint hint="Ej. 24/06/1998" required /> </v-col>
          <v-col cols="12"
            ><v-radio-group label="¿Tienes alguna discapacidad?">
              <v-radio label="Si" :value="true"></v-radio>
              <v-radio label="No" :value="false"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" md="6" v-if="hasDisability">
            <v-select
              label="¿Cuál es tu discapacidad?"
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
          <v-col cols="12" md="6" v-if="hasDisability"
            ><v-radio-group label="¿Cual es tu grado de discapacidad?">
              <v-radio label="Grado 1" :value="1"></v-radio>
              <v-radio label="Grado 2" :value="2"></v-radio>
              <v-radio label="Grado 3" :value="3"></v-radio> </v-radio-group
          ></v-col>
        </v-row>
      </v-window-item>
    </v-window>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
