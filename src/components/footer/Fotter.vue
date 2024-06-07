<script setup lang="ts"></script>

<template>
  <div class="container-footer">
    <div class="container relative grid">
      <h1 class="logo-title">personailze.me</h1>
      <ul>
        <h1 class="contact-label">Contato</h1>
        <li>+55 41 99992-3767</li>
        <li>gabriel.gmnogueira@gmail.com</li>
        <li>Curitiba - PR</li>
      </ul>

      <p class="extra-label">
        Desenvolvido com carinho por Gabriel de Menezes Nogueira.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$font-size-base: 1rem;
$font-weight-base: 500;
$margin-bottom-base: 20px;
$margin-top-base: 40px;
$color-base: #fff;
$color-secondary: #9c9c9c;
$color-extra: #ccc;

@mixin font-properties($size, $weight, $color) {
  font-size: $size;
  font-weight: $weight;
  color: $color;
}

.container-footer {
  background: #000;
  height: 240px;
  margin-top: 320px;
  color: $color-base;
  padding: 40px;
}

.logo-title {
  @include font-properties(1.5rem, $font-weight-base, $color-base);
}

.contact-label {
  @include font-properties(1.25rem, $font-weight-base, $color-base);
  margin-bottom: $margin-bottom-base;
}

ul li {
  @include font-properties($font-size-base, 400, $color-secondary);
  margin-bottom: 12px;
}

.grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.extra-label {
  @include font-properties($font-size-base, 400, $color-extra);
  margin-top: $margin-top-base;
}

@media (max-width: 768px) {
  .container-footer {
    height: 340px;
    margin-top: 120px;
  }

  .logo-title {
    margin-bottom: $margin-bottom-base;
  }

  .extra-label {
    margin-bottom: $margin-bottom-base;
  }

  ul {
    margin-bottom: 12px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
