import type { Lesson } from "../types/lesson"

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Bonjour! Greetings and Introductions",
    level: "A1 Beginner",
    goal: "Learn the basics of French pronunciation, greetings, and how to introduce yourself confidently in real situations.",
    description: "Master the first social building blocks of French: polite greetings, introductions, and everyday courtesy.",
    vocabulary: [
      { french: "Bonjour", pronunciation: "bohn-ZHOOR", english: "Hello / Good morning" },
      { french: "Bonsoir", pronunciation: "bohn-SWAHR", english: "Good evening" },
      { french: "Salut", pronunciation: "sah-LU", english: "Hi (informal)" },
      { french: "Au revoir", pronunciation: "oh ruh-VWAHR", english: "Goodbye" },
      { french: "Merci", pronunciation: "mehr-SEE", english: "Thank you" },
      { french: "S'il vous plaît", pronunciation: "seel voo PLEH", english: "Please" },
      { french: "Pardon", pronunciation: "par-DOHN", english: "Sorry / Excuse me" },
      { french: "Je m'appelle...", pronunciation: "zhuh mah-PELL", english: "My name is..." },
      { french: "Je suis...", pronunciation: "zhuh SWEE", english: "I am..." },
      { french: "Enchanté", pronunciation: "ahn-shahn-TAY", english: "Pleased to meet you" }
    ],
    phrases: [
      { french: "Bonjour, monsieur.", english: "Hello, sir." },
      { french: "Comment vous vous appelez ?", english: "What is your name?" },
      { french: "Je m'appelle Ana.", english: "My name is Ana." },
      { french: "Enchanté, merci.", english: "Pleased to meet you, thank you." },
      { french: "S'il vous plaît, où est la sortie ?", english: "Please, where is the exit?" }
    ],
    conversation: [
      { speaker: "Alicia", french: "Bonjour ! Je m'appelle Alicia.", english: "Hello! My name is Alicia." },
      { speaker: "Marc", french: "Bonjour Alicia. Je m'appelle Marc.", english: "Hello Alicia. My name is Marc." }
    ],
    grammar: [
      {
        title: "Using je m'appelle",
        explanation: "Use je m'appelle to introduce your name in a natural and common way.",
        examples: ["Je m'appelle Luc.", "Je m'appelle Sofia."]
      }
    ],
    pronunciation: [
      { rule: "The French 'r' is often pronounced in the throat and does not sound like the English 'r'.", examples: ["Bonjour", "Merci", "Paris"] }
    ],
    homework: [
      { task: "Introduce yourself to a classmate in French using at least three greeting words.", example: "Bonjour, je m'appelle..." }
    ],
    mission: {
      title: "Greeting at a café",
      description: "Say Bonjour to the barista, introduce yourself, and ask for a small item politely."
    },
    quiz: [
      { question: "What does Bonjour mean?", options: ["Goodbye", "Hello", "Thank you"], answer: "Hello" },
      { question: "Which phrase means 'My name is...' ?", options: ["Je suis fatigué", "Je m'appelle...", "Merci beaucoup"], answer: "Je m'appelle..." }
    ]
  }
]