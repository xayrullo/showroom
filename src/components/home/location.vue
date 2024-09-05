<template>
  <div class="px-[72px] flex gap-[48px] mt-[57px]">
    <div class="flex flex-col flex-1">
      <div class="flex gap-[10px] items-start">
        <img src="/images/icons/location.svg" alt="Location" />
        <div>
          <div class="flex gap-[10px]">
            <h3
              class="font-medium text-[14px] leading-[18px] uppercase text-black"
            >
              Tashkent, uzbekistan
            </h3>
            <div class="w-[26px] h-[18px]">
              <div
                class="w-[100%] h-[6px]"
                style="background: rgba(0, 148, 175, 1)"
              ></div>
              <div
                class="w-[100%] h-[6px]"
                style="
                  background: rgba(245, 245, 245, 1);
                  border:
                    0.5px,
                    0px,
                    0.5px,
                    0px rgba(247, 0, 0, 1);
                "
              ></div>
              <div
                class="w-[100%] h-[6px]"
                style="background: rgba(30, 175, 57, 1)"
              ></div>
            </div>
          </div>
          <h3
            class="font-medium text-[14px] leading-[18px] uppercase mt-[8px]"
            style="color: rgba(153, 153, 153, 1)"
          >
            Ozoda Showroom Kurgancha Street,<br />Tashkent, Uzbekistan
            Tashkent,<br />Uzbekistan
          </h3>
        </div>
      </div>
      <div class="flex gap-[10px] items-center mt-[15px]">
        <img class="mt-[10px]" src="/images/icons/userContact.svg" alt="" />
        <h3
          class="font-medium text-[14px] leading-[18px] capitalize mt-[8px]"
          style="color: rgba(153, 153, 153, 1)"
        >
          {{ $t("CATEGORIES.NUMBER") }}
          <span class="text-black"> +998 99 100 55 50 </span>
        </h3>
      </div>
      <div class="flex gap-[10px] items-center mt-[15px]">
        <img class="mt-[10px]" src="/images/icons/workingOffice.svg" alt="" />
        <h3
          class="font-medium text-[14px] leading-[18px] capitalize mt-[8px]"
          style="color: rgba(153, 153, 153, 1)"
        >
          {{ $t("CATEGORIES.WORKING") }} <span class="text-black">10:00</span
          ><span class="text-black">-</span
          ><span class="text-black">18:00</span>
        </h3>
      </div>
      <!-- <GoogleMap
        api-key="YOUR_GOOGLE_MAPS_API_KEY"
        class="w-[100%] h-[200px] mt-[25px]"
        :center="center"
        :zoom="15.06"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap> -->
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex gap-[10px] items-start">
        <img src="/images/icons/location.svg" alt="Location" />
        <div>
          <div class="flex gap-[10px]">
            <h3
              class="font-medium text-[14px] leading-[18px] uppercase text-black"
            >
              Dubai, uae
            </h3>
            <div class="flex">
              <div
                class="w-[6px] h-[18px]"
                style="background: rgba(247, 0, 0, 1)"
              ></div>
              <div class="w-[20px] h-[18px]">
                <div
                  class="w-[100%] h-[6px]"
                  style="background: rgba(1, 111, 45, 1)"
                ></div>
                <div
                  class="w-[100%] h-[6px]"
                  style="
                    background: rgba(245, 245, 245, 1);
                    border:
                      0.5px,
                      0px,
                      0.5px,
                      0px rgba(247, 0, 0, 1);
                  "
                ></div>
                <div
                  class="w-[100%] h-[6px]"
                  style="background: rgba(0, 0, 0, 1)"
                ></div>
              </div>
            </div>
          </div>
          <h3
            class="font-medium text-[14px] leading-[18px] uppercase mt-[8px]"
            style="color: rgba(153, 153, 153, 1)"
          >
            Ozoda Showroom Kurgancha Street,<br />Tashkent, Uzbekistan
            Tashkent,<br />Uzbekistan
          </h3>
        </div>
      </div>
      <div class="flex gap-[10px] items-center mt-[15px]">
        <img class="mt-[10px]" src="/images/icons/userContact.svg" alt="" />
        <h3
          class="font-medium text-[14px] leading-[18px] capitalize mt-[8px]"
          style="color: rgba(153, 153, 153, 1)"
        >
          {{ $t("CATEGORIES.NUMBER") }}
          <span class="text-black"> +998 99 100 55 50 </span>
        </h3>
      </div>
      <div class="flex gap-[10px] items-center mt-[15px]">
        <img class="mt-[10px]" src="/images/icons/workingOffice.svg" alt="" />
        <h3
          class="font-medium text-[14px] leading-[18px] capitalize mt-[8px]"
          style="color: rgba(153, 153, 153, 1)"
        >
          {{ $t("CATEGORIES.WORKING") }} <span class="text-black">10:00</span
          ><span class="text-black">-</span
          ><span class="text-black">18:00</span>
        </h3>
      </div>
      <!-- <GoogleMap
        api-key="YOUR_GOOGLE_MAPS_API_KEY"
        class="w-[100%] h-[200px] mt-[25px]"
        :center="center"
        :zoom="15.06"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap> -->
    </div>
  </div>
</template>
