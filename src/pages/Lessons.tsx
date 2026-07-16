import { Link } from "react-router-dom"
import Card from "../components/Card"
import { lessonContent } from "../data/lessonContent"
import { useProgress } from "../hooks/useProgress"

function Lessons() {
  const { progress } = useProgress()

  const completedLessons = progress.completedLessons || []

  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-primary)]">Study roadmap</p>
        <h1 className="text-3xl font-semibold">French lessons 🇫🇷</h1>
        <p className="text-[color:var(--color-text-muted)]">
          A practical 30-day roadmap to everyday French confidence.
        </p>

        <p className="text-sm font-semibold text-[color:var(--color-primary)]">
          Progress: {completedLessons.length}/30 lessons completed
        </p>
      </section>

      <Card className="border-[color:var(--color-primary)]/20 bg-gradient-to-br from-[color:var(--color-primary)]/10 to-[color:var(--color-secondary)]/10">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">Daily structure</h2>
            <p className="mt-1 text-sm text-[color:var(--color-text-muted)]">
              One clear topic per day, with vocabulary, real conversation, grammar, and a mission.
            </p>
          </div>
          <span className="rounded-full border border-[color:var(--color-primary)]/20 bg-[color:var(--color-card)] px-3 py-1 text-sm font-semibold text-[color:var(--color-primary)]">
            30 days
          </span>
        </div>
      </Card>

      <div className="space-y-4">
        {lessonContent.map((lesson) => (
          <Link key={lesson.id} to={`/lessons/${lesson.id}`} className="block">
            <Card
              className={`transition hover:-translate-y-0.5 ${
                completedLessons.includes(lesson.id)
                  ? "border-green-500/40 bg-green-500/10"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold">Day {lesson.id}: {lesson.title}</h2>
                  <p className="mt-1 text-sm text-[color:var(--color-text-muted)]">{lesson.level}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    completedLessons.includes(lesson.id)
                      ? "bg-green-500/20 text-green-600"
                      : "bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]"
                  }`}
                >
                  {completedLessons.includes(lesson.id)
                    ? "✓ Completed"
                    : "Start"}
                </span>
              </div>
              <p className="mt-3 text-sm text-[color:var(--color-text-muted)]">
                Build practical French for everyday situations in France.
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Lessons
