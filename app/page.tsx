"use client"

import { useState, useEffect } from "react"
import { articlesService, type Article } from "@/lib/api/articles.service"
import { ArticleCard } from "@/components/article-card"
import { ArticleFilters } from "@/components/article-filters"
import { LoadingSpinner } from "@/components/loading-spinner"
import { ErrorMessage } from "@/components/error-message"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [sortBy, setSortBy] = useState<"date" | "popularity" | "author">("date")

  useEffect(() => {
    loadArticles()
  }, [sortBy])

  const loadArticles = async () => {
    setIsLoading(true)
    setError("")

    try {
      const data = await articlesService.getArticles()
      setArticles(data)
    } catch (err: any) {
      console.error("[v0] Error loading articles:", err)
      setError("Failed to load articles. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif font-bold">Recent Articles</h2>
          <ArticleFilters sortBy={sortBy} onSortChange={setSortBy} />
        </div>

        {isLoading && (
          <div className="flex justify-center py-12">
            <LoadingSpinner />
          </div>
        )}

        {error && (
          <div className="flex justify-center py-12">
            <ErrorMessage message={error} />
          </div>
        )}

        {!isLoading && !error && articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found. Be the first to write one!</p>
          </div>
        )}

        {!isLoading && !error && articles.length > 0 && (
          <div className="grid gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
