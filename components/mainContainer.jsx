import styles from '../styles/components/mainContainer.module.scss'
import Footer from './footer'
import Header from './header'

export default function MainContainer({ children }) {
    return <div className={styles.mainContainer}><Header />{ children }<Footer /></div>
}