<template>
  <div>
    <h2 class="font-bold text-[24px] leading-[31.68px] mt-[12px]">
      {{ $t("BASKET.BASKET") }} (6)
    </h2>
    <div class="w-full h-[1px] bg-black mt-6"></div>
    <div class="mt-[24px] flex flex-col gap-[12px]">
      <h5
        class="font-bold text-[13px] leading-[18px] uppercase"
        style="color: rgba(11, 153, 255, 1)"
      >
        {{ $t("BASKET.RECIPIENT_DETAIL") }}
      </h5>
      <XInput
        v-model="client.name"
        id="name"
        placeholder="Name"
        :isError="errors.name ? true : false"
        :error-text="errors.name"
        @input="validateField('name')"
      />
      <XInput
        v-model="client.surname"
        id="surname"
        placeholder="Surname"
        :isError="errors.surname ? true : false"
        :error-text="errors.surname"
        @input="validateField('surname')"
      />
      <XInput
        v-model="client.phone"
        id="phone"
        placeholder="+998"
        :isError="errors.phone ? true : false"
        :error-text="errors.phone"
        @input="validateField('phone')"
      />
      <XInput
        v-model="client.email"
        id="email"
        placeholder="name@example.com"
        :isError="errors.email ? true : false"
        :error-text="errors.email"
        @input="validateField('email')"
      />
    </div>
    <div class="mt-[24px] flex flex-col gap-[12px]">
      <h5
        class="font-bold text-[13px] leading-[18px] uppercase"
        style="color: rgba(11, 153, 255, 1)"
      >
        {{ $t("BASKET.RECIPIENT_DETAIL") }}
      </h5>
      <div class="h-[42px]">
        <SelectCountry
          placeholder="Country"
          class="w-[240px] h-[42px] rounded-[6px] border-[1px] p-[10px] outline-none text-[14px]"
          :class="errors.country ? 'border-red-600' : 'border-gray-300'"
          :country="client.country"
          @countrySelected="(country) => (client.country = country)"
          @input="validateField('country')"
        />
        <span class="font-medium text-[12px] leading-[18px] text-red-600">
          {{ errors.country }}
        </span>
      </div>
      <div class="h-[42px]">
        <SelectCity
          placeholder="Region"
          class="w-[240px] h-[42px] rounded-[6px] border-[1px] p-[10px] outline-none text-[14px]"
          :class="errors.region ? 'border-red-600' : 'border-gray-300'"
          :country="client.country"
          :region="client.region"
          @input="validateField('region')"
          @regionSelected="(region) => (client.region = region)"
        />
        <span class="font-medium text-[12px] leading-[18px] text-red-600">
          {{ errors.region }}
        </span>
      </div>
      <div>
        <input
          type="text"
          class="w-[240px] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
          id="userStreet"
          placeholder="Street"
        />
        <span
          class="font-medium text-[12px] leading-[18px] text-red-600"
          >{{
        }}</span>
      </div>
      <div>
        <input
          type="text"
          class="w-[240px] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
          id="postcode"
          placeholder="Postcode"
        />
        <span
          class="font-medium text-[12px] leading-[18px] text-red-600"
          >{{
        }}</span>
      </div>
    </div>
    <div class="mt-[24px]">
      <h5
        class="font-bold text-[13px] leading-[18px] uppercase"
        style="color: rgba(11, 153, 255, 1)"
      >
        {{ $t("BASKET.PAYMENT") }}
      </h5>
      <div
        class="p-[24px] rounded-[8px] mt-[14px]"
        style="background: rgba(240, 238, 237, 1)"
      >
        <div class="flex gap-[8px]">
          <input
            type="text"
            class="w-[240px] h-[42px] rounded-[6px] p-[12px] outline-none"
            placeholder="Promocode"
          />
          <button
            class="rounded-[8px] w-[90px] h-[42px] font-bold text-[14px] leading-[18px] text-white"
            style="background: rgba(111, 111, 111, 1)"
          >
            {{ $t("COMMANDS.APPLY") }}
          </button>
        </div>
        <div class="flex gap-[6px] mt-[14px]">
          <div
            class="w-[120px] h-[64px] rounded-[8px] bg-white py-[23px] px-[24.5px] hover:border-black hover:border-[1px] cursor-pointer"
          >
            <img
              class="mx-[3.5px] my-[1.5px]"
              src="/images/icons/cash.svg"
              alt="Cash"
            />
          </div>
          <div
            class="w-[120px] h-[64px] rounded-[8px] bg-white py-[23px] px-[24.5px] hover:border-black hover:border-[1px] cursor-pointer"
          >
            <img
              class="mx-[4.5px] my-[1.5px]"
              src="/images/icons/card.svg"
              alt="Cash"
            />
          </div>
          <div
            class="w-[120px] h-[64px] rounded-[8px] bg-white py-[23px] px-[24.5px] hover:border-black hover:border-[1px] cursor-pointer"
          >
            <img class="mx-[6.5px]" src="/images/icons/payme.svg" alt="Cash" />
          </div>
          <div
            class="w-[120px] h-[64px] rounded-[8px] bg-white py-[23px] px-[24.5px] hover:border-black hover:border-[1px] cursor-pointer"
          >
            <img class="my-[0.5px]" src="/images/icons/click.svg" alt="Cash" />
          </div>
        </div>
        <div class="flex items-center justify-between mt-[32px]">
          <h3
            class="font-bold text-[20px] leading-[26.4px] uppercase"
            style="color: rgba(111, 111, 111, 1)"
          >
            {{ $t("BASKET.DISCOUNT") }}:
          </h3>
          <h3
            class="font-bold text-[20px] leading-[26.4px] uppercase text-black"
          >
            <span>0</span> <span>USD</span>
          </h3>
        </div>
        <div class="flex items-center justify-between mt-[24px]">
          <h3
            class="font-bold text-[20px] leading-[26.4px] uppercase"
            style="color: rgba(111, 111, 111, 1)"
          >
            {{ $t("BASKET.TOTAL_PRICE") }}:
          </h3>
          <h3
            class="font-bold text-[20px] leading-[26.4px] uppercase text-black"
          >
            <span>390</span> <span>USD</span>
          </h3>
        </div>
        <button
          class="w-full h-[56px] rounded-[12px] text-white bg-black font-bold text-[15px] leading-[19.8px] text-center py-[18px] mt-[24px] hover:py-[19px] uppercase"
          @click="onSubmit"
        >
          {{ $t("COMMANDS.PAY") }}
        </button>
      </div>
    </div>
    <Modal
      v-if="isModal"
      v-model="isModal"
      position="center"
      width="425px"
      height="358px"
    >
      <div class="flex flex-col items-center px-[48px] py-[32px] gap-[14px]">
        <img src="/images/icons/succesfull.svg" alt="" />
        <h3
          class="font-bold text-[24px] leading-[29.06px] text-center uppercase max-w-[329px] font-sans"
        >
          {{ $t("MESSAGES.ORDER_NUMBER") }}
          {{}} {{ $t('MESSAGES.HAS_BEEN_PLACED') }}
        </h3>
        <h4
          class="font-medium text-[13px] leading-[17.16px] text-center max-w-[219px]"
          style="color: rgba(153, 153, 153, 1)"
        >
          {{ $t("MESSAGES.CHECK_STATUS_ORDER") }}
        </h4>
        <RouterLink to="/user/purchases">
          <button
            class="font-bold text-[15px] leading-[19.8px] w-[183px] h-[48px] rounded-[12px] bg-black text-white text-center mt-[18px] uppercase"
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
<script setup lang="ts">
import { ref } from "vue";
import * as yup from "yup";

