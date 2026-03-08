import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Gamepad2, Maximize, Minimize, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { useIsMobile } from "@/hooks/use-mobile";

const platforms = [
  { name: "Chess Friends", url: "https://chessfriends.com" },
  { name: "Chessly", url: "https://www.chessly.com" },
];

const Play = () => {
  const [active, setActive] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const toggleFullscreen = useCallback(() => {
    if (!iframeContainerRef.current) return;

    const el = iframeContainerRef.current as any;

    if (!document.fullscreenElement && !(document as any).webkitFullscreenElement) {
      const rfs = el.requestFullscreen || el.webkitRequestFullscreen;
      if (rfs) rfs.call(el).then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      const efs = document.exitFullscreen || (document as any).webkitExitFullscreen;
      if (efs) efs.call(document).then(() => setIsFullscreen(false)).catch(() => {});
    }
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!(document.fullscreenElement || (document as any).webkitFullscreenElement));
    document.addEventListener("fullscreenchange", handler);
    document.addEventListener("webkitfullscreenchange", handler);
    return () => {
      document.removeEventListener("fullscreenchange", handler);
      document.removeEventListener("webkitfullscreenchange", handler);
    };
  }, []);

  // Reset error state when switching platforms
  useEffect(() => {
    setIframeError(false);
  }, [active]);

  const currentPlatform = platforms[active];

  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 mb-4">
              <Gamepad2 size={14} className="text-gold" />
              <span className="text-gold text-xs font-semibold uppercase tracking-wider">Play & Learn</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Play <span className="text-gold-gradient">Chess Online</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">Select a platform below and start playing</p>
          </motion.div>

          {/* Tabs + Actions */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 md:mb-6">
            {platforms.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                  active === i
                    ? "gold-gradient text-chess-dark"
                    : "border border-border text-muted-foreground hover:text-gold hover:border-gold/40"
                }`}
              >
                {p.name}
              </button>
            ))}
            <button
              onClick={toggleFullscreen}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-border text-muted-foreground hover:text-gold hover:border-gold/40 text-sm font-semibold transition-colors"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
              <span className="hidden sm:inline">{isFullscreen ? "Exit" : "Fullscreen"}</span>
            </button>
          </div>

          {/* Iframe Container */}
          {currentPlatform ? (
            <div
              ref={iframeContainerRef}
              className="rounded-lg border border-border overflow-hidden bg-card relative"
              style={{ height: isFullscreen ? "100vh" : isMobile ? "70vh" : "80vh" }}
            >
              <iframe
                key={currentPlatform.url}
                src={currentPlatform.url}
                title={currentPlatform.name}
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-popups-to-escape-sandbox"
                allow="fullscreen; autoplay; clipboard-write"
                allowFullScreen
                loading="lazy"
                style={{
                  WebkitOverflowScrolling: "touch",
                  overscrollBehavior: "contain",
                }}
                onError={() => setIframeError(true)}
              />

              {/* Fallback banner if iframe fails */}
              {iframeError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/95 gap-4 p-6 text-center">
                  <p className="text-muted-foreground text-sm">
                    This site may not load in an embedded view on your device.
                  </p>
                  <a
                    href={currentPlatform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md gold-gradient text-chess-dark font-semibold text-sm"
                  >
                    <ExternalLink size={16} />
                    Open {currentPlatform.name} in a new tab
                  </a>
                </div>
              )}
            </div>
          ) : null}

          {/* Helpful tip for touch devices */}
          {isMobile && (
            <p className="text-center text-muted-foreground text-xs mt-3">
              Tip: If the site doesn't respond well, tap <strong>"New Tab"</strong> above for the best experience.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Play;