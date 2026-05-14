import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import PortfolioFilter from "../../components/PortfolioFilter";
import Testimonials from "../../components/Testimonials";

export default function PortfolioPage() {
  return <div className="site"><Navbar /><main><PageHero label="Portfolio" title="Selected Video Editing Projects" text="Click a category to filter videos. Replace project placeholders with your real thumbnails and previews." /><section className="section fade-up"><PortfolioFilter /></section><Testimonials /></main><Footer /></div>;
}
