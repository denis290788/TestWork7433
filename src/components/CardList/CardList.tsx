"use client";

import { useEffect } from "react";
import { useProductStore } from "@/store/productStore";
import Card from "../Card/Card";
import styles from "./CardList.module.scss";

export default function CardList() {
    const { products, fetchProducts, isLoading, error } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className={styles.cardList}>
            {products.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
}
