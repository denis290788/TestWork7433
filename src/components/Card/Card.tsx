"use client";

import { useAuthStore } from "@/store/authStore";
import { Product } from "@/store/productStore";
import styles from "./Card.module.scss";
import Image from "next/image";

interface CardProps {
    product: Product;
}

export default function Card({ product }: CardProps) {
    const { isLoggedIn } = useAuthStore();

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.cardImage}
                    src={product.thumbnail}
                    alt={product.title}
                    width={150}
                    height={150}
                    style={{ objectFit: "cover" }}
                    priority
                />
            </div>

            <div className={styles.cardContainer}>
                <div className={styles.cardTitle}>
                    <p>{product.title}</p>
                </div>

                <p className={styles.cardCategory}>{product.category}</p>
                <div className={styles.cardPayContainer}>
                    <p>{product.price} $</p>
                    {isLoggedIn && <button>Add to cart</button>}
                </div>
            </div>
        </div>
    );
}
