interface ProgressBarProps {
  current: number
  total: number
}

function ProgressBar({ current, total }: ProgressBarProps) {

  const percentage = Math.round((current / total) * 100)

  return (
    <div className="space-y-2">

      <div className="flex justify-between text-sm">
        <span>Progress</span>
        <span>
          {current}/{total} lessons
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>

    </div>
  )
}

export default ProgressBar