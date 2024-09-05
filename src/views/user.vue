<!-- <template>
  <div>
    User Body
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
</script> -->

<template>
  <div class="px-[72px] flex">
    <div class="w-[20%] mt-[48px]">
      <div>
        <h2 class="font-bold text-[24px] leading-[31.68px] text-black">
          {{ $t("PROFILE.HI") }} <span>Islomjon</span>
        </h2>
        <h5
          class="font-medium text-[14px] leading-[18.48px]"
          style="color: rgba(111, 111, 111, 1)"
        >
          +998974481512
        </h5>
      </div>
      <div class="mt-[68px] flex flex-col gap-[16px]">
        <RouterLink
          to="/user/info"
          class="hover:text-black flex gap-[10px] items-center"
          :class="route.name === 'user-info' ? ' text-black ' : 'text-zinc-400'"
        >
          <img
            :class="route.name === 'user-info' ? 'opacity-100' : 'opacity-50'"
            src="/images/icons/profile.svg"
            alt="Profile"
          />
          <h4 class="font-bold text-[16px] leading-[21.12px]">
            {{ $t("PROFILE.PERSONAL_DETAIL") }}
          </h4>
        </RouterLink>
        <RouterLink
          to="/user/purchases"
          class="hover:text-black flex gap-[10px] items-center"
          :class="
            route.name === 'user-purchases' ? ' text-black' : ' text-zinc-400'
          "
        >
          <img
            :class="
              route.name === 'user-purchases' ? 'opacity-100' : 'opacity-50'
            "
            class="opacity-66"
            src="/images/icons/basket.svg"
            alt="Profile"
          />
          <h4 class="font-bold text-[16px] leading-[21.12px]">
            {{ $t("PROFILE.PURCHUASES") }}
          </h4>
        </RouterLink>
        <RouterLink
          to="/"
          class="hover:text-blue-500 flex gap-[10px] items-center mt-[332px]"
        >
          <img src="/images/icons/logOut.svg" alt="LogOut" />
          <h4 class="font-bold text-[16px] leading-[21.12px]">
            {{ $t("PROFILE.LOG_OUT") }}
          </h4>
        </RouterLink>
      </div>
    </div>
    <div class="w-[80%]">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
