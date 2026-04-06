import { useState } from "react";
import LoginOverlay from "@/components/LoginOverlay";
import FactionSelect from "@/components/FactionSelect";

type Step = "login" | "faction" | "done";

const Index = () => {
  const [step, setStep] = useState<Step>("login");
  const [username, setUsername] = useState("");
  const [faction, setFaction] = useState<"ghoul" | "ccg" | null>(null);

  const handleLogin = (name: string) => {
    setUsername(name);
    setStep("faction");
  };

  const handleFaction = (f: "ghoul" | "ccg") => {
    setFaction(f);
    setStep("done");
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background bg-noise">
      {step === "login" && <LoginOverlay onLogin={handleLogin} />}
      {step === "faction" && <FactionSelect username={username} onFactionSelect={handleFaction} />}
      {step === "done" && (
        <div className="flex h-full flex-col items-center justify-center animate-fade-in">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Bienvenue dans Tokyo</p>
            <h1 className="mt-3 font-display text-5xl tracking-widest text-foreground text-glow-red">
              {username}
            </h1>
            <div className="mt-4 inline-flex items-center gap-2 rounded-sm border border-border bg-muted/50 px-4 py-2">
              <div className={`h-2 w-2 rounded-full ${faction === "ghoul" ? "bg-ghoul-red" : "bg-ccg-blue"}`} />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Faction : {faction === "ghoul" ? "Goule" : "CCG"}
              </span>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Chargement du monde...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
