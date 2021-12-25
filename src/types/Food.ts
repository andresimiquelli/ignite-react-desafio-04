export type apiFood = {
    id: number;
    name: string;
    description: string;
    price: number;
    available: boolean;
    image: string;
}

export interface FoodFormData {
    image: string;
    name: string;
    price: number;
    description: string;
  }