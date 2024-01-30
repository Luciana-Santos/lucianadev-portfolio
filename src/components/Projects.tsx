import Title from '../ui/Title'
import { projects } from '../utils/content'
import ProjectItem from './ProjectItem'

export default function Projects() {
  return (
    <section className="section-layout">
      <Title>Projetos</Title>
      <div className="flex flex-wrap justify-center gap-7">
        {projects.map((project) => {
          return <ProjectItem key={project.id} data={project} />
        })}
      </div>
    </section>
  )
}
