import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Calendar, Mail, Trophy, Award, Star, ExternalLink, Gamepad2, Crown, Swords, Clock, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-chess.jpg";
import tiebreakerPoster from "@/assets/tiebreaker-poster.jpg";

const chessplatforms = [
  { name: "ChessFriends", desc: "Play chess online with friends in real-time" },
  { name: "Chessly", desc: "Personalized chess training with GM courses" },
];

const newsItems = [
  "🏆 MFA wins Best School/Club Trophy at Jumuiya ya Afrika Mashariki Open 2025!",
  "⭐ Jones Kimutai Rop scores perfect 4/4 at National Schools U17 Championship!",
  "🎯 All 18 MFA players qualify for nationals at Kiambu Regionals!",
  "♟️ Joseph Otieno, Sylvia Mario & Emanuel Kamau advance at Nationals!",
];

const stats = [
  { icon: Users, value: "10+", label: "Active Members" },
  { icon: Trophy, value: "1st", label: "Club Trophy 2025" },
  { icon: Award, value: "3", label: "National Qualifiers" },
  { icon: Star, value: "4/4", label: "Perfect Score (U17)" },
];

const Index = () => {
  return (
    <Layout>
      {/* SEO */}
      <title>MFA Chess Club – M-PESA Foundation Academy Chess Club, Thika</title>
      <meta name="description" content="The official website of the M-PESA Foundation Academy Chess Club in Thika, Kenya. Developing strategic thinkers through chess excellence." />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="MFA Chess Club students playing chess" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-chess-dark/95 via-chess-dark/80 to-chess-dark/50" />
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 mb-6">
              <Trophy size={14} className="text-gold" />
              <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                2025 Best School/Club Trophy Winners
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-chess-light leading-tight mb-6">
              Checkmate to{" "}
              <span className="text-gold-gradient">Excellence</span>
            </h1>

            <p className="text-chess-light/80 text-lg md:text-xl leading-relaxed mb-4">
              Join the MFA Chess Club — where strategic thinking, resilience, and leadership
              are forged on the 64 squares.
            </p>
            <p className="text-chess-light/60 text-sm md:text-base leading-relaxed mb-8">
              Based at the prestigious M-PESA Foundation Academy in Thika, Kenya, our club has risen to prominence
              with dominant performances at regional and national tournaments, including winning the Best School/Club
              Trophy at the 3rd Jumuiya ya Afrika Mashariki Open 2025.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/members"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md gold-gradient text-chess-dark font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Users size={16} /> View Members
              </Link>
              <Link
                to="/tournaments"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-gold/40 text-gold font-semibold text-sm hover:bg-gold/10 transition-colors"
              >
                <Calendar size={16} /> Upcoming Events
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-chess-light/20 text-chess-light/80 font-semibold text-sm hover:bg-chess-light/10 transition-colors"
              >
                <Mail size={16} /> Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Ticker */}
      <div className="bg-primary border-y border-gold/20 overflow-hidden py-3">
        <div className="animate-ticker whitespace-nowrap flex gap-12">
          {[...newsItems, ...newsItems].map((item, i) => (
            <span key={i} className="text-sm text-primary-foreground/80 font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Internal Tournaments */}
      <section className="py-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 mb-4">
              <Swords size={14} className="text-gold" />
              <span className="text-gold text-xs font-semibold uppercase tracking-wider">Internal Tournaments</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Club <span className="text-gold-gradient">Showdowns</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Head-to-head battles within the club — where rivalries are born and legends crowned
            </p>
          </motion.div>

          {/* Current Tournament: Presidential Battle */}
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Crown size={18} className="text-gold" />
                <h3 className="font-display text-xl font-bold text-foreground">Battle for the Chess Presidency — <span className="text-gold">2026</span></h3>
                <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-gold/20 text-gold border border-gold/30 animate-pulse">Ongoing</span>
              </div>

              {/* Semi-Final 1 */}
              <div className="rounded-xl border border-border bg-card p-5 mb-4">
                <div className="flex items-center gap-2 mb-4">
                  <Swords size={16} className="text-gold" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">Semi-Final 1</span>
                  <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Completed</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                        <Crown size={14} className="text-gold" />
                      </div>
                      <span className="font-semibold text-foreground">Marioo Sylvia</span>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 rounded bg-emerald-500/20 text-emerald-400">WINNER</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border opacity-60">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground text-xs font-bold">RO</span>
                      </div>
                      <span className="font-semibold text-muted-foreground line-through">Reagan Onsongo</span>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-destructive/20 text-destructive">FORFEIT</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3 italic">Marioo Sylvia advances to the finals after Reagan Onsongo forfeits.</p>
              </div>

              {/* Semi-Final 2 */}
              <div className="rounded-xl border border-gold/30 bg-card p-5 ring-1 ring-gold/20 shadow-lg shadow-gold/5 mb-2">
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={16} className="text-gold" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">Semi-Final 2 — Tiebreaker</span>
                  <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 animate-pulse">Tomorrow</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gold/5 border border-gold/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                        <span className="text-gold text-xs font-bold">KD</span>
                      </div>
                      <span className="font-semibold text-foreground">King David Amani</span>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">½</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-gold font-display font-bold text-sm">VS</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gold/5 border border-gold/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                        <span className="text-gold text-xs font-bold">SO</span>
                      </div>
                      <span className="font-semibold text-foreground">Sturridge Omaido</span>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">½</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Clock size={12} /> Monday, 4:30 PM</span>
                  <span className="inline-flex items-center gap-1"><Swords size={12} /> 25 min/player</span>
                </div>
                <p className="text-xs text-gold/80 mt-2 font-medium">First game ended in a draw — tiebreaker decides who faces Marioo in the finals!</p>
              </div>

              {/* Poster under SF2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex justify-center my-6"
              >
                <div className="rounded-xl overflow-hidden border border-gold/30 shadow-2xl shadow-gold/10 max-w-xs">
                  <img
                    src={tiebreakerPoster}
                    alt="Tiebreaker: King David Amani vs Sturridge Omaido — The Ultimate Showdown"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>

              {/* Finals */}
              <div className="rounded-xl border border-border bg-card p-5 border-dashed">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy size={16} className="text-gold" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">Finals — For the Presidency</span>
                  <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">Upcoming</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                        <Crown size={14} className="text-gold" />
                      </div>
                      <span className="font-semibold text-foreground">Marioo Sylvia</span>
                    </div>
                    <span className="text-xs text-emerald-400">SF1 Winner</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-gold font-display font-bold text-sm">VS</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border border-dashed">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground text-xs">?</span>
                      </div>
                      <span className="font-semibold text-muted-foreground italic">Winner of SF2</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3 italic">The winner becomes the new MFA Chess Club President.</p>
              </div>
            </motion.div>

            {/* Tournament History / Records */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Award size={18} className="text-gold" /> Internal Tournament Records
              </h3>
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left px-4 py-3 font-semibold text-foreground">Tournament</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">Winner</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground hidden sm:table-cell">Date</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="px-4 py-3 font-medium text-foreground">Chess Presidency — 2026</td>
                      <td className="px-4 py-3">
                        <span className="text-amber-400 italic">TBD</span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">March 2026</td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gold/20 text-gold border border-gold/30">Ongoing</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/20 transition-colors text-muted-foreground">
                      <td className="px-4 py-3 italic" colSpan={4}>
                        No previous internal tournaments on record — this is the first!
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                Winners of each internal tournament are recorded here permanently. When no tournament is active, the status shows <span className="font-semibold text-foreground">None</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 chess-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-lg bg-card border border-border hover:border-gold/30 transition-colors"
              >
                <stat.icon className="mx-auto mb-3 text-gold" size={28} />
                <div className="font-display text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Recent <span className="text-gold-gradient">Highlights</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our players continue to make waves across Kenya's chess landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Best School/Club Trophy",
                desc: "MFA claimed the top school award at the 3rd Jumuiya ya Afrika Mashariki Open Chess Tournament 2025.",
                icon: Trophy,
              },
              {
                title: "Perfect Score at Nationals",
                desc: "Jones Kimutai Rop achieved a flawless 4/4 in the U17 Open category at the Kenya National Schools Championship.",
                icon: Star,
              },
              {
                title: "18 for 18 at Regionals",
                desc: "Every single MFA participant at the Kiambu Regionals scored above 3 points and qualified for nationals.",
                icon: Award,
              },
            ].map((highlight, i) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-6 rounded-lg border border-border bg-background hover:border-gold/30 hover:shadow-lg transition-all group"
              >
                <highlight.icon className="text-gold mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{highlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Play Chess */}
      <section className="py-20 chess-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 mb-4">
              <Gamepad2 size={14} className="text-gold" />
              <span className="text-gold text-xs font-semibold uppercase tracking-wider">Play & Learn</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Play <span className="text-gold-gradient">Chess Online</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Sharpen your skills on the best chess platforms used by our members
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {chessplatforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-lg border border-border bg-card hover:border-gold/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-gold transition-colors mb-2">
                  {platform.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{platform.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/play"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md gold-gradient text-chess-dark font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Gamepad2 size={16} /> Open Chess Platforms
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
