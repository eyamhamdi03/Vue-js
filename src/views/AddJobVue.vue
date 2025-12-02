<script setup>
import axios from 'axios'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()


const form = reactive({
    type: 'Full-Time',
    name: '',
    description: '',
    salary: '',
    location: '',
    company: {
        name: '',
        description: '',
        contact_email: '',
        contact_phone: ''
    }
})

const types = [
    "Full-Time",
    "Part-Time",
    "Remote",
    "Internship"
]
const salaries = [
    "Under $50K",
    "$50K - $60K",
    "$60K - $70K",
    "$70K - $80K",
    "$80K - $90K",
    "$90K - $100K",
    "$100K - $125K",
    "$125K - $150K",
    "$150K - $175K",
    "$175K - $200K",
    "Over $200K"
]
const handleSubmit = async () => {
    const newJob = {
        type: form.type,
        name: form.name,
        description: form.description,
        salary: form.salary,
        location: form.location,
        company: {
            name: form.company.name,
            description: form.company.description,
            contact_email: form.company.contact_email,
            contact_phone: form.company.contact_phone
        }
    }
    try {
        const respone = await axios.post('/api/jobs', newJob);
        // TODO: add toast
        router.push(`/jobs/${respone.data.id}`);
    } catch (error) {
        console.error('Error adding job:', error)
        alert('Failed to add job. Please try again.')
    }
} 
</script>

<template>
    <section class="bg-green-50">
        <div class="container m-auto max-w-2xl py-24">
            <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md m-4 md:m-0">
                <form @submit.prevent="handleSubmit">
                    <h2 class="text-3xl text-center font-semibold mb-6">Add Job</h2>

                    <div class="mb-4">
                        <label for="type" class="block text-gray-700 font-bold mb-2">Job Type</label>
                        <select v-model="form.type" id="type" name="type"
                            class="border border-gray-300 rounded w-full py-2 px-3" required>
                            <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
                        </select>
                    </div>

                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2">Job Listing Name</label>
                        <input v-model="form.name" type="text" id="name" name="name"
                            class="border border-gray-300 rounded w-full py-2 px-3 mb-2"
                            placeholder="eg. Beautiful Apartment In Miami" required />
                    </div>

                    <div class="mb-4">
                        <label for="description" class="block text-gray-700 font-bold mb-2">Description</label>
                        <textarea v-model="form.description" id="description" name="description"
                            class="border border-gray-300 rounded w-full py-2 px-3" rows="4"
                            placeholder="Add any job duties, expectations, requirements, etc"></textarea>
                    </div>

                    <div class="mb-4">
                        <label for="salary" class="block text-gray-700 font-bold mb-2">Salary</label>
                        <select id="salary" name="salary" v-model="form.salary"
                            class="border border-gray-300 rounded w-full py-2 px-3" required>
                            <option v-for="salary in salaries" :key="salary" :value="salary">{{ salary }}</option>
                        </select>
                    </div>

                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2">Location</label>
                        <input type="text" v-model="form.location" id="location" name="location"
                            class="border border-gray-300 rounded w-full py-2 px-3 mb-2" placeholder="Company Location"
                            required />
                    </div>

                    <h3 class="text-2xl mb-5">Company Info</h3>

                    <div class="mb-4">
                        <label for="company" class="block text-gray-700 font-bold mb-2">Company Name</label>
                        <input v-model="form.company.name" type="text" id="company" name="company"
                            class="border border-gray-300 rounded w-full py-2 px-3" placeholder="Company Name" />
                    </div>

                    <div class="mb-4">
                        <label for="company_description" class="block text-gray-700 font-bold mb-2">Company
                            Description</label>
                        <textarea v-model="form.company.description" id="company_description" name="company_description"
                            class="border border-gray-300 rounded w-full py-2 px-3" rows="4"
                            placeholder="What does your company do?"></textarea>
                    </div>

                    <div class="mb-4">
                        <label for="contact_email" class="block text-gray-700 font-bold mb-2">Contact Email</label>
                        <input type="email" id="contact_email" v-model="form.company.contact_email" name="contact_email"
                            class="border border-gray-300 rounded w-full py-2 px-3"
                            placeholder="Email address for applicants" required />
                    </div>

                    <div class="mb-4">
                        <label for="contact_phone" class="block text-gray-700 font-bold mb-2">Contact Phone</label>
                        <input type="tel" v-model="form.company.contact_phone" id="contact_phone" name="contact_phone"
                            class="border border-gray-300 rounded w-full py-2 px-3"
                            placeholder="Optional phone for applicants" />
                    </div>

                    <div>
                        <button
                            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                            type="submit">
                            Add Job
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </section>
</template>
