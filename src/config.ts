const base = "/rock-3D-positioning-webpage";

export const Config = {
  // ─── SEO & Meta ───────────────────────────────────────────────────────────
  site: {
    title:
      "Evaluating Rock Position Estimation Pipeline Using 3D Sensors for Excavation Task",
    shortTitle:
      "Evaluating Rock Position Estimation Pipeline Using 3D Sensors for Excavation Task",
    description:
      "A master's thesis evaluating a rock position estimation pipeline using 3D sensors during excavator rock-picking task, comparing segmentation models with real-world data.",
    url: "https://tau-alma.github.io/rock-3D-positioning-webpage",
    sourceUrl: "https://github.com/tau-alma/rock-3D-positioning-webpage",
    codeUrl: "https://github.com/tau-alma/rock-3D-positioning",
    ogImage: `${base}/assets/images/ogImage.jpg`,
  },

  // ─── Authors ──────────────────────────────────────────────────────────────
  authors: [
    {
      name: "Saku Hakamäki",
      url: "",
      contact: "saku.hakamaki@tuni.fi",
      contactUrl: "",
      affiliation: "Autonomous Mobile Machines Group, Tampere University",
      affiliationUrl:
        "https://research.tuni.fi/amm/",
    },
  ],

  // ─── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    title:
      "Evaluating Rock Position Estimation Pipeline Using 3D Sensors for Excavation Task",
    venue: "Master's Thesis, Tampere University (Finland), 2026",
    teaserVideo: {
      webm: `${base}/assets/videos/webm/hero.webm`,
      mp4: `${base}/assets/videos/mp4/hero.mp4`, // Fallback
    },
  },

  // ─── Action Buttons ───────────────────────────────────────────────────────
  // icon options: "file-text" | "github" | "play" | "external-link" | "download"
  actionButtons: [
    {
      label: "Thesis",
      url: "https://urn.fi/URN:NBN:fi:tuni-202604274316",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
      primary: true,
    },
    {
      label: "Code",
      url: "https://github.com/tau-alma/rock-3D-positioning",
      icon: `<svg role="img" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
      primary: false,
    },
    {
      label: "Model",
      url: "https://hf.co/collections/akahukas/rock-3d-positioning",
      icon: `<svg role="img" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Hugging Face</title><path d="M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647 2.822 2.813 2.562 3.244-1.176-.506-1.176-.506-2.866-2.567-3.49-1.898.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405-.238.839-2.71-1.587-3.216-.642-.506.946 3.49 2.056 3.522 2.064 1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194 1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647-2.822 2.813-2.562 3.244 1.176-.506 1.176-.506 2.866-2.567 3.49-1.898-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405.238.839 2.71-1.587 3.216-.642.506.946-3.49 2.056-3.522 2.064-1.29.33-4.568 1.028-5.713-.624"/></svg>`,
      primary: false,
    },
  ],

  // ─── Sticky Nav ───────────────────────────────────────────────────────────
  nav: [
    { label: "Abstract", anchor: "abstract" },
    { label: "Experiments", anchor: "experiments" },
    { label: "Acknowledgements", anchor: "acknowledgements" },
    { label: "BibTeX", anchor: "bibtex" },
  ],

  // ─── Abstract ─────────────────────────────────────────────────────────────
  abstract: `For the rock-picking task of a real excavator, this work presents an
  evaluation of a rock 3D position estimation pipeline using 3D sensors. The proposed
  solution is based on sensor-fusion between camera and LiDAR sensors, and utilizes a
  2D binary mask from an object segmentation model to filter the 3D point cloud. Two
  different segmentation models are evaluated for this purpose: SAM 2 and a
  finetuned YOLO26. The evaluation is performed on two different computer systems. The
  proposed 3D position estimate is compared against a ground truth 3D position
  representation obtained from the FoundationPose model. Based on the findings, the
  proposed solution yields a median 3D position estimate approximately 0.20–0.30 m
  from the ground truth position.`,

  // ─── Results: Overview Video ──────────────────────────────────────────────
  overviewVideo: {
    webm: `${base}/assets/videos/webm/desktop-sam2-yolo26-mask-comparison.webm`,
    mp4: `${base}/assets/videos/mp4/desktop-sam2-yolo26-mask-comparison.mp4`,
    caption:
      "Qualitative overview of the SAM 2 (top) and YOLO26 (bottom) segmentation models over 3 experiments.\nThe model input RGB images are on the left, whereas the output binary masks are in the middle. The images on the right show the mask contours overlaid on the RGB images.",
  },

  // ─── Results: Dual Slider ─────────────────────────────────────────────────
  dualSlider: {
    // Toggle labels shown in the UI
    toggleLabels: {
      mask: "Binary Mask",
      contour: "Mask Contour",
    },
    model1: {
      name: "SAM 2 (Tiny)",
      rgb: `${base}/assets/images/slider/sam2_rgb.jpg`,
      mask: `${base}/assets/images/slider/sam2_mask.jpg`,
      contour: `${base}/assets/images/slider/sam2_contour.jpg`,
    },
    model2: {
      name: "Finetuned YOLO26 (n)",
      rgb: `${base}/assets/images/slider/yolo26_rgb.jpg`,
      mask: `${base}/assets/images/slider/yolo26_mask.jpg`,
      contour: `${base}/assets/images/slider/yolo26_contour.jpg`,
    },
    caption:
      "Drag the slider to compare RGB the input image to the model output. The toggle button below allows to switch the comparison between the binary mask and the mask contour.",
  },

  // ─── Results: Experiment Tabs ─────────────────────────────────────────────
  experiments: [
    {
      id: "exp024-sam2",
      title: "Experiment #24 (SAM 2)",
      video: {
        webm: `${base}/assets/videos/webm/exp024-sam2-desktop-position.webm`,
        mp4: `${base}/assets/videos/mp4/exp024-sam2-desktop-position.mp4`,
      },
      figure: `${base}/assets/images/position-figures/exp024-sam2-desktop-position.svg`,
      description:
        "Proposed solution with the SAM 2 model on the desktop system: estimated 3D position represented with the blue-and-purple sphere. No faults were detected during the experiment, and the 3D position estimate follows the ground truth throughout the experiment.",
      metric: "3D position",
      figureCaption:
        "Ground truth (dashed line) and estimated (solid line) 3D positions in the base coordinate frame. X-axis in red, Y-axis in green and Z-axis in blue.",
    },
    {
      id: "exp024-yolo26",
      title: "Experiment #24 (YOLO26)",
      video: {
        webm: `${base}/assets/videos/webm/exp024-yolo26-desktop-position.webm`,
        mp4: `${base}/assets/videos/mp4/exp024-yolo26-desktop-position.mp4`,
      },
      figure: `${base}/assets/images/position-figures/exp024-yolo26-desktop-position.svg`,
      description:
        "Proposed solution with the finetuned YOLO26 model on the desktop system: estimated 3D position represented with the blue-and-purple sphere. No faults were detected during the experiment, and the 3D position estimate follows the ground truth throughout the experiment.",
      metric: "3D position",
      figureCaption:
        "Ground truth (dashed line) and estimated (solid line) 3D positions in the base coordinate frame. X-axis in red, Y-axis in green and Z-axis in blue.",
    },
    {
      id: "exp022-yolo26",
      title: "Experiment #22 (YOLO26)",
      video: {
        webm: `${base}/assets/videos/webm/exp022-yolo26-desktop-position.webm`,
        mp4: `${base}/assets/videos/mp4/exp022-yolo26-desktop-position.mp4`,
      },
      figure: `${base}/assets/images/position-figures/exp022-yolo26-desktop-position.svg`,
      description:
        "Proposed solution with the finetuned YOLO26 model on the desktop system: estimated 3D position represented with the blue-and-purple sphere. A false segmentation causes the estimate to momentarily shift to the wrong rock at approximately 7.5 seconds after the start of the experiment.",
      metric: "3D position",
      figureCaption:
        "Ground truth (dashed line) and estimated (solid line) 3D positions in the base coordinate frame. X-axis in red, Y-axis in green and Z-axis in blue.",
    },
    {
      id: "exp021-yolo26",
      title: "Experiment #21 (YOLO26)",
      video: {
        webm: `${base}/assets/videos/webm/exp021-yolo26-desktop-position.webm`,
        mp4: `${base}/assets/videos/mp4/exp021-yolo26-desktop-position.mp4`,
      },
      figure: `${base}/assets/images/position-figures/exp021-yolo26-desktop-position.svg`,
      description:
        "Proposed solution with the finetuned YOLO26 model on the desktop system: estimated 3D position represented with the blue-and-purple sphere. The limited accuracy of the transformation between the camera and LiDAR coordinate frames causes the 3D position estimate to fall to the back of the bucket at approximately 3.5 and 5.0 seconds after the start of the experiment.",
      metric: "3D position",
      figureCaption:
        "Ground truth (dashed line) and estimated (solid line) 3D positions in the base coordinate frame. X-axis in red, Y-axis in green and Z-axis in blue.",
    },
    {
      id: "exp012-sam2",
      title: "Experiment #12 (SAM 2)",
      video: {
        webm: `${base}/assets/videos/webm/exp012-sam2-desktop-position.webm`,
        mp4: `${base}/assets/videos/mp4/exp012-sam2-desktop-position.mp4`,
      },
      figure: `${base}/assets/images/position-figures/exp012-sam2-desktop-position.svg`,
      description:
        "Proposed solution with the SAM 2 model on the desktop system: estimated 3D position represented with the blue-and-purple sphere. An artifact in the ZED camera's frames cause a momentary shift in the position estimate at approximately 5 seconds after the start of the experiment.",
      metric: "3D position",
      figureCaption:
        "Ground truth (dashed line) and estimated (solid line) 3D positions in the base coordinate frame. X-axis in red, Y-axis in green and Z-axis in blue.",
    },
    {
      id: "exp001-sam2",
      title: "Experiment #01 (SAM 2)",
      video: {
        webm: `${base}/assets/videos/webm/exp001-sam2-laptop-position.webm`,
        mp4: `${base}/assets/videos/mp4/exp001-sam2-laptop-position.mp4`,
      },
      figure: `${base}/assets/images/position-figures/exp001-sam2-laptop-position.svg`,
      description:
        "Proposed solution with the SAM 2 model on the laptop system: estimated 3D position represented with the blue-and-purple sphere. The 3D position estimate lags behind the ground truth due to low segmentation inference speed.",
      metric: "3D position",
      figureCaption:
        "Ground truth (dashed line) and estimated (solid line) 3D positions in the base coordinate frame. X-axis in red, Y-axis in green and Z-axis in blue.",
    },
  ],

  // ─── Acknowledgements ─────────────────────────────────────────────────────
  acknowledgements: `The thesis work has been completed in the [Autonomous Mobile Machines Group](https://research.tuni.fi/amm/), at Tampere University. The thesis work has been funded by the Horizon Europe Project [XSCAVE](https://xscave.eu/) under Grant 101189836. Thanks to [Novatron Oy](https://novatron.com/) for providing access to the excavator and the data interface.`,

  // ─── BibTeX ───────────────────────────────────────────────────────────────
  bibtex: `@mastersthesis{hakamaki2026,
  author    = {Saku Hakamäki},
  title     = {Evaluating Rock Position Estimation Pipeline Using 3D Sensors for Excavation Task},
  school    = {Tampere University},
  year      = {2026},
  url       = {https://urn.fi/URN:NBN:fi:tuni-202604274316},
}`,

  // ─── Footer / License ─────────────────────────────────────────────────────
  license: {
    name: "CC BY 4.0",
    url: "https://creativecommons.org/licenses/by/4.0/",
    year: "2026",
  },

  // ─── Theme / Colors ───────────────────────────────────────────────────────
  // These values are injected as CSS variables.
  theme: {
    // Accent color (buttons, highlights, active nav, slider handle)
    primary: "#3b82f6", // blue-500
    primaryHover: "#2563eb", // blue-600

    // Light mode
    light: {
      bg: "#ffffff",
      bgSubtle: "#f8fafc",
      bgCard: "#f1f5f9",
      border: "#e2e8f0",
      text: "#0f172a",
      textMuted: "#64748b",
    },

    // Dark mode
    dark: {
      bg: "#0a0f1e",
      bgSubtle: "#0f172a",
      bgCard: "#1e293b",
      border: "#334155",
      text: "#f1f5f9",
      textMuted: "#94a3b8",
    },
  },

  // ─── Google Analytics ─────────────────────────────────────────────────────
  // Leave empty string to disable
  googleAnalyticsId: "",
};
