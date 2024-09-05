<template>
  <footer class="sticky top-[100vh]" v-if="route.path !== '/subscribe'">
    <div class="px-[72px] sticky">
      <div class="w-full h-[1px] bg-neutral-300 mt-[48px]"></div>
      <div class="mt-[36px] flex justify-between">
        <div>
          <div class="flex gap-[6px]">
            <img src="/images/icons/contact.svg" alt="Contact" />
            <h4 class="font-bold text-[16px] leading-[20px]">
              {{ t("FOOTER.CONTACT") }}
            </h4>
          </div>
          <div class="mt-[24px]">
            <RouterLink
              :to="{ name: 'products', params: { id: 222 } }"
              class="font-bold text-[14px] leading-[18.48px]"
              style="color: rgba(11, 153, 255, 1)"
              >{{ t("FOOTER.WRITE_TELEGRAM") }}</RouterLink
            >
            <h5
              class="font-bold text-[10px] leading-[13.2px]"
              style="color: rgba(153, 153, 153, 1)"
            >
              {{ t("FOOTER.REPLY") }}
            </h5>
          </div>
        </div>
        <div>
          <h4 class="font-bold text-[16px] leading-[20px]">
            {{ t("FOOTER.HELP") }}
          </h4>
          <div class="flex flex-col gap-[20px] mt-[24px]">
            <RouterLink
              :to="{ name: 'products', params: { id: 222 } }"
              class="font-medium text-[12px] leading-[15.84px] cursor-pointer hover:text-black"
              style="color: rgba(111, 111, 111, 1)"
              >{{ t("FOOTER.SHOP_ONLINE") }}</RouterLink
            >
            <RouterLink
              :to="{ name: 'products', params: { id: 222 } }"
              class="font-medium text-[12px] leading-[15.84px] cursor-pointer hover:text-black"
              style="color: rgba(111, 111, 111, 1)"
              >{{ t("FOOTER.PAYMENT") }}</RouterLink
            >
            <RouterLink
              :to="{ name: 'products', params: { id: 222 } }"
              class="font-medium text-[12px] leading-[15.84px] cursor-pointer hover:text-black"
              style="color: rgba(111, 111, 111, 1)"
              >{{ t("FOOTER.DELIVERY") }}</RouterLink
            >
            <RouterLink
              :to="{ name: 'products', params: { id: 222 } }"
              class="font-medium text-[12px] leading-[15.84px] cursor-pointer hover:text-black"
              style="color: rgba(111, 111, 111, 1)"
              >{{ t("FOOTER.RETURNS") }}</RouterLink
            >
          </div>
        </div>
        <div>
          <h4 class="font-bold text-[16px] leading-[20px]">
            {{ t("FOOTER.WE_ARE_BRAND_NAME") }}
          </h4>
          <div class="flex flex-col gap-[20px] mt-[24px]">
            <RouterLink
              to="/about"
              class="font-medium text-[12px] leading-[15.84px] cursor-pointer hover:text-black"
              style="color: rgba(111, 111, 111, 1)"
              >{{ t("FOOTER.ABOUT_BRAND_NAME") }}</RouterLink
            >
            <RouterLink
              to="/cooperation"
              class="font-medium text-[12px] leading-[15.84px] cursor-pointer hover:text-black"
              style="color: rgba(111, 111, 111, 1)"
              >{{ t("FOOTER.GALLERY") }}</RouterLink
            >
          </div>
        </div>
        <div>
          <h4 class="font-bold text-[16px] leading-[20px]">
            {{ t("FOOTER.INTERESTING") }}
          </h4>
          <div class="flex flex-col gap-[20px] mt-[24px]">
            <RouterLink
              :to="{ name: 'products', params: { id: 222 } }"
              class="font-medium text-[12px] leading-[15.84px] cursor-pointer hover:text-black"
              style="color: rgba(111, 111, 111, 1)"
              >{{ t("FOOTER.DRESSES") }}</RouterLink
            >
            <RouterLink
              :to="{ name: 'products', params: { id: 222 } }"
              class="font-medium text-[12px] leading-[15.84px] cursor-pointer hover:text-black"
              style="color: rgba(111, 111, 111, 1)"
              >{{ t("FOOTER.T_SHIRT") }}</RouterLink
            >
            <RouterLink
              :to="{ name: 'products', params: { id: 222 } }"
              class="font-medium text-[12px] leading-[15.84px] cursor-pointer hover:text-black"
              style="color: rgba(111, 111, 111, 1)"
              >{{ t("FOOTER.JEANS") }}</RouterLink
            >
            <RouterLink
              :to="{ name: 'products', params: { id: 222 } }"
              class="font-medium text-[12px] leading-[15.84px] cursor-pointer hover:text-black"
              style="color: rgba(111, 111, 111, 1)"
              >{{ t("FOOTER.SKIRTS") }}</RouterLink
            >
            <RouterLink
              :to="{ name: 'products', params: { id: 222 } }"
              class="font-medium text-[12px] leading-[15.84px] cursor-pointer hover:text-black"
              style="color: rgba(111, 111, 111, 1)"
              >{{ t("FOOTER.TROUSER") }}</RouterLink
            >
          </div>
        </div>
        <div>
          <h4 class="font-bold text-[16px] leading-[20px]">
            {{ t("FOOTER.WE_SOCIAL") }}
          </h4>
          <div class="flex flex-col gap-[20px] mt-[24px]">
            <RouterLink
              :to="{ name: 'products', params: { id: 222 } }"
              class="font-medium text-[12px] leading-[15.84px] cursor-pointer hover:text-black"
              style="color: rgba(111, 111, 111, 1)"
              >{{ t("FOOTER.INSTAGRAM") }}</RouterLink
            >
            <RouterLink
              :to="{ name: 'products', params: { id: 222 } }"
              class="font-medium text-[12px] leading-[15.84px] cursor-pointer hover:text-black"
              style="color: rgba(111, 111, 111, 1)"
              >{{ t("FOOTER.TELEGRAM") }}</RouterLink
            >
            <RouterLink
              :to="{ name: 'products', params: { id: 222 } }"
              class="font-medium text-[12px] leading-[15.84px] cursor-pointer hover:text-black"
              style="color: rgba(111, 111, 111, 1)"
              >{{ t("FOOTER.YOUTUBE") }}</RouterLink
            >
            <RouterLink
              :to="{ name: 'products', params: { id: 222 } }"
              class="font-medium text-[12px] leading-[15.84px] cursor-pointer hover:text-black"
              style="color: rgba(111, 111, 111, 1)"
              >{{ t("FOOTER.PINTEREST") }}</RouterLink
            >
            <RouterLink
              :to="{ name: 'products', params: { id: 222 } }"
              class="font-medium text-[12px] leading-[15.84px] cursor-pointer hover:text-black"
              style="color: rgba(111, 111, 111, 1)"
              >{{ t("FOOTER.BEHANCE") }}</RouterLink
            >
          </div>
        </div>
      </div>
      <div class="w-full h-[1px] bg-neutral-300 mt-6"></div>
      <div class="flex items-center justify-between py-[24px]">
        <h4
          class="font-medium text-[12px] leading-[20px]"
          style="color: rgba(153, 153, 153, 1)"
        >
          &copy; OZODA SHOWROOM 2024
        </h4>
        <div class="flex items-center gap-[6px]">
          <h5 class="font-medium text-[12px] leading-[20px] text-black">
            {{ t("FOOTER.TERMS") }}
          </h5>
          <span class="w-[4px] h-[4px] bg-black rounded-[50%]"></span>
          <h5 class="font-medium text-[12px] leading-[20px] text-black">
            {{ t("FOOTER.CONDITIONS") }}
          </h5>
          <span class="w-[4px] h-[4px] bg-black rounded-[50%]"></span>
          <h5 class="font-medium text-[12px] leading-[20px] text-black">
            {{ t("FOOTER.PRIVACY") }}
          </h5>
          <span class="w-[4px] h-[4px] bg-black rounded-[50%]"></span>
          <h5 class="font-medium text-[12px] leading-[20px] text-black">
            {{ t("FOOTER.COOKIES") }}
          </h5>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const route = useRoute();
const { t } = useI18n();
</script>
