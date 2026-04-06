import { useState } from "react";
import FactionCard from "./FactionCard";
import streetBg from "@/assets/street-bg.jpg";
import ghoulImg from "@/assets/ghoul-faction.jpg";
import ccgImg from "@/assets/ccg-faction.jpg";

interface FactionSelectProps {
  username: string;
  onFactionSelect: (faction: "ghoul" | "ccg") => void;
}

const FactionSelect = ({ username, onFactionSelect }: FactionSelectProps) => {
  const [selected, setSelected] = useState<"ghoul" | "ccg" | null>(null);

  const handleSelect = (faction: "ghoul" | "ccg") => {
    setSelected(faction);
    setTimeout(() => onFactionSelect(faction), 600);
  };

  return (
    <div className={`fixed inset-0 z-40 flex flex-col bg-background transition-opacity duration-500 ${selected ? "opacity-0" : "opacity-100"}`}>
      {/* Street background */}
      <img
        src={streetBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20 pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60 pointer-events-none" />
      {/* Header */}
      <div className="relative z-20 flex flex-col items-center py-6 animate-slide-up">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Bienvenue, <span className="text-primary">{username}</span>
        </p>
        <h1 className="mt-2 font-display text-3xl tracking-[0.2em] text-foreground">
          CHOISISSEZ VOTRE CAMP
        </h1>
        <div className="mt-3 h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      {/* Faction split */}
      <div className="relative z-10 flex flex-1 flex-col md:flex-row">
        <FactionCard
          name="GOULE"
          subtitle="La faim éternelle"
          description="Vivez dans l'ombre, chassez pour survivre. Développez votre kagune et rejoignez les rangs des prédateurs de Tokyo."
          image={ghoulImg}
          side="left"
          accentType="ghoul"
          onSelect={() => handleSelect("ghoul")}
        />

        {/* Center divider */}
        <div className="relative z-20 flex items-center justify-center">
          <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" />
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background">
            <span className="font-display text-sm tracking-widest text-muted-foreground">VS</span>
          </div>
        </div>

        <FactionCard
          name="CCG"
          subtitle="Commission Counter Ghoul"
          description="Protégez l'humanité. Armé de votre quinque, traquez les goules et rétablissez l'ordre dans les rues de Tokyo."
          image={ccgImg}
          side="right"
          accentType="ccg"
          onSelect={() => handleSelect("ccg")}
        />
      </div>
    </div>
  );
};

export default FactionSelect;
