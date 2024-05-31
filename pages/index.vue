<script setup lang="ts">
import { ref, computed } from "vue";
import { useFetchDevelopers } from "@/composables/useFetchDevelopers";
import type { IDeveloper } from "~/types/developer";

const developers = ref<IDeveloper[]>([]);
const search = ref("");
const page = ref(1);
const itemsPerPage = 8;
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    developers.value = await useFetchDevelopers();
  } catch (err) {
    if (err instanceof Error) {
      error.value = err.message;
    } else {
      error.value = "Неизвестная ошибка";
    }
  }
});

const filteredDevelopers = computed(() => {
  return (
    developers.value?.filter((developer) =>
      developer.type
        .join(", ")
        .toLowerCase()
        .includes(search.value.toLowerCase())
    ) || []
  );
});

const paginatedDevelopers = computed(() => {
  const start = (page.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredDevelopers.value.slice(start, end);
});

const updateSearch = (newSearch: string) => {
  search.value = newSearch;
  page.value = 1;
};
</script>

<template>
  <div>
    <h1 class="text-3xl">Застройщики</h1>
    <Skeleton v-if="!developers.length" class="mt-5" />
    <div v-else-if="error" class="mt-5 text-red-500">
      Ошибка при загрузке данных: {{ error }}
    </div>
    <div v-else>
      <SearchInput @update:search="updateSearch" class="mt-3" />
      <div class="developers">
        <DeveloperCard
          v-for="developer in paginatedDevelopers"
          :key="developer.id"
          :developer="developer"
        />
      </div>
    </div>
    <div class="flex justify-center mt-5" v-if="developers.length">
      <UPagination
        v-model="page"
        :page-count="itemsPerPage"
        :total="developers.length"
      />
    </div>
  </div>
</template>

<style scoped>
.developers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 1.5em;
  padding-top: 1.5rem;
}
</style>
