import { useState } from "react"
import type { Progress } from "../types/progress"

const STORAGE_KEY = "french-journey-progress"

export function useProgress() {

  const [progress, setProgress] = useState<Progress>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)

    return saved
      ? JSON.parse(saved)
      : { completedLessons: [] }
  })


  function completeLesson(id: number) {

    if (progress.completedLessons.includes(id)) {
      return
    }

    const updated = {
      completedLessons: [
        ...progress.completedLessons,
        id
      ]
    }

    setProgress(updated)

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    )
  }


  return {
    progress,
    completeLesson
  }
}