<template>
  <div
    class="p-[72px] bg-[url('/images/mainBG.svg')] bg-[length:100%_100%] h-[1000px] flex justify-between"
  >
    <div class="mt-[100px]">
      <h1
        class="uppercase font-bold text-[64px] leading-[77.5px] max-w-[399px] font-sans"
      >
        <!-- {{ $t("CATEGORIES.COLLECTION") }} -->
        <!-- {{ collection_name[$i18n.locale] }} -->
      </h1>
      <RouterLink to="/products">
        <button
          id="collection"
          class="w-[170px] h-[42px] rounded-[24px] bg-white"
        >
          <h4
            class="capitalize font-bold text-[15px] leading-[19.8px] bg-gradient-to-r from-pink-600 to-pink-900 bg-clip-text text-transparent"
          >
            {{ $t("COMMANDS.SEE_COLLECTION") }}
          </h4>
        </button>
      </RouterLink>
    </div>
    <div class="felx flex-col max-w-[360px] w-full mt-[130px] mr-[100px]">
      <swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        class="max-w-[400px] w-full p-[14px] bg-white"
      >
        <swiper-slide
          class="flex flex-col max-w-[332px] w-full"
          v-for="(collection, ind) in collections"
          :key="ind"
        >
          <RouterLink
            :to="{
              path: '/products',
            }"
            class="w-full"
          >
            <img
              :src="IMAGE_URL + collection.image.source_url"
              :alt="collection.image.alt"
              class="max-w-[333px] max-h-[408px]"
            />
            <div class="flex justify-between mt-[14px] w-[100%]">
              <h4 class="font-bold text-[14px] leading-[18.48px] text-black">
                {{ collection.name[$i18n.locale] }}
              </h4>
              <h4 class="font-bold text-[14px] leading-[18.48px] text-red-600">
                <span>120</span> <span>USD</span>
              </h4>
            </div>
          </RouterLink>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { ICollection } from "@/types";
import { IMAGE_URL } from "@/utils/constants";

const props = defineProps<{
  collections: ICollection[];
  collection_name: ICollection[];
}>();
const modules = [EffectCards];
</script>
<style scoped>
.swiper {
  max-width: 360px;
  width: 100%;
  max-height: 470px;
  /* height: 100%; */
  padding: 14px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
}

.swiper-slide {
  background-color: white;
}
</style>
