import { motion } from "framer-motion";
import { Target, Users, Globe, Award } from "lucide-react";
import Layout from "@/components/Layout";

const values = [
  { icon: Target, title: "Strategic Thinking", desc: "Chess teaches our students to plan ahead, analyze situations, and make calculated decisions." },
  { icon: Users, title: "Inclusivity", desc: "Open to all genders and skill levels, from beginners to tournament-ready players." },
  { icon: Globe, title: "National Representation", desc: "Our players compete at regional and national levels, representing MFA with pride." },
  { icon: Award, title: "Excellence", desc: "We strive for excellence both on the board and in academics, building well-rounded leaders." },
];

const AboutPage = () => {
  return (
    <Layout>
      <section className="py-16 chess-pattern min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
              About <span className="text-gold-gradient">Us</span>
            </h1>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="prose prose-lg mx-auto mb-16"
            >
              <div className="rounded-lg border border-border bg-card p-8 space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  The <strong className="text-foreground">MFA Chess Club</strong> is an integral part of the holistic education 
                  experience at the <strong className="text-foreground">M-PESA Foundation Academy</strong> in Thika, Kenya. 
                  Founded with the mission of fostering a love for chess and intellectual sports, the club has rapidly grown 
                  into one of the most successful school chess programs in the country.
                </p>
                <p>
                  Affiliated with <strong className="text-foreground">Chess Kenya</strong>, our club provides students with 
                  opportunities to compete at regional, national, and East African levels. We believe that chess is more 
                  than a game — it's a tool for developing critical thinking, patience, sportsmanship, and leadership 
                  skills that extend far beyond the board.
                </p>
                <p>
                  Our commitment to inclusivity means that every student, regardless of gender or skill level, is welcome 
                  to join. From absolute beginners learning the basics to seasoned competitors preparing for national 
                  championships, we support every player's journey.
                </p>
                <p>
                  In 2025, our club achieved remarkable milestones: winning the Best School/Club Trophy at the 3rd 
                  Jumuiya ya Afrika Mashariki Open, qualifying all 18 participants at the Kiambu Regionals, and producing 
                  national qualifiers and a U17 champion with a perfect score.
                </p>
              </div>
            </motion.div>

            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">
              Our <span className="text-gold-gradient">Values</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-lg border border-border bg-card hover:border-gold/30 transition-colors group"
                >
                  <v.icon className="text-gold mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <h3 className="font-display font-bold text-foreground mb-1.5">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
