<script lang="ts">
import XCheckbox from './components/checkbox/Checkbox.vue';
import XIcon from './components/icon/Icon.vue';
import XBadge from './components/badge/Badge.vue';

export default {
  components: {
    XCheckbox,
    XIcon,
    XBadge,
  },
};
</script>

<template>
  <div class="mx-8">
    <h1 class="text-2xl">Vue UI</h1>
    <section>
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
    <section>
      <h2 class="text-xl">Icon</h2>
      <div class="flex w-fit gap-4">
        <XIcon name="Check" />
        <XIcon name="Candy" />
        <XIcon name="Palette" />
        <XIcon name="Zap" />
      </div>
    </section>
    <section>
      <h2 class="text-xl">Badge</h2>
      <div class="flex w-fit gap-4">
        <XBadge>Badge</XBadge>
        <XBadge variant="secondary">Badge</XBadge>
        <XBadge variant="outline">Badge</XBadge>
        <XBadge variant="destructive">Badge</XBadge>
      </div>
    </section>
  </div>
</template>
