import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

const sections = [
  {
    title: "Use of Services",
    content: "Heapify Global provides software development services and training programs. By using our website, you agree to use our services lawfully.",
  },
  {
    title: "Internship & Training Programs",
    content: "All training and internship programs are educational and do not guarantee employment.",
  },
  {
    title: "Payments & Refunds",
    content: "Program fees are non-refundable unless explicitly stated.",
  },
  {
    title: "Intellectual Property",
    content: "All website content, training materials, software systems, and internal platforms are the intellectual property of Heapify Global.",
  },
  {
    title: "Code of Conduct",
    content: "Users must maintain professional and ethical behavior.",
  },
  {
    title: "Limitation of Liability",
    content: "Heapify Global is not responsible for personal losses, job placement outcomes, or indirect damages.",
  },
  {
    title: "Policy Changes",
    content: "Heapify Global may update these terms at any time.",
  },
];

export default function Terms() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/50 to-background py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="mt-4 text-muted-foreground">
              Heapify Global
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
