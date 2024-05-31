<script setup lang="ts">
import { ref, defineEmits } from "vue";

const searchQuery = ref("");
const emit = defineEmits(["update:search"]);

const updateSearch = () => {
  emit("update:search", searchQuery.value);
};
</script>

<template>
  <UInput
    v-model="searchQuery"
    color="primary"
    variant="outline"
    placeholder="Search by type"
    @input="updateSearch"
  />
</template>

<style scoped>
input {
  margin-bottom: 1em;
  padding: 0.5em;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
}
</style>
