import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Shield, 
  Brain, 
  Palette, 
  BarChart3,
  Blocks,
  Terminal,
  Binary,
  Coffee,
  Atom
} from "lucide-react";

const categories = [
  { name: "Web Development", icon: Code2, tag: "Most Popular", color: "bg-blue-500/10 text-blue-600" },
  { name: "React.js", icon: Atom, tag: "Trending", color: "bg-cyan-500/10 text-cyan-600" },
  { name: "App Development", icon: Smartphone, tag: "High Demand", color: "bg-purple-500/10 text-purple-600" },
  { name: "Cybersecurity", icon: Shield, tag: "In Demand", color: "bg-red-500/10 text-red-600" },
  { name: "AI/ML", icon: Brain, tag: "Trending", color: "bg-green-500/10 text-green-600" },
  { name: "UI/UX Design", icon: Palette, tag: "Creative", color: "bg-pink-500/10 text-pink-600" },
  { name: "Data Analyst", icon: BarChart3, tag: "Growing Field", color: "bg-cyan-500/10 text-cyan-600" },
  { name: "Blockchain", icon: Blocks, tag: "Emerging Tech", color: "bg-orange-500/10 text-orange-600" },
  { name: "Python Programming", icon: Terminal, tag: "Beginner Friendly", color: "bg-yellow-500/10 text-yellow-600" },
  { name: "DSA in C++", icon: Binary, tag: "Core Skills", color: "bg-indigo-500/10 text-indigo-600" },
  { name: "Java Programming", icon: Coffee, tag: "Enterprise Ready", color: "bg-amber-500/10 text-amber-600" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function CategoriesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Explore by <span className="text-gradient">Category</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            Find the perfect internship program that matches your skills and interests
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {categories.map((category) => (
            <motion.div key={category.name} variants={item}>
              <Link
                to={`/internships?category=${category.name}`}
                className="group block p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg ${category.color} mb-4`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-primary font-medium">
                  {category.tag}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
