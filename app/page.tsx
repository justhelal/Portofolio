'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
  TRANSITION_SECTION,
  TECHNICAL_SKILLS,
  EDUCATION,
  ACTIVITIES,
  EXPERIENCE_DETAILS,
} from './data'
import { ProjectCard } from '@/components/project-card'

export default function Personal() {
  return (
    <motion.main
      className="space-y-16 sm:space-y-20 lg:space-y-24 px-4 sm:px-0"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-4 sm:mb-5 text-lg font-medium">Education</h3>
        <div className="flex flex-col space-y-3">
          {EDUCATION.map((edu, index) => (
            <div
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              key={index}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 sm:p-5 dark:bg-zinc-950">
                <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <h4 className="font-normal text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">
                      {edu.degree}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 self-start sm:self-auto">
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-4 sm:mb-5 text-lg font-medium">Experience</h3>
        <div className="flex flex-col space-y-3">
          {EXPERIENCE_DETAILS.map((exp) => (
            <div
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              key={exp.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 sm:p-5 dark:bg-zinc-950">
                <div className="flex flex-col space-y-3">
                  <div className="flex flex-col space-y-1 sm:space-y-0 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <h4 className="font-normal dark:text-zinc-100 text-sm sm:text-base">
                        {exp.role}
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 self-start sm:self-auto text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                    {exp.description.map((point, index) => (
                      <li key={index} className="leading-relaxed">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-4 sm:mb-5 text-lg font-medium">Activities</h3>
        <div className="flex flex-col space-y-3">
          {ACTIVITIES.map((activity) => (
            <div
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              key={activity.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 sm:p-5 dark:bg-zinc-950">
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-col space-y-1 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="font-normal dark:text-zinc-100 text-sm sm:text-base">
                      {activity.role}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
                      {activity.organization}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-4 sm:mb-5 text-lg font-medium">Selected Projects</h3>

        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.technologies}
              links={project.links}
            />
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-4 sm:mb-5 text-lg font-medium">Technical Skills</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TECHNICAL_SKILLS.map((skill, index) => (
            <div key={index} className="rounded-2xl bg-zinc-50 p-4 sm:p-5 dark:bg-zinc-900/50 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900/70">
              <h4 className="mb-2 font-medium text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">{skill.category}</h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {skill.skills}
              </p>
            </div>
          ))}
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
