<template>
  <Modal
    v-if="isModal"
    v-model="isModal"
    position="center"
    width="300px"
    height="225px"
    class="z-50"
  >
    <div class="max-w-[399px] rounded-[20px] p-[32px]">
      <h5 class="font-bold text-[13px] leading-[17.16px] text-center">
        {{ $t("MESSAGES.ENTER_CODE") }}
      </h5>
      <input
        type="tel"
        maxlength="6"
        placeholder="XXX-XXX"
        class="mt-[15px] max-w-[335px] px-[100px] w-full h-[40px] outline-none font-bold text-[28px] leading-[36.96px]"
      />
      <button
        class="mt-[40px] max-w-[335px] w-full h-[48px] rounded-[8px] bg-black"
        @click="onClose"
      >
        <h4
          class="font-medium text-[15px] leading-[19.8px] text-center text-white"
        >
          {{ $t("COMMANDS.LOGIN_TO_ACCOUNT") }}
        </h4>
      </button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref, watchEffect, watch } from "vue";
import Modal from "../ui/modal.vue";
import router from "@/router";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["update:modelValue", "onClosed"]);

const isModal = ref(false);

watchEffect(() => {
  isModal.value = props.modelValue;
});

watch(isModal, (newValue) => {
  emits("update:modelValue", newValue);
});

function onClose() {
  emits("onClosed", "success");
  isModal.value = false;
  router.push("/user/info");
}
</script>
