"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  project: string;
  avatarType?: "image" | "initials";
  avatar: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  isHovered: number | null;
  onHover: (index: number | null) => void;
}

const testimonials: Testimonial[] = [
  {
    content: "Gabriel was one of the nicest, most patient, and friendliest colleagues I had during my time in the Disney College Program. His great attitude, excellent communication skills, and patient mentorship made me comfortable asking any question I had about the job, no matter how small. His exemplary work ethic and personality makes him an invaluable asset for any team.",
    author: "Gabriel Tobia",
    role: "Story Artist and Production Coordinator ",
    company: "The Walt Disney Company",
    project: "Disney College Program",
    avatarType: "image",
    avatar: "https://media.licdn.com/dms/image/v2/D4E35AQHRZoN2hxrIlg/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1737567584602?e=1750356000&v=beta&t=w6AC9QYYIpz_qgT2HsnkeO6lz10NsebcJkYJc00I5mI",
  },
  {
    content: "Excelent developer and professional, great at teaching!",
    author: "Pedro Henrique Miranda de Oliveira",
    role: "Full Stack Developer",
    company: "Metadil",
    project: "RVG & SQAD",
    avatarType: "image",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGgDtualFYzWg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1701398618905?e=1755129600&v=beta&t=2-sPizFq2QW1gUrfn7MmYQ8w0R8biPLq4iyTdXitHkk"
  },
  {
    content: "One of the best developers I have worked with.",
    author: "Luiz Vithor Galvão Alves de Oliveira",
    role: "Full Stack Developer",
    company: "Wert",
    project: "RVG & SQAD",
    avatarType: "image",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHYmTLsI-ibjA/profile-displayphoto-shrink_200_200/B4DZX5AJBdG8AY-/0/1743639320132?e=1755129600&v=beta&t=H073BqGRs5jLSk49VoU-T8Gppsbk6lHmj6lrjtBPKr8"
  }
];

const TestimonialCard = ({ testimonial, index, isHovered, onHover }: TestimonialCardProps) => {
  const gradients = [
    'from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20',
    'from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20',
    'from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20',
    'from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20'
  ];

  const borderGradients = [
    'from-blue-400 to-indigo-500',
    'from-purple-400 to-pink-500',
    'from-green-400 to-emerald-500',
    'from-orange-400 to-red-500'
  ];

  const gradient = gradients[index % gradients.length];
  const borderGradient = borderGradients[index % borderGradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="h-full w-full group"
    >
      <motion.div
        className={`h-full w-full rounded-2xl relative overflow-hidden transition-all duration-500 border-0 ${isHovered === index
          ? 'transform scale-105 shadow-2'
          : 'shadow-lg hover:shadow-xlkk'
          }`}
        whileHover={{ y: -8 }}
      >

        {/* Main Card */}
        <div className={`relative  h-full bg-gradient-to-br ${gradient} backdrop-blur-sm rounded-2xl p-6 flex flex-col `}>


          {/* Quote Icon with Background */}
          <div className="relative mb-2 flex text-center items-center justify-between">
            <div className={`w-12 h-12 bg-gradient-to-br ${borderGradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
              <Icon
                icon="gravity-ui:quote-open"
                className="text-white text-3xl"
              />
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              Work on {testimonial.project}
            </div>
          </div>


          {/* Testimonial Content with Better Typography */}
          <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-base font-medium relative">
            <span className="text-4xl text-gray-300 dark:text-gray-600 absolute -top-2 -left-2 font-serif">&quot;</span>
            <span className="relative z-10 pl-4">{testimonial.content}</span>
            <span className="text-4xl text-gray-300 dark:text-gray-600 absolute -bottom-6 -right-2 font-serif">&quot;</span>
          </blockquote>

          {/* Author Section with Enhanced Design */}
          <div className="mt-auto  border-t border-gray-200/50 dark:border-gray-600/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <div className={`w-14 h-14 bg-gradient-to-br ${borderGradient} rounded-xl flex items-center justify-center shadow-lg`}>
                  {testimonial.avatarType === "image" ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-full h-full rounded-xl object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-white">
                      {testimonial.avatar}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <div className="font-bold text-gray-900 dark:text-white text-lg">
                  {testimonial.author}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  {testimonial.role}
                </div>
                <div className="text-gray-500 dark:text-gray-500 text-sm">
                  {testimonial.company}
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


export default function TestimonialsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <SectionHeader
          tagText="Client Stories"
          tagIcon="solar:users-group-rounded-outline"
          heading="Testimonials Wall"
          description="Real feedback from real clients who trusted me with their projects"
          showUnderline={false}
          centered={true}
        />


        {/* Testimonials Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Client Testimonials
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Honest feedback from clients I&apos;ve had the pleasure to work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
                isHovered={hoveredCard}
                onHover={setHoveredCard}
              />
            ))}
          </div>
        </div>


      </div>
    </motion.section>
  );
} 
