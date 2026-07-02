<script setup lang="ts"></script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="drawer" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content">
      <header class="navbar bg-base-200 w-full sticky top-0">
        <div class="navbar-start">
          <label
            for="drawer"
            class="btn btn-ghost btn-square flex-none lg:hidden"
          >
            <Icon
              name="carbon:menu"
              aria-label="open sidebar"
              class="text-xl"
            />
          </label>
        </div>
        <div class="navbar-center"></div>
        <div class="navbar-end">
          <div class="hidden lg:inline">
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main class="container pt-8">
        <slot />
      </main>
    </div>
    <div class="drawer-side bg-base-200 w-80">
      <button
        class="btn btn-ghost hover:bg-base-200 hover:border-base-200 hover:shadow-none btn-block text-xl py-8"
      >
        peterk.dev
      </button>
      <label
        for="drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu w-full p-4">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
