// Professores da temporada inaugural — primeira rodada de Seasons.
// Os campos `videoUrl` aceitam YouTube/Vimeo (incorporados como iframe) ou caminho local em /public.
// Deixe `null` para mostrar o slot "vídeo em breve".

export const PROFESSORES = {
  series: [
    {
      slug: "ia",
      area: "IA",
      icon: "lucide:brain-circuit",
      tagline: "Inteligência Artificial aplicada à criação",
      season: "Season Inaugural",
      teachers: [
        {
          name: "Mariana Simões",
          role: "Residente SAGA",
          bio: ["Atua na produtora Ampla", "Desenvolvimento do game Frond Online"],
          content:
            "Criação de personagens em 3D utilizando pipelines híbridas, combinando técnicas tradicionais com Inteligência Artificial aplicada à produção.",
          videoUrl: null,
          photoUrl: null,
        },
        {
          name: "Daniel Brito",
          role: "Residente SAGA",
          bio: ["Projetos para Moonp Studio", "Projetos para Mono Animation"],
          content:
            "Desenvolvimento de animações voltadas para publicidade, explorando uma pipeline integrada com IA para ganho de eficiência e criatividade.",
          videoUrl: null,
          photoUrl: null,
        },
        {
          name: "Jonatas Freire",
          role: "General Manager · SAGA",
          bio: [
            "Desenvolvimento de produtos",
            "Implementação de novas tecnologias",
          ],
          content:
            "Criação de plataformas, landing pages e web apps utilizando IA — com foco em ferramentas como VibeCode e desenvolvimento orientado a Cloud Code.",
          videoUrl: null,
          photoUrl: null,
        },
      ],
      guests: [
        {
          name: "Juliana S.",
          role: "Lead Layout Artist · Asset Manager",
          studio: "Hype Entertainment",
          content:
            "Criação de layouts para jogos e animações — organização visual e estruturação de cenas dentro de pipelines profissionais.",
          videoUrl: null,
          photoUrl: null,
        },
        {
          name: "Wesley Oliveira",
          role: "CGI Director · Senior 3D Artist",
          studio: "Cofounder · To Mars Studio",
          content:
            "Introdução a VFX e CGI dentro de uma pipeline tradicional, com foco em fundamentos e aplicações práticas no mercado.",
          videoUrl: null,
          photoUrl: null,
        },
      ],
    },
    {
      slug: "3d",
      area: "3D",
      icon: "lucide:box",
      tagline: "Modelagem, sculpt e pipelines de produção",
      season: "Season Inaugural",
      teachers: [],
      guests: [],
    },
    {
      slug: "games",
      area: "Games",
      icon: "lucide:gamepad-2",
      tagline: "Game design, mecânicas e level design",
      season: "Season Inaugural",
      teachers: [],
      guests: [],
    },
  ],
};
