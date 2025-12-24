import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.social}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>

            <div className={styles.contact}>
                <p>abrigo.atelier@gmail.com</p>
                <p>Entre Lisboa e Ferreira do Alentejo</p>
                <p>+351 92 615 3757 (Chamada para rede móvel nacional)</p>


            </div>

            <div className={styles.copyright}>
                <p>©2025 Abrigo Atelier. Imagens e Fotografias por Abrigo Atelier.</p>
            </div>
        </footer>
    );
}
