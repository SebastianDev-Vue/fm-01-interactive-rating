<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Props {
  rating: number
}

const props = defineProps<Props>()

const showComponent = ref<boolean>(false)

onMounted(() => {
  showComponent.value = true
})
</script>

<template>
  <Transition>
    <article
      v-if="showComponent"
      class="bg-gradient-radial py-9 md:py-10 px-2 md:pl-9 md:pr-11 rounded-2xl md:rounded-[32px] w-[350px] md:w-[420px] flex flex-col items-center md:h-[426px] fade-in-component"
    >
      <img
        src="../assets//illustration-thank-you.svg"
        alt="Thank you illustration"
        class="mb-7 md:mb-10"
      />

      <span class="text-fm-orange bg-fm-medium-grey/10 rounded-full py-1.5 px-5 mb-8 md:mb-11"
        >You selected {{ props.rating }} out of 5</span
      >

      <h1 class="text-2xl md:text-3xl font-bold mb-4">Thank you!</h1>

      <p class="text-[15px] text-fm-medium-grey leading-6 text-center">
        We appreciate you taking the time to give a rating. If you ever need more support, don’t
        hesitate to get in touch!
      </p>
    </article>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
