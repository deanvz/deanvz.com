"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BuyMeACoffee() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-4 left-4 z-50 pointer-events-auto"
    >
      <a 
        href="https://www.buymeacoffee.com/deanvz" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block transform transition-transform duration-200 hover:scale-105"
      >
        <Image
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=deanvz&button_colour=F59E0B&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00"
          alt="Buy me a coffee"
          width={200}
          height={60}
          className="rounded-lg shadow-lg"
        />
      </a>
    </motion.div>
  );
}
