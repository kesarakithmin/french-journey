import { Volume2 } from "lucide-react"
import Card from "../components/Card"
import { lessons } from "../data/lessons"
import { useProgress } from "../hooks/useProgress"
import { useSpeech } from "../hooks/useSpeech"
import Quiz from "../components/Quiz"
import { useState } from "react"

function Lesson() {
  const [quizCompleted, setQuizCompleted] = useState(false)
  const lesson = lessons[0]
  const { completeLesson, progress } = useProgress()
  const { speak } = useSpeech()

  return (
    <div className="space-y-6">

      <section>
        <h1 className="text-3xl font-bold">
          {lesson.title} 🇫🇷
        </h1>

        <p className="text-gray-600 mt-2">
          {lesson.description}
        </p>
      </section>


      <section className="space-y-4">
        <h2 className="text-xl font-bold">
          Vocabulary
        </h2>

        {lesson.vocabulary.map((word) => (
          <Card key={word.french}>
            <h3 className="text-2xl font-bold">
              {word.french}
            </h3>

            <p>
              {word.english}
            </p>

            <p className="text-gray-500">
              {word.pronunciation}
            </p>

            <button
  onClick={() => speak(word.french)}
  className="mt-3 flex items-center gap-2 text-blue-600"
>
  <Volume2 size={20} />
  Listen
</button>
          </Card>
        ))}
      </section>


      <section className="space-y-4">
        <h2 className="text-xl font-bold">
          Useful Phrases
        </h2>

        {lesson.phrases.map((phrase) => (
          <Card key={phrase.french}>
            <h3 className="font-bold">
              {phrase.french}
            </h3>

            <p>
              {phrase.english}
            </p>
          </Card>
        ))}
      </section>
{quizCompleted && (
  <button
    onClick={() => completeLesson(lesson.id)}
    className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold"
  >
    Complete Lesson ✅
  </button>
)}

<p>
  Completed lessons: {progress.completedLessons.length}
</p>
<Quiz
  questions={lesson.quiz}
  onComplete={() => setQuizCompleted(true)}
/>    </div>
  )
}

export default Lesson