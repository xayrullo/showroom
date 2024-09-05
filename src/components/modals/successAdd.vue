<template>
  <Modal
    v-if="isModalSuccess"
    v-model="isModalSuccess"
    position="right"
    width="400px"
  >
    <div class="p-[20px] w-[360px] h-[100%]">
      <div class="flex justify-between">
        <div></div>
        <img
          @click="isModalSuccess = false"
          src="/images/icons/paymentRemove.svg"
          alt="remove"
          class="cursor-pointer"
        />
      </div>
      <div class="flex gap-[24px] mt-[19px]">
        <img class="w-[103px]" src="/images/infoPage1.svg" alt="" />
        <div class="flex flex-col gap-[12px]">
          <h4 class="font-bold text-[16px] leading-[20px] uppercase">
            <span>190</span> <span>USD</span>
          </h4>
          <h4
            class="font-medium text-[16px] leading-[20px]"
            style="color: rgba(111, 111, 111, 1)"
          >
            Платье короткий рукав <span>SS23WES456</span>
          </h4>
          <h4
            class="font-medium text-[16px] leading-[20px]"
            style="color: rgba(189, 189, 189, 1)"
          >
            {{ $t("BASKET.SIZE") }}: <span>M</span>
          </h4>
        </div>
      </div>
      <div class="flex flex-col items-center mt-[196px]">
        <img src="/images/icons/succesfull.svg" alt="succesfull" />
        <h3
          class="font-bold text-[28px] leading-[33.91px] text-center font-sans"
        >
          {{ $t("MESSAGES.SUCCESSFUL") }}<br />{{ $t("MESSAGES.ADDED") }}
        </h3>
      </div>
    </div>
  </Modal>
</template>
<script setup lang="ts">
import Modal from "../ui/modal.vue";
import { ref, watch, watchEffect } from "vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["update:modelValue"]);

const isModalSuccess = ref(false);

watchEffect(() => {
  isModalSuccess.value = props.modelValue;
});

watch(isModalSuccess, (newValue) => {
  emits("update:modelValue", newValue);
});
</script>
