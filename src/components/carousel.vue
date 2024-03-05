<template>
  <Swiper
    :slides-per-view="1"
    :space-between="300"
    :loop="true"
    :modules="modules"
    :pagination="{ clickable: true }"
    :breakpoints="{
      1024: {
        slidesPerView: 3,
        modules: modules,
      },
    }"
    navigation
    class="flex justify-around w-full gap-6 !p-10 max-lg:flex-col"
  >
    <swiper-slide
      v-for="items in testimonials"
      class="!flex !flex-col !items-center !overflow-visible gap-4 p-6 bg-VaryLightGray"
    >
      <img
        :src="`/img/avatar-` + items.img + `.png`"
        class="object-contain -mt-14 size-14"
        alt=""
      />
      <h3 class="text-xl">{{ items.name }}</h3>
      <p class="max-w-sm text-center text-DarkGrayishBlue">
        "{{ items.Description }}"
      </p>
    </swiper-slide>
  </Swiper>
</template>

<script setup lang="ts">
import { ref } from "vue"
// import Swiper core and required modules
import { Pagination } from "swiper/modules"

// Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue"
import "swiper/css"
import "swiper/css/pagination"
const modules = [Pagination]
const testimonials = ref([
  {
    img: "anisha",
    name: "Anisha Li",
    Description:
      "Has Supercharged our team's workflow. the maintain visibility on larger milesstones at all times keeps everyone motivated",
  },
  {
    img: "ali",
    name: "Ali Bravo",
    Description:
      "We have been able to cancel so many other subscriptions since using manage. there is no more cross-channel confusion and everyone is much more focused",
  },
  {
    img: "richard",
    name: "Richard Watts",
    Description:
      "Manage allows us to provide structure and product keep us organized and focused. i cant't stop reconeect with them to everyone i talk to!",
  },
])
</script>

<style scoped></style>
