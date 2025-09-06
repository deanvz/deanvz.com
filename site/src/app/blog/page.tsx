"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeftIcon, BookIcon } from "lucide-react";
import allPosts from "@/static/blog_posts.json";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-500 hover:text-green-600 mb-6"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-300">
            Thoughts on cloud-native platforms, observability, and building scalable systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {allPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link href={`/blog/${post.id}`}>
                <div className="bg-gray-800 hover:bg-gray-700 p-6 rounded-lg transition-colors duration-200 cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2 text-white hover:text-green-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-400 mb-4">{post.date}</p>
                    </div>
                    <BookIcon className="w-6 h-6 text-green-500 mt-1 ml-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {allPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-gray-400 mt-12"
          >
            <BookIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No blog posts yet. Check back soon!</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}