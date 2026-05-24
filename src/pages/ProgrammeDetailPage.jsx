import React, { Suspense, useEffect } from 'react';
import ProgrammeDetail from '@/components/programmes/ProgrammeDetail';
import { Header, Footer, SectionFallback } from '@/pages/HomePage';
import { rescanScrollReveal } from '@/utils/scrollReveal';

export default function ProgrammeDetailPage() {
  useEffect(() => {
    const timers = [200, 600].map((ms) => setTimeout(() => rescanScrollReveal(), ms));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      <Suspense fallback={<SectionFallback message="Chargement…" />}>
        <Header />
      </Suspense>
      <main>
        <ProgrammeDetail />
      </main>
      <Suspense fallback={<SectionFallback message="Chargement…" />}>
        <Footer />
      </Suspense>
    </>
  );
}
