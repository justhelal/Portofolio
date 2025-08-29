'use client'
import { motion } from 'motion/react'
import {
  EDUCATION,
  EXPERIENCE_DETAILS,
  PROJECTS,
  TECHNICAL_SKILLS,
  TRANSITION_SECTION,
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
} from './data'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ProjectCard } from '@/components/project-card'

export default function Personal() {
  return (
    <motion.main
      className="space-y-16 sm:space-y-20 lg:space-y-24 px-4 sm:px-0"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-6 text-xl font-semibold">Education</h3>
        <div className="space-y-4">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="border-b border-l border-border pb-3 pl-4 last:border-b-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-1.5">
                <div className="flex items-center gap-x-2 flex-wrap">
                  <h4 className="text-sm sm:text-base font-bold text-foreground">
                    {edu.degree}
                  </h4>
                  <span className="text-muted-foreground text-xs sm:text-sm">•</span>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                </div>
                <span className="text-xs font-medium text-muted-foreground bg-muted/40 px-2 py-0.5 rounded text-nowrap self-start sm:self-center">
                  {edu.period}
                </span>
              </div>
              <div className="space-y-1">
                {edu.description.map((point, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-6 text-xl font-semibold">Experience</h3>
        <div className="space-y-4">
          {EXPERIENCE_DETAILS.map((exp) => (
            <div key={exp.id} className="border-b border-l border-border pb-3 pl-4 last:border-b-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-1.5">
                <div className="flex items-center gap-x-2 flex-wrap">
                  <h4 className="text-sm sm:text-base font-bold text-foreground">
                    {exp.role}
                  </h4>
                  <span className="text-muted-foreground text-xs sm:text-sm">•</span>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs font-medium text-muted-foreground bg-muted/40 px-2 py-0.5 rounded text-nowrap self-start sm:self-center">
                  {exp.period}
                </span>
              </div>
              <div className="space-y-1">
                {exp.description.map((point, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-4 sm:mb-5 text-lg font-medium">Projects</h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.technologies}
              links={project.links}
              image={project.image}
            />
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-4 sm:mb-5 text-lg font-medium">Technical Skills</h3>
        <div className="space-y-8">
          {TECHNICAL_SKILLS.map(
            (
              skillCategory: { category: string; skills: string },
              index: number,
            ) => (
              <div key={index}>
                <h4 className="mb-2 font-medium text-base">
                  {skillCategory.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills
                    .split(', ')
                    .map((skill: string, skillIndex: number) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                </div>
              </div>
            ),
          )}
        </div>
      </motion.section>

      {/* <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
                prefetch
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section> */}
    </motion.main>
  )
}
