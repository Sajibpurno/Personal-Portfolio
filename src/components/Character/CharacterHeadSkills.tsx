import "./CharacterHeadSkills.css";

const SKILLS = ["Next.js", "React", "Node", "Express", "Tailwind"];

const CharacterHeadSkills = () => {
  return (
    <div className="character-head-skills" aria-hidden>
      {SKILLS.map((label, i) => (
        <span key={label} className={`character-skill-pill character-skill-pill--${i}`}>
          {label}
        </span>
      ))}
    </div>
  );
};

export default CharacterHeadSkills;
