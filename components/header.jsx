import Image from 'next/image'
import styles from '../styles/components/header.module.scss'
import HeaderComponents from './headerComponents'

export default function Header() {
    return (
        <div className={styles.header}>
            <HeaderComponents href="#contactMe">
                Início
            </HeaderComponents>
            <HeaderComponents href="#aboutMe">
                Sobre mim
            </HeaderComponents>
            <HeaderComponents href="#habilits">
                Habilidades
            </HeaderComponents>
            <HeaderComponents href="#projects">
                Projetos
            </HeaderComponents>
            <HeaderComponents href="#certificates">
                Certificados
            </HeaderComponents>
            <HeaderComponents href="https://drive.google.com/file/d/1BEwtUcCSzNoloU237fkN0kk78WxIQY-4/view?usp=drive_link">
                Currículo
            </HeaderComponents>
            <HeaderComponents className={styles.hamburguerMenu} href="#contactMe">
                <Image src="/images/hamburguer-menu.png" width={24} height={24} alt="hamburguer menu" />
            </HeaderComponents>
        </div>
    )
}