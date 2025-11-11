import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [mode, setMode] = useState('login') // 'login' | 'register'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const [me, setMe] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (token) {
      fetch(`${API_BASE}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((r) => (r.ok ? r.json() : Promise.reject('Unauthorized')))
        .then(setMe)
        .catch(() => setMe(null))
    }
  }, [token])

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      if (mode === 'register') {
        const res = await fetch(`${API_BASE}/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, name }),
        })
        if (!res.ok) throw new Error(await res.text())
        const data = await res.json()
        localStorage.setItem('token', data.access_token)
        setToken(data.access_token)
      } else {
        const res = await fetch(`${API_BASE}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        })
        if (!res.ok) throw new Error(await res.text())
        const data = await res.json()
        localStorage.setItem('token', data.access_token)
        setToken(data.access_token)
      }
      setEmail('')
      setPassword('')
      setName('')
      setMode('login')
    } catch (err) {
      setError('Authentication failed. Check your details and try again.')
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    setMe(null)
  }

  if (token && me) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        <header className="flex items-center justify-between max-w-4xl mx-auto p-6">
          <h1 className="text-xl font-semibold text-slate-800">Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="text-slate-600">Hi, {me.name || me.email}</span>
            <button onClick={logout} className="px-3 py-2 rounded-md bg-slate-800 text-white hover:bg-slate-700">Logout</button>
          </div>
        </header>
        <main className="max-w-4xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl bg-white shadow border border-slate-100">
              <h2 className="text-slate-800 font-medium">Welcome</h2>
              <p className="text-slate-600 mt-2 text-sm">You're logged in. This is a starter dashboard area where you can add widgets and stats.</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow border border-slate-100">
              <h2 className="text-slate-800 font-medium">Quick Links</h2>
              <ul className="text-slate-600 mt-2 text-sm list-disc list-inside">
                <li>Profile</li>
                <li>Settings</li>
                <li>Reports</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-white shadow border border-slate-100">
              <h2 className="text-slate-800 font-medium">Status</h2>
              <p className="text-slate-600 mt-2 text-sm">All systems operational.</p>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-slate-100 p-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">{mode === 'login' ? 'Sign in to your dashboard' : 'Create your account'}</h2>

        {error && (
          <div className="mb-4 p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded">{error}</div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-sm text-slate-600 mb-1">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
            </div>
          )}
          <div>
            <label className="block text-sm text-slate-600 mb-1">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 font-medium">
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-sm text-slate-600 mt-4">
          {mode === 'login' ? (
            <>Don't have an account? <button onClick={() => setMode('register')} className="text-indigo-600 hover:underline">Register</button></>
          ) : (
            <>Already have an account? <button onClick={() => setMode('login')} className="text-indigo-600 hover:underline">Sign in</button></>
          )}
        </p>
      </div>
    </div>
  )
}

export default App
