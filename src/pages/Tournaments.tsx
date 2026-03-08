import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, CheckCircle, Clock, ExternalLink, Crown, Swords, Zap, Trophy, Award, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import { tournaments } from "@/data/tournaments";
import tiebreakerPoster from "@/assets/tiebreaker-poster.jpg";

const TournamentsPage = () => {
  const completed = tournaments.filter((t) => t.status === "completed");
  const upcoming = tournaments.filter((t) => t.status === "upcoming");
  const [showInternal, setShowInternal] = useState(false);

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
            {/* Internal Tournaments */}
            <div className="mb-12">
              <button
                onClick={() => setShowInternal(!showInternal)}
                className="w-full font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2 hover:text-gold transition-colors group"
              >
                <Crown size={22} className="text-gold" /> Internal Tournaments
                <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-gold/20 text-gold border border-gold/30 animate-pulse">1 Ongoing</span>
                <ChevronDown size={20} className={`text-muted-foreground transition-transform ${showInternal ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {showInternal && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="rounded-xl border border-gold/20 bg-card p-6 mb-6">
                      <div className="flex items-center gap-2 mb-1">
                        <Crown size={18} className="text-gold" />
                        <h3 className="font-display text-xl font-bold text-foreground">Battle for the Chess Presidency</h3>
                        <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-gold/20 text-gold border border-gold/30">March 2026</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-6">Four players compete head-to-head — the winner becomes the new Chess Club President.</p>

                      <div className="space-y-4">
                        {/* SF1 */}
                        <div className="rounded-lg border border-border bg-background p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Swords size={14} className="text-gold" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-gold">Semi-Final 1</span>
                            <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Completed</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-2.5 rounded-md bg-emerald-500/10 border border-emerald-500/30">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center">
                                  <Crown size={12} className="text-gold" />
                                </div>
                                <span className="font-semibold text-sm text-foreground">Marioo Sylvia</span>
                              </div>
                              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">WINNER</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 rounded-md bg-muted/50 border border-border opacity-60">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                                  <span className="text-muted-foreground text-[10px] font-bold">RO</span>
                                </div>
                                <span className="font-semibold text-sm text-muted-foreground line-through">Reagan Onsongo</span>
                              </div>
                              <span className="text-xs font-medium px-2 py-0.5 rounded bg-destructive/20 text-destructive">FORFEIT</span>
                            </div>
                          </div>
                        </div>

                        {/* SF2 */}
                        <div className="rounded-lg border border-gold/30 bg-background p-4 ring-1 ring-gold/10">
                          <div className="flex items-center gap-2 mb-3">
                            <Zap size={14} className="text-gold" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-gold">Semi-Final 2 — Tiebreaker</span>
                            <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 animate-pulse">Tomorrow</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-2.5 rounded-md bg-gold/5 border border-gold/20">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center">
                                  <span className="text-gold text-[10px] font-bold">KD</span>
                                </div>
                                <span className="font-semibold text-sm text-foreground">King David Amani</span>
                              </div>
                              <span className="text-xs text-muted-foreground">½</span>
                            </div>
                            <div className="text-center text-gold font-display font-bold text-xs">VS</div>
                            <div className="flex items-center justify-between p-2.5 rounded-md bg-gold/5 border border-gold/20">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center">
                                  <span className="text-gold text-[10px] font-bold">SO</span>
                                </div>
                                <span className="font-semibold text-sm text-foreground">Sturridge Omaido</span>
                              </div>
                              <span className="text-xs text-muted-foreground">½</span>
                            </div>
                          </div>
                          <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="inline-flex items-center gap-1"><Clock size={11} /> Monday, 4:30 PM</span>
                            <span className="inline-flex items-center gap-1"><Swords size={11} /> 25 min/player</span>
                          </div>
                          <p className="text-xs text-gold/80 mt-2 font-medium">First game drawn — tiebreaker decides who faces Marioo in the finals!</p>
                        </div>

                        {/* Poster */}
                        <div className="flex justify-center py-2">
                          <div className="rounded-lg overflow-hidden border border-gold/30 shadow-xl shadow-gold/10 max-w-[280px]">
                            <img src={tiebreakerPoster} alt="Tiebreaker: King David vs Sturridge" className="w-full h-auto" />
                          </div>
                        </div>

                        {/* Finals */}
                        <div className="rounded-lg border border-border border-dashed bg-background p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Trophy size={14} className="text-gold" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-gold">Finals — For the Presidency</span>
                            <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">Upcoming</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-2.5 rounded-md bg-emerald-500/5 border border-emerald-500/20">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center">
                                  <Crown size={12} className="text-gold" />
                                </div>
                                <span className="font-semibold text-sm text-foreground">Marioo Sylvia</span>
                              </div>
                              <span className="text-xs text-emerald-400">SF1 Winner</span>
                            </div>
                            <div className="text-center text-gold font-display font-bold text-xs">VS</div>
                            <div className="flex items-center justify-between p-2.5 rounded-md bg-muted/30 border border-border border-dashed">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                                  <span className="text-muted-foreground text-xs">?</span>
                                </div>
                                <span className="font-semibold text-sm text-muted-foreground italic">Winner of SF2</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-3 italic">The winner becomes the new MFA Chess Club President.</p>
                        </div>
                      </div>

                      {/* Records */}
                      <div className="mt-6 pt-4 border-t border-border">
                        <h4 className="text-sm font-semibold text-foreground flex items-center gap-1.5 mb-3">
                          <Award size={14} className="text-gold" /> Tournament Records
                        </h4>
                        <div className="rounded-lg border border-border overflow-hidden">
                          <table className="w-full text-xs">
                            <thead>
                              <tr className="bg-muted/30 border-b border-border">
                                <th className="text-left px-3 py-2 font-semibold text-foreground">Tournament</th>
                                <th className="text-left px-3 py-2 font-semibold text-foreground">Winner</th>
                                <th className="text-left px-3 py-2 font-semibold text-foreground hidden sm:table-cell">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-border/50">
                                <td className="px-3 py-2 font-medium text-foreground">Chess Presidency — 2026</td>
                                <td className="px-3 py-2 text-amber-400 italic">TBD</td>
                                <td className="px-3 py-2 hidden sm:table-cell">
                                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-gold/20 text-gold border border-gold/30">Ongoing</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
