"use client";

import { useAuthStore } from "@/store/authStore";
import styles from "./Footer.module.scss";

export default function Footer() {
    const { user, isLoggedIn } = useAuthStore();
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>
                {year} {isLoggedIn && user && `Logged as ${user.email}`}
            </p>
        </footer>
    );
}
