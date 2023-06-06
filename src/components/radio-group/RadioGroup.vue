<script lang="ts">
type RadioGroupProps = {
  items: { id: string; label: string }[];
  title?: string;
  /**
   * The document's text/writing direction.
   * @default "ltr"
   */
  dir?: 'ltr' | 'rtl';
  /**
   * The value of the checked radio
   */
  value?: string | null;
  /**
   * The name of the input fields in the radio
   * (Useful for form submission).
   */
  name?: string;
  /**
   * The associate form of the underlying input.
   */
  form?: string;
  /**
   * If `true`, the radio group will be disabled
   */
  disabled?: boolean;
  /**
   * If `true`, the radio group will be readonly
   */
  readOnly?: boolean;
  /**
   * Function called once a radio is checked
   * @param value the value of the checked radio
   */
  onChange?(details: { value: string }): void;
  /**
   * Orientation of the radio group
   */
  orientation?: 'horizontal' | 'vertical';
};

export default {
  name: 'XRadioGroup',
};
</script>

<script setup lang="ts">
import { computed } from 'vue';
import * as radio from '@zag-js/radio-group';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { Circle } from 'lucide-vue-next';

import { useId } from '@/hooks/useId';
import { cn } from '@/utils/cn';

const props = withDefaults(defineProps<RadioGroupProps>(), {
  dir: 'ltr',
  value: null,
  orientation: 'horizontal',
});

const id = useId();

const [state, send] = useMachine(radio.machine({ id: id.value, ...props }));

const api = computed(() => radio.connect(state.value, send, normalizeProps));
</script>

<template>
  <div v-bind="api.rootProps" :class="cn('flex flex-col gap-2')">
    <h3 v-bind="api.labelProps">{{ title }}</h3>
    <div :class="cn('flex flex-col gap-1')">
      <div v-for="opt in items" :key="opt.id">
        <label
          v-bind="api.getRadioProps({ value: opt.id })"
          :class="
            cn(
              'flex items-center gap-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50'
            )
          "
        >
          <div
            v-bind="api.getRadioControlProps({ value: opt.id })"
            :class="
              cn(
                'aspect-square h-5 w-5 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              )
            "
          >
            <div :class="cn('flex items-center justify-center w-full h-full')">
              <Circle :size="14" fill="currentColor" />
            </div>
          </div>
          <span v-bind="api.getRadioLabelProps({ value: opt.id })">{{ opt.label }}</span>
          <input v-bind="api.getRadioInputProps({ value: opt.id })" />
        </label>
      </div>
    </div>
  </div>
</template>
