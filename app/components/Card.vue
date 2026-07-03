<script lang="ts" setup>

</script>

<template>
  <div class="card bg-base-100 w-96 shadow-sm">
    <slot name="image">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        >
      </figure>
    </slot>

    <div class="card-body">
      <h2 class="card-title">
        <slot name="title">
          Card Title
        </slot>
      </h2>
      <slot>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      </slot>
    </div>
  </div>
</template>
