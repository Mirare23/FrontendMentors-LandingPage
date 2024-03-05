<template>
  <nav class="container relative">
    <div
      class="flex items-center justify-between bg-transparent max-lg:py-10 lg:py-20 max-lg:px-8"
    >
      <div class="flex-none">
        <img src="/img/logo.svg" alt="" />
      </div>
      <div class="flex gap-5 max-lg:hidden">
        <router-link
          v-for="link in listLinks"
          :to="link.to"
          class="font-semibold"
        >
          {{ link.name }}
        </router-link>
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
        <router-link v-for="items in listLinks">{{ items.name }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue"
const mobileNav = ref(false)
const listLinks = ref([
  {
    to: "/",
    name: "Pricing",
  },
  {
    to: "/",
    name: "Product",
  },
  {
    to: "/",
    name: "About Us",
  },
  {
    to: "/",
    name: "Careers",
  },
  {
    to: "/",
    name: "Community",
  },
])
</script>

<style scoped></style>
