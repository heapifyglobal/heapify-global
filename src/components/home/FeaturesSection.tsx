import { motion } from "framer-motion";
import { Award, BookOpen, Users, Rocket, CheckCircle, FileText } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Hands-on Learning",
    description: "Work on real projects that build your portfolio and give you practical experience employers value.",
  },
  {
    icon: Award,
    title: "Verified Certificates",
    description: "Receive industry-recognized certificates upon completion that add credibility to your resume.",
  },
  {
    icon: Users,
    title: "Mentorship Support",
    description: "Get guidance from experienced professionals who help you navigate your learning journey.",
  },
  {
    icon: Rocket,
    title: "Career Readiness",
    description: "Develop skills that are in high demand and prepare yourself for your dream job.",
  },
  {
    icon: CheckCircle,
    title: "Flexible Programs",
    description: "Choose from various durations and learn at your own pace with remote-friendly options.",
  },
  {
    icon: FileText,
    title: "Letter of Recommendation",
    description: "Top performers receive recommendation letters that strengthen job applications.",
  },
];

export function FeaturesSection() {
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
            Why Choose <span className="text-gradient">Heapify Global</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            We're committed to providing quality learning experiences that transform your career
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
