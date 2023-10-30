import Image from 'next/image'
import styles from '../styles/pages/contactMe.module.scss'
import { BiLogoLinkedin } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'
import Contact from '../components/contact'

export default function ContactMe({ style }) {
    return (
        <div className={styles.contactMe} id="contactMe" style={ style }>
            <div className={styles.container}>
                <div className={styles.name}>
                    Luiz Henrique
                </div>
                <span className={styles.stack}>
                    Desenvolvedor Front-End
                </span>
                <Contact href="teste">
                    <BiLogoLinkedin />
                </Contact>
                <Contact className={styles.github} href="https://github.com/Tr0ya7">
                    <FiGithub />
                </Contact>
            </div>
            <Image src="/images/next-js.png" className={styles.img} width={450} height={250} alt="logo" />
        </div>
    )
}