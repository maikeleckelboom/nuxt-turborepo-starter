<script lang="ts" setup>
defineProps<{
  disabled?: boolean
}>()
defineEmits<{
  (e: 'submit', value: string): void
}>()
</script>

<template>
  <button :disabled="disabled" class="btn" @click="$emit('submit')">
    <slot>Button</slot>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 12px 24px;
  background-color: hsla(0, 80%, 50%, 1);
  color: white;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  border: none;
  transition: background-color cubic-bezier(0.4, 0, 0.2, 1) 0.2s;

  &:hover {
    background-color: hsl(0, 20%, 40%);
    cursor: pointer;
  }

  &:active {
    background-color: hsl(0, 20%, 30%);
    cursor: pointer;
    box-shadow: 0 0 0 8px hsla(0, 80%, 50%, 0.2);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px hsla(0, 80%, 50%, 0.5);
  }

  &:disabled {
    background-color: hsl(0, 0%, 80%);
    color: hsl(0, 0%, 50%);
    cursor: not-allowed;
  }

  &:focus {
    box-shadow: 0 0 0 2px hsla(0, 80%, 50%, 0.2);
  }
}
</style>
