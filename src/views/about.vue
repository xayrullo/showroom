<template>
  <div class="aboutUs">
    <div class="w-[100%] h-[720px] bg-black flex flex-col items-center">
      <h1
        class="font-bold text-[90px] leading-[108.99px] text-center text-white mt-[48px] font-sans"
      >
        SHOWROOM
      </h1>
      <img class="mt-[48px]" src="/images/aboutImg6.svg" alt="Image6" />
    </div>
    <div class="px-[72px] mb-[72px]">
      <h3
        class="font-bold text-[48px] leading-[58.13px] text-center mt-[207px] font-sans"
      >
        OZODA SHOWROOM
      </h3>
      <p
        class="font-medium text-[18px] leading-[32px] mt-[48px] font-sans"
        style="color: rgba(111, 111, 111, 1)"
      >
        {{ $t("COOPERATION.ABOUT_NAME") }}
      </p>
    </div>
    <div class="w-[100%] h-max-[1132px] h-[100%] bg-black p-[72px]">
      <div class="text-center mt-[72px]">
        <img
          style="margin: 0 auto; z-index: 0"
          src="/images/aboutImg1.svg"
          alt="Image1"
        />
        <div class="flex gap-[90px] justify-center mt-[-60px]">
          <img style="z-index: 1" src="/images/aboutImg2.svg" alt="Image2" />
          <img
            style="z-index: 1; margin-top: -100px"
            src="/images/aboutImg3.svg"
            alt="Image3"
          />
        </div>
      </div>
      <h4
        class="font-medium text-[18px] leading-[32px] text-white text-center mt-[32px] max-w-[699px] mx-auto"
      >
        {{ $t("COOPERATION.ADVANTAGES_INFO") }}
      </h4>
    </div>
    <div class="flex flex-col justify-center items-center gap-[24px] py-[72px]">
      <div class="flex items-center gap-[24px]">
        <img src="/images/aboutImg7.svg" alt="Image7" />
        <img src="/images/aboutImg8.svg" alt="Image8" />
      </div>
      <div class="flex items-center gap-[24px]">
        <img src="/images/aboutImg9.svg" alt="Image9" />
        <img src="/public/images/aboutImg10.svg" alt="Image10" />
        <img src="/images/aboutImg11.svg" alt="Image11" />
      </div>
    </div>
    <div class="p-[72px] bg-black flex justify-between">
      <p class="w-[55%] font-medium text-[18px] leading-[32px] text-white">
        {{ $t("COOPERATION.SUCCESS") }}
      </p>
      <img class="mt-[156px]" src="/images/aboutImg12.svg" alt="Image12" />
    </div>
    <div class="flex gap-[36px]">
      <img src="/images/aboutImg13.svg" alt="Image13" />
      <div>
        <h1 class="font-bold text-[64px] leading-[77.5px] mt-[36px] font-sans">
          {{ $t("COOPERATION.GUIPURE") }}
        </h1>
        <h5
          class="font-medium text-[18px] leading-[32px]"
          style="color: rgba(111, 111, 111, 1)"
        >
          {{ $t("COOPERATION.GUIPURE_TEXT") }}
        </h5>
      </div>
    </div>
    <div class="py-[72px]">
      <h3
        class="font-medium text-[24px] leading-[24px] text-zinc-500 text-center w-max-[576px] w-full max-w-[580px] mx-auto"
      >
        {{ $t("COOPERATION.ORDERS_FROM") }}
      </h3>
      <div>
        <ModalsAbout />
      </div>
      <h3
        class="font-medium text-[24px] leading-[24px] text-zinc-500 text-center mt-[32px] max-w-[530px] mx-auto"
      >
        {{ $t("COOPERATION.ORDERS_QUALITY") }}
      </h3>
    </div>
    <div class="flex">
      <img src="/images/aboutImg4.svg" alt="Image4" />
      <div class="w-[100%]">
        <h3
          class="uppercase text-center font-bold pt-[54px] font-sans"
          style="font-size: 32px; line-height: 38.75px"
        >
          {{ $t("COOPERATION.WORK_TOGETHER") }}
        </h3>
        <h5
          class="font-medium text-[20px] leading-[18px] text-center mt-[16px]"
          style="color: rgba(153, 153, 153, 1)"
        >
          {{ $t("COOPERATION.WORK_TOGETHER_INFO") }}
        </h5>
        <div class="flex items-center justify-center gap-[24px] mt-[56px]">
          <div class="flex flex-col w-[240px] gap-[12px]">
            <input
              type="text"
              placeholder="Name"
              class="w-max-[240px] h-[42px] rounded-[6px] border-[1px] border-gray-500 px-[12px]"
            />
            <input
              type="number"
              placeholder="+998"
              class="w-max-[240px] h-[42px] rounded-[6px] border-[1px] border-gray-500 px-[12px]"
            />
            <input
              type="email"
              placeholder="name@example.com"
              class="w-max-[240px] h-[42px] rounded-[6px] border-[1px] border-gray-500 px-[12px]"
            />
            <button
              class="w-max-[240px] h-[42px] rounded-[6px] bg-black text-white"
            >
              {{ $t("COMMANDS.SEND") }}
            </button>
            <h4
              class="font-bold text-[12px] leading-[15.84px] text-center text-gray-500"
            >
              {{ $t("COOPERATION.WORK_TOGETHER_SUBMIT") }}
            </h4>
          </div>
          <textarea
            class="w-[241px] h-[264px] p-[12px] border-[2px] rounded-[10px] resize-none"
            name=""
            id=""
            placeholder="Describe your idea..."
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
      <img src="/images/aboutImg5.svg" alt="Image5" />
    </div>
    <div class="px-[72px] flex flex-col justify-center items-center">
      <div class="w-full h-[1px] bg-neutral-300 mt-6"></div>
      <h1
        class="uppercase text-center font-bold mt-[48px] font-sans"
        style="font-size: 32px; line-height: 38.75px"
      >
        {{ $t("COOPERATION.NEWSLETTER") }}
      </h1>
      <h5
        class="font-medium text-[14px] leading-[18px] text-center mt-[16px]"
        style="color: rgba(153, 153, 153, 1)"
      >
        {{ $t("COOPERATION.NEWSLETTER_ADD") }}
      </h5>
      <RouterLink to="/subscribe">
        <button
          class="w-[110px] h-[38px] rounded-[19px] text-center text-white bg-black mt-[36px]"
        >
          {{ $t("COMMANDS.SUBSCRIBE") }}
        </button>
      </RouterLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import ModalsAbout from "@/components/modals/about.vue";
</script>
