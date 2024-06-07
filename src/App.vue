<script setup lang="ts">
import Presentation from "./components/presentation/Presentation.vue";
import PresentationCard from "./components/card/presentation-card/PresentationCard.vue";

import "./style.scss";
</script>

<template>
  <Presentation />

  <div class="relative">
    <div class="card-list flex-row gap-60">
      <PresentationCard
        title="currículos"
        text="Você é livre para escolher dentre os modelos de currículos e personalizá-los para serem seus!"
      />
      <PresentationCard
        title="facilidade"
        text="Nenhuma ferramenta adicional será necessária. Você preenche suas informações e entregamos seu currículo!"
      />
      <PresentationCard
        title="gratuito"
        text="A plataforma é 100% gratuita, e após receber seu currículo, você poderá baixá-lo para ser seu!"
        :yellow="true"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
