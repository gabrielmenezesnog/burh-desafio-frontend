<script setup lang="ts">
import { computed, ref } from "vue";

defineProps<{
  label: string;
  placeholder?: string;
  type: string;
  reference: string;
  modelValue?: string;
}>();
const textAreaValue = ref("");
const maxLength = 600;
const remainingChars = computed(() => maxLength - textAreaValue.value.length);

const emit = defineEmits(["update:modelValue"]);
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <div class="container--input">
    <label :for="reference">{{ label }}</label>
    <textarea
      v-model="textAreaValue"
      :name="reference"
      :id="reference"
      :maxlength="maxLength"
      :placeholder="placeholder"
      @input="onInput"
    ></textarea>
    <div class="char-count">{{ remainingChars }} caracteres restantes</div>
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

textarea {
  resize: none;
  border: 1px solid #ededed;
  border-radius: 5px;
  background: #f7f7f7;
  width: 100%;
  font-size: 1rem;
  color: #717171;
  transition: border-color 0.3s;
  padding: 20px;
  box-sizing: border-box;
  min-height: 200px;
}

textarea:focus {
  outline: 0;
  border: 1px solid #ffbb00;
}

textarea::placeholder {
  color: #b2b2b2;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
}

.char-count {
  font-size: 0.8rem;
  color: #999;
  text-align: right;
  margin-top: 4px;
}

@media (max-width: 500px) {
  textarea::placeholder {
    color: #b2b2b2;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
  }
}
</style>
