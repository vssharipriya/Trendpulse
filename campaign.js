/* ═══════════════════════════════════════════════════════
   js/campaign.js
   Local (offline) campaign template engine.
   Used when the user disables Groq or has no API key.
   Exposes a global CampaignEngine object.
═══════════════════════════════════════════════════════ */

const CampaignEngine = (() => {

  /* ── Platform character / format hints ── */
  const PLATFORM_HINTS = {
    "Instagram":   "Square or 4:5 ratio. 5–10 hashtags. Caption 100–200 words.",
    "TikTok":      "9:16 vertical video. Caption under 150 chars. FYP hashtags.",
    "X (Twitter)": "280 char caption. 1–3 hashtags max. One punchy line wins.",
    "YouTube":     "16:9 horizontal video. Title 50–70 chars. Description 100–300 words. 3–5 hashtags.",
    "Facebook":    "Caption 40–100 words. 2–5 hashtags. Relatable and shareable content works best."

  };

  /* ── Visual direction by tone ── */
  function visualDirection(tone, tag, platform) {
    const isMinimal = tone.includes("Minimal") || tone.includes("Premium");
    const isBold    = tone.includes("Bold") || tone.includes("Energetic") || tone.includes("Playful");
    const format    = platform === "TikTok" ? "9:16 vertical" : "4:5 portrait";

    if (isMinimal) return `Moody, cinematic close-up shot. Muted ${tag}-inspired palette. Generous negative space. ${format} format. Minimal text overlay in a serif font.`;
    if (isBold)    return `High-contrast, saturated editorial. Bold ${tag}-core colors. Dynamic composition. ${format} format. Punchy text overlay in a display font.`;
    return `Clean lifestyle photography. ${tag} color story. Natural light. ${format} format. Minimal branded text.`;
  }

  /* ── Hook templates ── */
  const HOOKS = {
    "Viral Hook":        (t) => `Nobody expected THIS ${t.tags[0].toLowerCase()} trend to hit in 2026…`,
    "Caption":           (t) => `The ${t.name} era is officially here.`,
    "Conversion Ad":     (t) => `This is the only ${t.tags[0].toLowerCase()} trend that actually converts.`,
    "Trend Reel Script": (t) => `POV: You discovered ${t.name} before it peaked.`,
    "Promotional Post":  (t, b) => `${b.name} × ${t.name}: This changes everything.`,
    "Meme Concept":      (t, b) => `When ${t.name} hits different for ${b.industry.toLowerCase()} brands 💀`
  };

  /* ── Caption templates ── */
  const CAPTIONS = {
    "Viral Hook": (t, b, tone) =>
      `We've been quietly watching ${t.name} evolve — and it's finally time to talk about it.\n\nAs ${b.name}, we're not just following this shift. We're defining it. The era of ${t.tags[0].toLowerCase()} is here and we're ready.\n\n${t.insight.split(".")[0]}.`,

    "Caption": (t, b, tone) =>
      `${b.name} is leaning into ${t.name} — and here's why it makes perfect sense for us.\n\nOur ${tone.toLowerCase()} identity was built for exactly this moment. ${t.insight.split(".")[0]}.\n\nThis isn't a trend we're chasing. It's one we were built for.`,

    "Conversion Ad": (t, b) =>
      `Stop scrolling.\n\n${b.name} just dropped something you've been waiting for.\n\nInspired by the ${t.name} movement reshaping ${b.industry.toLowerCase()} right now.\n\nLimited availability. Designed for the ones who move first.`,

    "Trend Reel Script": (t, b, tone, platform) =>
      `[0–3s] Hook text overlay: "${t.name} is taking over ${b.industry.toLowerCase()}"\n[3–8s] Transformation or product reveal sequence\n[8–12s] Close-up with ${b.name} logo and ${t.tags[0].toLowerCase()} aesthetic\n[12–15s] CTA screen with handle\n\nAudio: trending audio from ${platform} explore page.`,

    "Promotional Post": (t, b) =>
      `${b.name}'s latest drop is deeply inspired by the ${t.name} movement.\n\n${t.insight.split(".")[0]}. ${t.stage === "Rising" ? "This trend is just getting started." : "We caught it at peak."}\n\nDesigned for people who don't follow trends — they create them.`,

    "Meme Concept": (t, b, tone) => {
      const isBold = tone.includes("Bold") || tone.includes("Playful");
      return `Format: "${isBold ? "Distracted Boyfriend" : "Expectation vs Reality"}"\n\nLeft panel: Other brands hopping on ${t.name} way too late.\nRight panel: ${b.name} — already built for this.\n\nCaption: "We don't pivot. We were always ${t.tags[0].toLowerCase()}."`;
    }
  };

  /* ── CTA templates ── */
  const CTAS = {
    "Viral Hook":        "Save this post — you'll want to reference it later.",
    "Caption":           "Drop a 🔥 if you're into this direction.",
    "Conversion Ad":     "Available now — tap to explore. Link in bio.",
    "Trend Reel Script": "Follow for more trend-first content drops.",
    "Promotional Post":  "Explore the collection → link in bio.",
    "Meme Concept":      "Tag a brand that's still catching up. 👀"
  };

  /* ── Hashtag builder ── */
  function buildHashtags(trend, brand, contentType) {
    const sets = {
      "Viral Hook":        [`#${trend.name.replace(/\s/g,"")}`, `#${brand.industry.replace(/\s/g,"")}2026`, `#${trend.tags[0]}`, `#TrendIdea`, `#${brand.name.replace(/\s/g,"")}`],
      "Caption":           [`#${brand.industry.replace(/\s/g,"")}`, `#${trend.tags[0]}`, `#ContentCreator`, `#Aesthetic`, `#TrendIdea`],
      "Conversion Ad":     [`#ShopNow`, `#${brand.name.replace(/\s/g,"")}`, `#${trend.tags[0]}`, `#${trend.name.replace(/\s/g,"")}`, `#Ad`],
      "Trend Reel Script": [`#Reel`, `#${trend.name.replace(/\s/g,"")}`, `#${brand.industry.replace(/\s/g,"")}Reel`, `#FYP`, `#TrendIdea`],
      "Promotional Post":  [`#${brand.name.replace(/\s/g,"")}`, `#NewDrop`, `#${trend.tags[0]}`, `#${trend.name.replace(/\s/g,"")}`, `#${brand.industry.replace(/\s/g,"")}2026`],
      "Meme Concept":      [`#${brand.industry.replace(/\s/g,"")}Meme`, `#${trend.tags[0]}`, `#${brand.name.replace(/\s/g,"")}`, `#Relatable`, `#TrendIdea`]
    };
    return sets[contentType] || [`#${trend.tags[0]}`, `#TrendIdea`, `#${brand.industry}`];
  }

  /* ── Main generate (synchronous) ── */
  function generate(brand, trend, contentType, platform, toneOverride) {
    const tone = toneOverride === "auto" ? brand.tone : toneOverride;

    const hookFn    = HOOKS[contentType];
    const captionFn = CAPTIONS[contentType];
    const cta       = CTAS[contentType] || "Learn more → link in bio.";

    return {
      hook:     hookFn    ? hookFn(trend, brand, tone, platform)    : `Discover: ${trend.name}`,
      caption:  captionFn ? captionFn(trend, brand, tone, platform) : trend.insight,
      visual:   visualDirection(tone, trend.tags[0], platform),
      hashtags: buildHashtags(trend, brand, contentType),
      cta,
      bestPostingTime:
        platform === "Instagram" ? "6 PM – 9 PM" :
        platform === "TikTok" ? "7 PM – 11 PM" :
        platform === "YouTube" ? "5 PM – 8 PM" :
        platform === "Facebook" ? "1 PM – 4 PM" :
        "12 PM – 3 PM",

      memeTemplate: 
        contentType === "Meme Concept"
          ? "Drake Meme"
          : "POV Meme"
    };
  }

  return { generate };

})();
