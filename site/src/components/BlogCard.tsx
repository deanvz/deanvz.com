"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaClock, FaCalendar, FaUser, FaArrowRight, FaStar } from "react-icons/fa";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
  category: string;
  author: string;
  lastModified: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group ${
        post.featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-2xl p-6 h-full hover:bg-slate-700/30 hover:border-amber-500/30 transition-all duration-300 hover:scale-[1.02]">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
            {post.featured && (
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <FaStar className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h2 className={`font-bold text-white mb-3 group-hover:text-amber-400 transition-colors ${
          post.featured ? "text-2xl md:text-3xl" : "text-xl"
        }`}>
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className={`text-gray-300 mb-4 leading-relaxed ${
          post.featured ? "text-lg" : "text-base"
        }`}>
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, post.featured ? 4 : 3).map((tag) => (
            <span
              key={tag}
              className="bg-slate-700/50 text-amber-400 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
          {post.tags.length > (post.featured ? 4 : 3) && (
            <span className="text-gray-400 text-xs px-2 py-1">
              +{post.tags.length - (post.featured ? 4 : 3)} more
            </span>
          )}
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FaUser className="w-3 h-3" />
              {post.author}
            </div>
            <div className="flex items-center gap-1">
              <FaCalendar className="w-3 h-3" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-1">
              <FaClock className="w-3 h-3" />
              {post.readingTime}
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <Link href={`/blog/${post.id}`}>
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium"
          >
            Read Article
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;