<script setup lang="ts">
const { data: post } = useFetch('/api/posts/comark-syntax-guide')

useSeoMeta({
  title: () => post.value?.title,
  description: () => post.value?.description,
})
</script>

<template>
  <div>Page: index</div>
  <article class="prose">
    <ComarkRenderer :tree="post.tree" />
  </article>
</template>

<style scoped></style>
