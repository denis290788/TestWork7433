"use client";

import { useAuthStore } from "@/store/authStore";
import { Product } from "@/store/productStore";
import styles from "./ProductCard.module.scss";
import Image from "next/image";

interface CardProps {
    product: Product;
}

export default function Card({ product }: CardProps) {
    const { isLoggedIn } = useAuthStore();

    return (
        <div className={styles.card}>
            <Image
                src={product.thumbnail}
                alt={product.title}
                width={150}
                height={150}
                style={{ objectFit: "cover" }}
                priority
            />
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>{product.price} $</p>
            {isLoggedIn && <button>Add to cart</button>}
        </div>
    );
}
