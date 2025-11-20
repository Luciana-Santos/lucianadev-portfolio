export const data = [
  {
    name: 'about',
    path: '#about',
  },
  {
    name: 'projects',
    path: '#projects',
  },
  {
    name: 'contact',
    path: '#contact',
  },
]

export const content = {
  sobreLinks: [
    {
      id: Math.round(Math.random() * 99999),
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/luciana-dss/',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'GitHub',
      url: 'https://github.com/Luciana-Santos',
    },
  ],
  sobreTechs: [
    {
      id: Math.round(Math.random() * 99999),
      name: 'HTML',
      icon: '/assets/html.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'SASS',
      icon: '/assets/sass.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'JavaScript',
      icon: '/assets/js.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'TypeScript',
      icon: '/assets/ts.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'React',
      icon: '/assets/react.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'Styled Components',
      icon: '/assets/styled.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'NestJS',
      icon: '/assets/nestjs.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'Next.js',
      icon: '/assets/nextjs-icon.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'Node',
      icon: '/assets/node-icon.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'PostgreSQL',
      icon: '/assets/postgresql.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'Tailwindcss',
      icon: '/assets/tailwind-icon.png',
    },
  ],
}

export const projects = [
  {
    id: 1,
    title: 'Readerly - WIP',
    description:
      'Uma aplicação web para aprender espanhol com textos interativos, dicionário integrado e sistema de SRS',
    techs: [
      {
        label: 'React',
        icon: 'https://raw.githubusercontent.com/Luciana-Santos/Lucianadss-portfolio/main/src/assets/img/react-icon.png',
      },
      {
        label: 'TypeScript',
        icon: 'https://i.postimg.cc/Y2mVbSc3/Group-32.png',
      },
      {
        label: 'Tailwindcss',
        icon: 'https://raw.githubusercontent.com/Luciana-Santos/lucianadev-portfolio/dev/public/assets/tailwind-icon.png',
      },
    ],
    links: {
      live: 'https://readerly.luciana.dev/',
      code: 'https://github.com/Luciana-Santos/readerly',
    },
    imagem: 'https://i.postimg.cc/JhKr0X8G/readerly-preview.png',
  },
  {
    id: 2,
    title: 'Recollection',
    description:
      'App para gerenciar arquivos. Projeto possui autenticação com OAuth, upload e gerenciamento de arquivos, dashboard.',
    techs: [
      {
        label: 'React',
        icon: '/assets/react.png',
      },
      {
        label: 'TypeScript',
        icon: '/assets/ts.png',
      },
      {
        label: 'Tailwindcss',
        icon: '/assets/tailwind-icon.png',
      },
    ],
    links: {
      live: 'https://recollection.luciana.dev/landing',
      code: 'https://github.com/Luciana-Santos/recollection',
    },
    imagem: 'https://i.postimg.cc/j5Rk5htr/recollection-preview-1.png',
  },
  {
    id: 3,
    title: 'WonderWords',
    description: 'App online de dicionário no idioma Inglês.',
    techs: [
      {
        label: 'React',
        icon: '/assets/react.png',
      },
      {
        label: 'TypeScript',
        icon: '/assets/ts.png',
      },
      {
        label: 'Styled Components',
        icon: '/assets/styled.png',
      },
    ],
    links: {
      live: 'https://wonderwords.luciana.dev/',
      code: 'https://github.com/Luciana-Santos/wonderwords',
    },
    imagem: 'https://i.postimg.cc/Vv6G9LJG/wonderwords-preview.png',
  },
  {
    id: 4,
    title: 'Floral Fantasy',
    description:
      'Projeto de carrinho de compras de uma lojá fictícia de plantas.',
    techs: [
      {
        label: 'React',
        icon: '/assets/react.png',
      },
      {
        label: 'JavaScript',
        icon: '/assets/js.png',
      },
      {
        label: 'Styled Components',
        icon: '/assets/styled.png',
      },
    ],
    links: {
      live: 'https://floral-fantasy.netlify.app/',
      code: 'https://github.com/Luciana-Santos/floral-fantasy-cart',
    },
    imagem: 'https://i.postimg.cc/2819VyR3/floral-fantasy-preview.png',
  },
  {
    id: 5,
    title: 'Lista de Leitura',
    description: 'App para cadastro de livros e progresso de leitura.',
    techs: [
      {
        label: 'HTML',
        icon: '/assets/html.png',
      },
      {
        label: 'SASS',
        icon: '/assets/sass.png',
      },
      {
        label: 'JavaScript',
        icon: '/assets/js.png',
      },
    ],
    links: {
      live: 'https://lista-de-leitura.netlify.app/',
      code: 'https://github.com/Luciana-Santos/lista-de-leitura',
    },
    imagem: 'https://i.postimg.cc/8c0yZQW1/lista-de-leitura-preview.png',
  },
  {
    id: 6,
    title: 'Sistema Solar',
    description: 'Projeto de conclusão do curso de JavaScript da Origamid.',
    techs: [
      {
        label: 'HTML',
        icon: '/assets/html.png',
      },
      {
        label: 'SASS',
        icon: '/assets/sass.png',
      },
      {
        label: 'JavaScript',
        icon: '/assets/js.png',
      },
    ],
    links: {
      live: 'https://sistema-solar-luciana.netlify.app/',
      code: 'https://github.com/Luciana-Santos/sistema_solar',
    },
    imagem: 'https://i.postimg.cc/LXvQZZ8g/sistema-solar-preview.png',
  },
]
