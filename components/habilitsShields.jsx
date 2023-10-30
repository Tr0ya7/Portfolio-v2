import Image from "next/image"
import styles from '../styles/components/habilitsShields.module.scss'

export default function HabilitsShields({ className, src, alt, habilitOnClick }) {
    return (
        <div className={styles.habilitsShields}>
            <Image 
                className={ className }
                src={ src } 
                width={96} 
                height={96}
                alt={ alt }
                onClick={ habilitOnClick }
            />
        </div>
    )
}