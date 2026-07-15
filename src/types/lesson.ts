export interface Vocabulary {
  french: string
  pronunciation: string
  english: string
}

export interface VocabularyGroup {
  title: string
  words: Vocabulary[]
}

export interface Phrase {
  french: string
  english: string
  pronunciation?: string
}

export interface ConversationLine {
  speaker: string
  french: string
  english: string
}

export interface GrammarPoint {
  title: string
  explanation: string
  examples: string[]
}

export interface PronunciationFocus {
  rule: string
  examples: string[]
}

export interface PracticeItem {
  prompt: string
  options?: string[]
  answer?: string
}

export interface PracticeSection {
  multipleChoice: PracticeItem[]
  translation: PracticeItem[]
  fillInTheBlanks: PracticeItem[]
  speaking: string[]
}

export interface HomeworkExercise {
  task: string
  example?: string
}

export interface LessonMission {
  title: string
  description: string
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
  goal: string
  objective?: string
  whyItMatters?: string
  description: string
  vocabulary: Vocabulary[]
  vocabularyGroups?: VocabularyGroup[]
  phrases: Phrase[]
  conversation: ConversationLine[]
  grammar: GrammarPoint[]
  pronunciation: PronunciationFocus[]
  cultureTip?: string
  practice?: PracticeSection
  homework: HomeworkExercise[]
  mission: LessonMission
  quiz: Question[]
}