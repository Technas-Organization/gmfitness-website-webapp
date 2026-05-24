import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from '@/context/AppContext';
import { WhatsAppFloat } from '@/components/common/SocialIcons';
import { rescanScrollReveal } from '@/utils/scrollReveal';
import HomePage, { Header, Footer, SectionFallback } from '@/pages/HomePage';

const ProgrammeDetailPage = React.lazy(() => import('@/pages/ProgrammeDetailPage'));

function App() {
  useEffect(() => {
    const timers = [300, 800].map((ms) => setTimeout(() => rescanScrollReveal(), ms));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AppProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div id="page-root" className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Suspense fallback={<SectionFallback message="Chargement…" />}>
                    <Header />
                  </Suspense>
                  <HomePage />
                  <Suspense fallback={<SectionFallback message="Chargement…" />}>
                    <Footer />
                  </Suspense>
                </>
              }
            />
            <Route
              path="/programmes/:id"
              element={
                <Suspense fallback={<SectionFallback message="Chargement du programme…" />}>
                  <ProgrammeDetailPage />
                </Suspense>
              }
            />
          </Routes>

          <WhatsAppFloat message="Bonjour, je souhaite avoir des informations sur vos services de coaching sportif" />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
