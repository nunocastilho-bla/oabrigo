import Header from './components/Header';
import Footer from './components/Footer';
import styles from './page.module.css';

const projects = [
    { id: 'a01', location: 'Grândola', phase: 'PIP', type: 'Habitação', coverImage: '/images/projects/a01/cover.png' },
    { id: 'a02', location: 'Ferreira', phase: 'Execução', type: 'Habitação', coverImage: '/images/projects/a02/cover.png' },
    { id: 'a03', location: 'Sintra', phase: 'Licenciamento', type: 'Habitação', coverImage: '/images/projects/a03/cover.png' },
    { id: 'a04', location: 'Grândola', phase: 'PIP', type: 'Consultoria', coverImage: '/images/projects/a04/cover.png' },
    { id: 'a05', location: 'Ferreira', phase: 'Execução', type: 'Habitação', coverImage: '/images/projects/a05/cover.png' },
    { id: 'a06', location: 'Lisboa', phase: 'Licenciamento', type: 'Habitação', coverImage: '/images/projects/a06/cover.png' },
    { id: 'a07', location: 'Alentejo', phase: 'PIP', type: 'Habitação', coverImage: '/images/projects/a07/cover.png' },
];

const services = [
    'Estudos prévios',
    'Comunicações Prévias',
    'Levantamentos arquitectónicos',
    'PIP',
    'Acompanhamento de obra',
    'Projecto de Execução',
    'Licenciamentos',
    'Legalizações',
    'Consultoria',
];

export default function HomePage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.leftColumn}>
                        <div className={styles.philosophy}>
                            <p>
                                O Abrigo Atelier procura mitigar tais factos servindo-se dos conhecimentos
                                vernaculares e sustentáveis para a construção de espaços com baixo impacto
                                ambiental e alto desempenho energético.
                            </p>
                            <p>
                                A arquitectura vernacular é um exemplo de sustentabilidade, pois utiliza
                                materiais e técnicas locais, adaptadas ao clima e à cultura de cada região.
                            </p>
                            <p>
                                O futuro da arquitectura passa pela integração de práticas sustentáveis e
                                pela valorização do património construído.
                            </p>
                        </div>

                        <div className={styles.servicesCircle}>
                            <h2>SERVIÇOS</h2>
                            <ul>
                                {services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.rightColumn}>
                        <div className={styles.projectGrid}>
                            {projects.map((project) => (
                                <a
                                    key={project.id}
                                    href={`/projectos/${project.id}`}
                                    className={styles.projectCircle}
                                    style={{
                                        backgroundImage: `url(${project.coverImage})`
                                    }}
                                >
                                    <div className={styles.circleContent}>
                                        <span className={styles.projectId}>{project.id.toUpperCase()}</span>
                                        <span className={styles.projectLocation}>{project.location}</span>
                                        <span className={styles.projectPhase}>{project.phase}</span>
                                        <span className={styles.projectType}>{project.type}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
