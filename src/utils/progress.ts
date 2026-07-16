export interface ProgressData {
  completedLessons: number[]
  lastActiveDate: string
  streak: number
}

const STORAGE_KEY = "frenchJourneyProgress"

export function getProgress(): ProgressData {
  const saved = localStorage.getItem(STORAGE_KEY)

  if (!saved) {
    return {
      completedLessons: [],
      lastActiveDate: "",
      streak: 0,
    }
  }

  return JSON.parse(saved)
}

export function saveProgress(progress: ProgressData) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(progress)
  )
}

export function completeLesson(id: number) {
  const progress = getProgress()

  if (!progress.completedLessons.includes(id)) {
    progress.completedLessons.push(id)
  }

  updateStreak(progress)

  saveProgress(progress)

  return progress
}

function updateStreak(progress: ProgressData) {
  const today = new Date().toDateString()

  if (progress.lastActiveDate === today) {
    return
  }

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  if (
    progress.lastActiveDate ===
    yesterday.toDateString()
  ) {
    progress.streak += 1
  } else {
    progress.streak = 1
  }

  progress.lastActiveDate = today
}