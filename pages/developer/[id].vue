<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import { useFetchDevelopers } from "@/composables/useFetchDevelopers";

import type { IDeveloper } from "~/types/developer";

const route = useRoute();
const developerId = route.params.id;
const developer = ref<IDeveloper | null>(null);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const developers = await useFetchDevelopers();
    developer.value =
      developers.find((d) => d.id === Number(developerId)) || null;
  } catch (err) {
    if (err instanceof Error) {
      error.value = err.message;
    } else {
      error.value = "Неизвестная ошибка";
    }
  }
});
</script>

<template>
  <div>
    <NuxtLink to="/" class="text-xl">Назад</NuxtLink>
  </div>
  <Skeleton v-if="!developer" class="mb-5" />
  <div class="mt-3" v-else>
    <h1 class="text-3xl mb-3">{{ developer.title.ru }}</h1>
    <DeveloperCardDetails :developer="developer" />
  </div>
</template>
