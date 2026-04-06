import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export interface PlayerIdentity {
  nom: string;
  prenom: string;
  sexe: "homme" | "femme";
}

interface LoginOverlayProps {
  onLogin: (identity: PlayerIdentity) => void;
}

const LoginOverlay = ({ onLogin }: LoginOverlayProps) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [sexe, setSexe] = useState<"homme" | "femme" | "">("");

  const isValid = nom.trim() && prenom.trim() && sexe;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onLogin({ nom: nom.trim(), prenom: prenom.trim(), sexe: sexe as "homme" | "femme" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 bg-noise animate-fade-in">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 animate-pulse-red blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-sm px-6">
        <div className="mb-10 text-center animate-slide-up">
          <h1 className="font-display text-6xl tracking-widest text-foreground text-glow-red">
            東京喰種
          </h1>
          <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="mt-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Nanos World RP Server
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
              Nom
            </label>
            <Input
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Votre nom de famille..."
              className="h-12 border-border bg-muted/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
              autoFocus
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
              Prénom
            </label>
            <Input
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="Votre prénom..."
              className="h-12 border-border bg-muted/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
              Sexe
            </label>
            <RadioGroup
              value={sexe}
              onValueChange={(v) => setSexe(v as "homme" | "femme")}
              className="flex gap-6"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="homme" id="homme" />
                <Label htmlFor="homme" className="text-sm uppercase tracking-widest text-muted-foreground cursor-pointer">
                  Homme
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="femme" id="femme" />
                <Label htmlFor="femme" className="text-sm uppercase tracking-widest text-muted-foreground cursor-pointer">
                  Femme
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button
            type="submit"
            disabled={!isValid}
            className="h-12 w-full font-display text-lg tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-30 transition-all"
          >
            Connexion
          </Button>
        </form>

        <div className="mt-8 flex justify-center gap-1 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-primary/40" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginOverlay;
