<template>
  <div>
    <HeaderSlider v-if="home?.page_content" :banners="home.page_content" />
    <Categories :data="home.categories" />
    <Collections :collections="home.collections" />
    <GetTheLook :looks="home.get_the_look" />
    <div>
      <video class="px-[72px]" src="/images/video.svg"></video>
      <h1
        class="font-bold text-[72px] leading-[87.19px] uppercase mt-[-10px] px-[72px] font-sans"
      >
        ozoda SHOWROOM
      </h1>
    </div>
    <div class="px-[72px]">
      <div class="w-full h-[1px] bg-neutral-300 mt-6"></div>
    </div>
    <Describe />
    <div class="px-[72px] flex flex-col justify-center items-center">
      <div class="w-full h-[1px] bg-neutral-300 mt-[48px]"></div>
      <h1
        class="uppercase text-center font-bold mt-[48px] font-sans"
        style="font-size: 32px; line-height: 38.75px"
      >
        {{ $t("COOPERATION.NEWSLETTER") }}
      </h1>
      <h5
        class="font-medium text-[14px] leading-[18px] text-center mt-[16px]"
        style="color: rgba(153, 153, 153, 1)"
      >
        {{ $t("COOPERATION.NEWSLETTER_ADD") }}
      </h5>
      <RouterLink to="/subscribe"
        ><button
          class="w-[150px] h-[38px] rounded-[19px] text-center text-white bg-black mt-[36px]"
        >
          {{ $t("COMMANDS.SUBSCRIBE") }}
        </button></RouterLink
      >
    </div>
    <Location />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { $api } from "@/api";

import HeaderSlider from "@/components/home/headerSlider.vue";
import Categories from "@/components/home/categories.vue";
import Collections from "@/components/home/collections.vue";
import GetTheLook from "@/components/home/getLook.vue";
import Describe from "@/components/home/describe.vue";
import Location from "@/components/home/location.vue";

import type { IHome } from "@/types";

const home = ref<IHome>({} as IHome);

onMounted(async () => {
  await fetchHome();
});

function fetchHome() {
  $api.home.getHome().then((res) => {
    home.value = res.data;
    console.log("Home Res", home.value);
  });
}
</script>
