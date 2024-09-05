<template>
  <div>
    <Banner :data="category" />
    <div
      class="px-[72px] py-[14px] flex justify-between"
      style="background: rgba(241, 241, 241, 1)"
    >
      <div class="flex gap-[10px]">
        <img
          class="cursor-pointer opacity-40 hover:opacity-100"
          src="/images/icons/filterIcon1.svg"
          alt="Filter1"
        />
        <img
          class="cursor-pointer opacity-40 hover:opacity-100"
          src="/images/icons/filterIcon2.svg"
          alt="Filter2"
        />
      </div>
      <div
        class="flex gap-[10px] items-center cursor-pointer relative"
        @click="showRightModal()"
      >
        <img src="/images/icons/filterIcon.svg" alt="Filter" />
        <h4 class="font-bold text-[15px] leading-[16px]">Filter</h4>
      </div>
    </div>
    <div class="px-[72px]">
      <h4 class="font-bold text-[24px] leading-[31.68px] mt-[48px]">
        {{ $t("CATEGORY.ELEGANT_DRESSES") }}
      </h4>
      <div class="grid grid-cols-4 gap-[8px] mt-[24px]">
        <infoPageProduct />
      </div>
      <div class="flex flex-col items-center mt-[48px]">
        <h4
          class="font-bold text-[16px] leading-[21.12px]"
          style="color: rgba(153, 153, 153, 1)"
        >
          <span>1</span>-<span>8</span> {{ $t("CATEGORY.OF") }} <span>22</span>
          {{ $t("CATEGORY.ITEMS") }}
        </h4>
        <button
          class="font-bold text-[14px] leading-[18px] text-center w-[141px] h-[38px] rounded-[19px] py-[10px] text-white mt-[16px]"
          style="
            background: linear-gradient(
              90deg,
              rgba(240, 1, 124, 1) 0%,
              rgba(129, 1, 61, 1) 60%
            );
          "
        >
          {{ $t("CATEGORY.VIEW") }} <span>14</span> {{ $t("CATEGORY.MORE") }}
        </button>
      </div>
    </div>
    <div
      class="p-[72px] bg-[url('/images/mainBG.svg')] bg-[length:100%_100%] h-[1000px] flex justify-between mt-[48px]"
    >
      <div class="mt-[100px]">
        <h1
          class="uppercase font-bold text-[64px] leading-[77.5px] max-w-[624px] font-sans"
        >
          {{ $t("CATEGORIES.SELLER_DISCOUNT") }}
        </h1>
        <button class="w-[107px] h-[42px] rounded-[24px] bg-white">
          <h4
            class="capitalize font-bold text-[15px] leading-[19.8px] bg-gradient-to-r from-pink-600 to-pink-900 bg-clip-text text-transparent"
          >
            {{ $t("COMMANDS.SEE_ALL") }}
          </h4>
        </button>
      </div>
      <div class="felx flex-col max-w-[360px] w-full mt-[150px] mr-[150px]">
        <swiper
          :effect="'cards'"
          :grabCursor="true"
          :modules="modules"
          class="max-w-[400px] w-full"
        >
          <swiper-slide
            class="flex flex-col max-w-[400px] w-full"
            v-for="cards in 4"
          >
            <RouterLink
              :to="{
                path: '/products',
              }"
            >
              <img src="/images/summerImg.svg" alt="IMG" />
              <div class="flex justify-between mt-[14px] w-[100%] px-[13px]">
                <h4 class="font-bold text-[14px] leading-[18.48px] text-black">
                  Платье <span>SS24WBA-52155</span>
                </h4>
                <h4
                  class="font-bold text-[14px] leading-[18.48px] text-red-600"
                >
                  <span>120</span> <span>USD</span>
                </h4>
              </div>
            </RouterLink>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="px-[72px]">
      <h4 class="font-bold text-[24px] leading-[31.68px] mt-[48px]">
        {{ $t("CATEGORY.ELEGANT_DRESSES") }}
      </h4>
      <div class="grid grid-cols-4 gap-[8px] mt-[24px]">
        <InfoPageProduct />
      </div>
    </div>
    <div class="px-[72px] flex flex-col justify-center items-center">
      <div class="w-full h-[1px] bg-neutral-300 mt-[48px]"></div>
      <h1
        class="uppercase text-center font-bold mt-[48px] text-[32px] leading-[38.75px] font-sans"
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
          class="w-[110px] h-[38px] rounded-[19px] text-center text-white bg-black mt-[36px]"
        >
          {{ $t("COMMANDS.SUBSCRIBE") }}
        </button></RouterLink
      >
    </div>
    <ModalFilter v-model="isModal" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import { $api } from "@/api";

import Banner from "@/components/products/banner.vue";
import InfoPageProduct from "@/components/cards/infoPageProduct.vue";
import ModalFilter from "@/components/modals/filter.vue";
import { ICategory } from "@/types/category";

import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const modules = [EffectCards];

const route = useRoute();

const category = ref<ICategory>({
  _id: "432432ew",
  title: "Lorem Ipsum",
  image: "/images/categories/image1.png",
  banner: "/images/categories/banner1.webp",
  quantity: 100,
} as ICategory);

const sizeS = ref(false);
const sizeM = ref(false);
const sizeL = ref(false);
const sizeXL = ref(false);
const sizeXXL = ref(false);

//   const S = ref<HTMLElement | null>(null);
//   const M = ref<HTMLElement | null>(null);
//   const L = ref<HTMLElement | null>(null);
//   const XL = ref<HTMLElement | null>(null);
//   const XXL = ref<HTMLElement | null>(null);

const show = ref(false);

// const isModal = ref(false);
const isModal = ref(false);

onMounted(() => {
  getCategory();
});

function getCategory() {
  const id = `${route.query.id}`;
  console.log("GetCategory", route.query);
  if (route.query.id)
    $api.category.getById(id).then((res) => {
      category.value = res;
    });
}

function showRightModal() {
  isModal.value = true;
}

function changeSize(val: number) {
  if (val == 1) {
    sizeS.value = true;
    sizeM.value = false;
    sizeL.value = false;
    sizeXL.value = false;
    sizeXXL.value = false;
  }
  if (val == 2) {
    sizeS.value = false;
    sizeM.value = true;
    sizeL.value = false;
    sizeXL.value = false;
    sizeXXL.value = false;
  }
  if (val == 3) {
    sizeS.value = false;
    sizeM.value = false;
    sizeL.value = true;
    sizeXL.value = false;
    sizeXXL.value = false;
  }
  if (val == 4) {
    sizeS.value = false;
    sizeM.value = false;
    sizeL.value = false;
    sizeXL.value = true;
    sizeXXL.value = false;
  }
  if (val == 5) {
    sizeS.value = false;
    sizeM.value = false;
    sizeL.value = false;
    sizeXL.value = false;
    sizeXXL.value = true;
  }
}
</script>

<style scoped>
.swiper {
  max-width: 400px;
  width: 100%;
  max-height: 470px;
  height: 100%;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide {
  background-color: white;
}
</style>
