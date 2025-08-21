import LoginForm from "@/components/LoginForm/LoginForm";
import styles from "./login.module.scss";

export default function LoginPage() {
    return (
        <div className={styles.login}>
            <h2>Login</h2>
            <LoginForm />
        </div>
    );
}
