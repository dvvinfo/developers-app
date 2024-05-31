interface IDeveloper {
    id: number;
    title: { ru: string; en: string };
    description: { ru: string; en: string };
    type: string[];
    images: string[];
    price: string;
  }

  export type { IDeveloper };