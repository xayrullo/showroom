<template>
  <div class="mt-[48px]">
    <h3 class="font-bold text-[24px] leading-[31.68px]">
      {{ $t("PROFILE.MY_ORDER") }}
    </h3>
    <div v-if="false" class="flex flex-col gap-[14px] items-center mt-[97px]">
      <img src="/images/notHave.svg" alt="notHave" />
      <h4
        class="font-bold text-[18px] leading-[23.76px] text-center max-w-[216px]"
      >
        {{ $t("PROFILE.NOT_PURCHUASES") }}
      </h4>
      <h4
        class="font-medium text-[13px] leading-[17.16px] text-center max-w-[250px]"
        style="color: rgba(153, 153, 153, 1)"
      >
        {{ $t("PROFILE.NOT_PURCHUASES_TEXT") }}
      </h4>
    </div>
    <div v-else class="mt-[32px] flex flex-col gap-[12px]">
      <div
        class="flex justify-between items-center border-[1.5px] border-gray-300 p-[14px]"
      >
        <div class="flex flex-col gap-[8px]">
          <h5
            class="font-medium text-[15px] leading-[19.8px]"
            style="color: rgba(11, 153, 255, 1)"
          >
            {{ $t("PROFILE.ORDER") }} <span>#12345678</span>
          </h5>
          <h5
            class="font-medium text-[12px] leading-[15.84px]"
            style="color: rgba(153, 153, 153, 1)"
          >
            <span>26.07.2024</span> | <span>17:52</span>
          </h5>
        </div>
        <div class="flex items-center gap-[24px]">
          <h5 class="font-medium text-[15px] leading-[19.8px]">
            <span>390</span> <span>USD</span>
          </h5>
          <RouterLink to="/orderDetail"
            ><button
              class="w-[100px] rounded-[8px] font-medium text-[14px] leading-[18.48px] py-[7px]"
              style="
                background: rgba(165, 227, 125, 1);
                color: rgba(75, 137, 35, 1);
              "
            >
              {{ $t("COMMANDS.DELIVERED") }}
            </button></RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
