import Navbar from "@/components/Navbar";
import AllProjects from "@/components/AllProjects";
import Footer from "@/components/Footer";

export const metadata = {
  title: "All Projects | Md Eyamin Rahman Pranto",
  description: "Explore the full portfolio of Md Eyamin Rahman Pranto, including frontend, backend, and full-stack projects.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-navy-dark">
      <Navbar />
      <AllProjects />
      <Footer />
    </main>
  );
}
