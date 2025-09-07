"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  FaDocker, 
  FaAws,
  FaRocket,
  FaCloud,
  FaEye,
  FaCogs,
  FaCode,
  FaShieldAlt
} from "react-icons/fa";
import { 
  SiKubernetes, 
  SiPrometheus, 
  SiGrafana, 
  SiTerraform
} from "react-icons/si";
import VantaBackground from "@/components/VantaBackground";
import SkillWheel from "@/components/SkillWheel";
import SocialLinks from "@/components/SocialLinks";
import BuyMeACoffee from "@/components/BuyMeACoffee";

const skills = [
  { name: "Kubernetes", icon: <SiKubernetes />, value: 20 },
  { name: "AWS", icon: <FaAws />, value: 25 },
  { name: "Docker", icon: <FaDocker />, value: 15 },
  { name: "Terraform", icon: <SiTerraform />, value: 18 },
  { name: "Prometheus", icon: <SiPrometheus />, value: 12 },
  { name: "Grafana", icon: <SiGrafana />, value: 10 },
];

const additionalSkills = [
  { name: "Platform Engineering", value: 95, icon: <FaRocket /> },
  { name: "Cloud Architecture", value: 90, icon: <FaCloud /> },
  { name: "Observability", value: 88, icon: <FaEye /> },
  { name: "CI/CD Pipelines", value: 85, icon: <FaCogs /> },
  { name: "Infrastructure as Code", value: 92, icon: <FaCode /> },
  { name: "Site Reliability Engineering", value: 87, icon: <FaShieldAlt /> },
];

export default function Home() {
  return (
    <>
      <VantaBackground />
      <main className="relative">
        {/* Social Links */}
        <SocialLinks />
        
        {/* Buy Me a Coffee */}
        <BuyMeACoffee />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Left side - Profile Picture */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center lg:justify-start"
              >
                <Image
                  src="/images/pfp.jpg"
                  alt="Dean van Zyl"
                  width={280}
                  height={280}
                  className="rounded-full border-4 border-amber-500/30 shadow-2xl"
                  priority
                />
              </motion.div>
              
              {/* Middle - Name and Info */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                  Dean van Zyl
                </h1>
                <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed">
                  An Architect of efficiency, building robust scalable Platforms that empower innovation and accelerates delivery.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                  <Link 
                    href="/blog"
                    className="glass-dark px-6 py-3 rounded-lg text-amber-400 hover:text-amber-300 font-semibold transition-all duration-300 hover:scale-105 border border-amber-500/20 hover:border-amber-500/40 text-sm"
                  >
                    View Blog
                  </Link>
                  <motion.a 
                    href="https://www.credly.com/users/deanvz"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-dark px-6 py-3 rounded-lg text-slate-300 hover:text-white font-semibold transition-all duration-300 border border-slate-500/20 hover:border-slate-400/40 text-sm"
                  >
                    Certifications
                  </motion.a>
                </div>
                
                {/* Technologies & Tools Icons */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-slate-400 mb-3 text-center lg:text-left">Technologies & Tools</h4>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="glass-dark p-3 rounded-lg flex items-center justify-center hover:border-amber-500/30 transition-all duration-300"
                        title={skill.name}
                      >
                        <div className="text-2xl text-amber-400">
                          {skill.icon}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right side - Compact Skills Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-3"
              >
                <h3 className="text-lg font-bold text-slate-100 mb-3 text-center lg:text-left">
                  Core Skills
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {additionalSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="glass-dark p-4 rounded-lg flex flex-col items-center text-center gap-2"
                    >
                      <div className="text-amber-400 text-2xl">
                        {skill.icon}
                      </div>
                      <span className="text-slate-200 font-medium text-xs leading-tight">{skill.name}</span>
                      <div className="w-full bg-slate-700 rounded-full h-1">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.value}%` }}
                          transition={{ duration: 1, delay: 1 + index * 0.1 }}
                          className="h-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-600"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}