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
.container-footer {
  background: #000;
  height: 240px;
  margin-top: 320px;
  color: #fff;
  padding: 40px;
}

.logo-title {
  font-size: 1.5rem;
  font-weight: 500;
}

.contact-label {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 20px;
}

ul li {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 12px;
  color: #9c9c9c;
}

.grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.extra-label {
  font-size: 1rem;
  font-weight: 400;
  margin-top: 40px;
  color: #ccc;
}

@media (max-width: 768px) {
  .container-footer {
    height: 340px;
  }

  .logo-title {
    margin-bottom: 40px;
  }

  .extra-label {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 40px;
    margin-bottom: 40px;
    color: #ccc;
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
