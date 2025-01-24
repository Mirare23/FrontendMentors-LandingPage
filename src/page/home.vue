<script setup lang="ts">
import navbar from "@/components/navbar.vue"
import DetailCard from "@/components/detailcard.vue"
import carousel from "@/components/carousel.vue"
import footered from "@/components/footer.vue"

const detailList = [
  {
    id: 1,
    Title: "Track Company-wide Progress",
    paragraph:
      "See how your day-to-day task fit into the wider vision. Go from tracking progress at the milestone level all the way done to the samallest of details. never lose sight of the bigger picture again",
  },
  {
    id: 2,
    Title: "Advanced built-in reports",
    paragraph:
      "Set internal delivery estimates and track progress toward company goals. our customisable dashboard helps you build out the reports you need to keep key stakeholders informed",
  },
  {
    id: 3,
    Title: "Everything you need in one place",
    paragraph:
      "Stop jumping you from one service to another to communicate, store files, track task and share documents. manage offers an all-in-one team productivity solution",
  },
]
</script>
<template>
    <main class="bg-white">
      <section
        class="bg-white lg:py-5 w-full bg-cover bg-right-top bg-[url('/img/bg-simplify-section-desktop.svg')]"
      >
        <navbar />
        <article class="container mx-auto grid grid-cols-2 max-lg:grid-cols-1">
          <div
            class="flex flex-col justify-center gap-8 mb-20 max-lg:order-2 max-lg:text-center max-lg:items-center"
          >
            <h1 class="font-bold text-7xl max-lg:text-3xl text-balance">
              Bring Everyone together to build better products.
            </h1>
            <p class="text-justify text-DarkGrayishBlue lg:w-1/2">
              Manage makes it simple for software teams to plan day-to-day task
              while keeping the larger team goals in view
            </p>
            <button class="w-1/4 btn grow-0 max-lg:w-3/4">Get Started</button>
          </div>
          <div class="flex justify-end max-lg:order-1">
            <img
              src="/img/illustration-intro.svg"
              class="object-contain w-full h-full"
              alt=""
            />
          </div>
        </article>
      </section>
      <section
        class="container mx-auto grid grid-cols-2 my-5 space-y-10 max-lg:grid-cols-1"
      >
        <div
          class="flex flex-col w-full gap-10 max-lg:mx-auto max-lg:max-w-72 max-lg:justify-center"
        >
          <h1 class="text-6xl font-bold max-lg:text-3xl max-lg:text-center">
            What's different about Manage?
          </h1>
          <p
            class="text-justify text-DarkGrayishBlue lg:w-1/2 max-lg:text-center"
          >
            Manage provides all the functionality your team needs, without the
            complexity. our software is tailor-made for modern digital product
            teams
          </p>
        </div>
  
        <div class="flex flex-col gap-4 max-lg:gap-10">
          <DetailCard
            v-for="list in detailList"
            :Number="`0` + list.id"
            :Title="list.Title"
            :paragraph="list.paragraph"
          />
        </div>
      </section>
      <section class="flex flex-col items-center gap-10 my-20">
        <h2 class="text-6xl font-bold max-lg:text-3xl">What they've said</h2>
        <carousel />
        <button class="btn">Get Started</button>
      </section>
      <section
        class="bg-BrightRed bg-[url('/img/bg-simplify-section-mobile.svg')] bg-no-repeat"
      >
        <div
          class="flex flex-col justify-center gap-5 px-5 py-20 max-lg:text-center max-lg:items-center lg:container mx-auto lg:flex-row lg:justify-between lg:py-20"
        >
          <h2 class="text-4xl font-semibold text-white">
            Simplify how your team <br class="hidden lg:block" />
            works today.
          </h2>
          <button
            class="px-6 py-4 text-sm font-bold bg-white rounded-full lg:px-10 lg:py-4 text-BrightRed lg:h-fit"
          >
            Get Started
          </button>
        </div>
      </section>
      <footered />
    </main>
  </template>
  
 
  
  <style scoped></style>
  