<script setup lang="ts">
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

<style lang="scss">
.card-list {
  position: relative;
  top: -80px;
  left: 20%;
  animation: slideUp 0.5s ease-in-out 0.5s;
  animation-fill-mode: backwards;
}

@media (max-width: 768px) {
  .card-container-mobile {
    margin-left: 12px;
    margin-right: 12px;
  }

  .card-list {
    top: -60px;
    left: 0px;
    position: inherit;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 0px;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .card-list::-webkit-scrollbar {
    display: none;
  }
}
</style>
