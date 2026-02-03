import ContactSection from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import AboutSection from "@/app/components/About";
import ProjectsSection from "@/app/components/Projects";
import SkillsSection from "@/app/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-slate-900">
      <Header />

      <main className="mx-auto flex w-full max-w-5xl flex-col px-6 pb-16 pt-24 sm:px-10">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
