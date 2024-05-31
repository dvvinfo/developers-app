import type { IDeveloper } from "@/types/developer";

export const useFetchDevelopers = async (): Promise<IDeveloper[]> => {
  return await $fetch("https://kalinka.phuket.forsale/objects");
};
