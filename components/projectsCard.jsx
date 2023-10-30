import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/components/projectsCard.module.scss'

export default function ProjectsCard({ src, title, children, link }) {
    return (
        <div className={styles.card}>
            <div>
                <Image src={ src } width={320} height={176} alt={ title } />
                <h2>
                    { title }
                </h2>
                <p>
                    { children }
                </p>
                <Link href={ link }>
                    { link }
                </Link>
            </div>
        </div>
    )
}