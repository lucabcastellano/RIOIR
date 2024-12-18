'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Twitter } from 'lucide-react'
import Link from 'next/link'

interface Post {
  year: string
  title: string
  //  views: number
  slug: string
}

const posts: Post[] = [
  { year: "2024", title: "RIO Endowment Update: Novembro e Dezembro de 2024", slug: "rio-endowment-update-novembro-dezembro-2024" },
  { year: "2024", title: "RIO Endowment Update: Outubro de 2024", slug: "rio-endowment-update-outubro-2024" },
  { year: "2024", title: "RIO Endowment Update: Setembro de 2024", slug: "rio-endowment-update-setembro-2024" },
  { year: "2024", title: "RIO Endowment Update: Agosto de 2024",  slug: "rio-endowment-update-agosto-2024" },
]

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <div className="mx-auto max-w-2xl px-6">
        <header className="py-8 flex items-center justify-between">
          <h1 className="text-lg font-medium tracking-tight">
            <Link href="/">Guillermo Rauch</Link>
          </h1>
          <nav className="flex items-center space-x-6">
            <button
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground"
            >
              {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <Link 
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="https://twitter.com/rauchg"
              className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center"
            >
              <Twitter className="h-4 w-4 mr-1" />
              Follow me
            </Link>
          </nav>
        </header>

        <main className="py-8">
          <table className="w-full border-collapse text-sm">
            <thead className="text-muted-foreground">
              <tr>
                <th className="py-2 pr-8 font-normal text-left">date</th>
                <th className="py-2 px-8 font-normal text-left">title</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              {posts.map((post, i) => (
                <tr key={i} className="group">
                  <td className="py-2 pr-8 align-top whitespace-nowrap">
                    {post.year}
                  </td>
                  <td className="py-2 px-8">
                    <Link
                      href={`/${post.slug}`}
                      className="group-hover:underline decoration-muted-foreground/30"
                    >
                      {post.title}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  )
}

