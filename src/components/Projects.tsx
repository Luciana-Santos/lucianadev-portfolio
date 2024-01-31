import Title from '../ui/Title'
import { projects } from '../utils/content'
import ProjectItem from './ProjectItem'

export default function Projects() {
  return (
    <section className="planet-bottom relative">
      <div className="section-layout">
        <Title>Projetos</Title>
        <div className="flex flex-wrap justify-center gap-7">
          {projects.map((project) => {
            return <ProjectItem key={project.id} data={project} />
          })}
        </div>
      </div>

      <div className="w-full h-[247px] absolute left-0 z-[-200] bottom-[-166px] back-cloud-contact"></div>
      <div className="w-full h-[385px] absolute left-0 z-[-100] front-cloud-contact bottom-[-185px]"></div>
    </section>
  )
}
