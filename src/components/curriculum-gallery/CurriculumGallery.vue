<script setup lang="ts"></script>

<template>
  <section aria-label="currículos gerados">
    <h1 class="empty--gallery">
      Você ainda não possui nenhum currículo. Crie um agora!
    </h1>
  </section>
</template>

<style lang="scss" scoped>
.empty--gallery {
  margin-top: 80px;
  font-size: 1.25rem;
  font-weight: 400;
  color: #595959;
  line-height: calc(1.5rem * 1.5);
}

@media (max-width: 768px) {
  .empty--gallery {
    margin-top: 60px;
    font-size: 0.875rem;
    color: #595959;
    line-height: calc(1rem * 1.5);
  }
}
</style>
