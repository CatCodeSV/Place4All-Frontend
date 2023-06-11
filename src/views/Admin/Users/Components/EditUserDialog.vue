<script setup lang="ts">
import { useRelatedDialog } from '@/composables/useRelatedDialog';
import { User } from '@/models/User';
import { Gender } from '@/helpers/getUser';
import { DisabilityType } from '@/enums/disabilityType';
import { ViewMode } from '@/enums/ViewMode';
import { required } from '@vuelidate/validators';

const { dialog, relatedInternal, viewModeInternal, closeDialog, v$, readonly, show } = useRelatedDialog<User>({}, (source, target) => {
  target.id = source.id;
  target.name = source.name;
  target.lastName = source.lastName;
  target.gender = source.gender;
  target.birthDate = source.birthDate;
  target.hasDisability = source.hasDisability;
  target.disabilityType = source.disabilityType;
  target.disabilityDegree = source.disabilityDegree;
  target.userName = source.userName;
});

const emit = defineEmits<{
  (e: 'onAccept', viewMode: ViewMode, user: User): void;
}>();

defineExpose({ show });
</script>

<template>
  <v-dialog v-model="dialog" max-width="60%" class="pa-6" close-on-back persistent>
    <v-card class="h-100">
      <v-toolbar color="white">
        <div class="d-flex flex-column pa-4">
          <v-toolbar-title>Editar {{ relatedInternal.name }}</v-toolbar-title>
        </div>
      </v-toolbar>
      <v-card-text style="overflow-y: auto">
        <v-container class="h-100">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field :readonly="readonly" v-model="relatedInternal.name" color="primary" label="Nombre" validate-on="blur" />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                :readonly="readonly"
                v-model="relatedInternal.lastName"
                color="primary"
                label="Apellido"
                required
                validate-on="blur" />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                :readonly="readonly"
                v-model="relatedInternal.userName"
                color="primary"
                label="Nombre de usuario"
                required
                validate-on="blur" />
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="relatedInternal.gender"
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
                item-value="value"
                item-title="title"
                label="Género" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                :readonly="readonly"
                v-model="relatedInternal.birthDate"
                color="primary"
                hint="Ej. 24/06/1998"
                label="Fecha de nacimiento"
                persistent-hint
                type="date"
                validate-on="blur" />
            </v-col>
            <v-col cols="12">
              <v-radio-group v-model="relatedInternal.hasDisability" label="¿Tienes alguna discapacidad?">
                <v-radio :value="true" label="Si" />
                <v-radio :value="false" label="No" />
              </v-radio-group>
            </v-col>
            <v-col v-if="relatedInternal.hasDisability" cols="12" md="6">
              <v-select
                v-model="relatedInternal.disabilityType"
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
                item-value="id"
                item-title="name"
                label="¿Cuál es tu discapacidad?" />
            </v-col>
            <v-col v-if="relatedInternal.hasDisability" cols="12" md="6">
              <v-radio-group v-model="relatedInternal.disabilityDegree" label="¿Cual es tu grado de discapacidad?">
                <v-radio :value="1" label="Grado 1"></v-radio>
                <v-radio :value="2" label="Grado 2"></v-radio>
                <v-radio :value="3" label="Grado 3"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <div class="d-flex align-center pa-0">
          <div class="mr-9">
            <v-btn
              color="primary"
              @click="
                emit('onAccept', viewModeInternal, relatedInternal);
                closeDialog();
              ">
              Guardar
            </v-btn>
          </div>
          <div class="d-flex align-center pa-0">
            <v-btn color="action" @click="closeDialog">Cancelar</v-btn>
          </div>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
