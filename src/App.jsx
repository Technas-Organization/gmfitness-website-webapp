import React, { Suspense, useEffect } from 'react';
import { AppProvider } from '@/context/AppContext';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { WhatsAppFloat } from '@/components/common/SocialIcons';
import { rescanScrollReveal } from '@/utils/scrollReveal';

const Header = React.lazy(() => import('./components/Header'));
const Hero = React.lazy(() => import('./components/Hero'));
const Services = React.lazy(() => import('./components/Services'));
const VideoSection = React.lazy(() => import('./components/VideoSection'));
const TestimonialsSection = React.lazy(() => import('./components/testimonials/TestimonialsSection'));
const BookingForm = React.lazy(() => import('./components/BookingForm'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

function SectionFallback({ message }) {
  return (
    <div className="section-padding flex items-center justify-center min-h-[12rem]">
      <LoadingSpinner message={message} />
    </div>
  );
}

function App() {
  useEffect(() => {
    import('./components/Header');
    import('./components/Hero');
  }, []);

  useEffect(() => {
    const timers = [300, 800, 1500].map((ms) =>
      setTimeout(() => rescanScrollReveal(), ms)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AppProvider>
      <div id="page-root" className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <Suspense fallback={<SectionFallback message="Chargement…" />}>
          <Header />
        </Suspense>

        <main>
          <Suspense fallback={<SectionFallback message="Chargement de la page…" />}>
            <Hero />
          </Suspense>

          <Suspense fallback={<SectionFallback message="Chargement des services…" />}>
            <Services />
          </Suspense>

          <Suspense fallback={<SectionFallback message="Chargement des programmes…" />}>
            <VideoSection />
          </Suspense>

          <Suspense fallback={<SectionFallback message="Chargement des témoignages…" />}>
            <TestimonialsSection />
          </Suspense>

          <Suspense fallback={<SectionFallback message="Chargement des tarifs…" />}>
            <BookingForm />
          </Suspense>

          <Suspense fallback={<SectionFallback message="Chargement…" />}>
            <About />
          </Suspense>

          <Suspense fallback={<SectionFallback message="Chargement du formulaire…" />}>
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={<SectionFallback message="Chargement…" />}>
          <Footer />
        </Suspense>

        <WhatsAppFloat message="Bonjour, je souhaite avoir des informations sur vos services de coaching sportif" />
      </div>
    </AppProvider>
  );
}

export default App;
