<template>
  <div>
    <select
      v-model="selectedOption"
      :id="id"
      :class="className"
      @change="handleChange"
      :placeholder="placeholder"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Option {
  value: string | number;
  label: string;
}

export default defineComponent({
  name: "SelectComponent",
  props: {
    options: {
      type: Array as () => Option[],
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "select",
    },
    className: {
      type: String,
      default: "select",
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const selectedOption = ref(props.modelValue);

    const handleChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      emit("update:modelValue", target.value);
    };

    return {
      selectedOption,
      handleChange,
    };
  },
});
</script>

<style scoped>
/* Optional: Add custom styles here */
</style>
