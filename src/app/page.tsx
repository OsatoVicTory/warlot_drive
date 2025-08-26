import Discover from "@/components/landingPage/discover";
import FAQs from "@/components/landingPage/faq";
import Footer from "@/components/landingPage/footer";
import Header from "@/components/landingPage/header"
import Hero from "@/components/landingPage/hero";
import Hero2 from "@/components/landingPage/hero2";
import Features from "@/components/landingPage/section2";
import Tools from "@/components/landingPage/section3";
import SignupSection from "@/components/landingPage/signup";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans">
      <Header />
      <main>
        <Hero />
        <Hero2 />
        <Features />
        <Tools />
        <Discover />
        <FAQs />
        <SignupSection />
      </main>
      <Footer />
    </div>
  );
}
