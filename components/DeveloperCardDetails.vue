<script setup lang="ts">
import type { IDeveloper } from "~/types/developer";

const props = defineProps<{
  developer: IDeveloper;
}>();

const { developer } = props;
</script>

<template>
  <UCard class="developer-card">
    <div class="developer-card__image mx-auto">
      <UCarousel
        v-slot="{ item }"
        :items="developer.images"
        :ui="{ item: 'basis-full sm:basis-1/2 lg:basis-1/3' }"
        class="rounded-lg overflow-hidden mx-auto"
        arrows
      >
        <img :src="item" class="w-full object-cover" draggable="false" />
      </UCarousel>
    </div>
    <h2 class="text-2xl font-bold my-2">{{ developer.title.ru }}</h2>
    <p v-html="developer.description.ru" class=""></p>
    <p class="my-2" v-for="(type, i) in developer.type" :key="i">
      <strong>Тип:</strong> {{ type }}
    </p>
    <p><strong>Цена:</strong> {{ developer.price }} руб.</p>
  </UCard>
</template>

<style scoped></style>
