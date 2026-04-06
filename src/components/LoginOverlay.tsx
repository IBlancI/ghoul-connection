import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LoginOverlayProps {
  onLogin: (username: string) => void;
}

const LoginOverlay = ({ onLogin }: LoginOverlayProps) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username.trim());
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 bg-noise animate-fade-in">
      {/* Red pulse background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 animate-pulse-red blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-sm px-6">
        {/* Title */}
        <div className="mb-10 text-center animate-slide-up">
          <h1 className="font-display text-6xl tracking-widest text-foreground text-glow-red">
            東京喰種
          </h1>
          <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="mt-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Nanos World RP Server
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
              Nom du personnage
            </label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Entrez votre nom..."
              className="h-12 border-border bg-muted/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
              autoFocus
            />
          </div>

          <Button
            type="submit"
            disabled={!username.trim()}
            className="h-12 w-full font-display text-lg tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-30 transition-all"
          >
            Connexion
          </Button>
        </form>

        {/* Decorative bottom */}
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
