"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import styles from "./Header.module.scss";

export default function Header() {
    const { user, isLoggedIn, logout } = useAuthStore();

    return (
        <header className={styles.header}>
            <h1>Testy Shop</h1>
            {isLoggedIn ? (
                <div>
                    <span>
                        {user?.firstName} {user?.lastName}
                    </span>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <Link href="/login">Login</Link>
            )}
        </header>
    );
}
