import { useEffect } from 'react'
import { technologies, type Technologies, type Category } from '../../consts'
import { InfiniteScroll } from '../ui/infinite-scroll'
import { type IconType } from 'react-icons'
import { FaQuestionCircle } from 'react-icons/fa'
import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiScikitlearn,
  SiScipy,
  SiPlotly,
  SiStreamlit,
  SiJavascript,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiPostman,
} from 'react-icons/si'
import { FileCode, Database, BarChart4, Sheet } from 'lucide-react'

const iconMap: { [key: string]: IconType } = {
  'mdi:language-python': SiPython,
  'simple-icons:pandas': SiPandas,
  'simple-icons:numpy': SiNumpy,
  'simple-icons:jupyter': SiJupyter,
  'simple-icons:scikitlearn': SiScikitlearn,
  'simple-icons:scipy': SiScipy,
  'simple-icons:plotly': SiPlotly,
  'simple-icons:streamlit': SiStreamlit,
  'mdi:language-javascript': SiJavascript,
  'mdi:git': SiGit,
  'mdi:docker': SiDocker,
  'cib:postgresql': SiPostgresql,
  'simple-icons:postgresql': SiPostgresql,
  'cib:mysql': SiMysql,
  'cib:mongodb': SiMongodb,
  'simple-icons:sqlite': SiSqlite,
  'cib:postman': SiPostman,
  'simple-icons:powerbi': BarChart4,
  'simple-icons:microsoftexcel': Sheet,
  'mdi:visual-studio-code': FileCode,
  'mdi:database': Database,
}

const categories = Object.keys(technologies)
const groupSize = Math.ceil(categories.length / 3)
const categoryGroups = [
  categories.slice(0, groupSize),
  categories.slice(groupSize, groupSize * 2),
  categories.slice(groupSize * 2),
]

const Skills: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('.tech-badge').forEach((badge) => {
      badge.classList.add('tech-badge-visible')
    })
  }, [])

  return (
    <div className="z-30 mt-12 flex w-full flex-col max-w-[calc(100vw-5rem)] mx-auto lg:max-w-full">
      <div className="space-y-2">
        {categoryGroups.map((group, groupIndex) => (
          <InfiniteScroll
            key={groupIndex}
            duration={50000}
            direction={groupIndex % 2 === 0 ? 'normal' : 'reverse'}
            showFade={true}
            className="flex flex-row justify-center"
          >
            {group.flatMap((category) =>
              technologies[category as keyof Technologies].map(
                (tech: Category, techIndex: number) => {
                  const IconComponent = iconMap[tech.logo] || FaQuestionCircle
                  return (
                    <div
                      key={`${category}-${techIndex}`}
                      className="tech-badge repo-card border-border bg-card text-muted-foreground mr-5 flex items-center gap-3 rounded-full border p-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                      data-tech-name={`${category}-${techIndex}`}
                    >
                      <span className="bg-muted flex h-10 w-10 items-center justify-center rounded-full p-2 text-lg shadow-inner">
                        <IconComponent className="tech-icon text-primary" />
                      </span>
                      <span className="text-foreground font-medium">
                        {tech.text}
                      </span>
                    </div>
                  )
                },
              ),
            )}
          </InfiniteScroll>
        ))}
      </div>
    </div>
  )
}

export default Skills
