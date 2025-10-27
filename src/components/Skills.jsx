import React from "react";

// รายการทักษะ (คุณสามารถเพิ่มหรือแก้ไขได้ตามจริง)
const skillList = [
  "PHP",
  "Python",
  "React Basic",
  "Laravel",
  "JavaScript (ES6+)",
  "Python (Basic)",
  "Tailwind CSS",
  "Bootstrap 5",
  "PostgreSQL",
  "MySQL",
  "Oracle DB",
  "SQL Server",
  "Git",
  "API Development",
  "HTML5 & CSS3",
  "MDBootstrap",
  "Vue.js Basic",
  "Angular (Basic)",
];

// รายการเครื่องมือที่ใช้
const tools = [
  "Git & GitHub",
  "VS Code",
  "Docker",
  "Postman",
  "Figma (Basic)",
  "npm / yarn",
  "Composer",
  "DBeaver",
  "Node.js (Basic)",
];
const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">
        My Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skillList.map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-sm font-semibold px-4 py-2 rounded-full shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Tools I Use
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool) => (
            <span
              key={tool}
              // ใช้สีที่ต่างกันเล็กน้อย (เช่น สีเขียว) เพื่อแยกหมวดหมู่
              className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-sm font-semibold px-4 py-2 rounded-full shadow-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
