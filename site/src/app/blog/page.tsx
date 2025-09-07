"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import BlogCard from "@/components/BlogCard";
import VantaBackground from "@/components/VantaBackground";
import BuyMeACoffee from "@/components/BuyMeACoffee";
import blogPosts from "../../static/blog_posts.json";

export default function Blog() {
  return (
    <div className="relative min-h-screen">
      <VantaBackground />
      
      {/* Buy Me a Coffee */}
      <BuyMeACoffee />
      
      <div className="relative z-10 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-8 group"
            >
              <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Dean&apos;s Blog
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Insights on cloud architecture, platform engineering, and modern development practices
              </p>
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-md mx-auto mb-12"
          >
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
            />
          </motion.div>

          {/* Blog Posts Grid */}
          {blogPosts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {blogPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center py-20"
            >
              <div className="glass-dark rounded-2xl p-12 max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-slate-200 mb-4">
                  Coming Soon
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  New articles are being written. Check back soon for insights on cloud architecture and platform engineering!
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}