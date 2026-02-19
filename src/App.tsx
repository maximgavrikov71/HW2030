import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { Introduction } from '@/sections/Introduction';
import { CompanyPotential } from '@/sections/CompanyPotential';
import { IntegrationModel } from '@/sections/IntegrationModel';
import { ExpectedEffects } from '@/sections/ExpectedEffects';
import { Risks } from '@/sections/Risks';
import { Conclusions } from '@/sections/Conclusions';
import { Appendix } from '@/sections/Appendix';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <CompanyPotential />
        <IntegrationModel />
        <section id="effects">
          <ExpectedEffects />
        </section>
        <Risks />
        <Conclusions />
        <Appendix />
      </main>
      <Footer />
    </div>
  );
}

export default App;
