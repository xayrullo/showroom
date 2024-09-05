<template>
  <header>
    <div class="w-[100%] w-max-[1280px]">
      <div
        class="w-[100%] h-[32px] flex justify-between items-center px-[72px]"
        style="background: rgba(4, 30, 58, 1)"
      >
        <div class="w-[100px]"></div>
        <div class="flex gap-[6px] text-center">
          <h3 class="font-bold text-[11px] leading-[14.52px] text-white">
            {{ $t("HEADER.SUMMER_SALE") }}
          </h3>
          <h3
            class="font-bold text-[11px] leading-[14.52px] text-white underline"
          >
            {{ $t("HEADER.SHOP_NOW") }}
          </h3>
        </div>
        <div class="flex gap-[6px] cursor-pointer" @click="openLanguage(0)">
          <div class="flex gap-[6px]" @click="openLanguage(0)">
            <img src="/images/icons/icon.svg" alt="" />
            <div>
              <h3
                class="font-bold text-[11px] leading-[14.52px] text-white cursor-pointer"
              >
                <span>{{ i18n.locale.value }}</span>
                <!-- {{ i18n.localeProperties.value.name }} -->
              </h3>
              <div
                v-if="languageShow"
                class="absolute w-[240px] rounded-[16px] bg-white flex flex-col drop-shadow-md py-[10px] gap-[4px] mt-[10px] ml-[-150px] z-10"
              >
                <div
                  v-for="(locale, ind) in i18n.availableLocales"
                  :key="ind"
                  class="flex px-[21px] py-[10px] gap-[34px] cursor-pointer"
                  @click="setLang(locale)"
                >
                  <h3
                    class="font-medium text-[13px] leading-[17.6px]"
                    style="color: rgba(189, 189, 189, 1)"
                  >
                    {{ locale }}
                  </h3>
                  <h3
                    class="font-medium text-[13px] leading-[17.6px] text-black hover:text-blue-400"
                  >
                    {{ locale }}
                  </h3>
                  <img
                    v-if="locale === i18n.locale.value"
                    class="ml-[30px]"
                    src="/images/icons/success.svg"
                    alt="checked"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3
              class="font-bold text-[11px] leading-[14.52px] text-white cursor-pointer"
              @click="openCurrency(0)"
            >
              {{ $t("CURRENCY.UZS") }}
            </h3>
            <div
              v-if="currencyShow"
              class="absolute w-[240px] rounded-[16px] bg-white flex flex-col drop-shadow-md py-[10px] gap-[4px] mt-[10px] ml-[-180px] z-10"
            >
              <div
                class="flex px-[21px] py-[10px] gap-[34px] cursor-pointer"
                @click="openCurrency(1)"
              >
                <h3
                  class="font-medium text-[13px] leading-[17.6px]"
                  style="color: rgba(189, 189, 189, 1)"
                >
                  {{ $t("CURRENCY.EUR") }}
                </h3>
                <h3
                  class="font-medium text-[13px] leading-[17.6px] text-black hover:text-blue-400"
                >
                  yevro
                </h3>
                <img class="ml-[10px]" src="/images/icons/success.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-[100%] h-[64px] flex justify-between items-center px-[72px]"
        style="
          background: linear-gradient(
            0deg,
            rgba(241, 241, 241, 1) 0%,
            rgba(255, 255, 255, 1) 70%
          );
        "
      >
        <div class="flex gap-[36px] items-center">
          <div>
            <div
              class="flex gap-[8px] items-center cursor-pointer transition duration-300"
              @click="openMenu(0)"
            >
              <img src="/images/icons/menu.svg" alt="" />
              <h5
                class="font-bold text-[14px] leading-[18.48px] text-black uppercase"
              >
                {{ $t("HEADER.MENU") }}
              </h5>
            </div>
            <div
              v-if="show"
              id="menu"
              class="absolute w-[201px] h-[116px] rounded-[16px] bg-white flex flex-col drop-shadow-md py-[10px] gap-[4px] mt-[10px] z-10 transition delay-700 duration-300 ease-in-out"
            >
              <RouterLink
                to="/about"
                @click="openMenu(1)"
                class="font-semibold text-[15px] leading-[19.8px] text-black hover:text-gray-400 w-[100%] px-[24px] h-[50px] pt-[14px] rounded-[8px] uppercase"
                >{{ $t("HEADER.ABOUT_US") }}</RouterLink
              >
              <RouterLink
                to="/cooperation"
                @click="openMenu(1)"
                class="font-semibold text-[15px] leading-[19.8px] text-black hover:text-gray-400 px-[24px] h-[50px] w-[100%] pt-[14px] rounded-[8px] uppercase"
                >{{ $t("HEADER.COOPERATION") }}
              </RouterLink>
            </div>
          </div>
          <div>
            <h4
              class="font-bold text-[14px] leading-[18.48px] text-black cursor-pointer uppercase"
              @click="showCenterModal()"
            >
              {{ $t("HEADER.CATEGORIES") }}
            </h4>
          </div>
        </div>
        <div>
          <RouterLink
            to="/"
            class="text-[28px] leading-[33.91px] text-center"
            style="
              font-family: &quot;Cormorant SC&quot;, &quot;sans-serif&quot;;
              font-size: 28px;
              line-height: 33.91px;
            "
          >
            OZODA SHOWROOM
          </RouterLink>
          <h4 class="text-center" style="color: rgba(173, 173, 173, 1)">
            since 2002
          </h4>
        </div>
        <div class="flex gap-[14px]">
          <img
            class="cursor-pointer"
            src="/images/icons/searching.svg"
            alt="Searching"
          />
          <div class="cursor-pointer" @click="toProfile">
            <img src="/images/icons/profile.svg" alt="Profile" />
          </div>
          <RouterLink to="/saveProduct">
            <img
              class="cursor-pointer"
              src="/images/icons/savedoneBlack.svg"
              alt="SaveDone"
            />
          </RouterLink>
          <div class="cursor-pointer" @click="showRightModal()">
            <img src="/images/icons/basket.svg" alt="Basket" />
          </div>
        </div>
      </div>
      <ModalCategory v-model="isModalCategory" />
      <ModalBasket v-model="isModalBasket" />
      <ModalLogin v-model="isLoginModal" @onClosed="loginModalClosed" />
      <ModalSms v-model="isSmsModal" />
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

