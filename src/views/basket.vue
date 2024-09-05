<template>
  <div class="px-[72px] pt-[32px] flex gap-[36px]">
    <div class="w-[52%]">
      <Form />
    </div>
    <div class="w-[45%]">
      <Basket />
    </div>
    <Modal
      v-if="isDeleteModal"
      v-model="isDeleteModal"
      position="center"
      width="425px"
      height="300px"
    >
      <div class="flex flex-col items-center px-[48px] py-[32px] gap-[14px]">
        <h3
          class="font-bold text-[24px] leading-[29.06px] text-center uppercase max-w-[250px] font-sans"
        >
          {{ $t("MESSAGES.CLOSE_PROCESS") }}
        </h3>
        <h4
          class="font-medium text-[13px] leading-[17.16px] text-center max-w-[289px]"
          style="color: rgba(153, 153, 153, 1)"
        >
          {{ $t("MESSAGES.CLOSE_INFORMATION") }}
        </h4>
        <RouterLink to="/user/purchases">
          <button
            class="font-bold text-[15px] leading-[19.8px] w-[200px] h-[48px] rounded-[12px] bg-black text-white text-center mt-[18px] uppercase"
          >
            {{ $t("COMMANDS.GO_TO_ORDERS") }}
          </button>
        </RouterLink>
        <RouterLink to="/">
          <button
            class="font-bold text-[15px] leading-[19.8px] text-center uppercase"
          >
            {{ $t("COMMANDS.GO_TO_MAIN_PAGE") }}
          </button>
        </RouterLink>
      </div>
    </Modal>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Form from "@/components/order/form.vue";
import Basket from "@/components/order/basket.vue";
import Modal from "@/components/ui/modal.vue";

const isDeleteModal = ref(false);
</script>
