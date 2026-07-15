import { lessonContent } from "./lessonContent"

export interface CurriculumDay {
  day: number
  title: string
  level: string
}

export const curriculum: CurriculumDay[] = lessonContent.map((lesson) => ({
  day: lesson.id,
  title: lesson.title,
  level: lesson.level
}))
