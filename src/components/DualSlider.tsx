import { useState, useEffect } from "react";

interface SliderModel {
  name: string;
  rgb: string;
  mask: string;
  contour: string;
}

interface DualSliderProps {
  model1: SliderModel;
  model2: SliderModel;
  toggleLabels: { mask: string; contour: string };
  caption?: string;
}

type ViewMode = "mask" | "contour";

export default function DualSlider({
  model1,
  model2,
  toggleLabels,
  caption,
}: DualSliderProps) {
  const [mode, setMode] = useState<ViewMode>("mask");
  const [sliderLoaded, setSliderLoaded] = useState(false);

  // Load img-comparison-slider web component
  useEffect(() => {
    if (!customElements.get("img-comparison-slider")) {
      import("img-comparison-slider")
        .then(() => setSliderLoaded(true))
        .catch(() => {
          // Fallback: just show images
          setSliderLoaded(true);
        });
    } else {
      setSliderLoaded(true);
    }
  }, []);

  const getForeground = (model: SliderModel) =>
    mode === "mask" ? model.mask : model.contour;

  return (
    <div className="dual-slider-wrapper">
      {caption && <p className="slider-caption">{caption}</p>}

      {/* Sliders */}
      <div className="sliders-grid">
        {[
          { model: model1, label: model1.name },
          { model: model2, label: model2.name },
        ].map(({ model, label }) => (
          <div key={label} className="slider-container">
            <div className="slider-label-row">
              <span className="slider-model-label">{label}</span>
              <span className="slider-mode-hint" aria-label="Drag to compare">
                RGB
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 8 4 4-4 4" />
                  <path d="M2 12h20" />
                  <path d="m6 8-4 4 4 4" />
                </svg>{" "}
                {mode === "mask" ? toggleLabels.mask : toggleLabels.contour}
              </span>
            </div>

            {sliderLoaded ? (
              // @ts-ignore - custom element
              <img-comparison-slider class="comparison-slider">
                <img
                  slot="first"
                  src={model.rgb}
                  alt={`${label} RGB input`}
                  loading="lazy"
                />
                <img
                  slot="second"
                  src={getForeground(model)}
                  alt={`${label} ${mode === "mask" ? "binary mask" : "contour overlay"}`}
                  loading="lazy"
                />
                <div slot="handle" className="slider-handle" aria-hidden="true">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle
                      cx="20"
                      cy="20"
                      r="19"
                      fill="var(--primary)"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path
                      d="M14 16l-4 4 4 4M26 16l4 4-4 4"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </img-comparison-slider>
            ) : (
              <div className="slider-placeholder">
                <img
                  src={model.rgb}
                  alt={`${label} RGB`}
                  style={{ width: "100%", borderRadius: "var(--radius)" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mode Toggle */}
      <div className="dual-slider-controls">
        <div className="mode-toggle" role="group" aria-label="View mode">
          <button
            className={`mode-btn${mode === "mask" ? " active" : ""}`}
            onClick={() => setMode("mask")}
            aria-pressed={mode === "mask"}
          >
            RGB vs. {toggleLabels.mask}
          </button>
          <button
            className={`mode-btn${mode === "contour" ? " active" : ""}`}
            onClick={() => setMode("contour")}
            aria-pressed={mode === "contour"}
          >
            RGB vs. {toggleLabels.contour}
          </button>
        </div>
      </div>

      <style>{`
        .dual-slider-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .dual-slider-controls {
          display: flex;
          justify-content: center;
        }

        .sliders-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        @media (max-width: 640px) {
          .sliders-grid {
            grid-template-columns: 1fr;
          }
        }

        .slider-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .slider-label-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .slider-model-label {
          font-family: var(--font-display);
          font-size: 1rem;
          color: var(--text);
          font-weight: 400;
        }

        .slider-mode-hint {
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.01em;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }

        .comparison-slider {
          width: 100%;
          border-radius: var(--radius);
          overflow: hidden;
          border: 1px solid var(--border);
          display: block;
          --divider-width: 2px;
          --divider-color: var(--primary);
        }

        .comparison-slider img {
          width: 100%;
          height: auto;
          display: block;
        }

        .slider-handle {
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
          cursor: col-resize;
        }

        .slider-placeholder {
          border-radius: var(--radius);
          overflow: hidden;
          border: 1px solid var(--border);
        }

        .slider-caption {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-align: center;
          line-height: 1.6;
          margin-top: 0.25rem;
        }
      `}</style>
    </div>
  );
}
