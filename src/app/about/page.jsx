import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from '../../styles/Home.module.css';
import Image from 'next/image';

export default function About() {
    return (
        <div>
            <Navbar />
            <main className={styles.main}>
                <h1>About Me</h1>
                <div className={styles.profile}>
                    <Image src="" alt="Profile Picture" width={150} height={150} />
                    <p>Hi, I'm [Your Name], a full-stack developer with expertise in Next.js, React, and Node.js. I enjoy creating dynamic and responsive web applications.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
