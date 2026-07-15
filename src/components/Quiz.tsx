import { useState } from "react"
import type { Question } from "../types/lesson"
import Card from "./Card"

interface QuizProps {
  questions: Question[]
  onComplete?: (score: number) => void
}
function Quiz({ questions, onComplete }: QuizProps) {

  const [answers, setAnswers] = useState<string[]>([])

  function selectAnswer(
    questionIndex: number,
    answer: string
  ) {
    const updated = [...answers]
    updated[questionIndex] = answer
    setAnswers(updated)
  }

  const score = questions.filter(
    (question, index) =>
      answers[index] === question.answer
  ).length


  return (
    <div className="space-y-4">

      <h2 className="text-xl font-bold">
        Quiz 🧠
      </h2>

      {questions.map((question, index) => (

        <Card key={index}>

          <h3 className="font-bold">
            {question.question}
          </h3>


          <div className="mt-3 space-y-2">

            {question.options.map((option) => (

              <button
                key={option}
                onClick={() =>
                  selectAnswer(index, option)
                }
                className={`w-full border p-2 rounded-lg text-left ${
                  answers[index] === option
                    ? "bg-blue-100"
                    : ""
                }`}
              >
                {option}
              </button>

            ))}

          </div>

        </Card>

      ))}


      <Card>
  <p className="font-bold">
    Score: {score}/{questions.length}
  </p>

  {score === questions.length && onComplete && (
    <button
      onClick={() => onComplete(score)}
      className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
    >
      Finish Quiz ✅
    </button>
  )}
</Card>


    </div>
  )
}

export default Quiz