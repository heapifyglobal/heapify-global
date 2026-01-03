import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Clock, X, Briefcase, ExternalLink, GraduationCap } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { GOOGLE_FORM_LINK } from "@/config/links";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";



const internships = [
  {
    id: 1,
    title: "Web Development Intern",
    description: "Learn to build modern, responsive websites using HTML, CSS, JavaScript, and popular frameworks.",
    duration: "2 months",
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    level: "Beginner Friendly",
  },
  {
    id: 2,
    title: "React.js Developer Intern",
    description: "Master React.js by building real-world projects with hooks, state management, and modern patterns.",
    duration: "3 months",
    category: "React.js",
    skills: ["React", "Redux", "TypeScript", "Tailwind CSS"],
    level: "Intermediate",
  },
  {
    id: 3,
    title: "App Development Intern",
    description: "Create cross-platform mobile applications using Flutter or React Native with real project experience.",
    duration: "4 months",
    category: "App Development",
    skills: ["Flutter", "React Native", "Dart", "Mobile UI"],
    level: "Beginner Friendly",
  },
  {
    id: 4,
    title: "Cybersecurity Intern",
    description: "Gain hands-on experience in ethical hacking, network security, and vulnerability assessment.",
    duration: "3 months",
    category: "Cybersecurity",
    skills: ["Ethical Hacking", "Network Security", "Linux", "Penetration Testing"],
    level: "Intermediate",
  },
  {
    id: 5,
    title: "AI/ML Intern",
    description: "Explore machine learning algorithms, neural networks, and build AI-powered applications.",
    duration: "4 months",
    category: "AI/ML",
    skills: ["Python", "TensorFlow", "Machine Learning", "Data Science"],
    level: "Intermediate",
  },
  {
    id: 6,
    title: "UI/UX Design Intern",
    description: "Design beautiful user interfaces and create seamless user experiences for web and mobile apps.",
    duration: "3 months",
    category: "UI/UX Design",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    level: "Beginner Friendly",
  },
  {
    id: 7,
    title: "Data Analyst Intern",
    description: "Learn data analysis, visualization, and derive insights from real-world datasets.",
    duration: "3 months",
    category: "Data Analyst",
    skills: ["Excel", "SQL", "Python", "Power BI"],
    level: "Beginner Friendly",
  },
  {
    id: 8,
    title: "Blockchain Developer Intern",
    description: "Build decentralized applications and smart contracts on blockchain platforms.",
    category: "Blockchain",
    skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts"],
    level: "Intermediate",
  },
  {
    id: 9,
    title: "Python Programming Intern",
    description: "Master Python programming through hands-on projects covering automation, web scraping, and more.",
    duration: "2 months",
    category: "Python Programming",
    skills: ["Python", "Flask", "Django", "Automation"],
    level: "Beginner Friendly",
  },
  {
    id: 10,
    title: "DSA in C++ Intern",
    description: "Strengthen your problem-solving skills with data structures and algorithms in C++.",
    duration: "3 months",
    category: "DSA in C++",
    skills: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
    level: "Beginner Friendly",
  },
  {
    id: 11,
    title: "Java Programming Intern",
    description: "Learn Java programming fundamentals and build enterprise-level applications.",
    duration: "3 months",
    category: "Java Programming",
    skills: ["Java", "OOP", "Spring Boot", "JDBC"],
    level: "Beginner Friendly",
  },
];

const categories = ["All", "Web Development", "React.js", "App Development", "Cybersecurity", "AI/ML", "UI/UX Design", "Data Analyst", "Blockchain", "Python Programming", "DSA in C++", "Java Programming"];
const levels = ["All Levels", "Beginner Friendly", "Intermediate"];

export default function Internships() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const filteredInternships = internships.filter((internship) => {
    const matchesSearch = internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      internship.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || internship.category === selectedCategory;
    const matchesLevel = selectedLevel === "All Levels" || internship.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  const handleApply = () => {
    window.open(GOOGLE_FORM_LINK, "_blank");
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-b from-accent/50 to-background py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Find Your Perfect <span className="text-gradient">Internship</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Browse through our curated internship programs designed to kickstart your career
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by role or skill..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48 h-12">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full md:w-48 h-12">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters */}
            {(selectedCategory !== "All" || selectedLevel !== "All Levels") && (
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {selectedCategory !== "All" && (
                  <Badge variant="secondary" className="gap-1">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory("All")}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {selectedLevel !== "All Levels" && (
                  <Badge variant="secondary" className="gap-1">
                    {selectedLevel}
                    <button onClick={() => setSelectedLevel("All Levels")}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Internship Listings */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-medium text-foreground">{filteredInternships.length}</span> internships
            </p>
          </div>

          <div className="grid gap-4">
            {filteredInternships.map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Icon */}
                  <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>

                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {internship.title}
                        </h3>
                        <p className="mt-2 text-muted-foreground text-sm">
                          {internship.description}
                        </p>
                      </div>
                      <Button onClick={handleApply} className="btn-gradient shrink-0 gap-2">
                        Apply
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Details */}
                    <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                      
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {internship.duration}
                      </span>
                      <Badge variant="outline" className="text-primary border-primary/30">
                        {internship.level}
                      </Badge>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap items-center gap-2 mt-4">
                      {internship.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredInternships.length === 0 && (
            <div className="text-center py-16">
              <Briefcase className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground">No internships found</h3>
              <p className="text-muted-foreground mt-2">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
