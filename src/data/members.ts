export interface Member {
  id: string;
  name: string;
  elo: string;
  tournaments: string[];
  achievements: string[];
  bio: string;
}

export const members: Member[] = [
  {
    id: "jones-kimutai-rop",
    name: "Jones Kimutai Rop",
    elo: "Unrated",
    tournaments: ["Kenya National Schools Individual Chess Championship 2025 Under 17 Open"],
    achievements: ["1st Place – 4/4 points, U17 Open"],
    bio: "A dominant force in the Under 17 category, Jones swept the competition with a perfect score.",
  },
  {
    id: "kipngeno-cornelius",
    name: "Kipngeno Cornelius",
    elo: "Unrated",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["1st Runners Up – 5.5/6 points"],
    bio: "A fierce competitor with outstanding tactical skills. Cornelius showed remarkable composure throughout the tournament, narrowly missing the top spot.",
  },
  {
    id: "otieno-joseph",
    name: "Otieno Joseph",
    elo: "Unrated",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)", "National Chess Championship"],
    achievements: ["2nd Runners Up – 5.3/6 points", "Qualified for National Chess Championship next level"],
    bio: "A versatile player who combines strategic depth with creative play. Joseph's qualification for nationals showcases his growing talent.",
  },
  {
    id: "ouma-elvis",
    name: "Ouma Elvis",
    elo: "Unrated",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["5.1 points"],
    bio: "Known for his endgame prowess and patient positional play.",
  },
  {
    id: "maina-jaycrack",
    name: "Maina Jaycrack",
    elo: "Unrated",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["5 points"],
    bio: "A dynamic player who thrives under pressure with sharp tactical awareness.",
  },
  {
    id: "mutua-joseph",
    name: "Mutua Joseph",
    elo: "Unrated",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["4.5 points"],
    bio: "A steady and reliable player who consistently delivers strong performances.",
  },
  {
    id: "kamau-emanuel",
    name: "Kamau Emanuel",
    elo: "Unrated",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)", "National Chess Championship"],
    achievements: ["4.3 points", "Qualified for National Chess Championship next level"],
    bio: "Emanuel's analytical approach and dedication have earned him a spot among the nation's best young players.",
  },
  {
    id: "omaido-sturridge",
    name: "Omaido Sturridge",
    elo: "Unrated",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["4.1 points"],
    bio: "A passionate organizer and player who leads by example both on and off the board.",
  },
  {
    id: "ngumi-jian",
    name: "Ngumi Jian",
    elo: "Unrated",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["4 points"],
    bio: "A rising talent with great potential and an eagerness to learn from every game.",
  },
  {
    id: "sylvia-mario",
    name: "Sylvia Mario",
    elo: "Unrated",
    tournaments: ["National Chess Championship"],
    achievements: ["Qualified for National Chess Championship next level"],
    bio: "A trailblazer in the club, Sylvia inspires others with her determination and skill at the national level.",
  },
];
