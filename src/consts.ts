import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Augusto Dos Santos',
  description:
    "Los datos son el lenguaje universal de los negocios modernos, y yo soy su traductor. Me especializo en desentrañar insights accionables de datasets complejos, combinando análisis estadístico riguroso con visualizaciones que cuentan historias convincentes. Con dominio de Python, SQL y herramientas de BI, transformo la incertidumbre en estrategias basadas en evidencia que generan resultados medibles.",
  href: 'https://augustosz.github.io',
  author: 'Augusto Dos Santos',
  locale: 'es-AR',
  location: 'Paraná, Entre Ríos, Argentina',
  email: 'dossantosaugusto36@gmail.com'
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/projects',
    label: 'projects',
  },
  // {
  //   href: '/blog',
  //   label: 'blog',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/augustosz',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/augusto-dos-santos-a226622b6/',
    label: 'LinkedIn',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  Instagram: 'lucide:instagram',
  Phone: 'lucide:phone',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  LinkedIn: 'lucide:linkedin',
}

export interface Category {
  text: string
  logo: string
}

export type Technologies = {
  'Data Analysis & Science': Category[]
  'Visualization': Category[]
  'Development Tools': Category[]
  'Databases & Storage': Category[]
  'Programming Languages': Category[]
}

export const technologies: Technologies = {
  'Data Analysis & Science': [
    { text: 'Python', logo: 'mdi:language-python' },
    { text: 'Pandas', logo: 'simple-icons:pandas' },
    { text: 'NumPy', logo: 'simple-icons:numpy' },
    { text: 'Jupyter', logo: 'simple-icons:jupyter' },
    { text: 'Scikit-learn', logo: 'simple-icons:scikitlearn' },
    { text: 'SciPy', logo: 'simple-icons:scipy' },
  ],
  'Visualization': [
    { text: 'Matplotlib', logo: 'simple-icons:plotly' },
    { text: 'Seaborn', logo: 'simple-icons:plotly' },
    { text: 'Plotly', logo: 'simple-icons:plotly' },
    { text: 'Streamlit', logo: 'simple-icons:streamlit' },
    { text: 'Power BI', logo: 'simple-icons:powerbi' },
    { text: 'Excel', logo: 'simple-icons:microsoftexcel' },
  ],
  'Development Tools': [
    { text: 'VS Code', logo: 'mdi:visual-studio-code' },
    { text: 'Git', logo: 'mdi:git' },
    { text: 'Docker', logo: 'mdi:docker' },
    { text: 'Postman', logo: 'cib:postman' },
  ],
  'Databases & Storage': [
    { text: 'PostgreSQL', logo: 'cib:postgresql' },
    { text: 'MySQL', logo: 'cib:mysql' },
    { text: 'MongoDB', logo: 'cib:mongodb' },
    { text: 'SQLite', logo: 'simple-icons:sqlite' },
  ],
  'Programming Languages': [
    { text: 'Python', logo: 'mdi:language-python' },
    { text: 'SQL', logo: 'simple-icons:postgresql' },
    { text: 'JavaScript', logo: 'mdi:language-javascript' },
  ],
}
