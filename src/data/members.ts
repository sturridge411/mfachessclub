export interface Member {
  id: string;
  name: string;
  elo: string;
  tournaments: string[];
  achievements: string[];
  bio: string;
  position?: number;
  points?: string;
}

export const members: Member[] = [
  {
    id: "kipngeno-cornelius",
    name: "Kipngeno Cornelius",
    elo: "N/A",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["1st Runners Up – 5.5/6 points"],
    bio: "A fierce competitor with outstanding tactical skills. Cornelius showed remarkable composure throughout the tournament, narrowly missing the top spot.",
    position: 2,
    points: "5.5/6",
  },
  {
    id: "otieno-joseph",
    name: "Otieno Joseph",
    elo: "N/A",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)", "National Chess Championship"],
    achievements: ["2nd Runners Up – 5.3/6 points", "Qualified for National Chess Championship next level"],
    bio: "A versatile player who combines strategic depth with creative play. Joseph's qualification for nationals showcases his growing talent.",
    position: 3,
    points: "5.3/6",
  },
  {
    id: "ouma-elvis",
    name: "Ouma Elvis",
    elo: "N/A",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["6th Place – 5.1 points"],
    bio: "Known for his endgame prowess and patient positional play.",
    position: 6,
    points: "5.1",
  },
  {
    id: "maina-jaycrack",
    name: "Maina Jaycrack",
    elo: "N/A",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["9th Place – 5 points"],
    bio: "A dynamic player who thrives under pressure with sharp tactical awareness.",
    position: 9,
    points: "5",
  },
  {
    id: "mutua-joseph",
    name: "Mutua Joseph",
    elo: "N/A",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["13th Place – 4.5 points"],
    bio: "A steady and reliable player who consistently delivers strong performances.",
    position: 13,
    points: "4.5",
  },
  {
    id: "kamau-emanuel",
    name: "Kamau Emanuel",
    elo: "N/A",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)", "National Chess Championship"],
    achievements: ["18th Place – 4.3 points", "Qualified for National Chess Championship next level"],
    bio: "Emanuel's analytical approach and dedication have earned him a spot among the nation's best young players.",
    position: 18,
    points: "4.3",
  },
  {
    id: "omaido-sturridge",
    name: "Omaido Sturridge",
    elo: "N/A",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["19th Place – 4.1 points"],
    bio: "A passionate organizer and player who leads by example both on and off the board.",
    position: 19,
    points: "4.1",
  },
  {
    id: "ngumi-jian",
    name: "Ngumi Jian",
    elo: "N/A",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["30th Place – 4 points"],
    bio: "A rising talent with great potential and an eagerness to learn from every game.",
    position: 30,
    points: "4",
  },
  {
    id: "sylvia-mario",
    name: "Sylvia Mario",
    elo: "N/A",
    tournaments: ["National Chess Championship"],
    achievements: ["Qualified for National Chess Championship next level"],
    bio: "A trailblazer in the club, Sylvia inspires others with her determination and skill at the national level.",
  },
  {
    id: "jones-kimutai-rop",
    name: "Jones Kimutai Rop",
    elo: "N/A",
    tournaments: ["Kenya National Schools Individual Chess Championship 2025 Under 17 Open"],
    achievements: ["1st Place – 4/4 points, U17 Open"],
    bio: "A dominant force in the Under 17 category, Jones swept the competition with a perfect score.",
    position: 1,
    points: "4/4",
  },
];
