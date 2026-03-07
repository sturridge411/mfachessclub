import { useState } from "react";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import Layout from "@/components/Layout";

const platforms = [
  { name: "Chess Friends", url: "https://chessfriends.com" },
];

const Play = () => {
  const [active, setActive] = useState(0);

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 mb-4">
              <Gamepad2 size={14} className="text-gold" />
              <span className="text-gold text-xs font-semibold uppercase tracking-wider">Play & Learn</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Play <span className="text-gold-gradient">Chess Online</span>
            </h1>
            <p className="text-muted-foreground">Select a platform below and start playing</p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {platforms.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                  active === i
                    ? "gold-gradient text-chess-dark"
                    : "border border-border text-muted-foreground hover:text-gold hover:border-gold/40"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Iframe */}
          {platforms[active] ? (
            <div className="rounded-lg border border-border overflow-hidden bg-card" style={{ height: "80vh" }}>
              <iframe
                key={platforms[active].url}
                src={platforms[active].url}
                title={platforms[active].name}
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-popups-to-escape-sandbox"
                loading="lazy"
              />
            </div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
};

export default Play;
