"use client";

import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";
import VantaBackground from "../components/VantaBackground";
import Image from "next/image";
import Link from "next/link";
import profilePicture from "@/images/pfp.jpg";
import {
  SiKubernetes,
  SiGrafana,
  SiDocker,
  SiAmazonwebservices,
  SiGooglecloud,
  SiTerraform,
  SiGithub,
  SiApachesuperset,
} from "react-icons/si";
import { FaCode, FaCertificate, FaBook, FaNetworkWired, FaDatabase } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { Badge } from "@/components/ui/badge";

const skillData = [
  { name: "Kubernetes", value: 90, icon: <SiKubernetes className="w-5 h-5" /> },
  { name: "AWS", value: 90, icon: <SiAmazonwebservices className="w-5 h-5" /> },
  { name: "Observability", value: 100, icon: <SiGrafana className="w-5 h-5" /> },
  { name: "Leadership", value: 95, icon: <FaCode className="w-5 h-5" /> },
  { name: "Cloud Architect", value: 90, icon: <FaCertificate className="w-5 h-5" /> },
  { name: "Infrastructure as Code", value: 85, icon: <SiTerraform className="w-5 h-5" /> },
];

const otherSkills = [
  { name: "Docker", icon: <SiDocker className="w-4 h-4" /> },
  { name: "Azure", icon: <VscAzure className="w-4 h-4" /> },
  { name: "GCP", icon: <SiGooglecloud className="w-4 h-4" /> },
  { name: "SuperSet", icon: <SiApachesuperset className="w-4 h-4" /> },
  { name: "GitHub", icon: <SiGithub className="w-4 h-4" /> },
  { name: "Networking", icon: <FaNetworkWired className="w-4 h-4" /> },
  { name: "BigData", icon: <FaDatabase className="w-4 h-4" /> },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <VantaBackground />
      <main className="flex-grow flex flex-col items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-6xl flex lg:flex-row items-start flex-col gap-8">
          <div className="w-full lg:w-2/3 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex justify-center relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <Image
                  src={profilePicture}
                  alt="Dean van Zyl"
                  width={290}
                  height={290}
                  className="rounded-full shadow-lg w-[290px] h-[290px]"
                  priority
                />
                {/* Blog Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -top-2 -right-2 group"
                >
                  <Link href="/blog">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 p-4 rounded-full shadow-2xl cursor-pointer transition-all duration-200 border-2 border-white/20"
                    >
                      <FaBook className="w-6 h-6 text-white" />
                    </motion.div>
                    {/* Tooltip */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      Read my blog
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold mb-2 text-center"
            >
              Dean van Zyl
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl mb-8 text-center"
            >
              Cloud Native Director of Platform
            </motion.h2>
          </div>
          <div className="w-full lg:w-1/3 pl-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full"
            >
              <div>
                <h2 className="text-2xl font-bold my-4">About Me</h2>
                <p>
                  An Architect of efficiency, building robust scalable Platforms that empower innovation and accelerates delivery.
                </p>
                <h2 className="text-2xl font-bold my-4">Skills</h2>
                <div className="grid grid-cols-2 gap-3 w-full">
                  {skillData.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-lg p-4 hover:bg-slate-600/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-amber-400">
                          {skill.icon}
                        </div>
                        <h3 className="font-semibold text-sm text-gray-100">{skill.name}</h3>
                      </div>
                      
                      {/* Simplified display without percentages */}
                      <div className="relative">
                        <div className="w-full bg-slate-800 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.value}%` }}
                            transition={{ duration: 1.5, delay: 1 + index * 0.1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <h2 className="text-lg font-bold my-4">Other Skills</h2>
                <div className="flex flex-row flex-wrap gap-2 w-full">
                  {otherSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
                    >
                      <Badge className="gap-2 bg-slate-700/50 border border-slate-600/30 text-gray-100 hover:bg-slate-600/50 transition-colors duration-200">
                        <span className="text-amber-400">{skill.icon}</span>
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
                <h2 className="text-lg font-bold my-4">Certifications</h2>
                <motion.a
                  href="https://www.credly.com/users/dean-van-zyl/badges#credly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 border-2 border-white/20 shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCertificate className="w-4 h-4" />
                  View My Certifications
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <SocialLinks />
    </div>
  );
}
