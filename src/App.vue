<script setup lang="ts">
import { ref } from 'vue'
import RatingForm from './components/RatingForm.vue'
import ThanksCard from './components/ThanksCard.vue'

const ratingValue = ref<number>(0)

const handleValue = (num: number) => {
  ratingValue.value = num
}

console.log(ratingValue.value)
</script>

<template>
  <main class="h-screen bg-fm-very-dark-blue text-white grid place-content-center font-overpass">
    <RatingForm v-if="!ratingValue" @rating-selected="handleValue" />
    <ThanksCard v-else :rating="ratingValue" />
  </main>
</template>

<style scoped></style>
