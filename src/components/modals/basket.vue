<template>
  <Modal
    v-if="isModalBasket"
    v-model="isModalBasket"
    position="right"
    width="360px overflow-hidden"
  >
    <div class="p-[20px] w-[360px] h-[90%] overflow-y-auto">
      <div class="flex justify-between">
        <h3 class="font-bold text-[28px] leading-[33.91px] font-sans">
          {{ $t("BASKET.BASKET") }} (6)
        </h3>
        <img
          @click="isModalBasket = false"
          src="/images/icons/paymentRemove.svg"
          alt="remove"
          class="cursor-pointer"
        />
      </div>
      <div class="space-y-4">
        <div v-for="product in 9" class="flex gap-[24px] mt-[19px]">
          <img class="w-[103px] z-0" src="/images/infoPage1.svg" alt="" />
          <div class="flex flex-col gap-[12px]">
            <h4 class="font-bold text-[16px] leading-[20px] uppercase">
              <span>190</span> <span>USD</span>
            </h4>
            <h4
              class="font-medium text-[16px] leading-[20px]"
              style="color: rgba(111, 111, 111, 1)"
            >
              Платье короткий рукав <span>SS23WES456</span>
            </h4>
            <h4
              class="font-medium text-[16px] leading-[20px]"
              style="color: rgba(189, 189, 189, 1)"
            >
              {{ $t("BASKET.SIZE") }}: <span>M</span>
            </h4>
            <div class="flex gap-[14px]">
              <RouterLink @click="closeRightModal" to="/products/1212312">
                <img src="/images/icons/basketEdit.svg" alt="Edit" />
              </RouterLink>
              <RouterLink @click="closeRightModal" to="/products/1212312">
                <img src="/images/icons/basketTrash.svg" alt="Trash" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <RouterLink
        to="/basket"
        class="font-bold text-[15px] leading-[19.8px] text-center uppercase max-w-[315px] w-[100%] h-[48px] rounded-[12px] py-[14px] bg-black text-white z-10 bottom-0 inset-x-0 absolute mx-[20px] mb-[20px]"
        @click="closeRightModal"
      >
        {{ $t("COMMANDS.GO_TO_CHECKOUT") }}
      </RouterLink>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";
import Modal from "../ui/modal.vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["update:modelValue"]);

const isModalBasket = ref(false);

watchEffect(() => {
  isModalBasket.value = props.modelValue;
});

watch(isModalBasket, (newValue) => {
  emits("update:modelValue", newValue);
});

function closeRightModal() {
  emits("update:modelValue", false);
}
</script>
