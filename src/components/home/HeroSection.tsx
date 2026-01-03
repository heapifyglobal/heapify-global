import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Users, Rocket, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Building2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Product Engineering Company</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Heapify Global
              </h1>
              <p className="text-xl md:text-2xl font-medium text-primary">
                We Build Real Software. We Train Real Engineers.
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Heapify Global is a product engineering company that develops web, mobile, and AI solutions for startups and enterprises — while training students by letting them work on real production projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link to="/internships">
                  Explore Internships
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border p-8 shadow-2xl">
                {/* Code Window Mock */}
                <div className="bg-background rounded-lg border border-border overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-4 text-xs text-muted-foreground font-mono">heapify-project.tsx</span>
                  </div>
                  <div className="p-4 font-mono text-sm space-y-2">
                    <div className="text-muted-foreground">// Building production software</div>
                    <div><span className="text-primary">const</span> <span className="text-foreground">HeapifyGlobal</span> = {"{"}</div>
                    <div className="pl-4"><span className="text-muted-foreground">products:</span> <span className="text-green-500">"Web, Mobile, AI"</span>,</div>
                    <div className="pl-4"><span className="text-muted-foreground">training:</span> <span className="text-green-500">"Real Projects"</span>,</div>
                    <div className="pl-4"><span className="text-muted-foreground">delivery:</span> <span className="text-green-500">"Production Ready"</span></div>
                    <div>{"}"}</div>
                  </div>
                </div>


                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute right-8 -bottom-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <Rocket className="h-5 w-5" />
                    <span className="text-sm font-semibold">Production Ready</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
