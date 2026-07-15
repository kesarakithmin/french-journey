import type { Lesson } from "../types/lesson"

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Greetings and Introductions",
    level: "A1 Beginner",
    description: "Learn how to greet people and introduce yourself in French.",

    vocabulary: [
      {
        french: "Bonjour",
        english: "Hello / Good morning",
        pronunciation: "bon-zhoor"
      },
      {
        french: "Merci",
        english: "Thank you",
        pronunciation: "mehr-see"
      },
      {
        french: "Au revoir",
        english: "Goodbye",
        pronunciation: "oh ruh-vwar"
      }
    ],

        phrases: [
      {
        french: "Je m'appelle Kesara.",
        english: "My name is Kesara."
      },
      {
        french: "Comment ça va ?",
        english: "How are you?"
      }
    ],

    quiz: [
      {
        question: "What does Bonjour mean?",
        options: [
          "Goodbye",
          "Hello",
          "Thank you"
        ],
        answer: "Hello"
      },
      {
        question: "What does Merci mean?",
        options: [
          "Please",
          "Thank you",
          "Good night"
        ],
        answer: "Thank you"
      }
    ]
  }
]