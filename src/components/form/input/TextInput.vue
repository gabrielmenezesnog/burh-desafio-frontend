<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  label: string;
  placeholder?: string;
  reference: string;
}>();

const type = ref("text");
const date = ref("");
</script>

<template>
  <div class="container--input">
    <label :for="reference">{{ label }}</label>
    <input
      v-model="date"
      @focus="type = 'date'"
      @blur="type = 'text'"
      :type="type"
      :name="reference"
      :id="reference"
      :maxlength="60"
      :placeholder="placeholder"
    />
  </div>
</template>

<style lang="scss" scoped>
.container--input {
  margin-bottom: 32px;
}

label {
  display: block;
  font: 1rem;
  color: #404040;
  margin-bottom: 0.75rem;
  font-weight: 500;
}

input {
  position: relative;
  border: 1px solid #ededed;
  border-radius: 5px;
  background: #f7f7f7;
  width: 100%;
  font-size: 1rem;
  color: #717171;
  transition: border-color 0.3s;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}

input:focus {
  outline: 0;
  border: 1px solid #ffbb00;
}

input::placeholder {
  color: #b2b2b2;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
}

@media (max-width: 500px) {
  .container--input {
    margin-bottom: 20px;
  }

  input {
    position: relative;
    border: 1px solid #ededed;
    border-radius: 5px;
    background: #f7f7f7;
    width: 100%;
    font-size: 1rem;
    color: #717171;
    transition: border-color 0.3s;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    appearance: none;
  }

  input::placeholder {
    color: #b2b2b2;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
  }
}
</style>
