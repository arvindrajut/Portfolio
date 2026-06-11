import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import Grid from "./components/Grid";
import RecentProjects from "./components/RecentProjects";
import { navItems } from "./data";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-x-hidden">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Experience />
        <Grid />
        <RecentProjects />
        <Approach />
        <Footer />
      </div>
      <Chatbot />
    </main>
  );
}
