"use client";

import { motion } from "framer-motion";
import { ReactElement } from "react";

interface Skill {
  name: string;
  value: number;
  icon: ReactElement;
}

interface SkillWheelProps {
  skills: Skill[];
}

const SkillWheel = ({ skills }: SkillWheelProps) => {
  const colors = [
    "#fbbf24", // amber-400
    "#f97316", // orange-500  
    "#ef4444", // red-500
    "#ec4899", // pink-500
    "#a855f7", // purple-500
    "#6366f1", // indigo-500
  ];

  const totalValue = skills.reduce((sum, skill) => sum + skill.value, 0);
  let currentPercentage = 0;

  return (
    <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
      {/* Outer ring with segments */}
      <div className="relative w-40 h-40 rounded-full overflow-hidden">
        <div className="absolute inset-0 rounded-full" style={{
          background: `conic-gradient(${skills.map((skill, index) => {
            const percentage = (skill.value / totalValue) * 100;
            const startPercentage = currentPercentage;
            currentPercentage += percentage;
            return `${colors[index % colors.length]} ${startPercentage}% ${currentPercentage}%`;
          }).join(', ')})`
        }}>
        </div>
        
        {/* Inner circle */}
        <div className="absolute inset-4 bg-slate-800/90 backdrop-blur-sm rounded-full border border-slate-600/30 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-1 p-2">
            {skills.slice(0, 6).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-amber-400 text-sm flex items-center justify-center"
                title={skill.name}
              >
                {skill.icon}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full">
        <div className="flex flex-wrap justify-center gap-2 text-xs max-w-xs mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="flex items-center gap-1 text-gray-300 whitespace-nowrap"
            >
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillWheel;