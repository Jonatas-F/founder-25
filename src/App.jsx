import SmoothScrollProvider from "./providers/SmoothScrollProvider";
import Hero from "./sections/Hero";
import ContractPromise from "./sections/ContractPromise";
import WhyOnline from "./sections/WhyOnline";
import Build from "./sections/Build";
import SagaPassSeries from "./sections/SagaPassSeries";
import Professores from "./sections/Professores";
import Community from "./sections/Community";
import OnDemand from "./sections/OnDemand";
import SagaIA from "./sections/SagaIA";
import FounderAnchor from "./sections/FounderAnchor";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <SmoothScrollProvider>
      <main className="bg-[var(--bg-base)] text-white">
        <Hero />
        <ContractPromise />
        <WhyOnline />
        <Build />
        <SagaPassSeries />
        <Professores />
        <Community />
        <OnDemand />
        <SagaIA />
        <FounderAnchor />
        <FinalCTA />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
