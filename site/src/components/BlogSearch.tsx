"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaTimes, FaFilter } from "react-icons/fa";

interface BlogSearchProps {
  onSearch: (query: string) => void;
  onTagFilter: (tag: string) => void;
  onCategoryFilter: (category: string) => void;
  availableTags: string[];
  availableCategories: string[];
  selectedTag: string;
  selectedCategory: string;
}

const BlogSearch = ({
  onSearch,
  onTagFilter,
  onCategoryFilter,
  availableTags,
  availableCategories,
  selectedTag,
  selectedCategory,
}: BlogSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const clearFilters = () => {
    setSearchQuery("");
    onSearch("");
    onTagFilter("");
    onCategoryFilter("");
  };

  const hasActiveFilters = searchQuery || selectedTag || selectedCategory;

  return (
    <div className="max-w-4xl mx-auto mb-8">
      {/* Search Bar */}
      <div className="relative mb-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            )}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-200 ${
              showFilters || hasActiveFilters
                ? "bg-amber-600 text-white"
                : "bg-slate-800/50 text-gray-300 hover:text-white"
            }`}
          >
            <FaFilter className="w-4 h-4" />
            Filters
          </motion.button>
        </div>
      </div>

      {/* Filters Panel */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: showFilters ? 1 : 0, 
          height: showFilters ? "auto" : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-xl p-6 space-y-4">
          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onCategoryFilter("")}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  !selectedCategory
                    ? "bg-amber-600 text-white"
                    : "bg-slate-700/50 text-gray-300 hover:text-white"
                }`}
              >
                All
              </button>
              {availableCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryFilter(category === selectedCategory ? "" : category)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedCategory === category
                      ? "bg-amber-600 text-white"
                      : "bg-slate-700/50 text-gray-300 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onTagFilter("")}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  !selectedTag
                    ? "bg-amber-600 text-white"
                    : "bg-slate-700/50 text-gray-300 hover:text-white"
                }`}
              >
                All
              </button>
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => onTagFilter(tag === selectedTag ? "" : tag)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedTag === tag
                      ? "bg-amber-600 text-white"
                      : "bg-slate-700/50 text-gray-300 hover:text-white"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <div className="pt-2 border-t border-slate-600/20">
              <button
                onClick={clearFilters}
                className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default BlogSearch;