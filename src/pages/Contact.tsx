import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const subjects = [
  "General Inquiry",
  "Membership Interest",
  "Event Suggestion",
  "Tournament Info",
  "Feedback",
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: subjects[0], message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.functions.invoke("send-notification", {
      body: { type: "contact_message", data: form },
    });

    setSubmitting(false);

    if (error) {
      toast.error("Failed to send message. Please try again.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="py-16 chess-pattern min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
              Get in <span className="text-gold-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Questions, ideas, or want to join? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="max-w-xl mx-auto">
            {/* Admin email */}
            <div className="mb-8 p-4 rounded-lg border border-gold/20 bg-gold/5 flex items-center gap-3">
              <Mail className="text-gold shrink-0" size={20} />
              <div>
                <p className="text-sm font-semibold text-foreground">Club Administrator</p>
                <a
                  href="mailto:Sturridge.omaido@mpesafoundationacademy.ac.ke"
                  className="text-sm text-gold hover:underline"
                >
                  Sturridge.omaido@mpesafoundationacademy.ac.ke
                </a>
              </div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-10 rounded-lg border border-mpesa/30 bg-mpesa/5"
              >
                <CheckCircle className="mx-auto text-mpesa mb-4" size={48} />
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">Message Sent!</h2>
                <p className="text-muted-foreground text-sm">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg gold-gradient text-chess-dark font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  <Send size={16} /> {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
