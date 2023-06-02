<script lang="ts">
const badgeVariants = cva(
  'inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary hover:bg-primary/80 border-transparent text-primary-foreground',
        secondary:
          'bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground',
        destructive:
          'bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
// export type BadgeProps = VariantProps<typeof badgeVariants> & {
export type BadgeProps = {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  className?: string;
};

export default {
  name: 'XBadge',
};
</script>

<script setup lang="ts">
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { useSlots } from 'vue';

withDefaults(defineProps<BadgeProps>(), {
  variant: 'default',
});

const slots = useSlots();
if (!slots.default) {
  console.error('Badge must have text');
}
</script>

<template>
  <div :class="cn(badgeVariants({ variant }), className)">
    <slot />
  </div>
</template>
