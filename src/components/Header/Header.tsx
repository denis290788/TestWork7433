"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import styles from "./Header.module.scss";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const { user, isLoggedIn, logout } = useAuthStore();

    return (
        <header className={styles.header}>
            <Link href="/">
                <h1 className={styles.logo}>
                    <span className={styles.logoT}>T</span>
                    <span className={styles.logoText}>
                        <span className={styles.logoEsty}>esty</span>
                        <span className={styles.logoShop}>shop</span>
                    </span>
                </h1>
            </Link>
            {isLoggedIn ? (
                <div className={styles.userSection}>
                    <span>
                        {user?.firstName} {user?.lastName}
                    </span>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <button onClick={() => router.push("/login")}>Login</button>
            )}
        </header>
    );
}
