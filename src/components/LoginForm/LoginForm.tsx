"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/api";
import { useAuthStore } from "@/store/authStore";
import styles from "./LoginForm.module.scss";
import { useLoginForm } from "./hooks/useLoginForm";

export default function LoginForm() {
    const router = useRouter();
    const login = useAuthStore((s) => s.login);

    const {
        username,
        setUsername,
        password,
        setPassword,
        setTouched,
        usernameError,
        passwordError,
        isValid,
    } = useLoginForm();

    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValid) return;

        setError("");

        try {
            const res = await api.post("/auth/login", { username, password });
            login(res.data);
            router.push("/");
        } catch {
            setError("Неверные данные для входа");
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onBlur={() =>
                        setTouched((prev) => ({ ...prev, username: true }))
                    }
                    className={`${styles.input} ${
                        usernameError ? styles.inputError : ""
                    }`}
                />
                <div className={styles.errorContainer}>
                    {usernameError && (
                        <p className={styles.error}>{usernameError}</p>
                    )}
                </div>
            </div>

            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() =>
                        setTouched((prev) => ({ ...prev, password: true }))
                    }
                    className={`${styles.input} ${
                        passwordError ? styles.inputError : ""
                    }`}
                />
                <div className={styles.errorContainer}>
                    {passwordError && (
                        <p className={styles.error}>{passwordError}</p>
                    )}
                </div>
            </div>

            <button type="submit" className={styles.button} disabled={!isValid}>
                Login
            </button>

            {error && (
                <p className={styles.error} style={{ marginTop: "10px" }}>
                    {error}
                </p>
            )}
        </form>
    );
}
