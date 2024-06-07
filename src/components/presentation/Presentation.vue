<script setup lang="ts">
import ButtonPrimary from "../button-primary/ButtonPrimary.vue";
import "./style.scss";

defineProps();
</script>

<template>
  <div class="logo-box">
    <div class="container">
      <div class="section-container">
        <div class="mobile-container">
          <h1 class="title">
            personalize<span class="title-emphasis">.me</span>
          </h1>

          <div class="slogan">
            <div class="separator-horizontal" />
            <h2 class="slogan-title">seu currículo personalizado</h2>
          </div>
        </div>

        <div class="button-box">
          <ButtonPrimary label="começar" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
