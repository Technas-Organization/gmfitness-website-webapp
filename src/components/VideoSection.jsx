import React, { useState } from 'react';

const presentationVideo = {
  id: 'presentation',
  title: 'Découvrez Gilson Mendes',
  description: 'Présentation de votre coach sportif sur la Côte d\'Azur',
  youtubeId: 'NdcT_AjbnGM',
  category: 'Présentation',
};

const sessionVideos = [
  {
    id: 'session1',
    title: '20 minutes de Pilates pour un ventre plat',
    description: 'Pilates 100% abdo — séance complète pour renforcer votre core',
    youtubeId: '02ic0w-QWfs',
    duration: '20 min',
  },
  {
    id: 'session2',
    title: 'YOGA FLOW — Routine parfaite',
    description: 'Séance de yoga flow de 25 minutes pour détente et flexibilité',
    youtubeId: '_hlpJcbWl48',
    duration: '25 min',
  },
  {
    id: 'session3',
    title: '20 minutes Stretching corps complet',
    description: "Séance d'étirement complète pour assouplir tout le corps",
    youtubeId: 'BBqzBUFQRKg',
    duration: '20 min',
  },
];

function youtubeEmbed(id) {
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
}

function youtubeThumb(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section id="videos" className="section-padding section-muted scroll-mt-[var(--header-height)]" aria-labelledby="videos-heading">
      <div className="container-max">
        <header className="section-header reveal">
          <p className="section-eyebrow">Vidéos</p>
          <h2 id="videos-heading" className="section-title">
            Découvrez mon <span className="text-accent">approche</span>
          </h2>
          <p className="section-subtitle">
            Pilates, yoga, stretching et renforcement — des séances complètes depuis ma chaîne YouTube.
          </p>
        </header>

        <article className="card overflow-hidden mb-12 reveal">
          <div className="bg-[var(--color-bg-inverse)] text-white px-6 py-5">
            <h3 className="font-display text-2xl tracking-wide m-0 mb-1">{presentationVideo.title}</h3>
            <p className="text-white/75 text-sm m-0">{presentationVideo.description}</p>
          </div>
          <div className="p-4 sm:p-6">
            <div className="aspect-video rounded-lg overflow-hidden bg-[var(--color-bg-muted)]">
              <iframe
                src={youtubeEmbed(presentationVideo.youtubeId)}
                title={presentationVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </article>

        <h3 className="font-display text-2xl tracking-wide text-center mb-8 reveal">Exemples de séances</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {sessionVideos.map((video, index) => (
            <article
              key={video.id}
              className={`card overflow-hidden reveal${index === 1 ? ' reveal-delay-1' : index === 2 ? ' reveal-delay-2' : ''}`}
            >
              <button
                type="button"
                className="relative w-full aspect-video border-0 p-0 cursor-pointer group"
                onClick={() => setSelectedVideo(video)}
                aria-label={`Lire la vidéo : ${video.title}`}
              >
                <img
                  src={youtubeThumb(video.youtubeId)}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <span className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <span className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent ml-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M8 5v10l7-5z" />
                    </svg>
                  </span>
                </span>
                {video.duration && (
                  <span className="absolute bottom-2 right-2 text-xs bg-black/75 text-white px-2 py-1 rounded">
                    {video.duration}
                  </span>
                )}
              </button>
              <div className="p-5">
                <h4 className="font-semibold text-[var(--color-text)] mb-2">{video.title}</h4>
                <p className="text-sm text-muted mb-0">{video.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.youtube.com/@Gilson.Mendes-Fitness/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Ma chaîne YouTube
            </a>
            <a href="#booking" className="btn btn-secondary">
              Réserver une séance
            </a>
          </div>
        </div>
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          onClick={() => setSelectedVideo(null)}
          onKeyDown={(e) => e.key === 'Escape' && setSelectedVideo(null)}
        >
          <div className="card max-w-4xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-5 py-4 bg-[var(--color-bg-inverse)] text-white">
              <h3 id="video-modal-title" className="font-display text-xl m-0">{selectedVideo.title}</h3>
              <button
                type="button"
                className="text-white/80 hover:text-white p-2"
                onClick={() => setSelectedVideo(null)}
                aria-label="Fermer la vidéo"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={youtubeEmbed(selectedVideo.youtubeId)}
                  title={selectedVideo.title}
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
              <p className="text-muted text-sm mt-4 mb-0">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
