import styles from '../styles/components/footer.module.scss'
import { AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <div>
                    &copy; 2023 / Luiz Henrique Barros
                </div>
                <Link href="https://github.com/Tr0ya7">
                    <AiFillGithub fill="black" />
                </Link>
            </div>
        </footer>
    )
}