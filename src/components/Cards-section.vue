<script setup>
import CardTemplate from '@/components/Card-template.vue'
</script>
<template>
  <section class="py-4">
    <div class="container-xl lg:container px-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <card-template
          title="For Developers"
          content="Browse our Vue jobs and start your career today"
          button=" Browse Jobs"
        />
        <card-template
          title="For Employers"
          content="Find the perfect Vue developer for your team"
          button=" Post a Job"
        />
      </div>
    </div>
  </section>
</template>
