import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from '../../styles/Home.module.css';

export default function Home() {
    return (
        <div>
            <Navbar />
            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to My Portfolio</h1>
                <p className={styles.description}>
                    I am a passionate developer with experience in building web applications using modern technologies.
                </p>
            </main>
            <Footer />
        </div>
    );
}
