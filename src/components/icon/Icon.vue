<script lang="ts">
export type IconProps = {
  name: string;
  size?: number;
  color?: string;
};

export default {
  name: 'XIcon',
};
</script>

<script setup lang="ts">
import { computed } from 'vue';
import * as icons from 'lucide-vue-next';

const props = defineProps<IconProps>();

const icon = computed(() => (icons as any)[props.name]);
</script>

<template>
  <component :is="icon" :size="size" :color="color" />
</template>
