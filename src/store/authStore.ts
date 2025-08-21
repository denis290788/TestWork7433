import { create } from "zustand";

interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    token: string;
}

interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
    login: (user: User) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isLoggedIn: false,

    login: (user) => {
        localStorage.setItem("authUser", JSON.stringify(user));
        set({ user, isLoggedIn: true });
    },

    logout: () => {
        localStorage.removeItem("authUser");
        set({ user: null, isLoggedIn: false });
    },
}));

if (typeof window !== "undefined") {
    const savedUser = localStorage.getItem("authUser");
    if (savedUser) {
        const user: User = JSON.parse(savedUser);
        useAuthStore.setState({ user, isLoggedIn: true });
    }
}
