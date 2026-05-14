/* ═══════════════════════════════════════════════════════
   data/trends.js
   Local trend database — acts as the static data layer.
   Exposes a global TRENDS_DB array.
═══════════════════════════════════════════════════════ */

const TRENDS_DB = [
  {
    name: "Digital Twin Couture",
    platform: "Instagram",
    relevance: 98,
    risk: "Low",
    stage: "Rising",
    tags: ["Fashion", "AI", "Digital", "3D"],
    industries: ["Fashion", "Beauty"],
    tones: ["Premium & Minimal", "Edgy & Creative"],
    insight: "Strong aesthetic appeal aligns with visual-first premium branding. Audience skews design-forward, ages 18–34."
  },
  {
    name: "Silent Luxury Revival",
    platform: "Instagram",
    relevance: 95,
    risk: "Low",
    stage: "Peak",
    tags: ["Luxury", "Minimal", "Aesthetic", "High-end"],
    industries: ["Fashion", "Finance", "Travel"],
    tones: ["Premium & Minimal", "Professional & Clean"],
    insight: "Timeless understated branding aligns deeply with minimalist identity and high-income demographics."
  },
  {
    name: "De-influencing Wave",
    platform: "TikTok",
    relevance: 88,
    risk: "Medium",
    stage: "Rising",
    tags: ["Authenticity", "Anti-Hype", "Real", "Gen Z"],
    industries: ["Beauty", "Fitness & Wellness", "Food & Lifestyle"],
    tones: ["Warm & Friendly", "Playful & Fun", "Bold & Energetic"],
    insight: "High engagement but requires careful positioning to avoid brand contradiction with premium identity."
  },
  {
    name: "Aesthetic Minimalism 2.0",
    platform: "Instagram",
    relevance: 93,
    risk: "Low",
    stage: "Rising",
    tags: ["Minimal", "Clean", "Visual", "2026"],
    industries: ["Fashion", "Beauty", "Tech & SaaS"],
    tones: ["Premium & Minimal", "Professional & Clean"],
    insight: "Clean composition and muted palette trend is gaining momentum among style-conscious micro-creators."
  },
  {
    name: "NPC Persona Marketing",
    platform: "TikTok",
    relevance: 72,
    risk: "High",
    stage: "Fading",
    tags: ["TikTok", "Meme", "NPC", "Comedy"],
    industries: ["Food & Lifestyle", "Fitness & Wellness"],
    tones: ["Bold & Energetic", "Playful & Fun"],
    insight: "Trend peaking rapidly. High virality but highly dependent on timing and platform algorithm."
  },
  {
    name: "Raw & Unfiltered Content",
    platform: "TikTok",
    relevance: 81,
    risk: "Medium",
    stage: "Rising",
    tags: ["Authentic", "Behind-scenes", "Real", "Candid"],
    industries: ["Fitness & Wellness", "Education", "Food & Lifestyle"],
    tones: ["Warm & Friendly", "Bold & Energetic"],
    insight: "Resonates strongly with Gen Z authenticity values. Works best for brands with a genuine human story."
  },
  {
    name: "Hyper-Niche Community Drops",
    platform: "X (Twitter)",
    relevance: 76,
    risk: "Low",
    stage: "Rising",
    tags: ["Community", "Exclusive", "Drops", "Niche"],
    industries: ["Tech & SaaS", "Education", "Finance"],
    tones: ["Professional & Clean", "Edgy & Creative"],
    insight: "High conversion with loyal micro-audience. Less reach but superior engagement-to-conversion ratio."
  },
  {
    name: "Dopamine Dressing",
    platform: "Instagram",
    relevance: 89,
    risk: "Low",
    stage: "Peak",
    tags: ["Color", "Fashion", "Joy", "Vibrant"],
    industries: ["Fashion", "Beauty"],
    tones: ["Bold & Energetic", "Playful & Fun", "Warm & Friendly"],
    insight: "Bold color-forward content drives saves and shares. Works well for product launches and lookbooks."
  },
  {
    name: "Micro-Tutorial Reels",
    platform: "Instagram",
    relevance: 84,
    risk: "Low",
    stage: "Rising",
    tags: ["Education", "How-to", "Short-form", "Value"],
    industries: ["Beauty", "Fitness & Wellness", "Education", "Food & Lifestyle"],
    tones: ["Warm & Friendly", "Professional & Clean", "Playful & Fun"],
    insight: "Educational micro-content drives saves and follows. Strong algorithm performance across all niches."
  },
  {
    name: "AI-Generated Aesthetic",
    platform: "TikTok",
    relevance: 87,
    risk: "Medium",
    stage: "Rising",
    tags: ["AI", "Futuristic", "Digital", "Creative"],
    industries: ["Tech & SaaS", "Fashion", "Education"],
    tones: ["Edgy & Creative", "Bold & Energetic", "Premium & Minimal"],
    insight: "Forward-looking brands using AI visuals gain 'early adopter' credibility. Risk: oversaturation is possible."
  },
  {
    name: "Founder Mode Transparency",
    platform: "X (Twitter)",
    relevance: 79,
    risk: "Low",
    stage: "Peak",
    tags: ["Founder", "Startup", "Authentic", "Business"],
    industries: ["Tech & SaaS", "Finance", "Education"],
    tones: ["Professional & Clean", "Warm & Friendly"],
    insight: "Behind-the-scenes founder storytelling drives strong B2B credibility and community trust on X."
  },
  {
    name: "Slow Travel Aesthetic",
    platform: "Instagram",
    relevance: 82,
    risk: "Low",
    stage: "Rising",
    tags: ["Travel", "Mindful", "Aesthetic", "Lifestyle"],
    industries: ["Travel", "Food & Lifestyle", "Fitness & Wellness"],
    tones: ["Warm & Friendly", "Premium & Minimal"],
    insight: "Anti-hustle, experience-over-destination narrative resonates deeply with millennial audience."
  }
];
