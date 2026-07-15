export interface Vocabulary {
  french: string
  english: string
  pronunciation: string
}

export interface Phrase {
  french: string
  english: string
}

export interface Question {
  question: string
  options: string[]
  answer: string
}

export interface Lesson {
  id: number
  title: string
  level: string
  description: string
  vocabulary: Vocabulary[]
  phrases: Phrase[]
  quiz: Question[]
}