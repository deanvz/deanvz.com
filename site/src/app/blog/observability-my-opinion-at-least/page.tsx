"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaLinkedin, FaGithub } from "react-icons/fa";
import VantaBackground from "@/components/VantaBackground";
import BlogTitle from "@/components/BlogTitle";
import BuyMeACoffee from "@/components/BuyMeACoffee";

export default function ObservabilityPost() {
  return (
    <div className="relative min-h-screen">
      <VantaBackground />
      
      {/* Buy Me a Coffee */}
      <BuyMeACoffee />
      
      <div className="relative z-10 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BlogTitle
              title="Observability | My opinion at least"
              date="September 6, 2025"
              author={{
                name: "Dean van Zyl",
                url: "https://www.linkedin.com/in/deanvz"
              }}
            />
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-dark rounded-2xl p-8 mb-8 prose prose-lg prose-slate prose-invert max-w-none"
          >
            {/* Work in Progress Notice */}
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-600/20 border-l-4 border-amber-500 rounded-r-lg p-6 mb-8">
              <p className="text-lg text-slate-200 mb-0 font-medium">
                🚧 This article is currently being written. Check back soon for insights on modern observability practices, monitoring strategies, and real-world implementation experiences.
              </p>
            </div>

            {/* Placeholder content structure with proper styling */}
            <div className="opacity-40 space-y-8">
              <section>
                <h2 className="text-3xl font-bold text-amber-400 mb-6 border-b border-amber-400/30 pb-3">
                  What is Observability?
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  [Content coming soon...]
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-amber-400 mb-6 border-b border-amber-400/30 pb-3">
                  The Three Pillars
                </h2>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-600/30">
                    <h3 className="text-xl font-semibold text-orange-400 mb-3">
                      📊 Metrics
                    </h3>
                    <p className="text-slate-400 text-sm">
                      [Content coming soon...]
                    </p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-600/30">
                    <h3 className="text-xl font-semibold text-orange-400 mb-3">
                      📝 Logs
                    </h3>
                    <p className="text-slate-400 text-sm">
                      [Content coming soon...]
                    </p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-600/30">
                    <h3 className="text-xl font-semibold text-orange-400 mb-3">
                      🔍 Traces
                    </h3>
                    <p className="text-slate-400 text-sm">
                      [Content coming soon...]
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-amber-400 mb-6 border-b border-amber-400/30 pb-3">
                  Implementation Strategies
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  [Content coming soon...]
                </p>
              </section>
            </div>
          </motion.article>

          {/* Custom Blog Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            {/* Author Info */}
            <div className="glass-dark rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/pfp.jpg"
                    alt="Dean van Zyl"
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-amber-400/50"
                  />
                  <div>
                    <div className="text-lg font-bold text-white">Dean van Zyl</div>
                    <div className="text-sm text-slate-300">
                      Cloud Native Director of Platform building robust scalable platforms that empower innovation.
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/deanvz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/deanvz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
              >
                <FaArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}