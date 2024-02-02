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
      icon: 'https://raw.githubusercontent.com/Luciana-Santos/Lucianadss-portfolio/main/src/assets/img/html-icon.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'SASS',
      icon: 'https://raw.githubusercontent.com/Luciana-Santos/Lucianadss-portfolio/main/src/assets/img/sass-icon.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'JavaScript',
      icon: 'https://i.postimg.cc/D0sMZxQD/Group-6.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'TypeScript',
      icon: 'https://i.postimg.cc/Y2mVbSc3/Group-32.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'React.js',
      icon: 'https://raw.githubusercontent.com/Luciana-Santos/Lucianadss-portfolio/main/src/assets/img/react-icon.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'Styled Components',
      icon: 'https://i.postimg.cc/pTspXBPg/styled-icon.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'Express',
      icon: '/assets/express-icon.png',
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
      name: 'MongoDB',
      icon: '/assets/mongodb-icon.png',
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
    title: 'Sistema Solar',
    description: 'Projeto de conclusão do curso de JavaScript da Origamid.',
    techs: [
      {
        label: 'HTML',
        icon: 'https://github.com/Luciana-Santos/Lucianadss-portfolio/blob/main/src/assets/img/html-icon.png?raw=true',
      },
      {
        label: 'SASS',
        icon: 'https://github.com/Luciana-Santos/Lucianadss-portfolio/blob/main/src/assets/img/sass-icon.png?raw=true',
      },
      {
        label: 'JavaScript',
        icon: 'https://github.com/Luciana-Santos/Lucianadss-portfolio/blob/main/src/assets/img/javascript-icon.png?raw=true',
      },
    ],
    links: {
      live: 'https://sistema-solar-luciana.netlify.app/',
      code: 'https://github.com/Luciana-Santos/sistema_solar',
    },
    imagem:
      'https://github.com/Luciana-Santos/Lucianadss-portfolio/blob/main/src/assets/img/sistema_solar-preview.jpg?raw=true',
  },
  {
    id: 2,
    title: 'Lista de Leitura',
    description: 'App para cadastro de livros e progresso de leitura.',
    techs: [
      {
        label: 'HTML',
        icon: 'https://github.com/Luciana-Santos/Lucianadss-portfolio/blob/main/src/assets/img/html-icon.png?raw=true',
      },
      {
        label: 'SASS',
        icon: 'https://github.com/Luciana-Santos/Lucianadss-portfolio/blob/main/src/assets/img/sass-icon.png?raw=true',
      },
      {
        label: 'JavaScript',
        icon: 'https://github.com/Luciana-Santos/Lucianadss-portfolio/blob/main/src/assets/img/javascript-icon.png?raw=true',
      },
    ],
    links: {
      live: 'https://lista-de-leitura.netlify.app/',
      code: 'https://github.com/Luciana-Santos/lista-de-leitura',
    },
    imagem:
      'https://github.com/Luciana-Santos/Lucianadss-portfolio/blob/main/src/assets/img/booklist-preview.png?raw=true',
  },
  {
    id: 3,
    title: 'Readerly - Em construção...',
    description:
      'App para praticar a leitura de textos em Inglês, com dicionário e quiz integrados.',
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
        label: 'Styled Components',
        icon: 'https://i.postimg.cc/pTspXBPg/styled-icon.png',
      },
    ],
    links: {
      live: 'https://readerly.netlify.app/',
      code: 'https://github.com/Luciana-Santos/readerly',
    },
    imagem: 'https://i.postimg.cc/V6Z6NvRD/readerly-preview.png',
  },
  {
    id: 4,
    title: 'Floral Fantasy',
    description:
      'Projeto de carrinho de compras de uma lojá fictícia de plantas.',
    techs: [
      {
        label: 'React',
        icon: 'https://raw.githubusercontent.com/Luciana-Santos/Lucianadss-portfolio/main/src/assets/img/react-icon.png',
      },
      {
        label: 'JavaScript',
        icon: 'https://github.com/Luciana-Santos/Lucianadss-portfolio/blob/main/src/assets/img/javascript-icon.png?raw=true',
      },
      {
        label: 'Styled Components',
        icon: 'https://i.postimg.cc/pTspXBPg/styled-icon.png',
      },
    ],
    links: {
      live: 'https://floral-fantasy.netlify.app/',
      code: 'https://github.com/Luciana-Santos/floral-fantasy-cart',
    },
    imagem: 'https://i.postimg.cc/SRHvFYSG/floral-fantasy-cart.png',
  },
  {
    id: 5,
    title: 'Slice of Spice',
    description: 'Landing page de um restaurante, com formulário de reserva.',
    techs: [
      {
        label: 'React',
        icon: 'https://raw.githubusercontent.com/Luciana-Santos/Lucianadss-portfolio/main/src/assets/img/react-icon.png',
      },
      {
        label: 'JavaScript',
        icon: 'https://github.com/Luciana-Santos/Lucianadss-portfolio/blob/main/src/assets/img/javascript-icon.png?raw=true',
      },
      {
        label: 'Styled Components',
        icon: 'https://i.postimg.cc/pTspXBPg/styled-icon.png',
      },
    ],
    links: {
      live: 'https://sliceofspice.luciana.dev/',
      code: 'https://github.com/Luciana-Santos/slice-of-spice',
    },
    imagem: 'https://i.postimg.cc/DyL4FTVT/slice-of-spice-preview.png',
  },
  {
    id: 6,
    title: 'WonderWords',
    description: 'App online de dicionário no idioma Inglês.',
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
        label: 'Styled Components',
        icon: 'https://i.postimg.cc/pTspXBPg/styled-icon.png',
      },
    ],
    links: {
      live: 'https://wonderwords.luciana.dev/',
      code: 'https://github.com/Luciana-Santos/wonderwords',
    },
    imagem: 'https://i.postimg.cc/NFKzzkcM/wonderwords.png',
  },
]
