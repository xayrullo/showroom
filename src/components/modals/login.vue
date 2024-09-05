<template>
  <Modal
    v-if="isModal"
    v-model="isModal"
    position="center"
    width="399px"
    height="370px"
  >
    <div
      class="max-w-[399px] w-full p-[32px] rounded-[20px] flex flex-col items-center"
    >
      <h5 class="font-bold text-[13px] leading-[17.16px] text-center">
        {{ $t("CONFIRM.PHONE_NUMBER") }}
      </h5>
      <input
        type="number"
        maxlength="13"
        placeholder="+998 (97) 123 45 67"
        class="mt-[15px] max-w-[335px] w-full h-[40px] outline-none font-bold text-[28px] leading-[36.96px] px-[20px]"
      />
      <button
        class="mt-[40px] max-w-[335px] w-full h-[48px] rounded-[8px] bg-black"
        @click="onClose()"
      >
        <h4
          class="font-medium text-[15px] leading-[19.8px] text-center text-white"
        >
          {{ $t("COMMANDS.GET_THE_CODE") }}
        </h4>
      </button>
      <h4 class="font-bold text-[12px] leading-[15.84px] text-center mt-[15px]">
        {{ $t("COMMANDS.GET_THE_CODE") }}
        <span>{{ $t("CONFIRM.TERMS_PRIVACY") }}</span>
        {{ $t("CONFIRM.AND") }}
        <span>{{ $t("CONFIRM.SECURITY") }}</span>
      </h4>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref, watchEffect, watch } from "vue";
import Modal from "../ui/modal.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["update:modelValue", "onClosed"]);

const isModal = ref(false);

watchEffect(() => {
  isModal.value = props.modelValue;
});

watch(isModal, (newValue) => {
  emits("update:modelValue", newValue);
});

function onClose() {
  emits("onClosed", "success");
}
</script>
