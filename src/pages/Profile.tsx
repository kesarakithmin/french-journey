import Card from "../components/Card"

function Profile() {
  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-primary)]">Your profile</p>
        <h1 className="text-3xl font-semibold">French study setup</h1>
        <p className="text-[color:var(--color-text-muted)]">
          Keep your routine focused on real conversations and everyday confidence.
        </p>
      </section>

      <Card>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">Study focus</h2>
            <p className="mt-1 text-sm text-[color:var(--color-text-muted)]">
              Daily practice, pronunciation, and real-life missions.
            </p>
          </div>
          <span className="rounded-full bg-[color:var(--color-primary)]/10 px-3 py-1 text-sm font-semibold text-[color:var(--color-primary)]">
            Premium path
          </span>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold">App preferences</h2>
        <ul className="mt-3 space-y-3 text-sm text-[color:var(--color-text-muted)]">
          <li>• Install the app to study offline when you need a quiet moment.</li>
          <li>• Use the theme switcher to match your environment and comfort.</li>
          <li>• Follow the roadmap one day at a time for better retention.</li>
        </ul>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold">What this course prioritizes</h2>
        <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-text-muted)]">
          <li>• Travel and daily life in France</li>
          <li>• Speaking with confidence</li>
          <li>• Practical grammar without overload</li>
        </ul>
      </Card>
    </div>
  )
}

export default Profile