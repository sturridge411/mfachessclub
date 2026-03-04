import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { tournaments } from "@/data/tournaments";

const TournamentsPage = () => {
  return (
    <Layout>
      <section className="py-16 chess-pattern min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
              Tournament <span className="text-gold-gradient">History</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A chronicle of our proud chess journey and victories
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {tournaments.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l-2 border-gold/30"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-gold border-2 border-background" />

                <div className="rounded-lg border border-border bg-card p-6 hover:border-gold/30 transition-colors">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <h2 className="font-display text-xl font-bold text-foreground">{t.name}</h2>
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                      t.status === "completed" ? "bg-mpesa/10 text-mpesa" : "bg-gold/10 text-gold"
                    }`}>
                      {t.status === "completed" ? <CheckCircle size={12} /> : <Clock size={12} />}
                      {t.status === "completed" ? "Completed" : "Upcoming"}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar size={14} className="text-gold" /> {t.date}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} className="text-gold" /> {t.location}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.description}</p>

                  <div className="space-y-1.5">
                    {t.highlights.map((h, j) => (
                      <div key={j} className="text-sm text-foreground/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TournamentsPage;
