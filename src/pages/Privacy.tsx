import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

const sections = [
  {
    title: "Information We Collect",
    content: "We may collect personal details such as name, email, phone number, educational/professional information, login details, and transaction data. We also collect technical data like IP address, browser type, and device information.",
  },
  {
    title: "How We Use Your Information",
    content: "We use user data to provide services, process payments, improve user experience, send important updates, and provide support.",
  },
  {
    title: "Data Protection",
    content: "We follow industry-standard security practices to protect personal data and do not sell user information to third parties.",
  },
  {
    title: "Third-Party Services",
    content: "We may use trusted third-party services like payment gateways, email platforms, and analytics tools strictly for service delivery.",
  },
  {
    title: "Cookies",
    content: "We use cookies to enhance website performance and user experience.",
  },
  {
    title: "Policy Updates",
    content: "We may update this policy periodically.",
  },
];

export default function Privacy() {
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
              Privacy <span className="text-gradient">Policy</span>
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
