import type { Portfolio } from '@/domain/entities/portfolio';

export const portfolioData: Portfolio = {
  hero: {
    name: 'Roberto Filho',
    headline:
      'Engenheiro de Software / Backend (microservicos, Go, arquitetura hexagonal)',
    location: 'Itabuna, Bahia - Brasil',
    contacts: [
      {
        label: 'E-mail',
        value: 'zferraz.rf@gmail.com',
        href: 'mailto:zferraz.rf@gmail.com'
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
      'Profissional com foco em backend, desenvolvimento de microservicos e arquitetura hexagonal (Ports & Adapters). Experiencia com mensageria, bancos relacionais e nao relacionais, Docker, observabilidade, otimização de performance e solucoes real-time com WebSocket/WebRTC.'
  },
  experiences: [
    {
      role: 'Engenheiro de Software',
      company: 'Autonomo',
      location: 'Itabuna, Bahia, Brasil',
      period: 'jul/2025 - o momento',
      featured: true,
      highlights: [
        'Modalidade: no local',
        'Desenvolvimento de APIs REST e microservicos em Golang',
        'Aplicacao de Clean Code, Clean Architecture e arquitetura hexagonal',
        'Modelagem e integracao com bancos relacionais e mensageria',
        'Containerizacao e padronizacao de ambientes com Docker',
        'Versionamento e colaboracao usando Git',
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
        'Microservicos com arquitetura hexagonal',
        'Integracao com Pub/Sub, Redis, MySQL e PostgreSQL',
        'Desenvolvimento de APIs RESTful',
        'Uso de UberFx para modularizacao e DI',
        'Observabilidade com monitoramento e logging',
        'Otimizacao de performance e concorrencia',
        'Comunicacao em tempo real via WebSocket/WebRTC'
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
        'Microservicos com arquitetura hexagonal',
        'Pub/Sub, Redis, MySQL, PostgreSQL e Docker',
        'APIs RESTful com foco em seguranca e eficiencia',
        'UberFx, logging e monitoramento',
        'Escalabilidade de servicos'
      ]
    },
    {
      role: 'Background profissional',
      company: 'Experiencias anteriores',
      location: 'Bahia',
      period: 'Antes de 2023',
      featured: false,
      highlights: ['Tecnico de manutencao', 'Auxiliar de contabilidade']
    }
  ],
  projects: [
    {
      id: 'instituto-recomecar',
      title: 'Sistema Web para Gestao de Dados Institucionais',
      period: 'mar/2024 - abr/2025',
      context:
        'Projeto de extensao universitaria (UNINTER) aplicando tecnologia para inclusao social, com rastreabilidade e eficiencia operacional para apoiar a reintegracao social e profissional.',
      challenges: [
        'Levantamento e analise de requisitos',
        'Modelagem de dados e estruturacao do banco',
        'Desenvolvimento em PHP com boas praticas de arquitetura',
        'Cadastro, validacao e acompanhamento de usuarios',
        'Logs de auditoria, controle de acesso e protecao de dados sensiveis',
        'Automacao de processos e padronizacao de fluxos'
      ],
      architectureNotes: [
        'Controllers para borda HTTP e validacao inicial',
        'Services para regras de negocio e orquestracao',
        'Repositories para persistencia e isolamento de banco',
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
      emphasis: 'primary'
    },
    {
      id: 'go-microservices',
      title: 'Microservicos em Go (Hexagonal)',
      period: '2023 - 2025',
      context:
        'Evolucao de backend com foco em independencia de framework, escalabilidade e manutencao orientada a dominio.',
      challenges: [
        'Desacoplamento de dominio com Ports & Adapters',
        'Integracao de mensageria e bancos com contratos claros',
        'Containerizacao com Docker e ambiente reproduzivel',
        'Observabilidade para suporte a incidentes',
        'Ajustes de concorrencia para throughput mais alto'
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
        'Implementacao de comunicacao em tempo real para reduzir latencia e melhorar experiencia em fluxos colaborativos.',
      challenges: [
        'Gerenciamento de conexoes persistentes em escala',
        'Troca de sinalizacao para estabelecimentos P2P',
        'Resiliencia a quedas de conexao',
        'Monitoramento de latencia e qualidade de sessao'
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
      items: ['Go', 'Microservicos', 'APIs REST']
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
    }
  ],
  education: [
    {
      title: 'Bacharelado em Engenharia de Software',
      institution: 'UNINTER',
      period: 'Em andamento (conclusao prevista: out/2026)'
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
        'Go avancado, financas fullstack com Go/SQLC/Next/React, Go do zero',
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
