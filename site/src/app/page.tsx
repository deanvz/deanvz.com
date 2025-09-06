"use client";

import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";
import VantaBackground from "../components/VantaBackground";
import Image from "next/image";
import profilePicture from "@/images/pfp.jpg";
import {
  SiKubernetes,
  SiGrafana,
  SiDocker,
  SiAmazonwebservices,
  SiGooglecloud,
  SiTerraform,
} from "react-icons/si";
import { FaCode, FaCertificate } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { Badge } from "@/components/ui/badge";

const skillData = [
  { name: "Kubernetes", value: 90, icon: <SiKubernetes className="w-4 h-4" /> },
  { name: "AWS", value: 90, icon: <SiAmazonwebservices className="w-4 h-4" /> },
  { name: "Observability", value: 85, icon: <SiGrafana className="w-4 h-4" /> },
  { name: "Leadership", value: 95, icon: <FaCode className="w-4 h-4" /> },
  { name: "Cloud Architect", value: 90, icon: <FaCertificate className="w-4 h-4" /> },
  { name: "Infrastructure as Code", value: 85, icon: <SiTerraform className="w-4 h-4" /> },
];

const otherSkills = [
  { name: "Docker", icon: <SiDocker className="w-4 h-4" /> },
  { name: "Azure", icon: <VscAzure className="w-4 h-4" /> },
  { name: "GCP", icon: <SiGooglecloud className="w-4 h-4" /> },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <VantaBackground />
      <main className="flex-grow flex flex-col items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-6xl flex lg:flex-row items-center flex-col">
          <div className="w-full md:w-2/3 pr-8 relative">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex justify-center relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={profilePicture}
                  alt="Dean van Zyl"
                  width={290}
                  height={290}
                  className="rounded-full shadow-lg w-[290px] h-[290px]"
                  priority
                />
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
                <div className="flex flex-col gap-2 w-full">
                  {skillData.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-row items-center gap-2 bg-green-700 py-1 px-2 rounded-md"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: `${skill.value}%`, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    >
                      {skill.icon}
                      <p>{skill.name}</p>
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
                      <Badge className="gap-2 bg-gray-900">
                        {skill.icon}
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
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
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
