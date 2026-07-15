import { Link } from "react-router-dom"
import Card from "../components/Card"
import Button from "../components/Button"
import { lessons } from "../data/lessons"
import { useProgress } from "../hooks/useProgress"
import ProgressBar from "../components/ProgressBar"

function Home() {
  const todayLesson = lessons[0]
  const { progress } = useProgress()

  return (
    <div className="space-y-6">

      <section>
        <h2 className="text-3xl font-bold">
          Bonjour 👋
        </h2>

        <p className="text-gray-600">
          Continue your French journey today.
        </p>
      </section>


      <Card className="bg-blue-600 text-white">

        <h3 className="text-xl font-bold">
          Today's Lesson 🇫🇷
        </h3>

        <p className="mt-2">
          Day {todayLesson.id}: {todayLesson.title}
        </p>

        <p className="mt-1">
          {todayLesson.description}
        </p>


          <div className="mt-4">
  <Link to="/lessons/1">
    <Button>
      Start Lesson
    </Button>
  </Link>

        </div>

      </Card>


      <Card>

        <h3 className="font-bold text-lg">
          Your Progress
        </h3>
        <ProgressBar
  current={progress.completedLessons.length}
  total={90}
/>

        <p className="mt-2">
          Level: {todayLesson.level}
        </p>

        <p>
  Lessons completed: {progress.completedLessons.length}
</p>

      </Card>

    </div>
  )
}

export default Home