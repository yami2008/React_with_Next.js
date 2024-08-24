import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from '../../styles/Home.module.css';

export default function Contact() {
    return (
        <div>
            <Navbar />
            <main className={styles.main}>
                <h1>Contact Me</h1>
                <form className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </main>
            <Footer />
        </div>
    );
}
