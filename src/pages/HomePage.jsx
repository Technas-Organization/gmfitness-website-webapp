import React, { Suspense, useEffect } from 'react';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { rescanScrollReveal } from '@/utils/scrollReveal';
import { setPageSeo, DEFAULT_OG } from '@/utils/seo';

const Header = React.lazy(() => import('@/components/Header'));
const Hero = React.lazy(() => import('@/components/Hero'));
const Services = React.lazy(() => import('@/components/Services'));
const Programmes = React.lazy(() => import('@/components/Programmes'));
const VideoSection = React.lazy(() => import('@/components/VideoSection'));
const TestimonialsSection = React.lazy(() => import('@/components/testimonials/TestimonialsSection'));
const BookingForm = React.lazy(() => import('@/components/BookingForm'));
const About = React.lazy(() => import('@/components/About'));
const Contact = React.lazy(() => import('@/components/Contact'));
const Footer = React.lazy(() => import('@/components/Footer'));

function SectionFallback({ message }) {
  return (
    <div className="section-padding flex items-center justify-center min-h-[12rem]">
      <LoadingSpinner message={message} />
    </div>
  );
}

export default function HomePage() {
  useEffect(() => {
    setPageSeo({
      title: "Gilson Mendes — Coach Sportif Côte d'Azur | Transformation Physique",
      description:
        "Coach sportif diplômé sur la Côte d'Azur. Coaching individuel, collectif et programmes en ligne. Approche holistique corps-esprit. Séance découverte gratuite.",
      image: DEFAULT_OG,
      path: '',
    });
  }, []);

  useEffect(() => {
    import('@/components/Header');
    import('@/components/Hero');
  }, []);

  useEffect(() => {
    const timers = [300, 800, 1500].map((ms) => setTimeout(() => rescanScrollReveal(), ms));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const timer = setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <Suspense fallback={<SectionFallback message="Chargement de la page…" />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<SectionFallback message="Chargement des services…" />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionFallback message="Chargement des programmes…" />}>
        <Programmes />
      </Suspense>

      <Suspense fallback={<SectionFallback message="Chargement des vidéos…" />}>
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
  );
}

export { Header, Footer, SectionFallback };
