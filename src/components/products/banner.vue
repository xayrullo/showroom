<template>
  <div>
    <img
      class="w-[100%]"
      :src="IMAGE_URL + data.image.source_url"
      :alt="data.image.alt"
    />
    <div class="w-[100%] h-[70px] mt-[-70px]">
      <h3
        class="uppercase font-bold text-[28px] leading-[33.91px] text-center text-white font-sans"
      >
        {{ data.name }}
      </h3>
      <h3
        class="uppercase font-bold text-[11px] leading-[14.52px] text-center text-white"
      >
        <span>{{ data.position }}</span> {{ $t("CATEGORIES.AVAILABLE") }}
      </h3>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ICategory } from "@/types";
import { IMAGE_URL } from "@/utils/constants";

defineProps<{
  data: ICategory;
}>();
</script>