import { useAuthStore } from "@/stores/auth";

import ModalCategory from "@/components/menu/categories.vue";
import ModalBasket from "@/components/modals/basket.vue";
import ModalLogin from "@/components/modals/login.vue";
import ModalSms from "@/components/modals/sms.vue";

const i18n = useI18n();
const router = useRouter();
const authStore = useAuthStore();

const isLoginModal = ref(false);
const isSmsModal = ref(false);
const show = ref(false);
const currencyShow = ref(false);
const categoryShow = ref(false);
const languageShow = ref(false);

const isModalBasket = ref(false);
const isModalCategory = ref(false);

const setLang = (lang: string) => {
  localStorage.setItem("lang", lang);
  i18n.locale.value = lang;
};

function toProfile() {
  if (authStore.isAuthenticated) {
    router.push("/user/info");
  } else {
    isLoginModal.value = true;
  }
}

function loginModalClosed(e: string) {
  console.log("isLoginModal");
  if (e === "success") isSmsModal.value = true;
  isLoginModal.value = false;
}

function showRightModal() {
  isModalBasket.value = true;
}
function showCenterModal() {
  isModalCategory.value = true;
  openCategory();
}

function openMenu(val: number) {
  show.value = !show.value;
  if (
    currencyShow.value == true ||
    languageShow.value == true ||
    categoryShow.value == true
  ) {
    languageShow.value = false;
    currencyShow.value = false;
    categoryShow.value = false;
  }
  if (val == 1) {
    show.value = false;
  }
}
function openLanguage(val: number) {
  languageShow.value = !languageShow.value;
  if (
    currencyShow.value == true ||
    show.value == true ||
    categoryShow.value == true
  ) {
    show.value = false;
    currencyShow.value = false;
    categoryShow.value = false;
  }
  if (val == 1) {
    languageShow.value = false;
  }
}
function openCurrency(val: number) {
  currencyShow.value = !currencyShow.value;
  if (
    show.value == true ||
    languageShow.value == true ||
    categoryShow.value == true
  ) {
    languageShow.value = false;
    show.value = false;
    categoryShow.value = false;
  }
  if (val == 1) {
    currencyShow.value = false;
  }
}
function openCategory(val?: number) {
  categoryShow.value = !categoryShow.value;
  if (
    show.value == true ||
    languageShow.value == true ||
    currencyShow.value == true
  ) {
    languageShow.value = false;
    show.value = false;
    currencyShow.value == false;
  }
  if (val == 1) {
    categoryShow.value = false;
  }
}
</script>
