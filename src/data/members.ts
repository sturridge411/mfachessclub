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
    id: "ouma-elvis",
    name: "Ouma Elvis",
    elo: "1650",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["1st Runners Up"],
    bio: "Known for his endgame prowess and patient positional play.",
  },
  {
    id: "omaido-sturridge",
    name: "Omaido Sturridge",
    elo: "1570",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["2nd Runners Up"],
    bio: "A passionate organizer and player who leads by example both on and off the board.",
  },
  {
    id: "kipngeno-cornelius",
    name: "Kipngeno Cornelius",
    elo: "1560",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["1st Runners Up"],
    bio: "A fierce competitor with outstanding tactical skills. Cornelius showed remarkable composure throughout the tournament.",
  },
  {
    id: "otieno-joseph",
    name: "Otieno Joseph",
    elo: "1480",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)", "National Chess Championship"],
    achievements: ["Qualified for National Chess Championship next level"],
    bio: "A versatile player who combines strategic depth with creative play. Joseph's qualification for nationals showcases his growing talent.",
  },
  {
    id: "maina-jaycrack",
    name: "Maina Jaycrack",
    elo: "1425",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["Strong tournament performer"],
    bio: "A dynamic player who thrives under pressure with sharp tactical awareness.",
  },
  {
    id: "mutua-joseph",
    name: "Mutua Joseph",
    elo: "1390",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["Consistent competitor"],
    bio: "A steady and reliable player who consistently delivers strong performances.",
  },
  {
    id: "kamau-emanuel",
    name: "Kamau Emanuel",
    elo: "1365",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)", "National Chess Championship"],
    achievements: ["Qualified for National Chess Championship next level"],
    bio: "Emanuel's analytical approach and dedication have earned him a spot among the nation's best young players.",
  },
  {
    id: "ngumi-jian",
    name: "Ngumi Jian",
    elo: "1340",
    tournaments: ["Jumuiya ya Afrika Mashariki Open Chess Tournament 2025 (3rd Edition)"],
    achievements: ["Rising talent"],
    bio: "A rising talent with great potential and an eagerness to learn from every game.",
  },
  {
    id: "sylvia-mario",
    name: "Sylvia Mario",
    elo: "1310",
    tournaments: ["National Chess Championship"],
    achievements: ["Qualified for National Chess Championship next level"],
    bio: "A trailblazer in the club, Sylvia inspires others with her determination and skill at the national level.",
  },
];
