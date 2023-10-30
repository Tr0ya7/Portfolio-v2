import styles from '../styles/pages/projects.module.scss'
import ProjectsCard from '../components/projectsCard'
import ProjectsInformations from '../json/projectsInformations.json'

export default function Projects({ style }) {
    return (
        <div className={styles.projects} id="projects" style={ style }>
            <h1>
                Projetos
            </h1>
            <div>
                {ProjectsInformations.map((item) => <ProjectsCard
                                                        key={item.id}
                                                        src={item.image}
                                                        title={item.title}
                                                        link={item.link}
                                                    >
                                                        {item.informations}
                                                    </ProjectsCard>)}
            </div>
        </div>
    )
}