<template>
  <nav class="container relative">
    <div
      class="flex items-center justify-between bg-transparent max-lg:py-10 lg:py-20 max-lg:px-8"
    >
      <RouterLink to="/" class="flex-none">
        <img src="/img/logo.svg" alt="" />
      </RouterLink>
      <div class="flex gap-5 max-lg:hidden">
        <RouterLink
          v-for="link in listLinks"
          :to="link.to"
          class="font-semibold"
        >
          {{ link.name }}
        </RouterLink>
      </div>
      <button class="btn max-lg:hidden">Get Started</button>
      <button
        @click.prevent="mobileNav = !mobileNav"
        class="hidden max-lg:block"
      >
        <img src="/img/icon-hamburger.svg" alt="" />
      </button>
    </div>

    <div class="md:hidden">
      <div
        v-if="mobileNav"
        class="absolute flex flex-col items-center self-center py-4 space-y-6 bg-white sm:self-end sm:w-auto left-6 right-6 drop-shadow-md"
      >
        <RouterLink v-for="items in listLinks">{{ items.name }}</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { RouterLink } from "vue-router";
const mobileNav = ref(false)
const listLinks = ref([
  {
    to: "/about",
    name: "About Us",
  },
])
</script>

<style scoped></style>
