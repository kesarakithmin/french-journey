import { Link, Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 bg-blue-600 text-white">
        <h1 className="text-2xl font-bold">
          French Journey 🇫🇷
        </h1>
      </header>

      <main className="p-4">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 w-full bg-white border-t p-3 flex justify-around">
        <Link to="/">Home</Link>
        <Link to="/lessons">Lessons</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </div>
  )
}

export default Layout