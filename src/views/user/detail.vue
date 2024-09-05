<template>
  <Form class="mt-[48px]">
    <h3 class="font-bold text-[24px] leading-[31.68px]">
      {{ $t("PROFILE.PERSONAL_DETAIL") }}
    </h3>
    <h5
      class="font-bold text-[13px] leading-[18px] uppercase mt-[32px]"
      style="color: rgba(11, 153, 255, 1)"
    >
      {{ $t("PROFILE.MY_INFORM") }}
    </h5>
    <div class="grid grid-cols-2 gap-[12px] mt-[20px]">
      <div>
        <input
          type="text"
          class="w-max-[398px] w-[100%] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
          id="name"
          placeholder="Name"
          required
        />
        <span class="font-medium text-[12px] leading-[18px] text-red-600">
        </span>
      </div>
      <div>
        <input
          type="text"
          class="w-max-[398px] w-[100%] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
          id="surname"
          placeholder="Surname"
        />
        <span
          class="text-medium text-[12px] leading-[18px] text-red-600"
        ></span>
      </div>
      <div>
        <input
          type="tel"
          maxlength="20"
          class="w-max-[398px] w-[100%] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
          id="phone"
          placeholder="+998 XX XXX XX XX"
        />
        <span
          class="text-medium text-[12px] leading-[18px] text-red-600"
        ></span>
      </div>
      <div>
        <input
          type="email"
          class="w-max-[398px] w-[100%] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
          id="email"
          placeholder="name@example.com"
        />
        <span
          class="text-medium text-[12px] leading-[18px] text-red-600"
        ></span>
      </div>
      <div class="flex flex-col">
        <input
          type="date"
          class="w-[193px] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
        />
        <span
          class="text-medium text-[12px] leading-[18px] text-red-600"
        ></span>
      </div>
    </div>
    <div>
      <h5
        class="font-bold text-[13px] leading-[18px] uppercase mt-[32px]"
        style="color: rgba(11, 153, 255, 1)"
      >
        {{ $t("PROFILE.MY_GENDER") }}
      </h5>
      <div>
        <div class="flex gap-[12px] mt-[20px]">
          <button
            ref="selectWomen"
            class="rounded-[6px] text-black border-[1px] border-gray-300 w-[100px] h-[42px] px-[20px] py-[12px] font-medium text-[14px] leading-[18px]"
          >
            {{ $t("PROFILE.WOMEN") }}
          </button>
          <button
            ref="selectMen"
            class="rounded-[6px] text-black border-[1px] p-[12px] border-gray-300 w-[100px] h-[42px] px-[29px] py-[12px] font-medium text-[14px] leading-[18px]"
          >
            {{ $t("PROFILE.MEN") }}
          </button>
        </div>
        <span
          class="text-medium text-[12px] leading-[18px] text-red-600"
        ></span>
      </div>
    </div>
    <div>
      <h5
        class="font-bold text-[13px] leading-[18px] uppercase mt-[32px]"
        style="color: rgba(11, 153, 255, 1)"
      >
        {{ $t("PROFILE.ADDRESS_DETAILS") }}
      </h5>
      <div class="grid grid-cols-2 gap-[12px] mt-[20px]">
        <div>
          <input
            type="text"
            class="w-max-[398px] w-[100%] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
            id="country"
            placeholder="Country"
          />
          <span
            class="text-medium text-[12px] leading-[18px] text-red-600"
          ></span>
        </div>
        <div>
          <input
            type="text"
            class="w-max-[398px] w-[100%] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
            id="region"
            placeholder="Region"
          />
          <span
            class="text-medium text-[12px] leading-[18px] text-red-600"
          ></span>
        </div>
        <div>
          <input
            type="text"
            class="w-max-[398px] w-[100%] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
            id="city"
            placeholder="City"
          />
          <span
            class="text-medium text-[12px] leading-[18px] text-red-600"
          ></span>
        </div>
        <div>
          <input
            type="text"
            class="w-max-[398px] w-[100%] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
            id="street"
            placeholder="street"
          />
          <span
            class="text-medium text-[12px] leading-[18px] text-red-600"
          ></span>
        </div>
        <div>
          <input
            type="text"
            class="w-[193px] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
            id="postCode"
            placeholder="Postcode"
          />
          <span
            class="text-medium text-[12px] leading-[18px] text-red-600"
          ></span>
        </div>
      </div>
    </div>
    <button
      type="submit"
      class="w-[193px] h-[42px] rounded-[8px] py-[12px] font-medium text-[14px] leading-[18px] text-center bg-black text-white mt-[12px]"
    >
      {{ $t("COMMANDS.SAVE") }}
    </button>
  </Form>
</template>
<script lang="ts" setup>
// import { useForm } from "vee-validate";
// import * as yup from "yup";

// import type { IUserRequest } from "@/types/user";

// const detail = ref<IUserRequest>({
//   name: "",
//   surname: "",
//   phone: "",
//   email: "",
//   birthday: "",
//   gender: "",
//   country: "",
//   city: "",
//   region: "",
//   street: "",
//   postcode: "",
// });

// const validationSchema = yup.object({
//   name: yup.string().required("Name is required"),
//   surname: yup.string().required("Surname is required"),
//   phone: yup
//     .string()
//     .required("Phone is required")
//     .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
//   email: yup.string().required("Email is required").email("Invalid email"),
//   birthday: yup.string().required("Birthday is required"),
// });

// const { handleSubmit, errors, resetForm } = useForm({
//   validationSchema: validationSchema,
// });

// const onSubmit = handleSubmit((values: any) => {
//   resetForm();
// });
</script>

<style>
.is-invalid {
  border: 1px solid red;
}
</style>
