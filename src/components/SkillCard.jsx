import { useState } from "react";

export default function SkillCard({
  name,
  description,
  proficiency,
  iconSrc = "/react-svgrepo-com.svg",
  iconAlt = "",
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full max-w-sm p-6 rounded-2xl bg-card-background/60 border-3 border-accent flex flex-col gap-4 shadow-lg transition-transform duration-300 hover:-translate-y-2 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer" }}
    >
      <div className="mb-2 w-fit rounded-xl p-[2px] animated-gradient-border">
        <div className="w-16 h-16 bg-card-background flex items-center justify-center rounded-xl">
          <img
            src={iconSrc}
            alt={iconAlt || `${name} Icon`}
            className="w-10 h-10 object-contain"
          />
        </div>
      </div>
      <div className="space-y-1">
        <h5 className="text-accent ">{name}</h5>
        <p className="text-subtext text-sm">{description}</p>
      </div>
      <div className="mt-4 space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-subtext">Proficiency</p>
          <p className="text-subtext text-sm font-bold">{proficiency}%</p>
        </div>
        <div className="w-full h-3 rounded-full bg-foreground overflow-hidden">
          <div
            className={`h-full transition-all duration-700 rounded-full ${
              hovered
                ? "bg-gradient-to-r from-accent to-gradient-start"
                : "bg-transparent"
            }`}
            style={{
              width: hovered ? `${proficiency}%` : 0,
            }}
          />
        </div>
      </div>
    </div>
  );
}
