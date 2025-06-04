import { useState } from "react";
import SkillCard from "./SkillCard";

const skills = [
  {
    id: 1,
    name: "React",
    description: "Modern UI development with hooks and content.",
    proficiency: 90,
    category: "frontend",
  },
  {
    id: 2,
    name: "Vue",
    description: "Progressive frontend framework.",
    proficiency: 85,
    category: "frontend",
  },
  {
    id: 3,
    name: "Vue",
    description: "Progressive frontend framework.",
    proficiency: 85,
    category: "frontend",
  },
  {
    id: 4,
    name: "Node.js",
    description: "Modern UI development with hooks and content",
    proficiency: 85,
    category: "backend",
  },
  {
    id: 5,
    name: "Express",
    description: "Fast backend framework.",
    proficiency: 80,
    category: "backend",
  },
  {
    id: 6,
    name: "MongoDB",
    description: "Modern UI development with hooks and content",
    proficiency: 80,
    category: "database",
  },
  {
    id: 7,
    name: "PostgreSQL",
    description: "Relational database system.",
    proficiency: 75,
    category: "database",
  },
  {
    id: 8,
    name: "Git",
    description: "Modern UI development with hooks and content",
    proficiency: 95,
    category: "tools",
  },
  {
    id: 9,
    name: "Docker",
    description: "Containerization platform.",
    proficiency: 85,
    category: "tools",
  },
  {
    id: 10,
    name: "Docker",
    description: "Containerization platform.",
    proficiency: 85,
    category: "tools",
  },
];

const tabs = [
  { label: "FrontEnd", key: "frontend" },
  { label: "Backend", key: "backend" },
  { label: "Database", key: "database" },
  { label: "Tool & services", key: "tools" },
];

export default function SkillsTabsReact() {
  const [selected, setSelected] = useState("frontend");

  return (
    <div className="flex flex-col items-center">
      <ul className="flex bg-card-background/60 rounded-full px-4 py-2 space-x-6 text-xl text-white shadow-lg mb-10">
        {tabs.map((tab) => (
          <li key={tab.key}>
            <button
              onClick={() => setSelected(tab.key)}
              className={`px-4 py-2 rounded-full transition duration-200  ${
                selected === tab.key
                  ? " text-accent"
                  : "text-subtext hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl px-2 w-full">
        {skills
          .filter((skill) => skill.category === selected)
          .map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
      </div>
    </div>
  );
}
