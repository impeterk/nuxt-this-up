<script setup lang="ts">
const active_theme = useCookie('__theme', { path: '/', maxAge: 60 * 60 * 24 * 365 })

const themes = [
  { name: 'system', icon: 'carbon:screen' },
  { name: 'black', icon: 'carbon:moon' },
  { name: 'lofi', icon: 'carbon:sun' },
]

useHead({
  htmlAttrs: {
    'data-theme': computed(() => active_theme.value || 'system'),
  },
})
</script>

<template>
  <div class="join ring-1 rounded overflow-hidden ring-accent">
    <button
      v-for="theme in themes"
      :key="theme.name"
      class="btn btn-square btn-sm join-item text-base " :class="[
        { 'btn-primary': theme.name === active_theme },
      ]"
      @click="active_theme = theme.name"
    >
      <Icon :name="theme.icon" />
    </button>
  </div>
</template>
