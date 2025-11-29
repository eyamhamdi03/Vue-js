<script setup>
import jobData from '@/jobs.json'
import JobCard from '../common/Job-card.vue'
import { ref } from 'vue'

const jobs = ref(jobData)
defineProps({
  limit: { type: Number, default: 3 },
  showButton: { type: Boolean, default: false },
})
</script>
<template>
  <section class="bg-blue-50 px-8 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
      <div class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
        <JobCard v-for="job of jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>
  <section class="m-auto max-w-md my-10 px-6">
    <a
      v-if="showButton"
      href="jobs.html"
      class="w-full block bg-black hover:opacity-80 text-white text-center px-4 py-2 rounded-lg"
    >
      View All Jobs
    </a>
  </section>
</template>
