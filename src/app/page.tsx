import { Section } from '@/components/ui/section';
import { AboutContainer } from '@/features/about/about-container';
import { ContactContainer } from '@/features/contact/contact-container';
import { EducationContainer } from '@/features/education/education-container';
import { ExperienceContainer } from '@/features/experience/experience-container';
import { HeroContainer } from '@/features/hero/hero-container';
import { OverviewContainer } from '@/features/overview/overview-container';
import { ProjectsContainer } from '@/features/projects/projects-container';
import { SkillsContainer } from '@/features/skills/skills-container';
import { createGetPortfolioUseCase } from '@/lib/portfolio-factory';

export default async function HomePage() {
  const useCase = createGetPortfolioUseCase();
  const portfolio = await useCase.execute();

  return (
    <>
      <HeroContainer hero={portfolio.hero} />
      <OverviewContainer
        featuredExperienceCount={
          portfolio.experiences.filter((item) => item.featured).length
        }
        projectCount={portfolio.projects.length}
        skillCategoryCount={portfolio.skills.length}
      />
      <Section id="sobre" title="Sobre">
        <AboutContainer about={portfolio.about} />
      </Section>
      <Section id="experiencia" title="Experiência">
        <ExperienceContainer experiences={portfolio.experiences} />
      </Section>
      <Section id="projetos" title="Projetos">
        <ProjectsContainer projects={portfolio.projects} />
      </Section>
      <Section id="habilidades" title="Habilidades">
        <SkillsContainer skills={portfolio.skills} />
      </Section>
      <Section id="formacao" title="Formação & Certificações">
        <EducationContainer education={portfolio.education} />
      </Section>
      <Section id="contato" title="Contato">
        <ContactContainer contacts={portfolio.hero.contacts} />
      </Section>
    </>
  );
}
