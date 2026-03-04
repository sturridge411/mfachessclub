import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle, Clock, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { tournaments } from "@/data/tournaments";

const TournamentsPage = () => {
  const completed = tournaments.filter((t) => t.status === "completed");
  const upcoming = tournaments.filter((t) => t.status === "upcoming");

  const renderCard = (t: typeof tournaments[0], i: number) => (
    <motion.div
      key={t.id}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="relative pl-8 border-l-2 border-gold/30"
    >
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

        <div className="space-y-1.5 mb-4">
          {t.highlights.map((h, j) => (
            <div key={j} className="text-sm text-foreground/80 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
              {h}
            </div>
          ))}
        </div>

        {t.registrationLink && (
          <a
            href={t.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md gold-gradient text-chess-dark text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={14} /> Register Now
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <Layout>
      <section className="py-16 chess-pattern min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
              Tournaments & <span className="text-gold-gradient">Events</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Our journey through Kenya's chess landscape — past victories and future battles
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {/* Upcoming */}
            {upcoming.length > 0 && (
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Clock size={22} className="text-gold" /> Upcoming Events
                </h2>
                <div className="space-y-6">
                  {upcoming.map((t, i) => renderCard(t, i))}
                </div>
              </div>
            )}

            {/* Completed */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle size={22} className="text-mpesa" /> Completed
              </h2>
              <div className="space-y-6">
                {completed.map((t, i) => renderCard(t, i))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TournamentsPage;
