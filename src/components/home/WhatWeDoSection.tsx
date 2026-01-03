import { motion } from "framer-motion";
import { Code, Rocket, Building2, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Product Development",
    description: "SaaS platforms, dashboards, internal tools — we build scalable software that powers your business.",
  },
  {
    icon: Rocket,
    title: "Startup MVP Building",
    description: "From idea to production. We help startups launch faster with clean, production-ready MVPs.",
  },
  {
    icon: Building2,
    title: "Enterprise Automation",
    description: "CRM, ERP, admin systems — custom enterprise solutions that streamline your operations.",
  },
  {
    icon: GraduationCap,
    title: "Internship Programs",
    description: "Real client project based training. Students learn by building actual production software.",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            What We Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            Engineering excellence meets talent development
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
