import type { Portfolio } from '@/domain/entities/portfolio';

export const portfolioData: Portfolio = {
  hero: {
    name: 'Roberto Filho',
    headline:
      'Engenheiro de Software / Backend (microserviços, Go, arquitetura hexagonal)',
    location: 'Itabuna, Bahia - Brasil',
    contacts: [
      {
        label: 'E-mail',
        value: 'contatorobertobff@gmail.com',
        href: 'mailto:contatorobertobff@gmail.com'
      },
      {
        label: 'Telefone',
        value: '+55 (73) 9 9122-2762',
        href: 'https://wa.me/5573991222762'
      },
      {
        label: 'GitHub',
        value: 'github.com/robertobferraz',
        href: 'https://github.com/robertobferraz'
      },
      {
        label: 'LinkedIn',
        value: 'www.linkedin.com/in/robertobff',
        href: 'https://www.linkedin.com/in/robertobff'
      }
    ],
    ctas: [
      { label: 'Ver Projetos', href: '#projetos' },
      { label: 'Baixar CV', href: '/curriculo-novo.pdf' },
      { label: 'Entrar em contato', href: '#contato' }
    ]
  },
  about: {
    summary:
      'Profissional com foco em backend, desenvolvimento de microserviços e arquitetura hexagonal (Ports & Adapters). Experiência com mensageria, bancos relacionais e não relacionais, Docker, observabilidade, otimização de performance e soluções real-time com WebSocket/WebRTC.'
  },
  experiences: [
    {
      role: 'Engenheiro de Software',
      company: 'Autônomo',
      location: 'Itabuna, Bahia, Brasil',
      period: 'jul/2025 - o momento',
      featured: true,
      highlights: [
        'Modalidade: no local',
        'Desenvolvimento de APIs REST e microserviços em Golang',
        'Aplicação de Clean Code, Clean Architecture e arquitetura hexagonal',
        'Modelagem e integração com bancos relacionais e mensageria',
        'Containerização e padronização de ambientes com Docker',
        'Versionamento e colaboração usando Git',
        'Foco em performance, escalabilidade e manutenibilidade'
      ]
    },
    {
      role: 'Engenheiro de Software',
      company: 'Fair Game',
      companySite: 'https://fairgame.gg',
      logoSrc: '/brands/logo-fairgame.png',
      logoSurface: 'dark',
      location: 'Itabuna, Bahia',
      period: 'Out/2024 - jul/2025',
      featured: true,
      highlights: [
        'Microserviços com arquitetura hexagonal',
        'Integração com Pub/Sub, Redis, MySQL e PostgreSQL',
        'Desenvolvimento de APIs RESTful',
        'Uso de UberFx para modularização e DI',
        'Observabilidade com monitoramento e logging',
        'Otimização de performance e concorrência',
        'Comunicação em tempo real via WebSocket/WebRTC'
      ]
    },
    {
      role: 'Engenheiro de Software',
      company: 'Coding4u',
      companySite: 'https://coding4u.tech',
      logoSrc: '/brands/coding4u_0004_Institucional-Preto-2.png',
      logoSurface: 'dark',
      location: 'Itabuna, Bahia',
      period: 'Jan/2023 - Abr/2024',
      featured: true,
      highlights: [
        'Microserviços com arquitetura hexagonal',
        'Pub/Sub, Redis, MySQL, PostgreSQL e Docker',
        'APIs RESTful com foco em segurança e eficiência',
        'UberFx, logging e monitoramento',
        'Escalabilidade de serviços'
      ]
    },
    {
      role: 'Background profissional',
      company: 'Experiências anteriores',
      location: 'Bahia',
      period: 'Antes de 2023',
      featured: false,
      highlights: ['Técnico de manutenção', 'Auxiliar de contabilidade']
    }
  ],
  projects: [
    {
      id: 'civitas',
      title: 'Civitas (em desenvolvimento)',
      period: '2025 - atual',
      context:
        'Plataforma para gestão de comunidades com chat em tempo real, FAQ assistido por IA e fluxo híbrido de atendimento entre automação e suporte humano.',
      challenges: [
        'Implementação de chat em tempo real com WebSocket e controle de salas públicas/privadas',
        'Controle de acesso por comunidade e papéis (admin, moderador e membro)',
        'Fluxo híbrido com IA (Ollama) e escalonamento para atendimento humano',
        'Ingestão de conhecimento (PDF, CSV, Excel e DOCX) para FAQ assistido',
        'Auditoria completa de requests e ações administrativas',
        'Persistência de mensagens em batch para desempenho e rastreabilidade'
      ],
      architectureNotes: [
        'Arquitetura em camadas: Handlers -> Usecases -> Repositories',
        'Hub WebSocket em memória desacoplado da camada HTTP',
        'Persistência em PostgreSQL como fonte da verdade',
        'Autenticação JWT com Firebase Authentication',
        'Documentação e contratos de API com Swagger'
      ],
      stack: [
        'Golang',
        'Fiber v2',
        'WebSocket',
        'React',
        'Next.js',
        'TypeScript',
        'TailwindCSS',
        'PostgreSQL',
        'GORM',
        'Swagger (swaggo)',
        'Firebase Authentication',
        'Ollama',
        'Arquitetura em camadas'
      ],
      assets: [
        {
          type: 'image',
          src: '/projects/civitas-login-page.png',
          alt: 'Tela de login da plataforma Civitas'
        },
        {
          type: 'image',
          src: '/projects/civitas-dashboard.png',
          alt: 'Dashboard da plataforma Civitas em funcionamento'
        },
        {
          type: 'image',
          src: '/projects/civitas.png',
          alt: 'Identidade visual do projeto Civitas'
        },
        {
          type: 'diagram',
          src: '/projects/civitas-arquiteture.png',
          alt: 'Diagrama de arquitetura em camadas do projeto Civitas'
        },
        {
          type: 'diagram',
          src: '/projects/civitas-fluxo-dominio.png',
          alt: 'Fluxo de domínio e eventos do projeto Civitas'
        }
      ],
      emphasis: 'primary'
    },
    {
      id: 'instituto-recomecar',
      title: 'Sistema Web para Gestão de Dados Institucionais',
      period: 'mar/2024 - abr/2025',
      context:
        'Projeto de extensão universitária (UNINTER) aplicando tecnologia para inclusão social, com rastreabilidade e eficiência operacional para apoiar a reintegração social e profissional.',
      challenges: [
        'Levantamento e análise de requisitos',
        'Modelagem de dados e estruturação do banco',
        'Desenvolvimento em PHP com boas práticas de arquitetura',
        'Cadastro, validação e acompanhamento de usuários',
        'Logs de auditoria, controle de acesso e proteção de dados sensíveis',
        'Automação de processos e padronização de fluxos'
      ],
      architectureNotes: [
        'Controllers para borda HTTP e validação inicial',
        'Services para regras de negócio e orquestração',
        'Repositories para persistência e isolamento de banco',
        'DTOs para contratos claros entre camadas',
        'RBAC para perfis de acesso e trilha de auditoria'
      ],
      stack: ['PHP', 'MySQL', 'Arquitetura em camadas', 'RBAC', 'Auditoria'],
      assets: [
        {
          type: 'image',
          src: '/projects/recomecar-dashboard.svg',
          alt: 'Tela de cadastro de usuário do sistema Recomeçar'
        },
        {
          type: 'image',
          src: '/projects/recomecar-acompanhamento.svg',
          alt: 'Tela de acompanhamento de usuário do sistema Recomeçar'
        },
        {
          type: 'diagram',
          src: '/projects/recomecar-architecture.svg',
          alt: 'Diagrama simples de arquitetura em camadas do projeto Recomeçar'
        }
      ],
      emphasis: 'secondary'
    },
    {
      id: 'go-microservices',
      title: 'Microserviços em Go (Hexagonal)',
      period: '2023 - 2025',
      context:
        'Evolução de backend com foco em independência de framework, escalabilidade e manutenção orientada a domínio.',
      challenges: [
        'Desacoplamento de domínio com Ports & Adapters',
        'Integração de mensageria e bancos com contratos claros',
        'Containerização com Docker e ambiente reproduzível',
        'Observabilidade para suporte a incidentes',
        'Ajustes de concorrência para throughput mais alto'
      ],
      stack: [
        'Go',
        'Redis',
        'Pub/Sub',
        'MySQL',
        'PostgreSQL',
        'Docker',
        'Observabilidade'
      ],
      assets: [
        {
          type: 'image',
          src: '/projects/microservice-hexagonal.png',
          alt: 'Diagrama técnico de arquitetura de microserviços em Go'
        }
      ],
      emphasis: 'secondary'
    },
    {
      id: 'real-time-platform',
      title: 'Real-time Platform (WebSocket/WebRTC)',
      period: '2024 - 2025',
      context:
        'Implementação de comunicação em tempo real para reduzir latência e melhorar experiência em fluxos colaborativos.',
      challenges: [
        'Gerenciamento de conexões persistentes em escala',
        'Troca de sinalização para estabelecimentos P2P',
        'Resiliência a quedas de conexão',
        'Monitoramento de latência e qualidade de sessão'
      ],
      stack: ['WebSocket', 'WebRTC', 'Go', 'Monitoramento'],
      assets: [
        {
          type: 'image',
          src: '/projects/webrtc-websocket.png',
          alt: 'Fluxo de sinalização e mídia em arquitetura real-time com WebSocket e WebRTC'
        }
      ],
      emphasis: 'secondary'
    }
  ],
  skills: [
    {
      title: 'Backend',
      items: ['Go', 'Microserviços', 'APIs REST']
    },
    {
      title: 'Infra/DevOps',
      items: ['Docker', 'GCP', 'CI/CD']
    },
    {
      title: 'Dados/Mensageria',
      items: ['Redis', 'Pub/Sub', 'MySQL', 'PostgreSQL']
    },
    {
      title: 'Arquitetura',
      items: ['Hexagonal / Ports & Adapters', 'Dependency Injection', 'Testes']
    },
    {
      title: 'Real-time',
      items: ['WebSocket', 'WebRTC']
    },
    {
      title: 'IA',
      items: [
        'LangChain',
        'Python para IA',
        'Fundamentos de Engenharia de IA',
        'Aplicações orientadas a LLM'
      ]
    }
  ],
  education: [
    {
      title: 'Bacharelado em Engenharia de Software',
      institution: 'UNINTER',
      period: 'Em andamento (conclusão prevista: out/2026)'
    },
    {
      title: 'Carreira Engenharia de IA',
      institution: 'Alura',
      period: 'Emitida em nov/2025',
      credentialCode: '91a2188a-753e-44c8-96a2-506a7960d1db',
      credentialUrl:
        'https://cursos.alura.com.br/certificate/91a2188a-753e-44c8-96a2-506a7960d1db?lang'
    },
    {
      title: 'LangChain',
      institution: 'Alura',
      period: 'Emitida em dez/2025',
      credentialCode: 'd5bc94df-298e-4b3f-8436-06b9e7d4351f',
      credentialUrl:
        'https://cursos.alura.com.br/certificate/d5bc94df-298e-4b3f-8436-06b9e7d4351f?lang',
      competencies: ['Python']
    },
    {
      title: 'Python',
      institution: 'Alura',
      period: 'Emitida em nov/2025',
      credentialCode: '1bf42578-eaab-4e66-b628-92fb6bb57ea2',
      credentialUrl:
        'https://cursos.alura.com.br/certificate/1bf42578-eaab-4e66-b628-92fb6bb57ea2?lang'
    },
    {
      title: 'Pensamentos Computacionais',
      institution: 'Alura',
      period: 'Emitida em nov/2025',
      credentialCode: '7e7cbbdb-96a3-46e5-ad4d-c849057b6c57',
      credentialUrl:
        'https://cursos.alura.com.br/certificate/7e7cbbdb-96a3-46e5-ad4d-c849057b6c57?lang'
    },
    {
      title: 'React',
      institution: 'Alura',
      period: 'Emitida em jan/2025',
      credentialCode: '549768a8-5e31-4dd4-b898-95e5a5320c43',
      credentialUrl:
        'https://cursos.alura.com.br/certificate/549768a8-5e31-4dd4-b898-95e5a5320c43?lang',
      competencies: ['TypeScript']
    },
    {
      title: 'React: comece seu projeto full stack',
      institution: 'Alura',
      period: 'Emitida em jan/2025',
      credentialCode: 'f62c9fe1-3bbf-47af-925e-77f3bb87b652',
      credentialUrl:
        'https://cursos.alura.com.br/certificate/f62c9fe1-3bbf-47af-925e-77f3bb87b652?lang',
      competencies: ['TypeScript']
    },
    {
      title: 'HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags',
      institution: 'Alura',
      period: 'Emitida em jan/2025',
      credentialCode: '07a6fb31-effb-4571-8993-179069a5a967',
      credentialUrl:
        'https://cursos.alura.com.br/certificate/07a6fb31-effb-4571-8993-179069a5a967?lang',
      competencies: ['TypeScript']
    },
    {
      title:
        'Go avançado, finanças full stack com Go/SQLC/Next/React, Go do zero',
      institution: 'Udemy',
      period: 'Cursos livres'
    },
    {
      title: 'Programador de Sistemas',
      institution: 'SENAC Bahia',
      period: 'fev/2022'
    }
  ]
};
