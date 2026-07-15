interface ProgressBarProps {
  current: number
  total: number
}

function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-[color:var(--color-text-muted)]">
        <span>Progress</span>
        <span className="font-semibold text-[color:var(--color-text)]">
          {current}/{total} lessons
        </span>
      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-[color:var(--color-border)]">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar