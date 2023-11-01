import Link from 'next/link'
import styles from '../styles/components/headerComponents.module.scss'

export default function HeaderComponents({ className, href, children }) {
    return (
        <ul className={`${styles.headerComponents} ${ className }`}>
            <li>
                <Link href={ href }>
                    { children }
                </Link>
            </li>
        </ul>
    )
}