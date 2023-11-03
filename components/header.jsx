import Image from 'next/image'
import styles from '../styles/components/header.module.scss'
import HeaderComponents from './headerComponents'
import { BiSolidHome } from 'react-icons/bi'
import { FcAbout } from 'react-icons/fc'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { IoMdConstruct, IoMdPaper } from 'react-icons/io'
import { LiaCertificateSolid } from 'react-icons/lia'
import { useState } from 'react'

export default function Header() {
    const defaultImage = '/images/hamburguer-menu.png'
    const defaultView = 'none'
    const [image, setImage] = useState(defaultImage)
    const [click, setClick] = useState(true)
    const [view, setView] = useState(defaultView)

    function hamburguerMenuOnClick() {
        if (click === true) {
            setImage('/images/x.png')
            setClick(false)
            setView('block')
        } else {
            setImage(defaultImage)
            setClick(true)
            setView(defaultView)
        }
    }
    
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
            <HeaderComponents 
                href="https://drive.google.com/file/d/1DWy35vNTxF5Z84zV1mAii6gRQx5KDdfE/view?usp=sharing"
            >
                Currículo
            </HeaderComponents>
            <div>
                <Image
                    src={image}
                    width={24}
                    height={24}
                    alt="hamburguer menu"
                    onClick={ hamburguerMenuOnClick }
                />
                <div>
                    <HeaderComponents href="#contactMe" style={{ display: view }}>
                        <BiSolidHome />
                    </HeaderComponents>
                    <HeaderComponents href="#aboutMe" style={{ display: view }}>
                        <FcAbout />
                    </HeaderComponents>
                    <HeaderComponents href="#habilits" style={{ display: view }}>
                        <AiOutlineUnorderedList />
                    </HeaderComponents>
                    <HeaderComponents href="#projects" style={{ display: view }}>
                        <IoMdConstruct />
                    </HeaderComponents>
                    <HeaderComponents href="#certificates" style={{ display: view }}>
                        <LiaCertificateSolid />
                    </HeaderComponents>
                    <HeaderComponents 
                        href="https://drive.google.com/file/d/1DWy35vNTxF5Z84zV1mAii6gRQx5KDdfE/view?usp=sharing" 
                        style={{ display: view }}
                    >
                        <IoMdPaper />
                    </HeaderComponents>
                </div>
            </div>
        </div>
    )
}