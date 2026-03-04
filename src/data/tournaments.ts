export interface Tournament {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  highlights: string[];
  status: "completed" | "upcoming";
}

export const tournaments: Tournament[] = [
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
