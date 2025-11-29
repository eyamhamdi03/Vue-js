<script setup>
defineProps({
  text: String,
  href: String,
  isActive: Boolean,
})
</script>

<template>
  <a
    :href="href"
    :class="[
      'rounded-md px-3 py-2 transition-colors',
      isActive ? 'text-green-900' : 'text-white hover:text-green-900',
    ]"
  >
    {{ text }}
  </a>
</template>
