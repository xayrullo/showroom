<template>
  <div class="px-[72px] py-[72px] flex justify-between gap-[20px]">
    <div class="w-[33%]">
      <h1 class="uppercase font-bold text-[64px] leading-[77.5px] font-sans">
        {{ $t("CATEGORIES.GET_LOOK") }}
      </h1>
      <h4
        class="uppercase font-bold text-[16px] leading-[21.12px]"
        style="color: rgba(189, 189, 189, 1)"
      >
        #Ozodastile
      </h4>
      <RouterLink :to="{ name: 'products', params: { id: 222 } }">
        <button
          class="h-[42px] rounded-[24px] mt-[32px] p-[1px] bg-gradient-to-r from-pink-600 to-pink-900"
        >
          <div class="h-full w-full bg-white rounded-[24px] py-[10px]">
            <h4
              class="mx-[22px] font-bold text-[15px] leading-[19.8px] bg-gradient-to-r from-pink-600 to-pink-900 bg-clip-text text-transparent bg-white rounded-[24px]"
            >
              {{ $t("COMMANDS.SEE_SYLES") }}
            </h4>
          </div>
        </button>
      </RouterLink>
      <!-- <div class="flex gap-[10px] right-0 bottom-0 mt-[20px]">
        <div
          class="w-[42px] h-[42px] rotate-180 rounded-[50%] bg-gray-200 p-[9px]"
        >
          <img class="w-[24px]" src="/images/icons/chevron.svg" alt="Chevron" />
        </div>
        <div class="w-[42px] h-[42px] rounded-[50%] bg-gray-200 p-[9px]">
          <img class="w-[24px]" src="/images/icons/chevron.svg" alt="Chevron" />
        </div>
      </div> -->
    </div>
    <div class="w-[50%]">
      <div class="max-w-[737px]">
        <swiper
          :slidesPerView="'auto'"
          :spaceBetween="30"
          :freeMode="true"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class=""
        >
          <swiper-slide
            class="max-w-[330px] h-[440px]"
            v-for="(slide, ind) in looks"
            :key="ind"
          >
            <RouterLink to="/products">
              <div class="h-[440px]">
                <img
                  class="h-[440px]"
                  :src="IMAGE_URL + slide.image.source_url"
                  :alt="slide.image.alt"
                />
                <h4
                  class="font-bold text-[24px] leading-[29.06px] text-center text-white mt-[-60px] font-sans absolute ml-[140px] capitalize"
                >
                  {{ slide.name.en }}
                </h4>
              </div>
            </RouterLink>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/free-mode";
import { FreeMode, Scrollbar } from "swiper/modules";
import { IGetTheLook } from "@/types";
import { IMAGE_URL } from "@/utils/constants";

defineProps<{
  looks: IGetTheLook[];
}>();

const modules = [FreeMode, Scrollbar];
</script>

<style scoped>
.swiper {
  width: 100%;
  max-height: 700px;
  height: 100%;
  margin: 0;
}

.swiper-slide {
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
