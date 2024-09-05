<template>
  <div class="relative">
    <swiper
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="w-[100%] h-[100%] z-0"
    >
      <swiper-slide v-for="(banner, ind) in banners" :key="ind">
        <img
          :src="IMAGE_URL + banner.value_url.source_url"
          :alt="banner.value_url.alt"
          class="w-full max-h-96 object-cover"
        />
        <div class="px-[24px] py-[32px] bg-black">
          <h1 class="font-bold text-[72px] leading-[86px] text-white font-sans">
            {{ banner.title.en }}
          </h1>
          <h5 class="font-bold text-[15px] leading-[22px] text-white w-[700px]">
            {{ banner.description.en }}
          </h5>
        </div>
      </swiper-slide>
    </swiper>
    <div
      class="bg-black z-10 flex justify-between mt-[-200px] mr-[20px] mb-[200px]"
    >
      <div></div>
      <div class="flex gap-[30px] items-center z-10">
        <div class="flex">
          <h4 class="font-bold text-[16px] leading-[22px] text-white">
            {{ banners.length }}
          </h4>
          <h4 class="font-bold text-[16px] leading-[22px] text-white">|</h4>
          <h4 class="font-bold text-[16px] leading-[22px] text-white">
            <!-- {{ banners.length }} -->
          </h4>
        </div>
        <img
          class="cursor-pointer"
          @click="swiperAction()"
          src="/images/icons/pausaChevron.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { IMAGE_URL } from "@/utils/constants";

import type { IPageContent } from "@/types";

defineProps<{
  banners: IPageContent[];
}>();

const isPlay = ref(false);
const isAutoPlay = ref(false);

const modules = [Autoplay, Pagination, Navigation];

function swiperAction() {
  isPlay.value = !isPlay.value;
  if (isPlay.value === true) {
    isAutoPlay.value = true;
  } else {
    isAutoPlay.value = false;
  }
  console.log(" isAutoPlay", isAutoPlay);
  console.log(" isPlay", isPlay);
}
</script>
