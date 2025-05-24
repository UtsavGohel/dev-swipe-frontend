export interface DeveloperProfile {
  id: number;
  name: string;
  age: number;
  role: string;
  bio: string;
  skills: string[];
  image: string;
}

// Sample developer profiles
export const developerProfiles: DeveloperProfile[] = [
  {
    id: 1,
    name: "Utsav Gohel",
    age: 28,
    role: "Frontend Developer",
    bio: "React enthusiast who loves building beautiful UIs. Looking for teammates on my next project.",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 2,
    name: "Sophia Chen",
    age: 31,
    role: "Full Stack Developer",
    bio: "Building scalable web applications with Node.js and React. Open to collaboration on open-source projects.",
    skills: ["Node.js", "MongoDB", "Express", "React"],
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 3,
    name: "Marcus Williams",
    age: 26,
    role: "Backend Developer",
    bio: "Python and Django expert. I love solving complex problems and optimizing database performance.",
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    age: 29,
    role: "UI/UX Designer & Developer",
    bio: "Bridging the gap between design and development. I create beautiful and functional user experiences.",
    skills: ["Figma", "React", "CSS", "User Research"],
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 5,
    name: "David Kim",
    age: 33,
    role: "DevOps Engineer",
    bio: "Automating everything I can. Passionate about CI/CD pipelines and cloud infrastructure.",
    skills: ["AWS", "Kubernetes", "Terraform", "GitHub Actions"],
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
];
