<template>
  <div class="flex gap-4 max-lg:flex-col">
    <class class="gap-4 max-lg:flex max-lg:bg-VeryPaleRed">
      <button class="px-4 py-2 text-white rounded-full bg-BrightRed">
        {{ Number }}
      </button>
      <h1 class="py-2 text-lg font-bold max-lg:text-sm text-DarkBlue lg:hidden">
        {{ Title }}
      </h1>
    </class>
    <class class="flex flex-col gap-3">
      <h1 class="hidden py-2 text-lg font-bold text-DarkBlue lg:block">
        {{ Title }}
      </h1>
      <p class="text-sm text-justify text-DarkGrayishBlue">
        {{ paragraph }}
      </p>
    </class>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  Number: string
  Title: string
  paragraph: string
}>()
</script>

<style scoped></style>
