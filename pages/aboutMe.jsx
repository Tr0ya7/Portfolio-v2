import Image from 'next/image'
import styles from '../styles/pages/aboutMe.module.scss'
import AboutMeInformations from '../json/aboutMe.json'

export default function AboutMe({ style }) {
    return (
        <section className={styles.aboutMe} id="aboutMe" style={ style }>
            <Image src="/images/about.png" width={225} height={225} alt="about" />
            <div>
                <ul>
                    <li className={styles.title}>
                        Sobre Mim
                    </li>
                    <li className={styles.text}>
                        {AboutMeInformations[0].informations}
                    </li>
                    <li>
                        {AboutMeInformations[1].informations}
                    </li>
                </ul>
            </div>
        </section>
    )
}