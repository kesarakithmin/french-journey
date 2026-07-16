import { useEffect, useState } from "react"

import {
  getProgress,
  completeLesson as finishLesson,
} from "../utils/progress"

import type { ProgressData } from "../utils/progress"

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(
    getProgress()
  )

  useEffect(() => {
    setProgress(getProgress())
  }, [])

  function completeLesson(id: number) {
    const updated = finishLesson(id)
    setProgress(updated)
  }

  return {
    progress,
    completeLesson,

    completedLessons:
      progress.completedLessons,

    streak:
      progress.streak,

    progressPercentage:
      Math.round(
        (progress.completedLessons.length / 30) * 100
      ),

    isLessonCompleted(id: number) {
      return progress.completedLessons.includes(id)
    },
  }
}