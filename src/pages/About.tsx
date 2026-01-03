import { motion } from "framer-motion";
import { Target, Eye, Shield, Building2, GraduationCap, Handshake } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const differences = [
  "In-house professional engineering team",
  "Secure, NDA-protected development workflows",
  "Production-grade architectures and clean documentation",
  "Separate Academy division for structured talent development",
  "Long-term client partnerships and technical support",
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/50 to-background py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-gradient">Heapify Global</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Who We <span className="text-gradient">Are</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Heapify Global is a technology product engineering company focused on building scalable digital systems for startups and enterprises.
              </p>
              <p>
                We design, develop, and maintain modern web, mobile, and automation platforms that help organizations streamline operations and build future-ready digital infrastructure.
              </p>
              <p>
                Alongside our engineering division, Heapify operates <strong className="text-foreground">Heapify Academy</strong> — our internal training and talent development arm — where aspiring engineers are trained using Heapify-built systems and real-world engineering workflows.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-primary text-primary-foreground"
            >
              <Target className="h-12 w-12 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-primary-foreground/90 leading-relaxed">
                To build reliable, secure, and scalable digital systems while shaping the next generation of engineers through structured, industry-grade technical training.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <Eye className="h-12 w-12 text-primary mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become a globally trusted engineering and innovation company that delivers impactful technology products and develops world-class engineering talent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              What Makes Heapify <span className="text-gradient">Different</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-4">
              {differences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="h-3 w-3 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Divisions */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              Our <span className="text-gradient">Divisions</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Heapify Labs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our core engineering division responsible for client software development, automation platforms, and internal product building.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <GraduationCap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Heapify Academy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our structured training and internship division focused on engineering education using Heapify-built systems and real internal platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Handshake className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Commitment</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are committed to delivering high-quality software, transparent processes, and ethical training standards — ensuring trust for both our business partners and our learners.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
