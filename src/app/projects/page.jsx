import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from '../../styles/Home.module.css';
import Image from 'next/image';

export default function Projects() {
    return (
        <div>
            <Navbar />
            <main className={styles.main}>
                <h1>My Projects</h1>
                <div className={styles.projects}>
                    <div className={styles.project}>
                        <Image src="" alt="Project 1" width={300} height={200} />
                        <h3>Project 1</h3>
                        <p>This is a brief description of Project 1. It involves building a web application using Next.js and other modern technologies.</p>
                    </div>
                    <div className={styles.project}>
                        <Image src="" alt="Project 2" width={300} height={200} />
                        <h3>Project 2</h3>
                        <p>This is a brief description of Project 2. It involves building a responsive e-commerce website using React and Node.js.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
