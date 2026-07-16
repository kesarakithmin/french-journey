import { Volume2 } from "lucide-react"
import Card from "../components/Card"
import { lessonContent } from "../data/lessonContent"
import { lessonAnswers } from "../data/lessonAnswers"
import { checkAnswer } from "../utils/checkAnswer"
import { useProgress } from "../hooks/useProgress"
import { useSpeech } from "../hooks/useSpeech"
import Quiz from "../components/Quiz"
import { useState } from "react"
import { useParams } from "react-router-dom"

function Lesson() {
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [fillAnswers, setFillAnswers] = useState<string[]>([])
  const [fillResults, setFillResults] = useState<boolean[]>([])
  const [, setFillChecked] = useState(false)
  
  
  const { id } = useParams()
  const lessonId = Number(id)
  const lesson = lessonContent.find((item) => item.id === lessonId)
  console.log("Route ID:", lessonId)
console.log("Available IDs:", lessonContent.map(l => l.id))
console.log("Found lesson:", lesson)

  const { completeLesson, progress } = useProgress()
  const { speak } = useSpeech()

  if (!lesson) {
    return <p>Lesson not found</p>
  }

  const vocabularyGroups = lesson.vocabularyGroups?.length
    ? lesson.vocabularyGroups
    : [{ title: "Vocabulary", words: lesson.vocabulary }]

  const practice = lesson.practice ?? {
    multipleChoice: [],
    translation: [],
    fillInTheBlanks: [],
    speaking: [],
  }

  const renderVocabularyTable = (words: typeof lesson.vocabulary) => (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b border-[color:var(--color-border)] text-left text-[color:var(--color-text-muted)]">
            <th className="pb-2 pr-4">French</th>
            <th className="pb-2 pr-4">Pronunciation</th>
            <th className="pb-2 pr-4">English</th>
            <th className="pb-2">Audio</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <tr key={word.french} className="border-b border-[color:var(--color-border)] last:border-b-0">
              <td className="py-3 pr-4 font-semibold">{word.french}</td>
              <td className="py-3 pr-4 text-[color:var(--color-text-muted)]">{word.pronunciation}</td>
              <td className="py-3 pr-4">{word.english}</td>
              <td className="py-3">
                <button
                  onClick={() => speak(word.french)}
                  className="flex items-center gap-2 text-[color:var(--color-primary)]"
                >
                  <Volume2 size={16} />
                  Listen
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-primary)]">{lesson.level}</p>
        <h1 className="text-3xl font-semibold">{lesson.title} 🇫🇷</h1>
        <p className="text-[color:var(--color-text-muted)]">{lesson.description}</p>

        <div className="rounded-[20px] border border-[color:var(--color-primary)]/20 bg-[color:var(--color-primary)]/10 p-4">
          <h2 className="font-semibold text-[color:var(--color-primary)]">Learning goal</h2>
          <p className="mt-1 text-[color:var(--color-text)]">{lesson.goal}</p>
        </div>

        <div className="rounded-[20px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-4">
          <h2 className="font-semibold">Learning objective</h2>
          <p className="mt-1 text-[color:var(--color-text-muted)]">{lesson.objective}</p>
        </div>

        <div className="rounded-[20px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-4">
          <h2 className="font-semibold">Why this matters in real life</h2>
          <p className="mt-1 text-[color:var(--color-text-muted)]">{lesson.whyItMatters}</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Vocabulary</h2>
        <Card>
          <div className="space-y-6">
            {vocabularyGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-text-muted)]">{group.title}</h3>
                <div className="mt-3 border-t border-[color:var(--color-border)]" />
                {renderVocabularyTable(group.words)}
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Useful phrases</h2>
        <Card>
          <ul className="space-y-2">
            {lesson.phrases.map((phrase) => (
              <li key={phrase.french} className="rounded-2xl border border-[color:var(--color-border)] p-3">
                <p className="font-medium">{phrase.french}</p>
                <p className="mt-1 text-sm text-[color:var(--color-text-muted)]">{phrase.english}</p>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Real conversation</h2>
        {lesson.conversation.map((line) => (
          <Card key={`${line.speaker}-${line.french}`}>
            <p className="font-semibold">{line.speaker}</p>
            <p className="mt-2 font-medium">{line.french}</p>
            <p className="mt-1 text-[color:var(--color-text-muted)]">{line.english}</p>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Grammar</h2>
        {lesson.grammar.map((item) => (
          <Card key={item.title}>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-2 text-[color:var(--color-text-muted)]">{item.explanation}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[color:var(--color-text-muted)]">
              {item.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Pronunciation focus</h2>
        {lesson.pronunciation.map((item) => (
          <Card key={item.rule}>
            <h3 className="font-semibold">Sound rule</h3>
            <p className="mt-2 text-[color:var(--color-text-muted)]">{item.rule}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[color:var(--color-text-muted)]">
              {item.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Culture tip</h2>
        <Card>
          <p className="text-[color:var(--color-text-muted)]">{lesson.cultureTip}</p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Practice</h2>
        <Card>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold">Multiple choice</h3>
              <ul className="mt-2 space-y-2">
                {practice.multipleChoice.map((item, index) => (
                  <li key={`${item.prompt}-${index}`} className="rounded-2xl border border-[color:var(--color-border)] p-3">
                    <p className="font-medium">{item.prompt}</p>
                    <p className="mt-1 text-sm text-[color:var(--color-text-muted)]">Answer: {item.answer}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Translation</h3>
              <ul className="mt-2 space-y-2">
                {practice.translation.map((item, index) => (
                  <li key={`${item.prompt}-${index}`} className="rounded-2xl border border-[color:var(--color-border)] p-3">
                    <p className="font-medium">{item.prompt}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Fill in the blanks</h3>
              <ul className="mt-2 space-y-2">
                {practice.fillInTheBlanks.map((item, index) => (
  <li
    key={`${item.prompt}-${index}`}
    className="rounded-2xl border border-[color:var(--color-border)] p-3"
  >
    <p className="font-medium">
      {item.prompt}
    </p>

    <input
      type="text"
      value={fillAnswers[index] || ""}
      onChange={(e) => {
        const updated = [...fillAnswers]
        updated[index] = e.target.value
        setFillAnswers(updated)
      }}
      placeholder="Your answer..."
      className="mt-3 w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-4 py-3 text-[color:var(--color-text)] placeholder:text-[color:var(--color-text-muted)] outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]"
    />

    {fillResults[index] !== undefined && (
      <div
        className={`mt-3 rounded-xl p-3 font-semibold transition-all duration-300 ${
          fillResults[index]
            ? "bg-green-500/20 text-green-600"
            : "bg-red-500/20 text-red-600"
        }`}
      >
        {fillResults[index] ? (
          <>
            <p>🎉 Correct!</p>
            <p className="text-sm mt-1">
              +10 XP
            </p>
          </>
        ) : (
          <>
            <p>❌ Try again</p>
            <p className="text-sm mt-1">
              Correct answer:
              {" "}
              {lessonAnswers[String(lessonId)]?.[item.prompt]?.join(", ")}
            </p>
          </>
        )}
      </div>
    )}
  </li>
))}
              </ul>

              <button
                onClick={() => {
                  const results = practice.fillInTheBlanks.map((item, i) => {

                    const acceptedAnswers =
                      lessonAnswers[String(lessonId)]?.[item.prompt] || []

                    return checkAnswer(
                      fillAnswers[i] || "",
                      acceptedAnswers
                    )

                  })

                  setFillResults(results)
                  setFillChecked(true)
                }}
                className="mt-4 rounded-xl bg-[color:var(--color-primary)] px-5 py-3 font-semibold text-white
                transition-all duration-200
                hover:scale-105 hover:shadow-lg
                active:scale-95
                cursor-pointer"
              >
                Check Answers
              </button>

            </div>

            <div>
              <h3 className="font-semibold">Speaking exercise</h3>
              <ul className="mt-2 space-y-2">
                {practice.speaking.map((item, index) => (
                  <li key={`${item}-${index}`} className="rounded-2xl border border-[color:var(--color-border)] p-3">
                    <p className="font-medium">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Homework</h2>
        <Card>
          <ul className="space-y-2">
            {lesson.homework.map((item, index) => (
              <li key={`${item.task}-${index}`} className="rounded-2xl border border-[color:var(--color-border)] p-3">
                <p className="font-medium">{item.task}</p>
                {item.example && <p className="mt-1 text-sm text-[color:var(--color-text-muted)]">{item.example}</p>}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Real-life mission</h2>
        <Card>
          <h3 className="font-semibold">{lesson.mission.title}</h3>
          <p className="mt-2 text-[color:var(--color-text-muted)]">{lesson.mission.description}</p>
        </Card>
      </section>

      {quizCompleted && (
        <button onClick={() => completeLesson(lesson.id)} className="rounded-full bg-[color:var(--color-success)] px-4 py-2.5 font-semibold text-white shadow-lg">
          Complete lesson ✅
        </button>
      )}

      <p className="text-sm text-[color:var(--color-text-muted)]">Completed lessons: {progress.completedLessons.length}</p>

      <Quiz questions={lesson.quiz} onComplete={() => setQuizCompleted(true)} />

<section className="space-y-4">
  <Card>
    <div className="flex flex-col gap-4">

      <h2 className="text-xl font-semibold">
        Finish this lesson 🎉
      </h2>

      <p className="text-[color:var(--color-text-muted)]">
        Complete this lesson to save your progress.
      </p>

      <button
        onClick={() => completeLesson(lesson.id)}
        className="rounded-xl bg-[color:var(--color-primary)] px-6 py-3 font-semibold text-white"
      >
        Complete Lesson
      </button>

    </div>
  </Card>
</section>

    </div>
  )
}

export default Lesson