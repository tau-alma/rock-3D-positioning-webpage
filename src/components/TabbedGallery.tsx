import { useState, useRef } from "react";

interface ExperimentVideo {
  webm: string;
  mp4: string;
}

interface Experiment {
  id: string;
  title: string;
  video: ExperimentVideo;
  figure: string;
  figureCaption?: string;
  description: string;
  metric?: string;
}

interface TabbedGalleryProps {
  experiments: Experiment[];
}

export default function TabbedGallery({ experiments }: TabbedGalleryProps) {
  const [activeId, setActiveId] = useState(experiments[0]?.id);
  const tabBarRef = useRef<HTMLDivElement>(null);

  const active = experiments.find((e) => e.id === activeId) ?? experiments[0];

  const scrollTabs = (dir: "left" | "right") => {
    if (tabBarRef.current) {
      tabBarRef.current.scrollBy({
        left: dir === "left" ? -150 : 150,
        behavior: "smooth",
      });
    }
  };

  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!tabBarRef.current) return;
    isDragging.current = true;
    dragStartX.current = e.pageX - tabBarRef.current.offsetLeft;
    dragScrollLeft.current = tabBarRef.current.scrollLeft;
    tabBarRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !tabBarRef.current) return;
    e.preventDefault();
    const x = e.pageX - tabBarRef.current.offsetLeft;
    const walk = x - dragStartX.current;
    tabBarRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (tabBarRef.current) tabBarRef.current.style.cursor = "grab";
  };

  function colorizeCaption(text: string) {
    const colorMap: Record<string, string> = {
      red: "var(--caption-red)",
      green: "var(--caption-green)",
      blue: "var(--caption-blue)",
    };

    // Split words, spaces, and punctuation so only exact color words are highlighted.
    const tokens = text.match(/[A-Za-z]+|\s+|[^A-Za-z\s]/g) ?? [text];

    return tokens.map((token, i) => {
      const lower = token.toLowerCase();
      if (colorMap[lower]) {
        return (
          <span key={i} style={{ color: colorMap[lower], fontWeight: 600 }}>
            {token}
          </span>
        );
      }
      return token;
    });
  }

  function splitCaptionSentences(text: string) {
    const sentences = text.match(/[^.!?]+[.!?]*/g);
    if (!sentences) return [text.trim()];
    return sentences.map((sentence) => sentence.trim()).filter(Boolean);
  }

  return (
    <div className="tabbed-gallery">
      {/* Tab Bar */}
      <div className="tab-bar-wrapper">
        <button
          className="tab-scroll-btn"
          onClick={() => scrollTabs("left")}
          aria-label="Scroll left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div
          className="tab-bar"
          ref={tabBarRef}
          role="tablist"
          aria-label="Experiments"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {experiments.map((exp) => (
            <button
              key={exp.id}
              role="tab"
              aria-selected={exp.id === activeId}
              aria-controls={`panel-${exp.id}`}
              id={`tab-${exp.id}`}
              className={`tab-btn${exp.id === activeId ? " active" : ""}`}
              onClick={() => setActiveId(exp.id)}
            >
              {exp.title}
            </button>
          ))}
        </div>

        <button
          className="tab-scroll-btn"
          onClick={() => scrollTabs("right")}
          aria-label="Scroll right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Panel */}
      {active && (
        <div
          key={active.id}
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="tab-panel"
        >
          {/* Video */}
          <div className="exp-video-wrapper">
            <video
              key={`${active.id}-video`}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="exp-video"
              aria-label={`${active.title} experiment video`}
            >
              <source src={active.video.webm} type="video/webm" />
              <source src={active.video.mp4} type="video/mp4" />
            </video>
          </div>

          {/* Description + Metric */}
          <div className="exp-meta">
            <p className="exp-description">{active.description}</p>
            {active.metric && (
              <span className="metric-badge">{active.metric}</span>
            )}
          </div>

          {/* Figure */}
          <div className="figure-wrapper">
            <object
              key={`${active.id}-fig`}
              data={active.figure}
              type="image/svg+xml"
              className="exp-figure"
              aria-label={`${active.title} metric figure`}
            >
              <img
                src={active.figure}
                alt={`${active.title} metric figure`}
                className="exp-figure"
              />
            </object>
            {active.figureCaption && (
              <p className="figure-caption">
                {splitCaptionSentences(active.figureCaption).map(
                  (sentence, idx) => (
                    <span
                      key={`${active.id}-caption-${idx}`}
                      className="figure-caption-line"
                    >
                      {colorizeCaption(sentence)}
                    </span>
                  ),
                )}
              </p>
            )}
          </div>
        </div>
      )}

      <style>{`
        .tabbed-gallery {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .tab-bar-wrapper {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          border-bottom: 1px solid var(--border);
        }

        .tab-bar {
          flex: 1;
          display: flex;
          gap: 0.25rem;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-bottom: 0;
          border-bottom: none;
          cursor: grab;
        }

        .tab-bar::-webkit-scrollbar {
          display: none;
        }

        .tab-scroll-btn {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.2s ease, background-color 0.2s ease;
        }

        .tab-scroll-btn:hover {
          color: var(--text);
          background-color: var(--bg);
        }

        .tab-panel {
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          animation: tabFadeIn 0.25s ease both;
        }

        @keyframes tabFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .exp-video-wrapper {
          width: 100%;
          border-radius: var(--radius);
          overflow: hidden;
          border: 1px solid var(--border);
          background-color: var(--bg-card);
        }

        .exp-video {
          width: 100%;
          height: auto;
          display: block;
        }

        .exp-meta {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .exp-description {
          flex: 1;
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin: 0;
          min-width: 200px;
        }

        .exp-meta .metric-badge {
          margin-left: auto;
          align-self: flex-end;
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .exp-meta {
            flex-direction: column;
          }

          .exp-meta .metric-badge {
            margin-left: 0;
          }
        }

        .figure-wrapper {
          background-color: var(--bg-subtle);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          min-height: 200px;
        }

        .figure-wrapper {
          --caption-red: #ff0000;
          --caption-green: #008000;
          --caption-blue: #0000ff;
        }

        [data-theme=dark] .figure-wrapper {
          --caption-red: #ff9393;
          --caption-green: #48c848;
          --caption-blue: #b4b4ff;
        }

        .figure-caption {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-align: center;
          line-height: 1.6;
          margin: 0;
        }

        .figure-caption-line {
          display: block;
        }

        .exp-figure {
          max-width: 100%;
          height: auto;
          border-radius: 4px;
        }

        [data-theme=dark] .exp-figure {
          filter: invert(1) hue-rotate(180deg);
        }
      `}</style>
    </div>
  );
}
