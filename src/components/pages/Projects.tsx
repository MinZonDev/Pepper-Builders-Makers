"use client";

import { useState } from "react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";
import { allProjects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = [
  { id: "all", label: { vi: "ALL", en: "ALL" } },
  { id: "Hospitality", label: { vi: "HOSPITALITY", en: "HOSPITALITY" } },
  { id: "Residential", label: { vi: "RESIDENTIAL", en: "RESIDENTIAL" } },
  { id: "Commercial", label: { vi: "COMMERCIAL", en: "COMMERCIAL" } }
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { language } = useLanguage();

  const filteredProjects = activeFilter === "all" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  const t = {
    title: language === 'VI' ? "Công trình đã thực hiện" : "Our Projects",
  };

  return (
    <div className="pt-32 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 pb-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 uppercase">
          {t.title}
        </h1>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-8 mb-12 border-b border-neutral-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`pb-4 text-sm font-medium tracking-wide transition-colors relative ${
                activeFilter === cat.id ? "text-black" : "text-neutral-400 hover:text-black"
              }`}
            >
              {language === 'VI' ? cat.label.vi : cat.label.en}
              {activeFilter === cat.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-black"
                />
              )}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group block"
              >
                <Link href={`/projects/${project.id}`} className="block w-full">
                  <div className="relative overflow-hidden aspect-[4/3] bg-neutral-100 mb-6">
                    <ImageWithFallback
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content Below Image */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-neutral-600 transition-colors uppercase">
                        {project.name}
                      </h3>
                      <p className="text-sm text-neutral-500">
                        {language === 'VI' ? project.location.vi : project.location.en}
                      </p>
                    </div>
                    <span className="text-sm tracking-widest uppercase text-neutral-400">
                      {project.category}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
