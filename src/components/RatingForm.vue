<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{ (e: 'rating-selected', value: number): void }>()

const selectedValue = ref<number>(0)

const handleSelectValue = (num: number) => {
  selectedValue.value = num
}

const onSubmit = () => {
  emit('rating-selected', selectedValue.value)
}
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="bg-gradient-radial pt-7 pb-8 md:py-9 px-6 md:pl-9 md:pr-11 rounded-2xl md:rounded-[32px] w-[350px] md:w-[420px]"
  >
    <div
      class="w-11 h-11 md:w-12 md:h-12 rounded-full bg-fm-medium-grey/10 grid place-content-center mb-8"
    >
      <img src="../assets/icon-star.svg" alt="Star Icon" />
    </div>

    <h1 class="text-2xl md:text-3xl font-bold mb-2">How did we do?</h1>

    <p class="text-[15px] text-fm-medium-grey mb-6 leading-6">
      Please let us know how we did with your support request. All feedback is appreciated to help
      us improve our offering!
    </p>

    <div class="flex items-center justify-between mb-7">
      <button
        type="button"
        v-for="num in 5"
        :key="num"
        class="w-11 h-11 md:w-[54px] text-sm md:text-base md:h-[54px] bg-fm-medium-grey/10 text-fm-medium-grey rounded-full hover:bg-fm-orange hover:text-white transition-colors duration-300 ease-linear"
        @click="handleSelectValue(num)"
        :class="{ 'bg-fm-medium-grey text-white': selectedValue === num }"
      >
        {{ num }}
      </button>
    </div>

    <button
      type="submit"
      class="w-full font-bold bg-fm-orange rounded-full text-center py-3 md:py-3.5 uppercase tracking-widest active:translate-y-1 hover:bg-white hover:text-fm-orange transition-all duration-300 ease-linear"
    >
      Submit
    </button>
  </form>
</template>

<style scoped></style>
