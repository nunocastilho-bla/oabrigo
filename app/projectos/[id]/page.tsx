import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProjectGallery from './ProjectGallery';
import styles from './project.module.css';

const projectData: Record<string, any> = {
    a01: { title: 'Projecto A01', location: 'Grândola', phase: 'PIP', type: 'Habitação', description: 'Projecto de habitação unifamiliar em Grândola.' },
    a02: { title: 'Projecto A02', location: 'Ferreira', phase: 'Execução', type: 'Habitação', description: 'Projecto de reabilitação em Ferreira do Alentejo.' },
    a03: { title: 'Projecto A03', location: 'Sintra', phase: 'Licenciamento', type: 'Habitação', description: 'Projecto de habitação em Sintra.' },
    a04: { title: 'Projecto A04', location: 'Grândola', phase: 'PIP', type: 'Consultoria', description: 'Consultoria arquitectónica em Grândola.' },
    a05: { title: 'Projecto A05', location: 'Ferreira', phase: 'Execução', type: 'Habitação', description: 'Habitação sustentável em Ferreira do Alentejo.' },
    a06: { title: 'Projecto A06', location: 'Lisboa', phase: 'Licenciamento', type: 'Habitação', description: 'Projecto de habitação em Lisboa.' },
    a07: { title: 'Projecto A07', location: 'Alentejo', phase: 'PIP', type: 'Habitação', description: 'Projecto de habitação no Alentejo.' },
};

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projectData[id];

    if (!project) {
        notFound();
    }

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1>{project.title}</h1>
                        <div className={styles.metadata}>
                            <span>{project.location}</span>
                            <span>•</span>
                            <span>{project.phase}</span>
                            <span>•</span>
                            <span>{project.type}</span>
                        </div>
                    </div>

                    <div className={styles.description}>
                        <p>{project.description}</p>
                    </div>

                    <ProjectGallery projectId={id} projectTitle={project.title} />
                </div>
            </main>
            <Footer />
        </>
    );
}

export async function generateStaticParams() {
    return Object.keys(projectData).map((id) => ({ id }));
}
