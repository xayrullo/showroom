<template>
  <div class="w-max-[278px] relative group" v-for="size in 4">
    <RouterLink to="products/134313" class="w-[278px] h-[100px] bg-black">
      <div class="w-[100%] h-[400px] relative z-0">
        <swiper
          :navigation="true"
          :modules="modules"
          class="w-[100%] z-0 h-[100%]"
        >
          <swiper-slide v-for="slide in 8">
            <img class="w-[100%]" src="/images/categoryDressImg.svg" alt="" />
          </swiper-slide>
        </swiper>
        <img
          class="top-[24px] right-[24px] z-10 absolute"
          src="/images/icons/savedone.svg"
          alt="saveProduct"
        />
      </div>
    </RouterLink>
    <div
      class="w-[100%] h-[78px] py-[10px] absolute group-hover:opacity-100 transition-opacity duration-300 opacity-0 mt-[-78px] z-10"
      style="
        background: linear-gradient(
          90deg,
          rgba(240, 1, 124, 1) 0%,
          rgba(129, 1, 61, 1) 60%
        );
      "
    >
      <h5
        class="font-medium text-[10px] leading-[14px] text-center uppercase opacity-50"
        style="color: rgba(255, 255, 255, 1)"
      >
        {{ $t("CATEGORY.SELECT_SIZE") }}
      </h5>
      <div class="flex gap-[10px] mt-[10px] items-center justify-center">
        <div
          class="w-[32px] h-[32px] border borer-[1px] border-transparent hover:border-white hover:duration-300 cursor-pointer py-[9px] rounded-[50%]"
        >
          <h5
            class="font-medium text-[10px] leading-[14px] text-white text-center"
          >
            S
          </h5>
        </div>
        <div
          class="w-[32px] h-[32px] border borer-[1px] border-transparent hover:border-white hover:duration-300 cursor-pointer py-[9px] rounded-[50%]"
        >
          <h5
            class="font-medium text-[10px] leading-[14px] text-white text-center"
          >
            M
          </h5>
        </div>
        <div
          class="w-[32px] h-[32px] border borer-[1px] border-transparent hover:border-white hover:duration-300 cursor-pointer py-[9px] rounded-[50%]"
        >
          <h5
            class="font-medium text-[10px] leading-[14px] text-white text-center"
          >
            L
          </h5>
        </div>
        <div
          class="w-[32px] h-[32px] border-[1px] border-transparent hover:border-white hover:duration-300 cursor-pointer py-[9px] rounded-[50%]"
        >
          <h5
            class="font-medium text-[10px] leading-[14px] text-white text-center"
          >
            XL
          </h5>
        </div>
        <div
          class="w-[32px] h-[32px] border borer-[1px] border-transparent hover:border-white hover:duration-300 cursor-pointer py-[9px] rounded-[50%]"
        >
          <h5
            class="font-medium text-[10px] leading-[14px] text-white text-center"
          >
            XXL
          </h5>
        </div>
      </div>
    </div>
    <div>
      <h4
        class="font-medium text-[15px] leading-[19.8px] mt-[14px]"
        style="color: rgba(111, 111, 111, 1)"
      >
        Платье <span>SS24WBA-52155</span>
      </h4>
      <h4 class="font-bold text-[15px] leading-[19.8px] mt-[6px]">
        <span>190</span> <span>USD</span>
      </h4>
      <div class="flex gap-[10px] mt-[8px]">
        <div
          v-for="elem in 2"
          class="w-[18px] h-[18px] rounded-[50%] bg-gray-500 cursor-pointer"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, EffectCards } from "swiper/modules";

const modules = [Navigation, EffectCards];
</script>
