<template>
  <div class="p-[10px]">
    <div class="flex gap-[10px] sticky">
      <div class="w-[67%] grid grid-cols-2 gap-[10px]">
        <img
          v-for="image in 4"
          class="w-[100%] h-max-[570px]"
          src="/images/infoPage1.svg"
          alt=""
        />
      </div>
      <div
        class="p-[22px] w-[31%] flex flex-col gap-[14px] sticky top-0 h-[100%]"
      >
        <h4
          class="font-medium text-[16px] leading-[20px]"
          style="color: rgba(111, 111, 111, 1)"
        >
          Платье короткий рукав <span>SS23WES456</span>
        </h4>
        <h4 class="font-medium text-[16px] leading-[20px]">
          <span>190</span> <span>USD</span>
        </h4>
        <div class="flex gap-[10px] mt-[8px]">
          <div
            v-for="elem in 2"
            class="w-[18px] h-[18px] rounded-[50%] bg-green-500"
          ></div>
        </div>
        <div class="w-full h-[1px] bg-neutral-300 my-[6px]"></div>
        <div class="flex flex-wrap gap-[10px]">
          <div
            class="w-[36px] h-[36px] py-[11px] rounded-[50%] border-gray-300 border-[1px] cursor-pointer"
          >
            <h4 class="font bold text-[11px] leading-[14px] text-center">S</h4>
          </div>
          <div
            class="w-[36px] h-[36px] py-[11px] rounded-[50%] border-gray-300 border-[1px] cursor-pointer"
          >
            <h4 class="font bold text-[11px] leading-[14px] text-center">M</h4>
          </div>
          <div
            class="w-[36px] h-[36px] py-[11px] rounded-[50%] border-gray-300 border-[1px] cursor-pointer"
          >
            <h4 class="font bold text-[11px] leading-[14px] text-center">L</h4>
          </div>
          <div
            class="w-[36px] h-[36px] py-[11px] rounded-[50%] border-gray-300 border-[1px] cursor-pointer"
          >
            <h4 class="font bold text-[11px] leading-[14px] text-center">XL</h4>
          </div>
          <div
            class="w-[36px] h-[36px] py-[11px] rounded-[50%] border-gray-300 border-[1px] cursor-pointer"
          >
            <h4 class="font bold text-[11px] leading-[14px] text-center">
              XXL
            </h4>
          </div>
          <div
            class="w-[36px] h-[36px] py-[11px] rounded-[50%] border-gray-300 border-[1px] cursor-pointer"
          >
            <h4 class="font bold text-[11px] leading-[14px] text-center">
              XXXL
            </h4>
          </div>
        </div>
        <div class="flex justify-between items-center mt-[6px]">
          <h4
            class="font-bold text-[11px] leading-[14px]"
            style="color: rgba(111, 111, 111, 1)"
          >
            {{ $t("DETAIL.HEIGHT_SIZE") }} <span>L</span> · <span>183</span> cm
          </h4>
          <h4
            class="font-bold text-[11px] leading-[14px] underline underline-offset-1"
          >
            {{ $t("DETAIL.SIZE_GUIDE") }}
          </h4>
        </div>
        <button
          class="uppercase w-[100%] h-[48px] py-[14px] font-bold text-[15px] leading-[19.8px] text-center bg-black text-white rounded-[12px] mt-[42px] cursor-pointer"
          @click="showRightModal()"
        >
          {{ $t("COMMANDS.ADD_TO_BASKET") }}
        </button>
        <div
          class="p-[16px] flex flex-col gap-[16px] border-[1px] border-gray-300 rounded-[12px] mt-[10px]"
        >
          <div class="flex justify-between items-center cursor-pointer">
            <h5 class="font-bold text-[11px] leading-[14px]">
              {{ $t("DETAIL.MATERIAL_CARE") }}
            </h5>
            <img src="/images/icons/chevron.svg" alt="Chevron" />
          </div>
          <div class="w-full h-[1px] bg-neutral-300 my-[6px]"></div>
          <div class="flex justify-between items-center cursor-pointer">
            <h5 class="font-bold text-[11px] leading-[14px]">
              {{ $t("DETAIL.DELIVERIES") }}
            </h5>
            <img src="/images/icons/chevron.svg" alt="Chevron" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex gap-[12px] items-center justify-center mt-[72px] cursor-pointer"
    >
      <h4 class="font-medium text-[16px] leading-[24px]">
        {{ $t("FOOTER.DRESSES") }}
      </h4>
      <img src="/images/icons/chevron.svg" alt="" />
      <h4
        class="font-medium text-[16px] leading-[24px]"
        style="color: rgba(153, 153, 153, 1)"
      >
        Платье короткий рукав <span>SS23WES456</span>
      </h4>
    </div>
    <ModalSuccessAdd v-model="isModalSuccess" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import ModalSuccessAdd from "@/components/modals/successAdd.vue";

const isModalSuccess = ref(false);

function showRightModal() {
  isModalSuccess.value = true;
}
</script>
