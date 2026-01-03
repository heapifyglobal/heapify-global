import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { WhyTrustSection } from "@/components/home/WhyTrustSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <Layout>
        <HeroSection />
        <WhatWeDoSection />
        <HowItWorksSection />
        <WhyTrustSection />
        <TechStackSection />
        <CTASection />
      </Layout>
    </motion.div>
  );
};

export default Index;
