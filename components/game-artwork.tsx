import Image from "next/image";
import type { Game } from "@/lib/site";

export function GameArtwork({
  game,
  eager = false,
}: {
  game: Game;
  eager?: boolean;
}) {
  if (game.id === "pipeyard") {
    return (
      <div className="pipeyard-art game-image">
        <div className="pipeyard-brand">
          <Image
            src={game.icon}
            alt="Pipeyard app icon"
            width={112}
            height={112}
            className="pipeyard-icon"
          />
          <span className="pipeyard-title">
            PIPEYARD<span>CONNECT THE FLOW</span>
          </span>
        </div>
        <Image
          src={game.image}
          alt={game.imageAlt}
          width={450}
          height={800}
          className="pipeyard-screen"
          loading={eager ? "eager" : "lazy"}
        />
        <span className="pipeyard-orbit" aria-hidden="true" />
      </div>
    );
  }

  return (
    <Image
      src={game.image}
      alt={game.imageAlt}
      width={1024}
      height={500}
      loading={eager ? "eager" : "lazy"}
      className="game-image game-banner"
    />
  );
}
