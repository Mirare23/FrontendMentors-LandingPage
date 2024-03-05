<template>
  <nav class="container relative p-6 mx-auto">
    <!-- Flex container -->
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div class="pt-2">
        <img src="/img/logo.svg" alt="" />
      </div>
      <!-- Menu Items -->
      <div class="hidden space-x-6 md:flex">
        <a href="#" class="hover:text-darkGrayishBlue">Pricing</a>
        <a href="#" class="hover:text-darkGrayishBlue">Product</a>
        <a href="#" class="hover:text-darkGrayishBlue">About Us</a>
        <a href="#" class="hover:text-darkGrayishBlue">Careers</a>
        <a href="#" class="hover:text-darkGrayishBlue">Community</a>
      </div>
      <!-- Button -->
      <a
        href="#"
        class="hidden p-3 px-6 pt-2 text-white rounded-full bg-BrightRed baseline hover:bg-brightRedLight md:block"
        >Get Started</a
      >

      <!-- Hamburger Icon -->
      <button
        id="menu-btn"
        class="block hamburger md:hidden focus:outline-none"
      >
        <img src="/img/icon-hamburger.svg" alt="" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="md:hidden">
      <div
        id="menu"
        class="absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
      >
        <a href="#">Pricing</a>
        <a href="#">Product</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Community</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
