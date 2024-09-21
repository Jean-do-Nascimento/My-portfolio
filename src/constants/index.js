import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    next,
    carhub,
    matrix,
    pizzaria,
    promptopia,
    authreloaded,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Trabalho",
    },
    {
      id: "contact",
      title: "Contato",
    },
  ];
  
  const services = [
    {
      title: "Desenvolvedor Web",
      icon: web,
    },
    {
      title: "Desenvolvedor Back-end",
      icon: backend,
    },
    {
      title: "Desenvolvedor de UI",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "next",
      icon: next,
    },
  ];
  
  const experiences = [
    {
      title: "Desenvolvedor Fullstack",
      company_name: "Freelancer",
      icon: creator,
      iconBg: "#383E56",
      date: "Maio 2022 - Agosto 2023",
      points: [
        "Desenvolvendo e mantendo aplicações web utilizando JavaScript, TypeScript e frameworks relacionados.",
        "Trabalhando eficientemente sob um prazo de entrega e aprendendo sob demanda sobre frameworks e tecnologias necessárias.",
        "Colaborando com clientes e outros desenvolvedores para criar soluções de alta qualidade.",
        "Implementando design responsivo e assegurando compatibilidade cross-browser.",
      ],
    },
  ];

  
  const projects = [
    {
      name: "Car Hub",
      description:
        "CarHub é um app de Showcase e Aluguel de carros que simplifica a pesquisa e visualização de veículos e todas as informações sobre eles. Feito inteiramente com TypeScript e Next.js",
      tags: [
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "NextJs",
          color: "white",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
      ],
      image: carhub,
      source_code_link: "https://github.com/Jean-do-Nascimento/Car-Hub",
      live_project_link: "https://car-hub-hq.vercel.app",
    },
    {
      name: "Promptopia",
      description:
        "Promptopia é um espaço para os entusiastas de IA! Para aqueles buscando formas de implementar Inteligência Artificial em sua experiência. Promptopia é uma ferramenta de compartilhamento de Prompts de IA onde você pode criar, ler, copiar e deletar prompts de IA. totalmente estruturado com Next.js",
      tags: [
        {
          name: "NextJs",
          color: "white",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: promptopia,
      source_code_link: "https://github.com/Jean-do-Nascimento/Promptopia-AI-prompt-sharing",
      live_project_link: "https://promptopia-ai-prompt-sharing.vercel.app",
    },
    {
      name: "Auth.reloaded",
      description:
        "Uma Landing Page com Login, Registro e Autênticação feita com design responsivo seguindo a dinâmica de estilização moderna com CSS, HTML e JavaScript.",
      tags: [
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
      ],
      image: authreloaded,
      source_code_link: "https://github.com/Jean-do-Nascimento/Auth.reloaded",
      live_project_link: "https://authreloaded.netlify.app",
    },
    {
      name: "Matrix Games",
      description:
        "Matrix Games é uma loja ficticia criada com o propósito de montar uma aplicação profissional utilizando apenas de CSS e HTML.",
      tags: [
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
      ],
      image: matrix,
      source_code_link: "https://github.com/Jean-do-Nascimento/matrix-games-shop",
      live_project_link: "https://matrix-games-shop.vercel.app",
    },
    {
      name: "Landing page p/ Restaurantes",
      description:
        "Uma landing page de um belo restaurante e pizzaria, criada com Bootstrap e JavaScript.",
      tags: [
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
      ],
      image: pizzaria,
      source_code_link: "https://github.com/Jean-do-Nascimento/landing-page-restaurante",
      live_project_link: "https://exercicio-m14-xi.vercel.app",
    },
  ];
  
  export { services, technologies, experiences, projects };
