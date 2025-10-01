import Link from 'next/link'
import { LightRays } from '@/components/ui/light-rays'
import { getAllBlogPosts } from '@/lib/blog'
import { BlogHeader } from '@/components/blog-header'

export default function BlogPage() {
  const posts = getAllBlogPosts()

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
          <div className="flex-1 bg-[#FAFAF9] rounded-tl-3xl shadow-xl p-8 md:p-12 overflow-y-auto border-l-2 border-blue-200/40" style={{ fontFamily: 'Charter, Georgia, serif' }}>
            {/* Blog posts list */}
            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <article className="border-b border-gray-200 pb-8 last:border-b-0 max-w-2xl">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h2>
                    <div className="text-sm text-gray-500 mb-3">
                      <span>{post.author}</span>
                      <br />
                      <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </div>
                    <p className="text-gray-600">
                      {post.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
