import styles from '../styles/pages/certificates.module.scss'
import CertficatesInformations from '../json/certificatesInformations.json'
import CertificatesCard from '../components/certificatesCard'

export default function Certificates({ style }) {
    return (
        <div className={styles.certificates} id="certificates" style={style}>
            <h1>
                Certificados
            </h1>
            <div>
                {CertficatesInformations.map((item) => <CertificatesCard
                                                        key={item.id}
                                                        title={item.title}
                                                        institution={item.institution}
                                                        duration={item.duration}
                                                        year={item.year}
                                                        href={item.link}
                                                        />)}
            </div>
        </div>
    )
}