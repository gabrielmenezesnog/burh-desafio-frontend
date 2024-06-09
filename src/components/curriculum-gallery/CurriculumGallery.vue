<script setup lang="ts">
import CurriculumPreview from "../curriculum-preview/CurriculumPreview.vue";
import { onMounted, ref } from "vue";
import { api } from "../../api";
import { iFormValues } from "../../interfaces/iFormValues";

const formsArray = ref<iFormValues[]>();

onMounted(async () => {
  await fetchForms();
});

const fetchForms = async () => {
  try {
    await api.get(`/curriculum`).then((res) => (formsArray.value = res.data));
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <section aria-label="currículos gerados">
    <h1 v-if="formsArray && formsArray.length === 0" class="empty--gallery">
      Você ainda não possui nenhum currículo. Crie um agora!
    </h1>

    <ul class="curriculum--gallery">
      <li
        v-if="formsArray && formsArray.length > 0"
        v-for="(form, index) in formsArray"
        :key="index"
        class="gallery--item"
      >
        <CurriculumPreview :formValues="form" @formDeleted="fetchForms" />
      </li>
    </ul>
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

.curriculum--gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 60px;
}

.gallery--item {
  z-index: 0;
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
