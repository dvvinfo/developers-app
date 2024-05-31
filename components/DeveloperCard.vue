<script setup lang="ts">
import type { IDeveloper } from "~/types/developer";

const props = defineProps<{
  developer: IDeveloper;
}>();

const { developer } = props;
</script>

<template>
  <UCard class="developer-card" v-if="developer">
    <NuxtLink :to="`/developer/${developer.id}`">
      <div class="developer-card__image mx-auto">
        <img
          class="w-100 h-100 lg:h-[450px] object-cover rounded mx-auto"
          :src="developer.images[0]"
          :alt="developer.title.ru"
        />
      </div>
      <h2 class="text-2xl font-bold my-2">{{ developer.title.ru }}</h2>
      <p v-html="developer.description.ru" class="line-clamp-3"></p>
      <p class="my-2" v-for="(type, i) in developer.type" :key="i">
        <strong>Тип:</strong> {{ type }}
      </p>
      <p><strong>Цена:</strong> {{ developer.price }} руб.</p>
    </NuxtLink>
  </UCard>
</template>

<style scoped></style>
