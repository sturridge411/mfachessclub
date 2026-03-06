import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ChevronUp, Trophy, Medal } from "lucide-react";
import Layout from "@/components/Layout";
import { members } from "@/data/members";

const MembersPage = () => {
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = members.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.achievements.some((a) => a.toLowerCase().includes(search.toLowerCase()))
  );

  const getPlacementBadge = (member: typeof members[0]) => {
    if (member.achievements.some(a => a.includes("1st Place"))) return { color: "bg-gold text-chess-dark", label: "🥇 Champion" };
    if (member.achievements.some(a => a.includes("1st Runners Up"))) return { color: "bg-gold/80 text-chess-dark", label: "🥈 1st Runners Up" };
    if (member.achievements.some(a => a.includes("2nd Runners Up"))) return { color: "bg-gold/60 text-chess-dark", label: "🥉 2nd Runners Up" };
    return null;
  };

  return (
    <Layout>
      <section className="py-16 chess-pattern min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
              Our <span className="text-gold-gradient">Players</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Meet the strategists and champions of the MFA Chess Club
            </p>
          </motion.div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search by name or achievement..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((member, i) => {
              const badge = getPlacementBadge(member);
              const isExpanded = expandedId === member.id;

              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lg border border-border bg-card overflow-hidden hover:border-gold/30 hover:shadow-lg transition-all group"
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg group-hover:bg-gold group-hover:text-chess-dark transition-colors">
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-foreground">{member.name}</h3>
                          <span className="text-xs text-muted-foreground">ELO: {member.elo}</span>
                        </div>
                      </div>
                      {badge && (
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${badge.color}`}>
                          {badge.label}
                        </span>
                      )}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-1.5 mb-3">
                      {member.achievements.map((a, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm">
                          <Medal size={14} className="text-gold mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{a}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expand */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : member.id)}
                      className="flex items-center gap-1 text-xs font-medium text-gold hover:text-gold-light transition-colors"
                    >
                      {isExpanded ? "Less" : "More"}
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 mt-3 border-t border-border">
                            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{member.bio}</p>
                            <div>
                              <h4 className="text-xs font-semibold text-foreground mb-1.5">Tournaments</h4>
                              {member.tournaments.map((t, j) => (
                                <div key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <Trophy size={12} className="text-gold shrink-0" />
                                  {t}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-10">No members found matching "{search}"</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default MembersPage;
