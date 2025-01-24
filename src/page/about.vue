<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
       <Navbar />
      <header class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div class="container mx-auto px-4 py-16 md:py-24">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-center">About Our Company</h1>
          <p class="text-xl md:text-2xl text-center max-w-3xl mx-auto">
            Innovating the future, one line of code at a time.
          </p>
        </div>
      </header>
  
      <!-- Main Content -->
      <main class="container mx-auto px-4 py-12">
        <!-- Company Overview -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">Who We Are</h2>
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="md:w-1/2">
              <p class="text-lg text-gray-600 mb-4">
                Founded in 2023, our company is at the forefront of innovation in the tech industry. We believe in creating products that not only solve problems but also inspire and delight our users.
              </p>
              <p class="text-lg text-gray-600">
                With a team of passionate experts from diverse backgrounds, we're committed to pushing the boundaries of what's possible in software development and user experience design.
              </p>
            </div>
            <div class="md:w-1/2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrh1VbcM0KL74qWeHJjrF91a611gojRD0bz6dvuGLkjAaNtFBse4fkWEvvfTy3R9bVAw&usqp=CAU" alt="Team collaboration" class="rounded-lg shadow-lg w-full h-auto" />
            </div>
          </div>
        </section>
  
        <!-- Mission Statement -->
        <section class="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">Our Mission</h2>
          <p class="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            To empower individuals and businesses through innovative technology solutions that simplify complex problems and enhance everyday experiences.
          </p>
        </section>
  
        <!-- Team Members -->
        <section>
          <h2 class="text-3xl font-bold mb-8 text-center text-gray-800">Meet Our Team</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="member in teamMembers" :key="member.id" class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
              <img :src="member.image" :alt="member.name" class="w-full h-48 object-cover" />
              <div class="p-4">
                <h3 class="text-xl font-semibold text-gray-800 mb-1">{{ member.name }}</h3>
                <p class="text-gray-600">{{ member.role }}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
  
      <!-- Footer -->
      <footer class="bg-gray-800 text-white py-8 mt-12">
        <div class="container mx-auto px-4 text-center">
          <p>&copy; {{ currentYear }} Our Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import Navbar from '@/components/navbar.vue';
import { ref, computed } from 'vue';
  
  const teamMembers = ref([
    { id: 1, name: 'Jane Doe', role: 'CEO & Founder', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrh1VbcM0KL74qWeHJjrF91a611gojRD0bz6dvuGLkjAaNtFBse4fkWEvvfTy3R9bVAw&usqp=CAU' },
    { id: 2, name: 'John Smith', role: 'CTO', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrh1VbcM0KL74qWeHJjrF91a611gojRD0bz6dvuGLkjAaNtFBse4fkWEvvfTy3R9bVAw&usqp=CAU' },
    { id: 3, name: 'Emily Johnson', role: 'Lead Designer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrh1VbcM0KL74qWeHJjrF91a611gojRD0bz6dvuGLkjAaNtFBse4fkWEvvfTy3R9bVAw&usqp=CAU' },
    { id: 4, name: 'Michael Brown', role: 'Senior Developer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrh1VbcM0KL74qWeHJjrF91a611gojRD0bz6dvuGLkjAaNtFBse4fkWEvvfTy3R9bVAw&usqp=CAU' },
    { id: 5, name: 'Sarah Lee', role: 'Marketing Director', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrh1VbcM0KL74qWeHJjrF91a611gojRD0bz6dvuGLkjAaNtFBse4fkWEvvfTy3R9bVAw&usqp=CAU' },
    { id: 6, name: 'David Wilson', role: 'Product Manager', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrh1VbcM0KL74qWeHJjrF91a611gojRD0bz6dvuGLkjAaNtFBse4fkWEvvfTy3R9bVAw&usqp=CAU' },
  ]);
  
  const currentYear = computed(() => new Date().getFullYear());
  </script>