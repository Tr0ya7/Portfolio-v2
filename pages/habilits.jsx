import styles from '../styles/pages/habilits.module.scss'
import HabilitsShields from '../components/habilitsShields'
import AllHabilits from '../json/allHabilits.json'
import { useState } from 'react'
import { BsArrowLeftRight } from 'react-icons/bs'
import Studies from '../json/studies.json'

export default function Habilits({ style }) {
    const defaultText = '/* Selecione uma habilidade */'
    const [selectedShield, setSelectedShield] = useState([defaultText])
    const [title, setTitle] = useState('Habilidades')
    const [informations, setInformations] = useState(AllHabilits)

    function arrowOnClick() {
        setTitle('Estudando')
        setSelectedShield([defaultText])
        setInformations(Studies)

        if (title === 'Estudando') {
            setTitle('Habilidades')
            setInformations(AllHabilits)
        }
    }

    return (
        <div className={styles.habilits} id="habilits" style={ style }>
            <div>
                {informations.map((habilit) => <HabilitsShields
                                                key={habilit.id}
                                                className={habilit.className}
                                                src={habilit.src} 
                                                habilitOnClick={ 
                                                    () => setSelectedShield([   
                                                            habilit.title, 
                                                            habilit.description, 
                                                            habilit.title1, 
                                                            habilit.firebird, 
                                                            habilit.title2, 
                                                            habilit.mysql, 
                                                            habilit.title3, 
                                                            habilit.sqlite
                                                          ])
                                                }
                                               />)}
            </div>
            <ul className={styles.title}>
                {title}
                <BsArrowLeftRight onClick={ arrowOnClick } />
                {selectedShield.map((shield) => <li key={shield}>{shield}</li>)}
            </ul>
        </div>
    )
}