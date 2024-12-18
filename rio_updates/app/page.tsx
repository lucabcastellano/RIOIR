'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Twitter } from 'lucide-react'
import Link from 'next/link'

interface Post {
  year: string
  title: string
  views: number
  slug: string
}

const posts: Post[] = [
  { year: "2024", title: "Novembro e Dezembro", views: 75958, slug: "rio-update-novembro-dezembro-2024" },
  { year: "2024", title: "Outubro", views: 39732, slug: "rio-update-outubro-2024" },
  { year: "2024", title: "Setembro", views: 31271, slug: "rio-update-setembro-2024" },
  { year: "2024", title: "Agosto", views: 32800, slug: "rio-update-agosto-2024" },
  { year: "2020", title: "Static Hoisting", views: 38135, slug: "static-hoisting" },
  { year: "2020", title: "An ode to code golf", views: 16917, slug: "code-golf" },
  { year: "2020", title: "Vercel", views: 58673, slug: "vercel" },
  { year: "2020", title: "2019 in Review", views: 65142, slug: "2019-in-review" },
  { year: "2017", title: "It's Hard to Forego Efficiency", views: 44818, slug: "hard-to-forego-efficiency" },
  { year: "2016", title: "Addressable Errors", views: 21869, slug: "addressable-errors" },
  { year: "2015", title: "Pure UI", views: 689736, slug: "pure-ui" },
  { year: "2015", title: "ECMAScript 6", views: 125951, slug: "ecmascript-6" },
  { year: "2014", title: "7 Principles of Rich Web Applications", views: 714359, slug: "7-principles" },
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
            <Link href="/">RIO Endowment</Link>
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
              href="https://www.rioendowment.com/"
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
                  <td className="py-2 pl-8 text-right text-muted-foreground tabular-nums">
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

