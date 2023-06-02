<script lang="ts">
type CheckedState = boolean | 'indeterminate';

export type CheckboxProps = {
  dir?: 'ltr' | 'rtl';
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
  checked?: CheckedState;
  onChange?: (details: { checked: CheckedState }) => void;
  name?: string;
  form?: string;
  value?: string;
};

export default {
  name: 'XCheckbox',
};
</script>

<script setup lang="ts">
import * as checkbox from '@zag-js/checkbox';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { computed, useSlots } from 'vue';
import { useId } from '../../hooks/useId';

const props = withDefaults(defineProps<CheckboxProps>(), {
  value: 'on',
  dir: 'ltr',
  checked: false,
});

const id = useId();

const [state, send] = useMachine(checkbox.machine({ ...props, id: id.value }));

const api = computed(() => checkbox.connect(state.value, send, normalizeProps));

const slots = useSlots();
if (!slots.default) {
  console.error('Checkbox must have a label');
}
</script>

<template>
  <label
    v-bind="api.rootProps"
    class="cursor-pointer disabled:cursor-not-allowed inline-flex items-center gap-2 select-none align-top"
  >
    <span class="relative">
      <input v-bind="api.inputProps" />
      <div
        v-bind="api.controlProps"
        class="w-5 h-5 rounded border border-slate-500 bg-white"
        :class="{
          'before:bg-current before:rounded-[999px] before:contents[\'\'] before:h-[2px] before:left-1/2 before:top-1/2 before:absolute before:w-2 before:-translate-x-1/2 before:-translate-y-1/2':
            api.isIndeterminate,
        }"
      >
        <span
          aria-hidden="true"
          class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex aspect-square justify-center h-4"
        >
          <svg
            v-if="api.isChecked"
            id="checkbox-checked-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="block h-full min-w-full"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
      </div>
    </span>
    <span v-bind="api.labelProps">
      <slot />
    </span>
  </label>
</template>
