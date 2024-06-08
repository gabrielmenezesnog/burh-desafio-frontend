<script setup lang="ts">
import SectionTitle from "../../components/form/section-title/SectionTitle.vue";
import TextInput from "../../components/form/input/TextInput.vue";
import SelectInput from "../../components/form/select/SelectInput.vue";
import TextArea from "../../components/form/input/TextArea.vue";
import ButtonPrimary from "../../components/button-primary/ButtonPrimary.vue";
</script>

<template>
  <section aria-label="editar currículo" class="container--background">
    <div class="container container--form">
      <section aria-label="Dados pessoais" class="section">
        <SectionTitle title="DADOS PESSOAIS" />

        <div class="container--form-grid">
          <TextInput
            label="Nome"
            type="text"
            reference="name"
            placeholder="seu nome"
          />
          <TextInput
            label="Sobrenome"
            type="text"
            reference="lastName"
            placeholder="seu sobrenome"
          />
        </div>

        <div class="container--form-grid">
          <TextInput
            label="Email"
            type="email"
            reference="email"
            placeholder="email@contato.com"
          />
          <TextInput
            label="Telefone"
            type="tel"
            reference="tel"
            placeholder="00 00000-0000"
          />
        </div>

        <div class="container--form-grid--triple">
          <TextInput
            label="Data de nascimento"
            type="date"
            reference="date"
            placeholder="dd/mm/aaaa"
          />
          <SelectInput label="Sexo" type="sexo" reference="sexo" />
          <SelectInput label="Estado Civil" type="civil" reference="civil" />
        </div>
      </section>

      <section aria-label="Endereço" class="section">
        <SectionTitle title="ENDEREÇO" />

        <div class="container--form-grid">
          <TextInput
            label="CEP"
            type="text"
            reference="cep"
            placeholder="00000-000"
          />
          <TextInput
            label="Logradouro"
            type="text"
            reference="street"
            placeholder="nome da rua"
          />
        </div>

        <div class="container--form-grid">
          <TextInput
            label="Número"
            type="number"
            reference="number"
            placeholder="0000"
          />
          <TextInput
            label="Bairro"
            type="text"
            reference="neighborhood"
            placeholder="nome do bairro"
          />
        </div>

        <div class="container--form-grid">
          <TextInput
            label="Cidade"
            type="text"
            reference="city"
            placeholder="nome da cidade"
          />
          <TextInput
            label="Estado"
            type="text"
            reference="state"
            placeholder="nome do estado"
          />
        </div>
      </section>

      <section aria-label="Profissional" class="section">
        <SectionTitle title="PROFISSIONAL" />

        <div class="container--form-grid">
          <TextInput
            label="Cargo desejado ou atual"
            type="text"
            reference="office"
            placeholder="exemplo: Desenvolvedor front-end"
          />
          <TextInput
            label="Tempo de experiêcia"
            type="number"
            reference="xp"
            placeholder="experiência em anos"
          />
        </div>

        <TextArea
          label="Sobre você"
          type="text"
          reference="office"
          placeholder="Conte um pouco sobre você e o seu histórico e perfil profissional "
        />
        <TextArea
          label="Habilidades"
          type="text"
          reference="habilities"
          placeholder="Separe as habilidades com vírgula, exemplo: Excel, Word, UI Design, Javascript, etc.."
        />
        <TextArea
          label="Idiomas"
          type="text"
          reference="languages"
          placeholder="Separe os idiomas com vírgula, exemplo: inglês avançado, espanhol intermediário, etc..."
        />
      </section>

      <div class="button--container">
        <ButtonPrimary label="finalizar" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container--background {
  background: #111;
  padding: 1.25rem;
}

.container--form {
  background-color: #fff;
  border-radius: 5px;
  padding: 3.75rem;
}

.title--section--form {
  color: #111;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 4px;
  line-height: 1.5 * 1.5;
}

.container--form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  align-items: center;
  gap: 40px;
}

.container--form-grid--triple {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  align-items: center;
  gap: 40px;
}

.section {
  margin-bottom: 60px;
}

.button--container {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 500px) {
  .container--form {
    padding: 1rem;
  }

  .container--form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    align-items: center;
    gap: 0px;
  }

  .container--form-grid--triple {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    align-items: center;
    gap: 0px;
  }

  .button--container {
    width: 100%;
  }
}
</style>
