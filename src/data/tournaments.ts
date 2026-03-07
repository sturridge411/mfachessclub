export interface Tournament {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  highlights: string[];
  status: "completed" | "upcoming";
  registrationLink?: string;
}

export const tournaments: Tournament[] = [
  // ===== UPCOMING (from 1700chess.sh - Season 2026) =====
  {
    id: "kisumu-open-2026",
    name: "Kisumu Open 2026",
    date: "March 7–8, 2026",
    location: "Jalaram Academy, Milimani, Kisumu",
    description: "A 6-round open tournament in Kisumu bringing together players from across the Lake Region.",
    highlights: [
      "6 rounds",
      "Open to all players",
      "Registration open now",
    ],
    status: "upcoming",
    registrationLink: "https://forms.gle/gqHvBQ1ohFJ5jnEM7",
  },
  {
    id: "mavens-open-2026",
    name: "Mavens Open 2026",
    date: "March 19–22, 2026",
    location: "Delegates Lounge, KICC, Nairobi",
    description: "An 8-round premier tournament hosted at the iconic KICC in Nairobi.",
    highlights: [
      "8 rounds",
      "KICC venue, Nairobi",
      "Major national event",
    ],
    status: "upcoming",
    registrationLink: "https://mavens.co.ke/event/register/16",
  },
  {
    id: "kenya-open-2026",
    name: "Kenya Open 2026",
    date: "April 3–6, 2026",
    location: "TBA, Kenya",
    description: "The premier national open tournament — 8 rounds of competitive chess featuring Kenya's best players.",
    highlights: [
      "8 rounds",
      "FIDE-rated tournament",
      "Top national competition",
    ],
    status: "upcoming",
  },
  {
    id: "sataranji-africa-2026",
    name: "Sataranji Africa Chess Festival 2026",
    date: "April 18–19, 2026",
    location: "TBA, Kenya",
    description: "A chess festival celebrating African chess culture with 6 rounds of exciting play.",
    highlights: [
      "6 rounds",
      "African chess celebration",
      "Open to all",
    ],
    status: "upcoming",
  },
  {
    id: "kiambu-open-2026",
    name: "Kiambu Open 2026",
    date: "May 9–10, 2026",
    location: "Rainbow Ruiru Resort, Ruiru",
    description: "A regional open tournament in Kiambu County — home turf for MFA players.",
    highlights: [
      "Kiambu County event",
      "Rainbow Ruiru Resort venue",
      "TBC",
    ],
    status: "upcoming",
  },
  {
    id: "jumuiya-open-2026",
    name: "Jumuiya Open 2026",
    date: "September 19–20, 2026",
    location: "TBA, East Africa",
    description: "The next edition of the prestigious East African regional tournament. MFA will be looking to defend their Best School/Club title.",
    highlights: [
      "Defending Best School/Club Trophy",
      "East African regional competition",
      "Details TBC",
    ],
    status: "upcoming",
  },

  // ===== COMPLETED =====
  {
    id: "chess-kenya-open-2025",
    name: "Chess Kenya National Open 2025",
    date: "August 16–17, 2025",
    location: "Nairobi, Kenya",
    description: "The premier national open tournament bringing together top players from across Kenya.",
    highlights: [
      "Open to all rated and unrated players",
      "FIDE-rated tournament",
      "Cash prizes for top finishers",
    ],
    status: "completed",
  },
  {
    id: "jumuiya-2025",
    name: "3rd Jumuiya ya Afrika Mashariki Open Chess Tournament",
    date: "June 14–15, 2025",
    location: "MFA Sports Hall, M-PESA Foundation Academy, Thika",
    description: "Hosted at our very own academy, this prestigious East African tournament brought together the best young chess minds. MFA Chess Club dominated the competition, claiming the 1st Place School/Club Trophy.",
    highlights: [
      "🏆 Won Best School/Club Trophy",
      "Kipngeno Cornelius – 1st Runners Up (5.5/6)",
      "Otieno Joseph – 2nd Runners Up (5.3/6)",
      "8 MFA players in the top 30",
    ],
    status: "completed",
  },
  {
    id: "kiambu-regionals-2025",
    name: "Kiambu Regional Chess Tournament",
    date: "March 22, 2025",
    location: "Kiambu County, Kenya",
    description: "All 18 MFA participants scored over 3 points, an extraordinary achievement that qualified the entire team for the national championships.",
    highlights: [
      "18 participants – all qualified for nationals",
      "Every player scored above 3 points",
      "Strongest regional showing by any school",
    ],
    status: "completed",
  },
  {
    id: "nationals-2025",
    name: "Kenya National Chess Championship 2025",
    date: "2025",
    location: "Kenya",
    description: "MFA Chess Club was represented by its finest, with three players qualifying for the next level of competition.",
    highlights: [
      "Joseph Otieno – qualified for next level",
      "Sylvia Mario – qualified for next level",
      "Emanuel Kamau – qualified for next level",
    ],
    status: "completed",
  },
  {
    id: "national-schools-2025",
    name: "Kenya National Schools Individual Chess Championship 2025",
    date: "2025",
    location: "Kenya",
    description: "Jones Kimutai Rop achieved a perfect score in the Under 17 Open category, an incredible feat of skill and preparation.",
    highlights: [
      "Jones Kimutai Rop – 1st Place (4/4), U17 Open",
      "Perfect score – undefeated throughout",
    ],
    status: "completed",
  },
];
