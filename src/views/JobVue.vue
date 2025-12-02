<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { useToast } from 'vue-toastification'

const route = useRoute()
const router = useRouter()
const jobId = route.params.id
const toast = useToast();
const state = reactive({
  isLoading: true,
  error: false,
  job: {}
})

onMounted(async () => {
  try {
    const response = await fetch(`/api/jobs/${jobId}`)
    state.job = await response.json()
  } catch (err) {
    console.error("Error fetching job:", err)
    state.error = true
  } finally {
    state.isLoading = false
  }
})

const deleteJob = async () => {
  if (!confirm("Are you sure you want to delete this job?")) return
  try {
    await axios.delete(`/api/jobs/${jobId}`);
    toast.success('Job deleted successfully!');
    router.push("/jobs")
  }
  catch (error) {
    toast.error('Error deleting job:', error)
  }
}
</script>

<template>
  <div v-if="state.isLoading" class="flex justify-center py-20">
    <PulseLoader />
  </div>

  <div v-else-if="state.error" class="text-center text-red-600 py-20 text-lg">
    Failed to fetch job details.
  </div>

  <!-- MAIN CONTENT -->
  <section v-else class="bg-green-50 mx-auto py-6 px-4 max-w-5xl">
    <!-- Back Button -->
    <RouterLink to="/jobs" class="flex items-center gap-2 text-green-600 hover:text-green-700 mb-4">
      <i class="pi pi-arrow-left text-lg"></i>
      Back to Job Listings
    </RouterLink>

    <!-- Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6">

      <!-- MAIN CONTENT -->
      <main>
        <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
          <div class="text-gray-500 mb-2">{{ state.job.type }}</div>

          <h1 class="text-3xl font-bold mb-4">{{ state.job.title }}</h1>

          <div class="text-gray-500 mb-4 flex items-center justify-center md:justify-start gap-2">
            <i class="pi pi-map-marker text-orange-700 text-xl"></i>
            <span class="text-orange-700">{{ state.job.location }}</span>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 class="text-green-800 text-lg font-bold mb-4">Job Description</h3>

          <p class="mb-6">{{ state.job.description }}</p>

          <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>
          <p class="mb-4">{{ state.job.salary }}</p>
        </div>
      </main>

      <!-- SIDEBAR -->
      <aside>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-6">Company Info</h3>

          <h2 class="text-2xl font-semibold">
            {{ state.job.company?.name }}
          </h2>

          <p class="my-2">{{ state.job.company?.description }}</p>

          <hr class="my-4" />

          <h3 class="text-xl">Contact Email:</h3>
          <p class="my-2 bg-green-100 p-2 rounded-md font-bold">
            {{ state.job.company?.contactEmail }}
          </p>

          <h3 class="text-xl">Contact Phone:</h3>
          <p class="my-2 bg-green-100 p-2 rounded-md font-bold">
            {{ state.job.company?.contactPhone }}
          </p>
        </div>

        <!-- Manage -->
        <div class="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 class="text-xl font-bold mb-6">Manage Job</h3>

          <div class="grid grid-cols-2 gap-3">
            <!-- Edit Button -->
            <RouterLink :to="`/jobs/${jobId}/edit`"
              class="flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-semibold">
              <i class="pi pi-pencil"></i>
              Edit
            </RouterLink>

            <!-- Delete Button -->
            <button @click="deleteJob"
              class="flex justify-center items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold">
              <i class="pi pi-trash"></i>
              Delete
            </button>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>
