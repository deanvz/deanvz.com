"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import VantaBackground from "../../components/VantaBackground";
import blogPosts from "../../static/blog_posts.json";
import { FaArrowLeft } from "react-icons/fa";

export default function Blog() {
  return (
    <div className="min-h-screen relative">
      <VantaBackground />
      <div className="relative z-10 min-h-screen bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="flex justify-start mb-6">
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 border-2 border-white/20 shadow-2xl"
                >
                  <FaArrowLeft className="w-4 h-4" />
                  Back to Home
                </motion.div>
              </Link>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Dean&apos;s Blog
              </h1>
              <p className="text-xl text-gray-300">
                Insights on cloud architecture, platform engineering, and modern development practices
              </p>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readingTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-3 hover:text-amber-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-700/50 text-amber-400 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      By {post.author} • {new Date(post.date).toLocaleDateString()}
                    </div>
                    
                    <Link href={`/blog/${post.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
                      >
                        Read Article
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {blogPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center py-16"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-300 mb-2">Coming Soon</h3>
                  <p className="text-gray-400">
                    New articles are being written. Check back soon for insights on cloud architecture and platform engineering!
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}