import styles from '../styles/components/certificatesCard.module.scss'
import Link from "next/link"

export default function CertificatesCard({ title, institution, duration, year, href }) {
    return (
        <div className={styles.card}>
            <ul>
                { title }
                <li className={styles.li}>
                    Instituição: { institution }
                </li>
                <li>
                    Duração: { duration }
                </li>
                <li>
                    Ano de conclusão: { year }
                </li>
                <li className={styles.certificate}>
                    <Link href={ href }>
                        Certificado
                    </Link>
                </li>
            </ul>
        </div>
    )
}