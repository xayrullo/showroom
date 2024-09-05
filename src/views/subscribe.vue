<template>
  <div class="subscribe flex overscroll-none">
    <img
      class="w-[65.9%] h-[100%]"
      src="/images/subscribe.svg"
      alt="subscribe"
    />
    <div class="p-[32px] w-[full] flex-1">
      <div class="">
        <h1 class="font-bold text-[28px] leading-[33.19px] uppercase font-sans">
          {{ $t("SUBSCRIBE_NEWSLETTER") }}
        </h1>
        <!-- <img
          src="/public/icons/paymentRemove.svg"
          alt="Remove"
          class="w-[24px] cursor-pointer"
        /> -->
      </div>
      <input
        type="email"
        class="w-[100%] w-max-[356px] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none mt-[48px]"
        placeholder="name@example.com"
      />
      <button
        class="w-max-[356px] w-[100%] h-[42px] rounded-[8px] text-center text-white bg-black mt-[16px]"
      >
        Subcribe
      </button>
      <p
        class="font-medium text-[11px] leading-[14.52px] pl-[32px] mt-[16px]"
        style="color: rgba(111, 111, 111, 1)"
      >
        {{ $t("SUBSCRIBE_UNDERSTAND")
        }}<span class="text-black">
          {{ $t("SUBSCRIBE_PRIVACY") }}
        </span>
        {{ $t("SUBSCRIBE_TEXT") }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
