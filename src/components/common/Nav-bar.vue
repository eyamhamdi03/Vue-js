<script setup>
import logo from '@/assets/images/logo.png'
import { RouterLink, useRoute } from 'vue-router'

const links = [
  { text: 'Home', href: '/' },
  { text: 'Jobs', href: '/jobs' },
  { text: 'Add Job', href: '/add-job' },
]

const route = useRoute()
const isActiveLink = (path) => route.path === path
</script>

<template>
  <nav class="bg-green-700 border-b border-green-600 px-4 py-0 mx-6 my-4 rounded-xl shadow-md">
    <div class="mx-auto max-w-7xl py-0 px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <RouterLink to="/" class="flex items-center mr-4">
          <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
          <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
        </RouterLink>
        <div class="flex space-x-2 md:ml-auto">
          <RouterLink
            v-for="link in links"
            :key="link.text"
            :to="link.href"
            class="relative rounded-md px-3 transition-colors"
          >
            <span
              :class="
                isActiveLink(link.href)
                  ? 'border-b-2 border-white font-bold'
                  : 'border-b-2 border-transparent font-normal'
              "
              class="pb-1 transition-all text-white"
            >
              {{ link.text }}
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
