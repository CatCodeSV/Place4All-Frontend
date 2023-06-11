import { computed, reactive, Ref, ref, UnwrapNestedRefs } from 'vue';
import { ViewMode } from '@/enums/ViewMode';
// @ts-ignore
import { useVuelidate, Validation, ValidationArgs } from '@vuelidate/core';

export function useRelatedDialog<T extends { [key in keyof Vargs]: any }, Vargs = ValidationArgs>(
  rules: { [key in keyof ValidationArgs]: any },
  copyProperties: (source: T, target: T) => void
) {
  const viewModeInternal = ref(ViewMode.Create);
  const readonly = computed(() => {
    return viewModeInternal.value == ViewMode.Readonly;
  });
  const validationRules = computed(() => ({
    relatedInternal: rules,
  }));

  let resetInternal: Function;
  const relatedInternal = reactive<T>({} as T);

  const v$: Ref<Validation<{ relatedInternal: {} }, { relatedInternal: UnwrapNestedRefs<T> }>> = useVuelidate(
    validationRules,
    { relatedInternal },
    { $stopPropagation: true, $scope: false }
  );

  const dialog = ref(false);

  function closeDialog() {
    dialog.value = false;
  }

  function show(related: T, viewMode: ViewMode = ViewMode.Readonly) {
    viewModeInternal.value = viewMode;
    resetInternal = () => copyProperties(related, relatedInternal);
    reset();
    dialog.value = true;
  }

  function reset() {
    resetInternal();
    v$.value.$reset();
  }

  return {
    viewModeInternal,
    relatedInternal,
    readonly,
    v$,
    dialog,
    closeDialog,
    show,
    reset,
  };
}
