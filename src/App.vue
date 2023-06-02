<script lang="ts">
import XCheckbox from './components/checkbox/Checkbox.vue';

export default {
  components: {
    XCheckbox,
  },
};
</script>

<template>
  <div class="mx-8">
    <h1 class="text-2xl">Vue UI</h1>
    <h2 class="text-xl">Checkbox</h2>
    <div class="flex flex-col gap-4">
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
  </div>
</template>
