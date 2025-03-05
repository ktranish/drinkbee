"use client";

import { Breadcrumb } from "@/components/breadcrumb";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  getArticleBySlug,
  getRelatedArticles,
  type BlogArticle,
} from "@/lib/blog-data";
import {
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  Share2,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<BlogArticle[]>([]);

  useEffect(() => {
    const fetchedArticle = getArticleBySlug(params.slug);

    if (!fetchedArticle) {
      notFound();
    }

    setArticle(fetchedArticle);
    setRelatedArticles(
      getRelatedArticles(params.slug, fetchedArticle.category),
    );
  }, [params.slug]);

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Estimate read time (1 min per 200 words)
  const getReadTime = (content: string) => {
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);
    return readTime;
  };

  // Convert markdown to HTML (simple version)
  const renderMarkdown = (markdown: string) => {
    // Process headings
    let html = markdown
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
      .replace(
        /^## (.*$)/gm,
        '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>',
      )
      .replace(
        /^### (.*$)/gm,
        '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>',
      );

    // Process lists
    html = html
      .replace(/^\* (.*$)/gm, '<li class="ml-6 list-disc">$1</li>')
      .replace(/^- (.*$)/gm, '<li class="ml-6 list-disc">$1</li>')
      .replace(/^(\d+)\. (.*$)/gm, '<li class="ml-6 list-decimal">$2</li>');

    // Wrap lists
    html = html
      .replace(
        /<\/li>\n<li class="ml-6 list-disc">/g,
        '</li><li class="ml-6 list-disc">',
      )
      .replace(
        /<\/li>\n<li class="ml-6 list-decimal">/g,
        '</li><li class="ml-6 list-decimal">',
      )
      .replace(
        /(<li class="ml-6 list-disc">.*<\/li>)/g,
        '<ul class="my-4">$1</ul>',
      )
      .replace(
        /(<li class="ml-6 list-decimal">.*<\/li>)/g,
        '<ol class="my-4">$1</ol>',
      );

    // Process paragraphs (any line that's not a heading or list)
    html = html.replace(
      /^(?!<h|<ul|<ol|<li|<\/ul|<\/ol)(.+$)/gm,
      '<p class="my-4 text-gray-800 dark:text-gray-300">$1</p>',
    );

    // Remove empty paragraphs
    html = html.replace(
      /<p class="my-4 text-gray-800 dark:text-gray-300"><\/p>/g,
      "",
    );

    return html;
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-white dark:bg-black">
      <Header />

      <article className="container mx-auto max-w-4xl px-4 py-12">
        <Breadcrumb
          items={[{ label: "Blog", href: "/blog" }, { label: article.title }]}
          className="mb-8"
        />

        {/* Article header */}
        <div className="mb-8">
          <div className="mb-4 inline-block rounded-full bg-yellow px-3 py-1 text-sm font-bold capitalize text-black">
            {article.category}
          </div>
          <h1 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <div className="mb-6 flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <img
                src={article.author.avatar || "/placeholder.svg"}
                alt={article.author.name}
                className="mr-3 h-10 w-10 rounded-full object-cover"
              />
              <span>{article.author.name}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{getReadTime(article.content)} min läsning</span>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="mb-10">
          <img
            src={article.coverImage || "/placeholder.svg"}
            alt={article.title}
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>

        {/* Article content */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content) }}
        />

        {/* Share buttons */}
        <div className="my-10 border-b border-t border-gray-200 py-6 dark:border-gray-800">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="flex items-center font-medium text-gray-700 dark:text-gray-300">
              <Share2 className="mr-2 h-5 w-5" />
              Dela denna artikel
            </span>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Share on Facebook</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Share on Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">Share on LinkedIn</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
              Relaterade artiklar
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.slug}
                  href={`/blog/${relatedArticle.slug}`}
                  className="group"
                >
                  <div className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 group-hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={relatedArticle.coverImage || "/placeholder.svg"}
                        alt={relatedArticle.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-black transition-colors group-hover:text-yellow dark:text-white dark:group-hover:text-yellow">
                        {relatedArticle.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                        {relatedArticle.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
