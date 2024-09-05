<template>
  <div class="flex mt-[48px]">
    <img src="/images/aboutImg4.svg" alt="Image4" />
    <div class="w-[100%]">
      <h3
        class="uppercase text-center font-bold pt-[54px] font-sans"
        style="font-size: 32px; line-height: 38.75px"
      >
        {{ $t("COOPERATION.GET_TOUCH") }}
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
            placeholder="+998 12 345 67 89"
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
</template>
