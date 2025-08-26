"use client";

//! React
import { useEffect, useState } from "react";

//! Framer Motion
import { motion, Variants } from "framer-motion";

//! Shadcn
import { Progress } from "@/components/ui/progress";

//! Picture
import project1 from "../../public/assets/About/proj5.png";
import project2 from "../../public/assets/About/proj6.png";

//! Next Image
import Image from "next/image";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function About() {
  //! States
  const [frontEnd, setFrontEnd] = useState(0);
  const [backEnd, setBackEnd] = useState(0);
  const [devOps, setDevOps] = useState(0);

  //! UseEffect
  useEffect(() => {
    const id1 = setTimeout(() => setFrontEnd(80), 300);
    const id2 = setTimeout(() => setBackEnd(65), 500);
    const id3 = setTimeout(() => setDevOps(50), 700);

    return () => {
      clearTimeout(id1);
      clearTimeout(id2);
      clearTimeout(id3);
    };
  }, []);

  return (
    <section id="about" className="text-white p-8">
      <h2 className="text-6xl font-bold mb-8">
        About <span className="text-gray-300">Me</span>
      </h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid md:grid-cols-3 gap-8"
      >
        {/* Background */}
        <motion.div
          variants={cardVariant}
          className="border border-white/20 rounded-lg p-6"
        >
          <h3 className="text-2xl font-bold mb-2">01. Background</h3>
          <p className="text-white/50 mb-8">
            I'm a passionate full-stack developer with a strong foundation in
            computer science and a love for creating innovative web solutions.
            My journey in tech started with a curiosity about how things work,
            which led me to pursue a career in web development.
          </p>
          <div className="rounded-lg p-4 mb-4 border border-white/20">
            <code className="text-gray-200/50">
              const skills = [<br />
              &nbsp;&nbsp;'JavaScript',
              <br />
              &nbsp;&nbsp;'TypeScript'
              <br />
              &nbsp;&nbsp;'React',
              <br />
              &nbsp;&nbsp;'Next',
              <br />
              &nbsp;&nbsp;'Python',
              <br />
              ];
            </code>
          </div>
        </motion.div>
        {/* Expertise */}
        <motion.div
          variants={cardVariant}
          className="border border-white/20 rounded-lg p-6"
        >
          <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
          <p className="text-white/50">
            I specialize in building robust and scalable web applications using
            modern technologies. My expertise spans both front-end and back-end
            development, allowing me to create seamless, end-to-end solutions.
          </p>
          <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-[320px] overflow-hidden">
            <Image
              src={project1}
              alt="project 1"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>
        {/* Skills */}
        <motion.div
          variants={cardVariant}
          className="border border-white/20 rounded-lg p-6"
        >
          <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
          <p className="text-white/50 mb-4">
            I'm proficient in a wide range of technologies and constantly
            expanding my skill set to stay at the forefront of web development.
          </p>
          <div className="grid text-center gap-4">
            {/* Front-End */}
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-gray-300 font-medium mb-2">Front-End</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>React</li>
                <li>Next</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            {/* Back-End */}
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-gray-300 font-medium mb-2">Back-End</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>Python</li>
                <li>DRF</li>
                <li>Redis</li>
                <li>Celery</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mt-4 mb-2">0.4 Approach</h3>
          <p className="text-white/50">
            I believe in writing clean, maintainable code and following best
            practices. My approach involves understanding client needs, planning
            thoroughly, and delivering high-quality solutions on time.
          </p>
          {/* Progress */}
          <div className="space-y-4 mt-6">
            {/* Front-End */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Front-End
              </label>
              <Progress
                value={frontEnd}
                className="bg-gray-300/20 [&>div]:bg-purple-100/80"
              />
            </div>
            {/* Back-End */}
            <div>
              <label className="block text-sm font-medium mb-1">Back-End</label>
              <Progress
                value={backEnd}
                className="bg-gray-300/20 [&>div]:bg-purple-100/80"
              />
            </div>
            {/* DevOps */}
            <div>
              <label className="block text-sm font-medium mb-1">DevOps</label>
              <Progress
                value={devOps}
                className="bg-gray-300/20 [&>div]:bg-purple-100/80"
              />
            </div>
          </div>
        </div>
        <div className="border border-white/20 rounded-lg p-6">
          <div>
            <h3 className="text-2xl font-bold mb-6">05. Goals</h3>
            <p className="text-white/50">
              My goal is to continue growing as a developer, tackling
              challenging projects, and contributing to the tech community. I'm
              always excited to learn new technologies and push the boundaries
              of what's possible in web development.
            </p>
          </div>
          {/* Image */}
          <div className="h-[200px] overflow-hidden p-4 border border-white/20 relative mt-6">
            <Image
              src={project2}
              alt="project 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
