<template>
  <div class="px-[72px] pt-[32px] flex gap-[36px]">
    <div class="w-[52%]">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-[24px] leading-[32.68px]">
          {{ $t("PROFILE.ORDER_DETAIL") }}
        </h3>
        <button
          class="w-[100px] h-[32px] rounded-[8px] font-medium text-[14px] leading-[18.48px]"
          style="
            background: rgba(165, 227, 125, 1);
            color: rgba(75, 137, 35, 1);
          "
        >
          Delivered
        </button>
      </div>
      <div class="w-full h-[1px] bg-black mt-4"></div>
      <div class="flex flex-col gap-[24px] mt-[24px]">
        <h4
          class="font-bold text-[13px] leading-[18px] uppercase"
          style="color: rgba(11, 153, 255, 1)"
        >
          {{ $t("BASKET.RECIPIENT_DETAIL") }}
        </h4>
        <div class="flex flex-col gap-[3px]">
          <h4
            class="font-medium text-[13px] leading-[17.16px]"
            style="color: rgba(153, 153, 153, 1)"
          >
            {{ $t("FORMS.NAME") }}
          </h4>
          <h4 class="font-medium ext-[16px] leading-[21.12px]">Islomjon</h4>
        </div>
        <div class="flex flex-col gap-[3px]">
          <h4
            class="font-medium text-[13px] leading-[17.16px]"
            style="color: rgba(153, 153, 153, 1)"
          >
            {{ $t("FORMS.SURNAME") }}
          </h4>
          <h4 class="font-medium ext-[16px] leading-[21.12px]">Rakhmonov</h4>
        </div>
        <div class="flex flex-col gap-[3px]">
          <h4
            class="font-medium text-[13px] leading-[17.16px]"
            style="color: rgba(153, 153, 153, 1)"
          >
            {{ $t("FORMS.PHONE") }}
          </h4>
          <h4 class="font-medium ext-[16px] leading-[21.12px]">
            +998974481512
          </h4>
        </div>
      </div>
      <div class="flex flex-col gap-[24px] mt-[36px]">
        <h4
          class="font-bold text-[13px] leading-[18px] uppercase"
          style="color: rgba(11, 153, 255, 1)"
        >
          {{ $t("BASKET.DELIVERY_ADDRESS") }}
        </h4>
        <div class="flex flex-col gap-[3px]">
          <h4
            class="font-medium text-[13px] leading-[17.16px]"
            style="color: rgba(153, 153, 153, 1)"
          >
            {{ $t("FORMS.COUNTRY") }}
          </h4>
          <h4 class="font-medium ext-[16px] leading-[21.12px]">Uzbekistan</h4>
        </div>
        <div class="flex flex-col gap-[3px]">
          <h4
            class="font-medium text-[13px] leading-[17.16px]"
            style="color: rgba(153, 153, 153, 1)"
          >
            {{ $t("FORMS.REGION") }}
          </h4>
          <h4 class="font-medium ext-[16px] leading-[21.12px]">
            Tashkent region
          </h4>
        </div>
        <div class="flex flex-col gap-[3px]">
          <h4
            class="font-medium text-[13px] leading-[17.16px]"
            style="color: rgba(153, 153, 153, 1)"
          >
            {{ $t("FORMS.CITY") }}
          </h4>
          <h4 class="font-medium ext-[16px] leading-[21.12px]">Tashkent</h4>
        </div>
        <div class="flex flex-col gap-[3px]">
          <h4
            class="font-medium text-[13px] leading-[17.16px]"
            style="color: rgba(153, 153, 153, 1)"
          >
            {{ $t("FORMS.STREET") }}
          </h4>
          <h4 class="font-medium ext-[16px] leading-[21.12px]">
            Amir Temur 28 B
          </h4>
        </div>
        <div class="flex flex-col gap-[3px]">
          <h4
            class="font-medium text-[13px] leading-[17.16px]"
            style="color: rgba(153, 153, 153, 1)"
          >
            {{ $t("FORMS.POSTCODE") }}
          </h4>
          <h4 class="font-medium ext-[16px] leading-[21.12px]">100076</h4>
        </div>
      </div>
      <div class="mt-[36px]">
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
          <div class="flex gap-[6px] mt-[14px]">
            <div
              v-if="true"
              class="w-[120px] h-[64px] rounded-[8px] bg-white py-[23px] px-[24.5px]"
            >
              <img
                class="mx-[3.5px] my-[1.5px]"
                src="/images/icons/cash.svg"
                alt="Cash"
              />
            </div>
            <div
              v-if="false"
              class="w-[120px] h-[64px] rounded-[8px] bg-white py-[23px] px-[24.5px]"
            >
              <img
                class="mx-[4.5px] my-[1.5px]"
                src="/images/icons/card.svg"
                alt="Cash"
              />
            </div>
            <div
              v-if="false"
              class="w-[120px] h-[64px] rounded-[8px] bg-white py-[23px] px-[24.5px]"
            >
              <img
                class="mx-[6.5px]"
                src="/images/icons/payme.svg"
                alt="Cash"
              />
            </div>
            <div
              v-if="false"
              class="w-[120px] h-[64px] rounded-[8px] bg-white py-[23px] px-[24.5px]"
            >
              <img
                class="my-[0.5px]"
                src="/images/icons/click.svg"
                alt="Cash"
              />
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
              {{ $t("BASKET.TOTAL_PRICE") }}
            </h3>
            <h3
              class="font-bold text-[20px] leading-[26.4px] uppercase text-black"
            >
              <span>390</span> <span>USD</span>
            </h3>
          </div>
          <button
            class="w-full h-[56px] rounded-[12px] text-white bg-black font-bold text-[15px] leading-[19.8px] text-center py-[18px] mt-[24px] hover:py-[19px] uppercase"
          >
            {{ $t("COMMANDS.REORDER") }}
          </button>
        </div>
      </div>
    </div>
    <div class="w-[45%]">
      <div
        class="flex items-center justify-between px-[24px] py-[12px]"
        style="background: rgba(240, 238, 237, 1)"
      >
        <h2 class="font-bold text-[24px] leading-[31.68px] mt-[12px] uppercase">
          {{ $t("BASKET.PRODUCT") }}
        </h2>
      </div>
      <div
        class="p-[24px] w-full b border-[1px] border-gray-300 outline-non"
        style="border: 2px rgba(240, 238, 237, 1)"
      >
        <div class="">
          <div class="flex gap-[16px]">
            <img src="/images/paymentImg1.svg" alt="paymentImage1" />
            <div>
              <h4 class="font-bold text-[16px] leading-[20px]">
                <span>190</span> USD
              </h4>
              <h5
                class="w-[189px] font-medium text-16px leading-[20px] mt-[12px]"
                style="color: rgba(111, 111, 111, 1)"
              >
                Платье короткий рукав SS23WES456
              </h5>
              <h5
                class="font-medium text-16px leading-[20px] mt-[12px]"
                style="color: rgba(189, 189, 189, 1)"
              >
                {{ $t("BASKET.SIZE") }}: <span>M</span>
              </h5>
              <h5
                class="font-medium text-16px leading-[20px] mt-[12px]"
                style="color: rgba(189, 189, 189, 1)"
              >
                {{ $t("FORMS.QNT") }}: <span>1</span>
              </h5>
            </div>
          </div>
        </div>
        <div class="w-full h-[1px] bg-neutral-300 mt-6"></div>
      </div>
    </div>
  </div>
</template>
