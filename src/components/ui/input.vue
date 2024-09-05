<template>
  <div>
    <input
      v-model="value"
      :type="type"
      class="w-[240px] h-[42px] rounded-[6px] border-[1px] p-[12px] outline-none"
      :class="isError ? 'border-red-600' : 'border-gray-300'"
      :id="id"
      :placeholder="placeholder"
      @blur="onChange"
    />
    <span class="font-medium text-[12px] leading-[18px] text-red-600">
      {{ errorText }}
    </span>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  id: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  isError: {
    type: Boolean,
    default: false,
  },
  errorText: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["update:modelValue"]);

const value = ref(props.modelValue);

watch(value, (newValue) => {
  emits("update:modelValue", newValue);
});

function onChange() {
  emits("update:modelValue", value.value);
}
</script>
