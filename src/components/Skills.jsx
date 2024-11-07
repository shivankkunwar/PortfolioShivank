const skills = [
  "Javascript",
  "TypeScript",
  "React.js",
  "Node.js",
  "SQL(PostgreSQL)",
  "HTML5",
  "CSS",
  "Expres.js",
  "MongoDB",
  "Jest",
  "Cypress",
  "AndDesign",
  "Redux",
  "Next.js",
  "Zod",
  "Prisma",
  "Git",
  "Github actions",
  "Docker",
  "VS code",
  "IntelliJ",
  "Figma",
];

function Skills() {
  return (
    <div className="skill-container">
      <h1>Skills</h1>
      <div className="skills-list">
        {skills.map((skill) => {
          return <div className="skill-div">{skill}</div>;
        })}
      </div>
    </div>
  );
}

export default Skills;
