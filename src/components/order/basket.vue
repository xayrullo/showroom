<template>
  <div>
    <div
      class="flex items-center justify-between px-[24px] py-[12px]"
      style="background: rgba(240, 238, 237, 1)"
    >
      <h2 class="font-bold text-[24px] leading-[31.68px] mt-[12px]">
        {{ $t("BASKET.BASKET") }} (6)
      </h2>
      <div
        class="flex items-center gap-[6px] cursor-pointer"
        @click="showDeleteModal()"
      >
        <h5
          class="font-medium text-[14px] leading-[18.48px]"
          style="color: rgba(153, 153, 153, 1)"
        >
          {{ $t("BASKET.CLEAR_BASKET") }}
        </h5>
        <img src="/images/icons/trash.svg" alt="Trash" />
      </div>
    </div>
    <div
      class="p-[24px] w-full border-[2px]"
      style="border: 2px rgba(240, 238, 237, 1)"
    >
      <div class="flex justify-between">
        <div class="flex gap-[16px]">
          <img src="/images/paymentImg1.svg" alt="paymentImage1" />
          <div>
            <h4 class="font-bold text-[16px] leading-[20px]">
              <span>190</span> USD
            </h4>
            <h5
              class="w-[189px] font-medium text-16px leading-[20px] mt-[12px]"
              style="color: rgba(111, 111, 111, 1)"
            >
              Платье короткий рукав SS23WES456
            </h5>
            <h5
              class="font-medium text-16px leading-[20px] mt-[12px]"
              style="color: rgba(189, 189, 189, 1)"
            >
              {{ $t("BASKET.SIZE") }}: <span>M</span>
            </h5>
            <div
              class="flex items-center justify-around w-[100px] h-[34px] border-black border-[2px] mt-[12px]"
            >
              <div @click="decrement" class="cursor-pointer">
                <img src="/images/icons/paymentSubtruck.svg" />
              </div>
              <h4
                class="font-medium text-16px leading-[20px]"
                id="productCount"
              >
                {{ counter }}
              </h4>
              <div @click="increment" class="cursor-pointer">
                <img src="/images/icons/paymentPlus.svg" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-[16px]">
          <div class="cursor-pointer">
            <img src="/images/icons/edit.svg" alt="Edit" />
          </div>
          <div class="cursor-pointer">
            <img src="/images/icons/paymentWishnest.svg" alt="Wishnest" />
          </div>
          <div class="flex flex-col items-center cursor-pointer">
            <img src="/images/icons/paymentRemove.svg" alt="Remove" />
            <h5 class="font-bold text-[10px] leading-[14px]">
              {{ $t("BASKET.REMOVE") }}
            </h5>
          </div>
        </div>
      </div>
      <div class="w-full h-[1px] bg-neutral-300 mt-6"></div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
