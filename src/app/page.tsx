import styles from "./page.module.css";
import CardList from "@/components/CardList/CardList";

export default function Home() {
    return (
        <div className={styles.page}>
            <h2>Latests Products</h2>
            <CardList />
        </div>
    );
}
