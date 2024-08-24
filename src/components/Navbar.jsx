// components/Navbar.jsx
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{
            padding: '1rem 0',
            backgroundColor: '#333',
            color: '#fff'
        }}>
            <ul style={{
                display: 'flex',
                listStyle: 'none',
                justifyContent: 'center',
                gap: '2rem'
            }}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}