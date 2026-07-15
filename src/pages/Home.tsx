import { Link } from "react-router-dom"
import Card from "../components/Card"
import Button from "../components/Button"
import { lessonContent } from "../data/lessonContent"
import { useProgress } from "../hooks/useProgress"
import ProgressBar from "../components/ProgressBar"

function Home() {
  const todayLesson = lessonContent[0]
  const { progress } = useProgress()

  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-primary)]">Welcome back</p>
        <h2 className="text-3xl font-semibold">Bonjour 👋</h2>
        <p className="max-w-2xl text-[color:var(--color-text-muted)]">
          Your structured French path for real life in France starts here.
        </p>
      </section>

      <Card className="bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-secondary)] text-white">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Today’s lesson</p>
            <h3 className="mt-2 text-xl font-semibold">{todayLesson.title}</h3>
            <p className="mt-2 text-sm text-white/90">{todayLesson.description}</p>
          </div>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">Day {todayLesson.id}</span>
        </div>
        <div className="mt-5">
          <Link to="/lessons/1">
            <Button className="border border-white/20 bg-[color:var(--color-surface)]/95 text-[color:var(--color-text)] shadow-[0_10px_30px_rgba(2,6,23,0.24)]">Start lesson</Button>
          </Link>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Your progress</h3>
          <span className="text-sm font-semibold text-[color:var(--color-primary)]">
            {progress.completedLessons.length}/30 days
          </span>
        </div>
        <ProgressBar current={progress.completedLessons.length} total={30} />
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-3 py-1.5 text-[color:var(--color-text-muted)]">
            Level: <span className="font-semibold text-[color:var(--color-text)]">{todayLesson.level}</span>
          </span>
          <span className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-3 py-1.5 text-[color:var(--color-text-muted)]">
            Completed: <span className="font-semibold text-[color:var(--color-text)]">{progress.completedLessons.length} lessons</span>
          </span>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold">What you’ll learn</h3>
        <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-text-muted)]">
          <li>• Everyday conversations in France</li>
          <li>• Shopping, transport, and admin tasks</li>
          <li>• Work, healthcare, and apartment situations</li>
          <li>• A clear path from A1 to B1</li>
        </ul>
      </Card>
    </div>
  )
}

export default Home