<script lang="ts">
import XBadge from './components/badge/Badge.vue';
import XCheckbox from './components/checkbox/Checkbox.vue';
import XRadioGroup from './components/radio-group/RadioGroup.vue';
import XTabs from './components/tabs-ark/Tabs.vue';

export default {
  components: {
    XBadge,
    XCheckbox,
    XRadioGroup,
    XTabs,
  },
};
</script>

<script setup lang="ts">
import { Candy, Check, Palette, Zap } from 'lucide-vue-next';

const radio = {
  title: 'My Radio Group',
  items: [
    { id: 'item-1', label: 'Item 1' },
    { id: 'item-2', label: 'Item 2' },
    { id: 'item-3', label: 'Item 3' },
  ],
};
</script>

<template>
  <div class="mx-8">
    <h1 class="text-2xl">Vue UI</h1>
    <div class="flex flex-col gap-8">
      <section class="flex flex-col gap-2">
        <h2 class="text-xl">Checkbox</h2>
        <div class="flex w-fit gap-4">
          <XCheckbox>Checkbox</XCheckbox>
          <XCheckbox checked>Checkbox</XCheckbox>
          <XCheckbox checked="indeterminate">Checkbox</XCheckbox>
          <XCheckbox disabled>Checkbox</XCheckbox>
          <XCheckbox disabled checked>Checkbox</XCheckbox>
          <XCheckbox disabled checked="indeterminate">Checkbox</XCheckbox>
          <XCheckbox invalid>Checkbox</XCheckbox>
          <XCheckbox invalid checked>Checkbox</XCheckbox>
          <XCheckbox invalid checked="indeterminate">Checkbox</XCheckbox>
        </div>
      </section>
      <section class="flex flex-col gap-2">
        <h2 class="text-xl">Icon (lucide-vue-next)</h2>
        <div class="flex w-fit gap-4">
          <Check />
          <Candy />
          <Palette />
          <Zap />
        </div>
      </section>
      <section class="flex flex-col gap-2">
        <h2 class="text-xl">Badge</h2>
        <div class="flex w-fit gap-4">
          <XBadge>Badge</XBadge>
          <XBadge variant="secondary">Badge</XBadge>
          <XBadge variant="outline">Badge</XBadge>
          <XBadge variant="destructive">Badge</XBadge>
        </div>
      </section>
      <section class="flex flex-col gap-2">
        <h2 class="text-xl">Radio Group</h2>
        <div class="flex w-fit gap-4">
          <XRadioGroup :title="radio.title" :items="radio.items" />
          <XRadioGroup :title="radio.title" :items="radio.items" disabled />
          <XRadioGroup :title="radio.title" :items="radio.items" invalid />
          <XRadioGroup
            :title="radio.title"
            :items="radio.items"
            disabled
            :value="radio.items[0].id"
          />
        </div>
      </section>
      <section class="flex flex-col gap-2">
        <h2 class="text-xl">Tabs (Ark)</h2>
        <div class="flex w-fit gap-4">
          <XTabs />
        </div>
      </section>
    </div>
  </div>
</template>
