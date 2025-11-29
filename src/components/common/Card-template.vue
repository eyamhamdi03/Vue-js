<script setup>
defineProps({
  title: {
    type: String,
    default: 'For Developers',
  },
  content: {
    type: String,
    default: 'Browse our Vue jobs and start your career today',
  },
  button: {
    type: String,
    default: 'Browse Jobs',
  },
})
</script>

<template>
  <div class="p-6 rounded-lg shadow-md bg-gray-200">
    <h2 class="text-2xl font-bold">{{ title }}</h2>
    <p class="mt-2 mb-4">{{ content }}</p>
    <div class="flex justify-end">
      <a
        href="jobs.html"
        class="inline-block text-white rounded-lg px-4 py-2 hover:opacity-80 bg-gray-900"
      >
        {{ button }}
      </a>
    </div>
  </div>
</template>
