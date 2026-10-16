"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { games, site, type Game } from "@/lib/site";
import { Logo } from "./logo";
import { Apple, Arrow, PlayStore } from "./icons";
import { GameArtwork } from "./game-artwork";

gsap.registerPlugin(useGSAP);

export function Studio() {
  const root = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          gsap
            .timeline({ defaults: { duration: 0.55, ease: "power2.out" } })
            .from(".site-header", { autoAlpha: 0, y: -12 })
            .from(
              ".about-section > *",
              { autoAlpha: 0, y: 12, stagger: 0.08 },
              0.1,
            );
        },
        root,
      );
      return () => mm.revert();
    },
    { scope: root },
  );

  useEffect(() => {
    if (!selectedGame) return;
    dialog.current?.showModal();
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, [selectedGame]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeDialog = () => {
    dialog.current?.close();
    setSelectedGame(null);
  };

  return (
    <div ref={root} id="home" className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header container">
        <Logo />
        <nav
          aria-label="Main navigation"
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          id="main-navigation"
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About us
          </a>
          <a href="#games" onClick={() => setMenuOpen(false)}>
            Our games
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact us
          </a>
        </nav>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /> <span />
        </button>
      </header>

      <main id="main">
        <section
          id="about"
          className="about-section container"
          aria-labelledby="about-heading"
        >
          <h1 id="about-heading">About us</h1>
          <div className="about-content">
            <div className="about-body">
              <p>
                Lieos is an independent mobile game studio. We build simple,
                thoughtful games for everyday play.
              </p>
            </div>
          </div>
        </section>

        <section
          id="games"
          className="games-section container"
          aria-labelledby="games-heading"
        >
          <div className="section-heading">
            <h2 id="games-heading">Our games</h2>
          </div>
          <div className="games-grid">
            {games.map((game) => (
              <article className="game-card" key={game.id}>
                <button
                  className="game-art"
                  style={{ backgroundColor: game.color }}
                  onClick={() => setSelectedGame(game)}
                  aria-label={`Explore ${game.name}`}
                >
                  <GameArtwork game={game} eager />
                  <span className="game-open">
                    <Arrow diagonal />
                  </span>
                </button>
                <div className="game-info">
                  <div>
                    <h3>
                      <button onClick={() => setSelectedGame(game)}>
                        {game.name}
                      </button>
                    </h3>
                  </div>
                </div>
                <div className="game-downloads">
                  {game.appStoreUrl && (
                    <a
                      href={game.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Download ${game.name} on the App Store`}
                    >
                      <Apple /> App Store
                    </a>
                  )}
                  {game.playStoreUrl && (
                    <a
                      href={game.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Get ${game.name} on Google Play`}
                    >
                      <PlayStore /> Google Play
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="site-footer"
        aria-labelledby="contact-heading"
      >
        <div className="container">
          <div className="footer-top">
            <div>
              <h2 id="contact-heading">Contact us</h2>
            </div>
            <div className="footer-contact">
              <a className="email-link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <Logo footer />
            <p>© {new Date().getFullYear()} Lieos.</p>
          </div>
        </div>
      </footer>

      <dialog
        ref={dialog}
        className="game-dialog"
        onClose={() => setSelectedGame(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
        aria-labelledby="dialog-title"
      >
        {selectedGame && (
          <div className="dialog-content">
            <button
              className="dialog-close"
              onClick={closeDialog}
              aria-label="Close game details"
            >
              ×
            </button>
            <div className="dialog-art">
              <GameArtwork game={selectedGame} eager />
            </div>
            <div className="dialog-copy">
              <p className="eyebrow">
                {selectedGame.category} <span> / {selectedGame.status}</span>
              </p>
              <div className="dialog-title-row">
                <Image src={selectedGame.icon} alt="" width={44} height={44} />
                <h2 id="dialog-title">{selectedGame.name}</h2>
              </div>
              <p>{selectedGame.description}</p>
              <div className="dialog-platforms">
                {selectedGame.appStoreUrl || selectedGame.playStoreUrl ? (
                  <>
                    {selectedGame.appStoreUrl && (
                      <a
                        href={selectedGame.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button-dark"
                      >
                        <Apple />
                        App Store
                      </a>
                    )}
                    {selectedGame.playStoreUrl && (
                      <a
                        href={selectedGame.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button-dark"
                      >
                        <PlayStore />
                        Google Play
                      </a>
                    )}
                  </>
                ) : (
                  <p>
                    <span className="status-dot" /> Coming soon. Store links
                    will be here at launch.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
