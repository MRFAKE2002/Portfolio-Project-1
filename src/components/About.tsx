//! Shadcn
import { Progress } from "@/components/ui/progress";

//! Picture
import project1 from "../../public/assets/about/proj5.png";
import project2 from "../../public/assets/about/proj6.png";

//! Next Image
import Image from "next/image";

function About() {
  return (
    <section id="about" className="text-white p-8">
      <h2 className="text-6xl font-bold mb-8">
        About <span className="text-gray-300">Me</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Background */}
        <div className="border border-white/20 rounded-lg p-6">
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
        </div>
        {/* Expertise */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
          <p className="text-white/50">
            I specialize in building robust and scalable web applications using
            modern technologies. My expertise spans both front-end and back-end
            development, allowing me to create seamless, end-to-end solutions.
          </p>
          <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden">
            <Image
              src={project1}
              alt="project 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        {/* Skills */}
        <div className="border border-white/20 rounded-lg p-6">
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
        </div>
      </div>
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
                value={80}
                className="bg-gray-300/20 [&>div]:bg-purple-100/80"
              />
            </div>
            {/* Back-End */}
            <div>
              <label className="block text-sm font-medium mb-1">Back-End</label>
              <Progress
                value={65}
                className="bg-black [&>div]:bg-purple-100/80"
              />
            </div>
            {/* DevOps */}
            <div>
              <label className="block text-sm font-medium mb-1">DevOps</label>
              <Progress
                value={50}
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
