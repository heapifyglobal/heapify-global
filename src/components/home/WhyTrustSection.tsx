import { motion } from "framer-motion";
import { Shield, Users, DollarSign, FileText, Github, Award, Briefcase, Target } from "lucide-react";

const companyReasons = [
  {
    icon: Users,
    title: "Professional In-House Engineers",
    description: "Production-grade software built by professional in-house engineers.",
  },
  {
    icon: FileText,
    title: "Clean Documentation & Scalable Architecture",
    description: "Secure development workflows with clean documentation & scalable architecture.",
  },
  {
    icon: Shield,
    title: "NDA-Protected Projects",
    description: "NDA-protected projects and confidential data handling.",
  },
  {
    icon: Target,
    title: "Long-Term Technical Support",
    description: "Long-term technical support and system maintenance.",
  },
];

const studentReasons = [
  {
    icon: Shield,
    title: "Real Internal Products",
    description: "Training on Heapify-built real internal products and platforms.",
  },
  {
    icon: Users,
    title: "Mentor-Guided Practices",
    description: "Mentor-guided engineering practices and code reviews.",
  },
  {
    icon: Briefcase,
    title: "Portfolio-Ready Case Studies",
    description: "Portfolio-ready system designs and case studies.",
  },
  {
    icon: Award,
    title: "Certificates & Career Guidance",
    description: "Certificates, LOR, and structured career guidance.",
  },
];

export function WhyTrustSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Companies Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Why Companies Trust Heapify Global
              </h2>
              <p className="mt-2 text-muted-foreground">
                Professional software development you can rely on
              </p>
            </div>

            <div className="space-y-4">
              {companyReasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 h-fit">
                    <reason.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Students Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Why Students Choose Heapify Academy
              </h2>
              <p className="mt-2 text-muted-foreground">
                Real engineering experience that employers value
              </p>
            </div>

            <div className="space-y-4">
              {studentReasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 h-fit">
                    <reason.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
