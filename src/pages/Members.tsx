import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ChevronUp, Trophy, Medal, UserPlus, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { members } from "@/data/members";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const MembersPage = () => {
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [newName, setNewName] = useState("");
  const [newElo, setNewElo] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const filtered = members.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.achievements.some((a) => a.toLowerCase().includes(search.toLowerCase()))
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = newName.trim();
    const trimmedElo = newElo.trim() || "Unrated";

    if (!trimmedName || trimmedName.length < 2 || trimmedName.length > 100) {
      toast.error("Please enter a valid name (2–100 characters).");
      return;
    }
    if (trimmedElo !== "Unrated" && (isNaN(Number(trimmedElo)) || Number(trimmedElo) < 0 || Number(trimmedElo) > 3500)) {
      toast.error("Please enter a valid ELO (0–3500) or leave blank.");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("player_submissions").insert({ name: trimmedName, elo: trimmedElo });

    if (error) {
      setSubmitting(false);
      toast.error("Something went wrong. Please try again.");
      return;
    }

    // Send email notification to admin
    await supabase.functions.invoke("send-notification", {
      body: { type: "player_submission", data: { name: trimmedName, elo: trimmedElo } },
    });

    setSubmitting(false);
    toast.success("Submitted! Your name will appear once approved by the admin.");
    setNewName("");
    setNewElo("");
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
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg group-hover:bg-gold group-hover:text-chess-dark transition-colors">
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-foreground">{member.name}</h3>
                          <span className="text-xs text-muted-foreground">ELO: {member.elo}</span>
                        </div>
                      </div>
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

          {/* New Player Registration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 max-w-lg mx-auto"
          >
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <UserPlus size={20} className="text-gold" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-foreground text-lg">Join the Club</h2>
                  <p className="text-xs text-muted-foreground">New player? Submit your name to get recognised</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your full name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
                  required
                />
                <input
                  type="text"
                  placeholder="ELO rating (leave blank if unrated)"
                  value={newElo}
                  onChange={(e) => setNewElo(e.target.value)}
                  maxLength={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gold text-chess-dark font-bold hover:bg-gold-light transition-colors disabled:opacity-50"
                >
                  <Send size={16} />
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MembersPage;
