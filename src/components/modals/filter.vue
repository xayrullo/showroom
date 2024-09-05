<template>
  <Modal
    v-if="isModal"
    v-model="isModal"
    position="right"
    width="400px"
    class="z-50"
  >
    <div class="px-[24px] py-[32px] relative">
      <h3 class="font-bold text-[24px] leading-31.68px">
        {{ $t("CATEGORIES.FILTERS") }}
      </h3>
      <h4 class="font-bold text-[15px] leading-[19.8px] mt-[36px]">
        {{ $t("CATEGORIES.SORT_BY") }}
      </h4>
      <div class="flex flex-wrap gap-[10px] mt-[16px]">
        <div
          class="py-[6px] w-[50px] h-[30px] border-[1px] rounded-[8px] border-gray-300 cursor-pointer focus:bg-gray-300"
        >
          <h4 class="font-bold text-[14px] leading-[18.48px] text-center">
            {{ $t("HEADER.NEW") }}
          </h4>
        </div>
        <div
          class="py-[6px] w-[100px] h-[30px] border-[1px] rounded-[8px] border-gray-300 cursor-pointer"
        >
          <h4 class="font-bold text-[14px] leading-[18.48px] text-center">
            {{ $t("CATEGORIES.FIRST_NEW") }}
          </h4>
        </div>
        <div
          class="py-[6px] w-[167px] h-[30px] border-[1px] rounded-[8px] border-gray-300 cursor-pointer"
        >
          <h4 class="font-bold text-[14px] leading-[18.48px] text-center">
            {{ $t("CATEGORIES.PRICE_LOW") }}
          </h4>
        </div>
        <div
          class="py-[6px] w-[167px] h-[30px] border-[1px] rounded-[8px] border-gray-300 cursor-pointer"
        >
          <h4 class="font-bold text-[14px] leading-[18.48px] text-center">
            {{ $t("CATEGORIES.PRICE_HIGH") }}
          </h4>
        </div>
      </div>
      <div class="w-full h-[1px] bg-neutral-300 mt-[20px]"></div>
      <h4 class="font-bold text-[15px] leading-[19.8px] mt-[36px]">Size</h4>
      <div class="flex flex-wrap gap-[10px] mt-[16px] mb-[100px]">
        <div
          class="py-[6px] w-[50px] h-[30px] border-[1px] rounded-[8px] border-gray-300 cursor-pointer"
        >
          <h4 class="font-bold text-[14px] leading-[18.48px] text-center">
            XXS
          </h4>
        </div>
        <div
          class="py-[6px] w-[41px] h-[30px] border-[1px] rounded-[8px] border-gray-300 cursor-pointer"
        >
          <h4 class="font-bold text-[14px] leading-[18.48px] text-center">
            XS
          </h4>
        </div>
        <div
          class="py-[6px] w-[33px] h-[30px] border-[1px] rounded-[8px] border-gray-300 cursor-pointer"
        >
          <h4 class="font-bold text-[14px] leading-[18.48px] text-center">S</h4>
        </div>
        <div
          class="py-[6px] w-[33px] h-[30px] border-[1px] rounded-[8px] border-gray-300 cursor-pointer"
        >
          <h4 class="font-bold text-[14px] leading-[18.48px] text-center">M</h4>
        </div>
        <div
          class="py-[6px] w-[33px] h-[30px] border-[1px] rounded-[8px] border-gray-300 cursor-pointer"
        >
          <h4 class="font-bold text-[14px] leading-[18.48px] text-center">L</h4>
        </div>
        <div
          class="py-[6px] w-[41px] h-[30px] border-[1px] rounded-[8px] border-gray-300 cursor-pointer"
        >
          <h4 class="font-bold text-[14px] leading-[18.48px] text-center">
            XL
          </h4>
        </div>
        <div
          class="py-[6px] w-[41px] h-[30px] border-[1px] rounded-[8px] border-gray-300 cursor-pointer"
        >
          <h4 class="font-bold text-[14px] leading-[18.48px] text-center">
            XXL
          </h4>
        </div>
      </div>
      <div
        class="flex justify-between bottom-0 inset-x-0 absolute px-[24px] pb-[20px]"
      >
        <button
          class="font-bold text-[15px] leading-[19.8px] text-center rounded-[12px] border-[1.5px] border-black w-[100px] h-[48px]"
        >
          {{ $t("COMMANDS.CLEAR") }}
        </button>
        <button
          class="font-bold text-[15px] leading-[19.8px] text-center rounded-[12px] bg-black text-white w-[240px] h-[48px]"
        >
          {{ $t("COMMANDS.SEE_RESULTS") }} (<span>0</span>)
        </button>
      </div>
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

const emits = defineEmits(["update:modelValue"]);

const isModal = ref(false);

watchEffect(() => {
  isModal.value = props.modelValue;
});

watch(isModal, (newValue) => {
  emits("update:modelValue", newValue);
});
</script>
