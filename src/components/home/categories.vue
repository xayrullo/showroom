<template>
  <div class="p-[72px] grid grid-cols-4 gap-0">
    <RouterLink
      :to="{
        path: '/products',
        query: {
          id: category._id,
        },
      }"
      v-for="(category, ind) in data"
      :key="ind"
    >
      <div
        class="cursor-pointer group opacity-90 hover:opacity-100 transition-opacity duration-1000"
      >
        <img
          class="w-[100%]"
          :src="IMAGE_URL + category.image.source_url"
          :alt="category.image.alt"
        />
        <h3
          class="uppercase font-bold text-[24px] leading-[29.06px] text-white mt-[-50px] ml-[24px] group-hover:opacity-100 transition-opacity duration-300 opacity-0 font-sans"
        >
          {{ category.name.en }}
        </h3>
      </div>
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import { ICategory } from "@/types/index.ts";
import { IMAGE_URL } from "@/utils/constants";

defineProps<{
  data: ICategory[];
}>();
</script>
