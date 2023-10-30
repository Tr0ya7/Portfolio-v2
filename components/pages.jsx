import AboutMe from '../pages/aboutMe'
import ContactMe from '../pages/contactMe'
import Habilits from '../pages/habilits'
import Style from '../json/style.json'
import Projects from '../pages/projects'
import Certificates from '../pages/certificates'

export default function Pages() {
    return (
        <div>
            <ContactMe style={ Style[0] } />
            <AboutMe style={ Style[1] } />
            <Habilits style={ Style[2] } />
            <Projects style={ Style[3] } />
            <Certificates style={ Style[4] } />
        </div>
    )
}