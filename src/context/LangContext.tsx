import { createContext, useContext, useState, type ReactNode } from 'react'
import type {Lang, Translations} from '../types'

const translations: Record<Lang, Translations> = {
  es: {
    nav: {
      logo: 'Julian D Silva',
      perfil: 'Inicio',
      gameExp: 'Experiencia en Videojuegos',
      uiExp: 'Experiencia en Diseño UI',
      contacto: 'Contacto',
      langBtn: 'EN',
    },
      perfil: {
          name: 'Julian D Silva',
          role: 'Desarrollador Game Frontend || Desarrollador Movil Gameplay',
          description:
              "Soy graduado de la Universidad de los Andes en Colombia, con un título en Narrativas Digitales y dos especializaciones: Cine, Video y Animación, y Computación Visual. Actualmente, curso un programa anual en Vancouver Film School, enfocado en programación de videojuegos, desarrollo web y aplicaciones móviles.\n" +
              "\n" +
              "Durante el último año, he orientado mi formación profesional hacia la programación y desarrollo de juegos tanto para PC como para móvil, fortaleciendo tanto mis conocimientos técnicos como mi capacidad para crear soluciones digitales escalables e innovadoras.\n" +
              "\n" +
              "Además, he trabajado con multiples tecnologías y de 10 lenguajes de programación. Actualmente, continúo ampliando mis conocimientos y experiencia, con un enfoque principal en React, React Native y Vue, tecnologías que utilizo para desarrollar aplicaciones modernas, eficientes y centradas en la experiencia del usuario." +
              " Mi Objetivo es llegar a trabajar como desarrollador de frontend UI/UX o de programador de sistemas de juegos.",
          tags: ['HTML - 2 años', 'CSS - 2 años', 'JavaScript - 1 año', 'C# - 1 año', 'Vue - 6 meses', 'React - 6 meses', 'React Native - 6 meses', 'C++ - 6 meses'],
      },
    gameExp: {
        sections: [
            { id: '2025', label: '2025' },
        ],
      aclaration: 'Experiencia en desarrollo de videojuegos.',
      projects: [
      ],
      showingProcessButtonTextFalse: "Mostrar proceso",
      showingProcessButtonTextTrue: "Ocultar proceso",
    },
    uiExp: {
        sections: [
            { id: '2026', label: '2026' },
        ],
      aclaration: 'Experiencia en desarrollo de UI.',
      projects: [
      ],
      showingProcessButtonTextFalse: "Mostrar proceso",
      showingProcessButtonTextTrue: "Ocultar proceso",
    },
      contacto: {
          title: 'Información de contacto',
          subtitle1:
              '¿Tienes un projecto en mente?¿Quieres desarrollar alguna idea?',
          subtitle2: " \n\n No desaproveches la oportunidad, escríbeme y llevemos tus ideas al siguiente nivel.",
          labels: {
              email: 'Email',
              phoneCol: 'Teléfono',
              phoneCad: 'Teléfono',
              location: 'Ubicación',
              linkedin: 'LinkedIn',
              MainGithub: 'GitHub Principal (Projectos principales)',
              SecondaryGithub: 'Github Secundarios (Experimentos y exploración)'
          },
      },
  },
  en: {
    nav: {
      logo: 'Julian D Silva',
      perfil: 'Home',
      gameExp: 'Game Dev Experience',
      uiExp: 'UI Dev Experience',
      contacto: 'Contact',
      langBtn: 'ES',
    },
      perfil: {
          name: 'Julian D Silva',
          role: 'Frontend Game Developer || Mobile Gameplay programmer',
          description:
              "I hold a degree in Digital Storytelling from Universidad de los Andes (Colombia), with specializations in Film, Video and Animation, and Visual Computing." +
              " I am currently enrolled in an intensive program at Vancouver Film School, focused on video game programming, web development, and mobile application development." +
              " Over the past year, I have concentrated my professional growth on software development, strengthening my skills in programming frontend development and systems for games I  both PC and Mobile platforms, with a particular interest in building effective digital solutions." +
              " I have worked with multiple technologies and  10 code languages. I am currently expanding my knowledge with a primary focus on Unity programming and game frontend programming, developing modern, efficient applications with a strong emphasis on user experience." +
              " I am goaling to work or programming systems or developing frontend UI/UX elements.  ",
          tags: ['HTML - 2 years', 'CSS - 2 years', 'JavaScript - 1 year', 'C# - 1 year', 'Vue - 6 months', 'React - 6 months', 'React Native - 6 months', 'C++ - 6 months'],
      },
    gameExp: {
        sections: [
            { id: '2025', label: '2025' },
        ],
        aclaration: 'Experience in video game development.',
        projects: [
        ],
    showingProcessButtonTextFalse: "Show Process",
    showingProcessButtonTextTrue: "Hide Process",
    },
    uiExp: {
        sections: [
            { id: '2026', label: '2026' },
        ],
        aclaration: 'Experience in UI development.',
        projects: [
        ],
    showingProcessButtonTextFalse: "Show Process",
    showingProcessButtonTextTrue: "Hide Process",
    },
      contacto: {
          title: 'Contact info',
          subtitle1:
              "Do you have a project in mind? Do you want to bring an idea to life?",
          subtitle2: " \n\n Let's bring your idea to life. Send me a message and let's get started.",
          labels: {
              email: 'Email',
              phoneCol: 'Phone',
              phoneCad: 'Phone',
              location: 'Location',
              linkedin: 'LinkedIn',
              MainGithub: 'Main GitHub Link (Main projects)',
              SecondaryGithub: 'Secondary Github Link (Self learn and exploration)'
          },
      },
  },
}

interface LangContextValue {
  lang: Lang
  t: Translations
  toggleLang: () => void
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'))

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
