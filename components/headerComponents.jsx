import Link from 'next/link'
import styles from '../styles/components/headerComponents.module.scss'

export default function HeaderComponents({ href, children }) {
    return <ul className={styles.headerComponents}><li><Link href={ href }>{ children }</Link></li></ul>
}