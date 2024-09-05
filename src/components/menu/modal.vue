<template>
  <div
    v-if="isVisible"
    class="fixed z-20 inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    @click="close"
  >
    <div
      :class="['modal-content', positionClass]"
      @click.stop
      class="absolute bg-white rounded-0"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isVisible = ref(props.modelValue);

watch(isVisible, (newValue) => {
  emit("update:modelValue", newValue);
});

const close = () => {
  isVisible.value = false;
};

const positionClass = computed(() => {
  const width = window.innerWidth - 300;
  return (
    `top-[100px] left-1/2 transform -translate-x-1/2 h-[400px]` +
    ` w-[${width}px]`
  );
});
</script>

<style scoped>
.modal-content {
  @apply bg-white;
}
</style>
