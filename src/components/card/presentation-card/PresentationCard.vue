<script setup lang="ts">
import "./style.scss";

defineProps<{ title: string; text: string; yellow?: boolean }>();
</script>

<template>
  <div
    :class="
      yellow
        ? 'card-container-t2 card-container-mobile'
        : 'card-container-t1 card-container-mobile'
    "
  >
    <div class="flex-row gap-20">
      <div
        :class="yellow ? 'separator-vertical-t2' : 'separator-vertical-t1'"
      />
      <h1 :class="yellow ? 'card-title-t2' : 'card-title-t1'">{{ title }}</h1>
    </div>
    <p :class="yellow ? 'card-text-t2' : 'card-text-t1'">{{ text }}</p>
  </div>
</template>

<style lang="scss"></style>