import XInput from "@/components/ui/input.vue";
import Modal from "@/components/ui/modal.vue";
import SelectCity from "@/components/select/city.vue";
import SelectCountry from "@/components/select/country.vue";

interface FormValues {
  name: string;
  surname: string;
  phone: string;
  email: string;
  country: string;
  region: string;
}

const isModal = ref(false);
const client = ref<FormValues>({
  name: "",
  surname: "",
  phone: "",
  email: "",
  country: "",
  region: "",
});

const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  surname: yup
    .string()
    .required("Surname is required")
    .min(3, "Surname must be at least 3 characters"),
  phone: yup.string().required("Phone is required"),
  email: yup.string(),
});

const errors = ref<FormValues>({
  name: "",
  surname: "",
  phone: "",
  email: "",
  country: "",
  region: "",
});

// watch(
//   () => client.value,
//   async () => {
//     validateForm();
//   },
//   { deep: true }
// );

const validateField = async (field: keyof FormValues): Promise<void> => {
  try {
    await schema.validateAt(field, client.value);
    errors.value[field] = "";
  } catch (err) {
    errors.value[field] = (err as yup.ValidationError).message;
  }
};

const validateForm = async (): Promise<boolean> => {
  try {
    await schema.validate(client.value, { abortEarly: false });
    return true;
  } catch (err: any) {
    if (err.inner) {
      err.inner.forEach((error: any) => {
        errors.value[error.path as keyof FormValues] = error.message;
      });
    }
    return false;
  }
};

async function onSubmit() {
  errors.value = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    country: "",
    region: "",
  };
  const isValid = await validateForm();
  if (isValid) {
    console.log("Form Submitted:", client.value);
    // Handle form submission logic here
  }
}
</script>
