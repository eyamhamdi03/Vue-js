<script setup>
import JobCard from '../common/Job-card.vue'
import { defineProps, onMounted, reactive } from 'vue'
import axios from 'axios'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
defineProps({
  limit: { type: Number },
  showButton: { type: Boolean, default: false },
})
const state = reactive({
  jobs: [],
  isLoading: true,
})

onMounted(async () => {
  try {
    const response = await axios.get('/api/jobs')
    state.jobs = response.data
  } catch (error) {
    console.error('Error fetching jobs:', error)
  } finally {
    state.isLoading = false
  }
})
</script>
<template>
  <section class="bg-blue-50 px-8 py-10">
    <div class="container-xl lg:container m-auto">
      <div v-if="state.isLoading" class="flex justify-center py-20 text-center">
        <PulseLoader />
      </div>
      <div v-else>
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
        <div class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
          <JobCard
            v-for="job of state.jobs.slice(0, limit || state.jobs.length)"
            :key="job.id"
            :job="job"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="m-auto max-w-md my-10 px-6">
    <RouterLink
      v-if="showButton"
      to="/jobs"
      class="w-full block bg-black hover:opacity-80 text-white text-center px-4 py-2 rounded-lg"
    >
      View All Jobs
    </RouterLink>
  </section>
</template>
