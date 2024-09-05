<template>
  <Modal
    v-if="isModalCategory"
    v-model="isModalCategory"
    position="center"
    width="1136px"
  >
    <div class="flex max-w-[1136px] w-full max-h-[396px] h-full">
      <div
        class="w-[100%] max-w-[200px] bg-gray-100 p-[24px] flex flex-col gap-[8px]"
      >
        <RouterLink
          class="font-medium text-[16px] leading-[24px] uppercase hover:text-black cursor-pointer"
          style="color: rgba(111, 111, 111, 1)"
          >{{ t("HEADER.NEW") }}</RouterLink
        >
        <RouterLink
          class="font-medium text-[16px] leading-[24px] uppercase hover:text-black cursor-pointer"
          style="color: rgba(111, 111, 111, 1)"
          >{{ t("HEADER.CLOTHES") }}</RouterLink
        >
        <RouterLink
          class="font-medium text-[16px] leading-[24px] uppercase hover:text-black cursor-pointer"
          style="color: rgba(111, 111, 111, 1)"
          >{{ t("HEADER.SHOES") }}</RouterLink
        >
        <RouterLink
          class="font-medium text-[16px] leading-[24px] uppercase hover:text-black cursor-pointer"
          style="color: rgba(111, 111, 111, 1)"
          >{{ t("HEADER.ACCESORIES") }}</RouterLink
        >
        <div>
          <RouterLink
            class="font-medium text-[16px] leading-[24px] uppercas cursor-pointer hover:text-black"
            style="color: rgba(111, 111, 111, 1)"
            >{{ t("FOOTER.GALLERY") }}</RouterLink
          >
          <h3
            class="font-medium text-[10px] leading-[12px] uppercase mt-[2px]"
            style="color: rgba(189, 189, 189, 1)"
          >
            #TAKEALOOK
          </h3>
        </div>
      </div>
      <div class="p-[24px] max-w-[968px] w-full">
        <h4
          class="font-medium text-[12px] leading-[16px] uppercase"
          style="color: rgba(189, 189, 189, 1)"
        >
          {{ t("HEADER.CATEGORIES") }}
        </h4>
        <div class="mt-[17px] flex gap-[68px]">
          <div class="flex flex-col gap-[11px]">
            <RouterLink
              @click="closeCenterModal"
              :to="{ name: 'products' }"
              class="font-medium text-[12px] leading-[16px] uppercase cursor-pointer"
              >{{ t("HEADER.BEST_SELLERS") }}</RouterLink
            >
            <RouterLink
              @click="closeCenterModal"
              :to="{ name: 'products' }"
              class="font-medium text-[12px] leading-[16px] uppercase cursor-pointer"
              >{{ t("HEADER.DRESSES_AND_JUMPSUITS") }}</RouterLink
            >
            <RouterLink
              @click="closeCenterModal"
              :to="{ name: 'products' }"
              class="font-medium text-[12px] leading-[16px] uppercase cursor-pointer"
              >{{ t("FOOTER.JEANS") }}</RouterLink
            >
            <RouterLink
              @click="closeCenterModal"
              :to="{ name: 'products' }"
              class="font-medium text-[12px] leading-[16px] uppercase cursor-pointer"
              >{{ t("FOOTER.TROUSER") }}</RouterLink
            >
            <RouterLink
              @click="closeCenterModal"
              :to="{ name: 'products' }"
              class="font-medium text-[12px] leading-[16px] uppercase cursor-pointer"
              >{{ t("FOOTER.SHORTS") }}</RouterLink
            >
            <RouterLink
              @click="closeCenterModal"
              :to="{ name: 'products' }"
              class="font-medium text-[12px] leading-[16px] uppercase cursor-pointer"
              >{{ t("FOOTER.SKIRTS") }}</RouterLink
            >
            <RouterLink
              @click="closeCenterModal"
              :to="{ name: 'products' }"
              class="font-medium text-[12px] leading-[16px] uppercase cursor-pointer"
              >{{ t("FOOTER.T_SHIRT") }}</RouterLink
            >
            <RouterLink
              @click="closeCenterModal"
              :to="{ name: 'products' }"
              class="font-medium text-[12px] leading-[16px] uppercase cursor-pointer"
              >{{ t("FOOTER.TOPS") }}</RouterLink
            >
            <RouterLink
              @click="closeCenterModal"
              :to="{ name: 'products' }"
              class="font-medium text-[12px] leading-[16px] uppercase cursor-pointer"
              >{{ t("FOOTER.SHIRTS_AND_BLOUSES") }}</RouterLink
            >
          </div>
          <div class="flex flex-col gap-[11px]">
            <RouterLink
              @click="closeCenterModal"
              :to="{ name: 'products' }"
              class="font-medium text-[12px] leading-[16px] uppercase cursor-pointer"
              >{{ t("FOOTER.JACKETS_AND_TRENCH_COATS") }}</RouterLink
            >
            <RouterLink
              @click="closeCenterModal"
              :to="{ name: 'products' }"
              class="font-medium text-[12px] leading-[16px] uppercase cursor-pointer"
              >{{ t("FOOTER.SWEATSHIRTS_AND_SWEATERS") }}</RouterLink
            >
            <RouterLink
              @click="closeCenterModal"
              :to="{ name: 'products' }"
              class="font-medium text-[12px] leading-[16px] uppercase cursor-pointer"
              >{{ t("FOOTER.TOTAL_LOOK") }}</RouterLink
            >
            <RouterLink
              @click="closeCenterModal"
              :to="{ name: 'products' }"
              class="font-medium text-[12px] leading-[16px] uppercase cursor-pointer"
              >{{ t("FOOTER.COLLABORATIONS") }}</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>
<script setup lang="ts">
import { ref, watchEffect, watch } from "vue";
import { useI18n } from "vue-i18n";

import Modal from "./modal.vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const { t } = useI18n();

const emits = defineEmits(["update:modelValue"]);

const isModalCategory = ref(false);

watchEffect(() => {
  isModalCategory.value = props.modelValue;
});

watch(isModalCategory, (newValue) => {
  emits("update:modelValue", newValue);
});
function closeCenterModal() {
  emits("update:modelValue", false);
}
</script>
