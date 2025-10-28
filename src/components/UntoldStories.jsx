import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import herosection from "../../public/Image/herosection.jpeg"


// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'How to Install a Used Engine (Step-by-Step Guide for Drivers & DIY Owners)',
    excerpt: "If your car's engine has failed, replacing it with a used engine...",
    image: herosection
  },
  {
    id: 2,
    title: 'Top 5 Car Engine Sensors That Dramatically Improve Fuel Efficiency Across...',
    excerpt: 'Modern cars are no longer simple mechanical machines...',
    image: herosection
  },
  {
    id: 3,
    title: "Timing Belt vs. Timing Chain: What's the Difference & Which Is Better?",
    excerpt: 'When it comes to engine reliability and performance...',
    image: herosection
  },
  {
    id: 4,
    title: 'Dashboard Indicator Lights: Check Engine Light & Dashoboard Symbol Mean',
    excerpt: 'Your car has a built-in language—it communicates through...',
    image: herosection
  },
  {
    id: 5,
    title: 'Understanding Turbochargers: How They Work and Why You Need One',
    excerpt: 'Turbochargers have revolutionized automotive performance...',
    image: herosection
  },
  {
    id: 6,
    title: 'Electric vs. Hybrid Engines: Which One Is Right for You?',
    excerpt: 'The automotive industry is rapidly evolving with new technologies...',
    image: herosection
  },
  {
    id: 7,
    title: 'Common Engine Problems and How to Diagnose Them',
    excerpt: 'Every car owner will face engine issues at some point...',
    image: herosection
  },
  {
    id: 8,
    title: 'The Complete Guide to Engine Oil: Types, Grades, and Change Intervals',
    excerpt: 'Engine oil is the lifeblood of your vehicle...',
    image: herosection
  }
];

export default function UntoldStories() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Calculate current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Pagination handlers
  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);
  const goToPreviousPage = () => setCurrentPage(prev => Math.max(1, prev - 1));
  const goToNextPage = () => setCurrentPage(prev => Math.min(totalPages, prev + 1));
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-12">
          Untold Stories
        </h2>

        {/* Blog Posts Grid */}
        <div className="grid max-w-5xl mx-auto  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentPosts.map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.id}`}
              className="group cursor-pointer"
            >
              <div className="bg-black text-white border text-center border-amber-200  overflow-hidden shadow-lg  h-full flex flex-col">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover "
                  />
                </div>

                {/* Content */}
                <div className="p-3 flex-1 flex flex-col">
                  <h3 className="text-xs  mb-3 line-clamp-3 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs  text-gray-600 hover:text-white line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          {/* First Page */}
          <button
            onClick={goToFirstPage}
            disabled={currentPage === 1}
            className="p-2 rounded hover:bg-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="First page"
          >
            <ChevronsLeft className="w-5 h-5" />
          </button>

          {/* Previous Page */}
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="p-2 rounded hover:bg-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => goToPage(pageNumber)}
              className={`w-10 h-10  transition-colors ${
                currentPage === pageNumber
                  ? 'bg-white text-black font-semibold'
                  : 'hover:bg-gray-800'
              }`}
            >
              {pageNumber}
            </button>
          ))}

          {/* Next Page */}
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="p-2 rounded hover:bg-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Last Page */}
          <button
            onClick={goToLastPage}
            disabled={currentPage === totalPages}
            className="p-2 rounded hover:bg-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Last page"
          >
            <ChevronsRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}