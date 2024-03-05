<template>
  <div class="py-10 bg-VeryDarkBlue">
    <footer class="container grid grid-cols-4 gap-10 max-lg:grid-cols-2">
      <div
        class="flex flex-col justify-between gap-10 max-lg:items-center max-lg:col-span-2 max-lg:order-3 max-lg:flex-col-reverse"
      >
        <span class="hidden text-DarkGrayishBlue max-lg:block"
          >Copyright 2020. All Right Reserved</span
        >
        <img src="/img/logo.svg" class="w-40" alt="" />
        <div class="flex lg:gap-4 max-lg:gap-5 max-lg:justify-between">
          <img
            src="/img/icon-facebook.svg"
            class="size-5 max-lg:size-8"
            alt=""
          />
          <img
            src="/img/icon-youtube.svg"
            class="size-5 max-lg:size-8"
            alt=""
          />
          <img
            src="/img/icon-twitter.svg"
            class="size-5 max-lg:size-8"
            alt=""
          />
          <img
            src="/img/icon-pinterest.svg"
            class="size-5 max-lg:size-8"
            alt=""
          />
          <img
            src="/img/icon-instagram.svg"
            class="size-5 max-lg:size-8"
            alt=""
          />
        </div>
      </div>
      <div class="flex flex-col gap-4 text-white capitalize max-lg:order-2">
        <span v-for="link in primaryLinks"> {{ link }}</span>
      </div>
      <div class="flex flex-col gap-4 text-white capitalize max-lg:order-2">
        <span v-for="link in secondaryLinks"> {{ link }}</span>
      </div>
      <div
        class="flex flex-col items-end justify-between max-lg:order-1 max-lg:col-span-2"
      >
        <div class="flex gap-2">
          <input
            v-model="emailInput"
            type="text"
            class="min-w-0 px-4 bg-white rounded-full"
            placeholder="Updates in your inbox..."
          />
          <input
            @click.prevent="checkEmail"
            type="submit"
            value="Go"
            class="btn"
          />
        </div>
        <span class="text-DarkGrayishBlue max-lg:hidden"
          >Copyright 2020. All Right Reserved</span
        >
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const primaryLinks = ref(["home", "Pricing", "Products", "About Us"])
const secondaryLinks = ref(["Careers", "Community", "Privacy Policy"])
const emailInput = ref("")

const checkEmail = () => {
  if (emailInput.value.indexOf("@") < 0) {
    emailInput.value = "Please Input Correct Email"
  } else {
    emailInput.value = "Your Email has been set"
  }
}
</script>

<style scoped></style>
