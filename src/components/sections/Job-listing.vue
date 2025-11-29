<script setup>
import jobData from '@/jobs.json'
import JobCard from '../common/Job-card.vue'
import { ref } from 'vue'

const jobs = ref(jobData)
console.log(jobs.value)
</script>
<template>
  <section class="bg-blue-50 px-8 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
      <div class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
        <JobCard v-for="job of jobs" :key="job.id" :job="job" />
      </div>
    </div>
  </section>
</template>
