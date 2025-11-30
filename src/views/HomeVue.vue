<script setup>
import HeroSection from '@/components/sections/Hero-section.vue'
import CardsSection from '@/components/sections/Cards-section.vue'
import JobListing from '@/components/sections/Job-listing.vue'
</script>
<template>
  <HeroSection />
  <CardsSection />
  <JobListing :limit="3" :showButton="true" />
</template>
