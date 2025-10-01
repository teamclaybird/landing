import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LightRays } from '@/components/ui/light-rays'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog'
import { BlogHeader } from '@/components/blog-header'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <BlogHeader />

      {/* Main content with background */}
      <main className="fixed inset-0 top-[80px] overflow-hidden">
        {/* Light rays background */}
        <div className="fixed inset-0 pointer-events-none">
          <LightRays count={10} color="rgba(160, 210, 255, 0.3)" blur={40} speed={16} length="60vh" />
        </div>

        {/* Blog layout */}
        <div className="relative z-10 flex flex-col md:flex-row h-full">
          {/* Sidebar - outside white container */}
          <aside className="w-full md:w-80 flex-shrink-0 px-6 md:pl-12 lg:pl-24 py-12">
            <h2 className="text-2xl font-bold text-white mb-4">Blog</h2>
            <p className="text-sm text-gray-300 mb-8 max-w-[200px]">
              Compiled notes from the Claybird team
            </p>

            <nav className="space-y-1">
              <h3 className="text-sm font-semibold text-white mb-3">Latest</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Announcements
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Inside Claybird
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Tutorials
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* White content canvas - full height and width */}
          <div className="flex-1 bg-[#FAFAF9] rounded-tl-3xl shadow-xl p-8 md:p-12 overflow-y-auto border-l-2 border-blue-200/40">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-12 transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
              <span className="ml-2">Back to Blog</span>
            </Link>

            {/* Post content */}
            <article className="max-w-3xl mx-auto" style={{ fontFamily: 'Charter, Georgia, serif' }}>
              <div className="prose prose-xl max-w-none
                prose-headings:font-bold prose-headings:tracking-tight
                prose-h1:text-5xl prose-h1:mb-8
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:my-6 prose-li:my-2
                prose-li:marker:text-gray-400">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  )
}
