<script setup lang="ts">
import Card from '~/components/Card.vue'

const { data: post } = useFetch('/api/posts/comark-syntax-guide')

useSeoMeta({
  title: () => post.value?.title,
  description: () => post.value?.description,
})

const components = { card: Card }
</script>

<template>
  <div>Page: index</div>
  <article class="prose">
    <Comark :components>
      {{ post.content }}
    </Comark>
  </article>
</template>

<style scoped></style>
