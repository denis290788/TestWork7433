import { useState } from "react";

export function useLoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [touched, setTouched] = useState({
        username: false,
        password: false,
    });

    const usernameError =
        touched.username && username.length < 3 ? "Минимум 3 символа" : "";
    const passwordError =
        touched.password && password.length < 3 ? "Минимум 3 символа" : "";

    const isValid = username.length >= 3 && password.length >= 3;

    return {
        username,
        setUsername,
        password,
        setPassword,
        touched,
        setTouched,
        usernameError,
        passwordError,
        isValid,
    };
}
