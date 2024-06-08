<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<template>
  <div class="button--primary">
    <h1 class="button--primary--label">{{ label }}</h1>
  </div>
</template>

<style lang="scss"></style>
