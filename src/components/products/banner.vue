<template>
  <div>
    <img class="w-[100%]" :src="data.banner" :alt="data.title" />
    <div class="w-[100%] h-[70px] mt-[-70px]">
      <h3
        class="uppercase font-bold text-[28px] leading-[33.91px] text-center text-white font-sans"
      >
        {{ data.title }}
      </h3>
      <h3
        class="uppercase font-bold text-[11px] leading-[14.52px] text-center text-white"
      >
        <span>{{ data.quantity }}</span> {{ $t("CATEGORIES.AVAILABLE") }}
      </h3>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ICategory } from "@/types/category";
const props = defineProps<{
  data: ICategory;
}>();
</script>
