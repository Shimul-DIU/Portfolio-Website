import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Dummy blog posts data – replace with your own
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use useState, useEffect, and custom hooks to build dynamic React applications.",
    date: "August 5, 2026",
    author: "Md. Shimul",
    image: "/images/hook.jpg",
    slug: "getting-started-with-react-hooks",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt: "Utility-first CSS framework that speeds up your workflow. Learn the best practices and advanced techniques.",
    date: "July 28, 2026",
    author: "Md. Shimul",
    image: "/images/tailwindcss.jpg",
    slug: "mastering-tailwind-css",
  },
  {
    id: 3,
    title: "Node.js Microservices with Docker",
    excerpt: "Build scalable backend services using Node.js, Express, and Docker containers.",
    date: "July 15, 2026",
    author: "Md. Shimul",
    image: "/images/nodejs.png",
    slug: "nodejs-microservices-docker",
  },
  {
    id: 4,
    title: "Building a Portfolio with React ",
    excerpt: "Add smooth animations and transitions to your React portfolio to make it stand out.",
    date: "June 30, 2026",
    author: "Md. Shimul",
    image: "/images/react.png",
    slug: "react-framer-motion-portfolio",
  },
  {
    id: 5,
    title: "Database Optimization for MongoDB",
    excerpt: "Tips and tricks to optimize MongoDB queries and indexes for high-performance applications.",
    date: "June 20, 2026",
    author: "Md. Shimul",
    image: "/images/mongodb.png",
    slug: "mongodb-optimization",
  },
  {
    id: 6,
    title: "State Management in React: Redux vs Context API",
    excerpt: "Compare the two most popular state management solutions and choose the right one for your project.",
    date: "June 10, 2026",
    author: "Md. Shimul",
    image: "/images/redux.png",
    slug: "redux-vs-context-api",
  },
];

const BlogComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="max-w-7xl mx-auto min-h-fit bg-[#0F1117] flex items-center py-8 px-3 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        className={`max-w-5xl mx-auto w-full border border-[#262936] bg-[#171923] p-4 sm:p-6 rounded-2xl transition-all duration-1000 ease-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* Header */}
        <div className="text-center mb-8">
         
          <h2 className="font-['Playfair_Display'] text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F5EFE6] leading-tight">
            Latest Articles
          </h2>
          <p className="text-[#F5EFE6]/60 text-sm sm:text-base font-['Inter'] mt-2 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development and technology.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#0F1117] rounded-xl overflow-hidden border border-[#262936] transition-all duration-300 hover:border-[#C9A876]/50 hover:-translate-y-1 hover:shadow-xl flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/9] bg-[#222629] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x225/1a1a2e/C9A876?text=Blog+Post";
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-[#F5EFE6]/50 font-['Inter'] mb-2">
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-[#C9A876] text-[10px]" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faUser} className="text-[#C9A876] text-[10px]" />
                    {post.author}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-['Playfair_Display'] text-lg sm:text-xl font-bold text-[#F5EFE6] leading-tight mb-2 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#F5EFE6]/70 text-sm font-['Inter'] leading-relaxed flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 mt-4 text-[#C9A876] text-sm font-['Inter'] font-medium hover:gap-3 transition-all duration-300 group"
                >
                  <span>Read More</span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button (Optional) */}
        <div className="text-center mt-8">
          <a
            href="/blog"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#C9A876]/40 bg-transparent px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#F5EFE6] transition-all duration-300 hover:bg-[#C9A876] hover:text-[#140D0A] hover:-translate-y-0.5 font-['Inter']"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;