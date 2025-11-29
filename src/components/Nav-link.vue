<script setup>
defineProps({
  text: String,
  href: String,
  isActive: Boolean,
})
</script>

<template>
  <a :href="href" class="relative rounded-md px-3 py-2 transition-colors">
    <span
      class="pb-1 border-b-3 border-transparent border-raduis-md hover:border-white transition-all text-white"
      :class="isActive ? 'border-white font-bold ' : 'font-normal'"
    >
      {{ text }}
    </span>
  </a>
</template>
