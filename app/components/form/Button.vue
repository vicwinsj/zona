<template>
  <component
    :is="props.asChild ? props.asChild : 'button'"
    :class="
      cn(
        'flex items-center gap-3 h-fit border-2 whitespace-nowrap rounded-md font-semibold transition-colors duration-300',
        variantClasses[props.variant],
        sizeClasses[props.size],
        props.class
      )
    "
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/types/button";
import { computed } from "vue";

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  size: "md",
  asChild: undefined,
  class: "",
});

const variantClasses = {
  primary:
    "border-rust bg-rust hover:bg-hrust hover:border-hrust text-fog hover:text-white",
  transparent: "bg-transparent border-transparent text-text/70 hover:text-text",
  outline: "border-fog text-fog hover:bg-carbon/30 hover:text-fog",
};

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-1 text-base",
  lg: "px-6 py-3 text-lg",
};
</script>
