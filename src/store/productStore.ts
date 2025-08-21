import { create } from "zustand";
import api from "@/services/api";

export interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    thumbnail: string;
}

interface ProductState {
    products: Product[];
    isLoading: boolean;
    error: string | null;
    fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
    products: [],
    isLoading: false,
    error: null,
    fetchProducts: async () => {
        try {
            set({ isLoading: true, error: null });
            const res = await api.get("/products?limit=12");
            set({ products: res.data.products, isLoading: false });
        } catch (err) {
            set({
                error: `Ошибка загрузки ${err}, попробуйте еще раз`,
                isLoading: false,
            });
        }
    },
}));
