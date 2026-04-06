import { useState } from "react";
import { cn } from "@/lib/utils";

interface FactionCardProps {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  side: "left" | "right";
  accentType: "ghoul" | "ccg";
  onSelect: () => void;
}

const FactionCard = ({ name, subtitle, description, image, side, accentType, onSelect }: FactionCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative flex-1 cursor-pointer overflow-hidden transition-all duration-700 ease-out group",
        hovered ? "flex-[1.3]" : "flex-1"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onSelect}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={name}
          className={cn(
            "h-full w-full object-cover transition-all duration-700",
            hovered ? "scale-110 brightness-75" : "scale-100 brightness-[0.3]"
          )}
        />
      </div>

      {/* Overlay gradient */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-700",
          accentType === "ghoul"
            ? "bg-gradient-to-t from-background via-background/60 to-transparent"
            : "bg-gradient-to-t from-background via-background/60 to-transparent"
        )}
      />

      {/* Colored accent line */}
      <div
        className={cn(
          "absolute top-0 h-1 transition-all duration-500",
          side === "left" ? "left-0 right-0" : "left-0 right-0",
          accentType === "ghoul" ? "bg-ghoul-red" : "bg-ccg-blue",
          hovered ? "opacity-100" : "opacity-40"
        )}
      />

      {/* Blood drip effect for ghoul */}
      {accentType === "ghoul" && hovered && (
        <div className="absolute top-1 left-[20%] w-[2px] h-16 bg-ghoul-red animate-blood-drip opacity-60" />
      )}

      {/* Content */}
      <div className={cn(
        "relative z-10 flex h-full flex-col justify-end p-8 lg:p-12",
        side === "left" ? "items-start text-left" : "items-end text-right"
      )}>
        {/* Faction label */}
        <span className={cn(
          "mb-2 text-xs font-medium uppercase tracking-[0.3em] transition-colors duration-500",
          accentType === "ghoul" ? "text-ghoul-red" : "text-ccg-blue"
        )}>
          {subtitle}
        </span>

        {/* Faction name */}
        <h2 className={cn(
          "font-display text-6xl lg:text-8xl leading-none tracking-wider transition-all duration-500",
          accentType === "ghoul" 
            ? cn("text-foreground", hovered && "text-glow-red")
            : cn("text-foreground", hovered && "text-glow-blue")
        )}>
          {name}
        </h2>

        {/* Description */}
        <p className={cn(
          "mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground transition-all duration-500",
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          {description}
        </p>

        {/* CTA */}
        <div className={cn(
          "mt-6 flex items-center gap-2 text-sm font-medium uppercase tracking-widest transition-all duration-500",
          accentType === "ghoul" ? "text-ghoul-red" : "text-ccg-blue",
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <span>Choisir cette faction</span>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>

      {/* Hover border glow */}
      <div className={cn(
        "absolute inset-0 pointer-events-none border transition-all duration-500",
        accentType === "ghoul"
          ? cn("border-ghoul-red/0", hovered && "border-ghoul-red/30")
          : cn("border-ccg-blue/0", hovered && "border-ccg-blue/30")
      )} />
    </div>
  );
};

export default FactionCard;
