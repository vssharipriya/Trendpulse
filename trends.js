/* ═══════════════════════════════════════════════════════
   data/trends.js
   Local trend database — acts as the static data layer.
   Exposes a global TRENDS_DB array.
═══════════════════════════════════════════════════════ */

const TRENDS_DB = [
    // --- FASHION ---
  {
    name: "Digital Twin Couture",
    platform: "Instagram",
    relevance: 98,
    risk: "Low",
    stage: "Rising",
    tags: ["Fashion", "AI", "Digital", "3D"],
    industries: ["Fashion"],
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
    industries: ["Fashion"],
    tones: ["Premium & Minimal", "Professional & Clean"],
    insight: "Timeless understated branding aligns deeply with minimalist identity and high-income demographics."
  },
  {
    name: "Aesthetic Minimalism 2.0",
    platform: "Instagram",
    relevance: 93,
    risk: "Low",
    stage: "Rising",
    tags: ["Minimal", "Clean", "Visual", "2026"],
    industries: ["Fashion"],
    tones: ["Premium & Minimal", "Professional & Clean"],
    insight: "Clean composition and muted palette trend is gaining momentum among style-conscious micro-creators."
  },
  {
    name: "Dopamine Dressing",
    platform: "Instagram",
    relevance: 89,
    risk: "Low",
    stage: "Peak",
    tags: ["Color", "Fashion", "Joy", "Vibrant"],
    industries: ["Fashion"],
    tones: ["Bold & Energetic", "Playful & Fun", "Warm & Friendly"],
    insight: "Bold color-forward content drives saves and shares. Works well for product launches and lookbooks."
  },
  // --- BEAUTY ---
  {
    name: "Hyper-Personalized Skin-Cycling",
    platform: "TikTok",
    relevance: 91,
    risk: "Low",
    stage: "Peak",
    tags: ["Skincare", "Wellness", "Data-Driven"],
    industries: ["Beauty"],
    tones: ["Warm & Friendly", "Professional & Clean"],
    insight: "AI-scanned morning routines that adjust based on local humidity and UV indices are viral on TikTok."
  },
  {
    name: "De-influencing Wave",
    platform: "TikTok",
    relevance: 88,
    risk: "Medium",
    stage: "Rising",
    tags: ["Authenticity", "Anti-Hype", "Real", "Gen Z"],
    industries: ["Beauty"],
    tones: ["Warm & Friendly", "Playful & Fun", "Bold & Energetic"],
    insight: "High engagement but requires careful positioning to avoid brand contradiction with premium identity."
  },
  // --- TECH & SAAS ---
  {
    name: "AI-Generated Aesthetic",
    platform: "TikTok",
    relevance: 87,
    risk: "Medium",
    stage: "Rising",
    tags: ["AI", "Futuristic", "Digital", "Creative"],
    industries: ["Tech & SaaS"],
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
    industries: ["Tech & SaaS"],
    tones: ["Professional & Clean", "Warm & Friendly"],
    insight: "Behind-the-scenes founder storytelling drives strong B2B credibility and community trust on X."
  },
  {
    name: "Hyper-Niche Community Drops",
    platform: "X (Twitter)",
    relevance: 76,
    risk: "Low",
    stage: "Rising",
    tags: ["Community", "Exclusive", "Drops", "Niche"],
    industries: ["Tech & SaaS"],
    tones: ["Professional & Clean", "Edgy & Creative"],
    insight: "High conversion with loyal micro-audience. Less reach but superior engagement-to-conversion ratio."
  },
  // --- FITNESS & WELLNESS ---
  {
    name: "Raw & Unfiltered Content",
    platform: "TikTok",
    relevance: 81,
    risk: "Medium",
    stage: "Rising",
    tags: ["Authentic", "Behind-scenes", "Real", "Candid"],
    industries: ["Fitness & Wellness"],
    tones: ["Warm & Friendly", "Bold & Energetic"],
    insight: "Resonates strongly with Gen Z authenticity values. Works best for brands with a genuine human story."
  },
  // --- TRAVEL ---
  {
    name: "Slow Travel Aesthetic",
    platform: "Instagram",
    relevance: 82,
    risk: "Low",
    stage: "Rising",
    tags: ["Travel", "Mindful", "Aesthetic", "Lifestyle"],
    industries: ["Travel"],
    tones: ["Warm & Friendly", "Premium & Minimal"],
    insight: "Anti-hustle, experience-over-destination narrative resonates deeply with millennial audience."
  },
  // --- EDUCATION ---
  {
    name: "Micro-Tutorial Reels",
    platform: "Instagram",
    relevance: 84,
    risk: "Low",
    stage: "Rising",
    tags: ["Education", "How-to", "Short-form", "Value"],
    industries: ["Education"],
    tones: ["Warm & Friendly", "Professional & Clean", "Playful & Fun"],
    insight: "Educational micro-content drives saves and follows. Strong algorithm performance across all niches."
  },
    // --- GAMING ---
  {
    name: "NPC Persona Marketing",
    platform: "TikTok",
    relevance: 72,
    risk: "High",
    stage: "Fading",
    tags: ["TikTok", "Meme", "NPC", "Comedy"],
    industries: ["Gaming"],
    tones: ["Bold & Energetic", "Playful & Fun"],
    insight: "Creators act like video game NPCs to drive engagement. High virality but high risk of 'cringe' for serious brands. Best used for lighthearted gaming promos."
  },
  // --- RESTAURANTS ---
  {
    name: "Open-Kitchen ASMR",
    platform: "Instagram",
    relevance: 89,
    risk: "Low",
    stage: "Rising",
    tags: ["Chef-Life", "Behind-The-Scenes", "Culinary-Art"],
    industries: ["Restaurants"],
    tones: ["Premium & Minimal", "Professional & Clean"],
    insight: "High-end dining fans are obsessed with the 'ballet' of a professional kitchen. Clean, rhythmic sounds of chopping and plating without music are driving massive 'Save' rates."
  },
  {
    name: "Secret Menu 'Easter Eggs'",
    platform: "TikTok",
    relevance: 94,
    risk: "Medium",
    stage: "Peak",
    tags: ["Community", "Exclusive", "Food-Hack", "Viral"],
    industries: ["Restaurants"],
    tones: ["Playful & Fun", "Bold & Energetic"],
    insight: "Creating 'unlisted' items that customers must ask for by name creates an 'insider' club feel. This drives repeat visits and organic 'I found this' social posts."
  },
  {
    name: "Table-Side 'Theatrical' Finishing",
    platform: "Instagram",
    relevance: 87,
    risk: "Low",
    stage: "Rising",
    tags: ["Dining", "Presentation", "Luxury", "Video-First"],
    industries: ["Restaurants"],
    tones: ["Premium & Minimal", "Edgy & Creative", "Bold & Energetic"],
    insight: "Dishes that require a final touch at the table—pouring sauce, torching herbs, or cracking a shell—are designed specifically for 'Stories' and 'Reels' virality."
  },
  {
    name: "Mood-Boosting Functional Menus",
    platform: "Instagram",
    relevance: 85,
    risk: "Low",
    stage: "Rising",
    tags: ["Wellness", "Nootropics", "Health-Focus", "Bio-Hacking"],
    industries: ["Restaurants"], 
    tones: ["Professional & Clean", "Warm & Friendly"],
    insight: "Diners are seeking meals designed for specific cognitive outcomes (e.g., 'Focus,' 'Relax,' or 'Energy'). Highlighting ingredients like lion's mane or adaptogens in dish descriptions is driving 25% higher menu interest."
  },
  {
    name: "Zero-Waste 'Root-to-Stem' Plating",
    platform: "Instagram",
    relevance: 92,
    risk: "Low",
    stage: "Rising",
    tags: ["Sustainability", "Eco-Luxury", "Chef-Craft", "Green-Dining"],
    industries: ["Restaurants"],
    tones: ["Premium & Minimal", "Professional & Clean"],
    insight: "Sustainability is the new luxury. Showing how 'scraps' are turned into high-end garnishes or ferments appeals to the eco-conscious elite and creates a sophisticated brand narrative."
  },
  {
    name: "Ghost-Kitchen 'Packaging Porn'",
    platform: "TikTok",
    relevance: 88,
    risk: "Medium",
    stage: "Peak",
    tags: ["Delivery", "Unboxing", "Branding", "Design"],
    industries: ["Restaurants"],
    tones: ["Bold & Energetic", "Edgy & Creative", "Playful & Fun"],
    insight: "For delivery-only brands, the 'unboxing' is the dining room. High-concept, tactile packaging designed to be filmed for TikTok is now as critical as the food quality itself."
  },
  {
    name: "Retro-Futurist Comfort Food",
    platform: "Instagram",
    relevance: 83,
    risk: "Low",
    stage: "Rising",
    tags: ["Nostalgia", "Comfort-Food", "Vintage-Aesthetic", "Modern-Twist"],
    industries: ["Restaurants"],
    tones: ["Warm & Friendly", "Playful & Fun", "Edgy & Creative"],
    insight: "Classic 90s and early 2000s comfort dishes are being reimagined with 2026 ingredients. The 'Modern Diner' aesthetic—mixing neon with high-end plating—is a massive hit for evening engagement."
  },
  {
    name: "Hyper-Local Ingredient Provenance AR",
    platform: "Instagram",
    relevance: 90,
    risk: "Low",
    stage: "Rising",
    tags: ["Augmented-Reality", "Transparency", "Local-Sourcing", "Tech"],
    industries: ["Restaurants"], 
    tones: ["Professional & Clean", "Premium & Minimal", "Edgy & Creative"],
    insight: "Diners can scan a QR code to see an AR overlay showing the exact farm, harvest date, and 'food miles' of their dish. Transparency is the ultimate luxury signal for 2026."
  },
  {
    name: "Collaborative 'Guest-Chef' Pop-ups",
    platform: "TikTok",
    relevance: 93,
    risk: "Low",
    stage: "Peak",
    tags: ["Collaboration", "Limited-Edition", "Hype", "Community"],
    industries: ["Restaurants"],
    tones: ["Bold & Energetic", "Playful & Fun", "Edgy & Creative"],
    insight: "Cross-industry collabs (e.g., a streetwear brand designing a limited-time burger) are driving massive organic search. These 'drop' events create extreme urgency and viral TikTok content."
  },
  {
    name: "Biophilic 'Jungle' Dining Aesthetics",
    platform: "Instagram",
    relevance: 85,
    risk: "Low",
    stage: "Rising",
    tags: ["Interior-Design", "Nature", "Aesthetic", "Eco-Friendly"],
    industries: ["Restaurants"],
    tones: ["Warm & Friendly", "Premium & Minimal", "Playful & Fun"],
    insight: "The 'Forest-to-Fork' vibe is peaking. Restaurants covered in living walls and indoor trees are outperforming traditional minimalist decors on Instagram due to their high 'escapism' value."
  },
  // --- DIGITAL MARKETING ---
  {
    name: "Zero-Party Data Interactive Quizzes",
    platform: "Instagram",
    relevance: 94,
    risk: "Low",
    stage: "Rising",
    tags: ["Data-Privacy", "Personalization", "Interactive", "Strategy"],
    industries: ["Digital Marketing"],
    tones: ["Professional & Clean", "Warm & Friendly", "Playful & Fun"],
    insight: "With the death of cookies, brands are winning by trading 'entertainment' for 'data.' High-conversion brands use interactive stories to let users self-segment their interests."
  },
  {
    name: "AI-Disclosure Transparency Labeling",
    platform: "X (Twitter)",
    relevance: 88,
    risk: "Medium",
    stage: "Rising",
    tags: ["AI-Ethics", "Trust", "Transparency", "Brand-Safety"],
    industries: ["Digital Marketing"],
    tones: ["Professional & Clean", "Premium & Minimal"],
    insight: "Audiences are developing 'AI-fatigue.' Marketing agencies that openly label AI-generated vs. Human-created content are seeing 30% higher brand trust scores."
  },
  {
    name: "Micro-Niche Subreddit Sponsoring",
    platform: "Reddit",
    relevance: 82,
    risk: "Medium",
    stage: "Rising",
    tags: ["Community", "SEO", "Niche-Marketing", "Dark-Social"],
    industries: ["Digital Marketing"],
    tones: ["Edgy & Creative", "Warm & Friendly"],
    insight: "Broad ads are failing. Agencies are shifting budgets toward 'hyper-niche' community sponsoring where the brand acts as a utility or a helpful member rather than an advertiser."
  },
  {
    name: "Lo-Fi 'B-Roll' Storytelling",
    platform: "TikTok",
    relevance: 91,
    risk: "Low",
    stage: "Peak",
    tags: ["Aesthetic", "Authenticity", "Content-Strategy", "Video"],
    industries: ["Digital Marketing"],
    tones: ["Warm & Friendly", "Edgy & Creative", "Playful & Fun"],
    insight: "High-production ads are being skipped. 'B-Roll' footage—random, aesthetic clips of daily life with text overlays—is driving higher engagement because it feels like a friend's post, not an ad."
  },
  {
    name: "Answer Engine Optimization (AEO)",
    platform: "Instagram",
    relevance: 95,
    risk: "Low",
    stage: "Rising",
    tags: ["SEO", "AI-Search", "Visibility", "Authority"],
    industries: ["Digital Marketing"],
    tones: ["Professional & Clean", "Premium & Minimal"],
    insight: "Traditional SEO is dead. Brands are now optimizing content to be the 'summarized answer' in AI search results. Clarity, structured data, and direct 'How-to' answers are the new ranking factors."
  },
  {
    name: "Omnichannel Content Flywheels",
    platform: "Instagram",
    relevance: 89,
    risk: "Low",
    stage: "Rising",
    tags: ["Systems", "Efficiency", "Distribution", "Repurposing"],
    industries: ["Digital Marketing"],
    tones: ["Professional & Clean", "Edgy & Creative"],
    insight: "Marketers are moving from 'campaigns' to 'systems.' One core long-form asset (like a podcast) is now systematically broken into 20+ pieces of platform-specific micro-content using AI automation."
  },
  {
    name: "Social-First Brand Search",
    platform: "TikTok",
    relevance: 92,
    risk: "Medium",
    stage: "Peak",
    tags: ["Social-SEO", "Gen-Z", "Discovery", "Intent"],
    industries: ["Digital Marketing"],
    tones: ["Bold & Energetic", "Playful & Fun", "Edgy & Creative"],
    insight: "For younger audiences, TikTok is the new Google. Agencies are shifting focus to 'Visual SEO'—optimizing on-screen text, captions, and hashtags to capture high-intent product researchers directly in-feed."
  },
  {
    name: "Employee Advocacy & Personal Branding",
    platform: "LinkedIn",
    relevance: 84,
    risk: "Low",
    stage: "Rising",
    tags: ["Trust", "Authenticity", "B2B", "Human-Centric"],
    industries: ["Digital Marketing"],
    tones: ["Warm & Friendly", "Professional & Clean"],
    insight: "People trust people, not logos. Digital marketing firms are now incentivizing employees to build their own professional brands, turning the workforce into a network of trusted micro-influencers."
  },
  {
    name: "Search-Intent Video Threading",
    platform: "YouTube",
    relevance: 93,
    risk: "Low",
    stage: "Rising",
    tags: ["SEO", "Video-Strategy", "Algorithm", "Content-Clusters"],
    industries: ["Digital Marketing"], 
    tones: ["Professional & Clean", "Edgy & Creative"],
    insight: "Brands are creating 'Video Threads'—a series of 15-second shorts that link to a 10-minute deep dive. This captures both high-speed scrollers and high-intent researchers in one funnel."
  },
  {
    name: "Broadcast Channel 'Insider' Funnels",
    platform: "Instagram",
    relevance: 89,
    risk: "Low",
    stage: "Peak",
    tags: ["Community", "Direct-Marketing", "Retention", "Engagement"],
    industries: ["Digital Marketing"],
    tones: ["Warm & Friendly", "Premium & Minimal", "Bold & Energetic"],
    insight: "Moving marketing from the 'Feed' to 'Channels.' Brands using Broadcast Channels for 'leaked' updates or early access are seeing 5x higher click-through rates than standard Stories."
  },
  // --- MOVIES & OTT ---
  {
    name: "Theory-Baiting Micro-Teasers",
    platform: "TikTok",
    relevance: 95,
    risk: "Low",
    stage: "Rising",
    tags: ["Fandom", "Theories", "Engagement", "Community"],
    industries: ["Movies & OTT"], 
    tones: ["Edgy & Creative", "Bold & Energetic", "Playful & Fun"],
    insight: "Studios are releasing 5-second clips with hidden 'Easter eggs' specifically to trigger 'Theory TikTok.' This turns the audience into a free marketing team that decodes every frame."
  },
  {
    name: "Cast 'Vlog-Style' Press Junkets",
    platform: "YouTube",
    relevance: 89,
    risk: "Low",
    stage: "Peak",
    tags: ["Authenticity", "Celebrity", "Behind-The-Scenes", "PR"],
    industries: ["Movies & OTT"],
    tones: ["Warm & Friendly", "Playful & Fun", "Edgy & Creative"],
    insight: "The traditional interview is dead. Fans want to see the cast in 'chaotic' lo-fi vlogs or playing trending games. It humanizes the stars and drives 3x more shares than standard trailers."
  },
  {
    name: "Character-POV Real-Time Accounts",
    platform: "X (Twitter)",
    relevance: 82,
    risk: "Medium",
    stage: "Rising",
    tags: ["Roleplay", "Immersive", "Marketing", "Storytelling"],
    industries: ["Movies & OTT"],
    tones: ["Edgy & Creative", "Bold & Energetic"],
    insight: "Creating 'In-Universe' X accounts where characters post as if they are real people during the show's airtime. This creates an immersive bridge between the screen and the viewer's phone."
  },
  {
    name: "AR-Poster Interactive Discovery",
    platform: "Instagram",
    relevance: 87,
    risk: "Low",
    stage: "Rising",
    tags: ["AR", "Immersive", "Visuals", "Discovery"],
    industries: ["Movies & OTT"],
    tones: ["Premium & Minimal", "Edgy & Creative"],
    insight: "Static posters are becoming AR portals. Scanning a movie poster on Instagram reveals a 3D scene or an exclusive 'hidden' trailer, turning physical city ads into digital engagement hubs."
  },
  {
    name: "Spoiler-Free 'Reaction' Loops",
    platform: "TikTok",
    relevance: 92,
    risk: "Low",
    stage: "Peak",
    tags: ["Community", "Hype", "Emotion", "Viral"],
    industries: ["Movies & OTT"], 
    tones: ["Warm & Friendly", "Bold & Energetic", "Playful & Fun"],
    insight: "Creators are filming their emotional reactions to 'that one scene' without showing the screen. This creates massive FOMO and drives high-intent traffic to streaming platforms to find out what happened."
  },
  {
    name: "YouTube 'Super-Cut' Retrospectives",
    platform: "YouTube",
    relevance: 84,
    risk: "Low",
    stage: "Rising",
    tags: ["Nostalgia", "Lore", "Deep-Dive", "Education"],
    industries: ["Movies & OTT"],
    tones: ["Professional & Clean", "Premium & Minimal", "Edgy & Creative"],
    insight: "Before a new season or sequel, studios are partnering with video essayists to create 'The Story So Far' high-production recaps. It bridges the gap for new viewers and rewards long-time fans."
  },
  {
    name: "Aesthetic 'Mood-Board' Trailers",
    platform: "Instagram",
    relevance: 88,
    risk: "Low",
    stage: "Rising",
    tags: ["Visuals", "Aesthetic", "Cinematic", "Short-Form"],
    industries: ["Movies & OTT"],
    tones: ["Premium & Minimal", "Edgy & Creative"],
    insight: "Traditional high-action trailers are being supplemented by 'Vibe Trailers'—30-second clips focused purely on lighting, music, and atmosphere. This targets the 'Cinephile' and 'Aesthetic' communities on Instagram."
  },
  {
    name: "X (Twitter) 'Watch-Party' Threads",
    platform: "X (Twitter)",
    relevance: 79,
    risk: "Medium",
    stage: "Peak",
    tags: ["Live-Tweet", "Community", "Real-Time", "Engagement"],
    industries: ["Movies & OTT"],
    tones: ["Bold & Energetic", "Playful & Fun"],
    insight: "Studios are hosting official synchronized watch parties where writers or cast members live-tweet trivia during the first hour of a premiere. This turns a solo streaming session into a global event."
  },
  {
    name: "Fan-Edit Commissioning",
    platform: "TikTok",
    relevance: 91,
    risk: "Medium",
    stage: "Rising",
    tags: ["Fandom", "Creators", "Video-Editing", "Co-Creation"],
    industries: ["Movies & OTT"], 
    tones: ["Edgy & Creative", "Bold & Energetic", "Playful & Fun"],
    insight: "Studios are officially 'hiring' top fan-editors to create high-energy trailers for TikTok. It legitimizes the fan community and ensures the content perfectly matches the platform's fast-paced visual language."
  },
  {
    name: "Lo-Fi 'In-Universe' Soundscapes",
    platform: "YouTube",
    relevance: 78,
    risk: "Low",
    stage: "Rising",
    tags: ["Ambient", "Focus", "Audio", "Immersion"],
    industries: ["Movies & OTT"],
    tones: ["Premium & Minimal", "Warm & Friendly"],
    insight: "To keep a show top-of-mind between seasons, studios are releasing 1-hour 'Study with me' or 'Ambient' videos using the show's soundtrack and set locations. It turns the OTT IP into a background lifestyle companion."
  },
  // --- PHOTOGRAPHY ---
  {
    name: "Hyper-Realist Film Grain Textures",
    platform: "Instagram",
    relevance: 94,
    risk: "Low",
    stage: "Peak",
    tags: ["Analog", "Film", "Texture", "Aesthetic"],
    industries: ["Photography"], 
    tones: ["Premium & Minimal", "Warm & Friendly"],
    insight: "As AI images become 'too perfect,' photographers are over-indexing on heavy grain and light leaks. This 'Analog Soul' signals that a human, not a prompt, took the photo."
  },
  {
    name: "Camera-to-Cloud (C2C) Live Sets",
    platform: "X (Twitter)",
    relevance: 89,
    risk: "Low",
    stage: "Rising",
    tags: ["Tech", "Workflow", "Real-Time", "Hardware"],
    industries: ["Photography"],
    tones: ["Professional & Clean", "Bold & Energetic"],
    insight: "The delay between 'shoot' and 'post' is vanishing. Photographers are using hardware that uploads RAW files instantly, allowing for real-time live-tweeting of high-end events."
  },
  {
    name: "POV 'Chest-Cam' BTS",
    platform: "TikTok",
    relevance: 96,
    risk: "Low",
    stage: "Rising",
    tags: ["Behind-The-Scenes", "POV", "Education", "Process"],
    industries: ["Photography"],
    tones: ["Edgy & Creative", "Playful & Fun", "Bold & Energetic"],
    insight: "The 'Result' is less viral than the 'Process.' Using a body-cam to show exactly how a photographer moves and finds a shot is driving 4x more engagement than the final image itself."
  },
  {
    name: "Flash-Heavy 'Night-Life' Rawness",
    platform: "Instagram",
    relevance: 82,
    risk: "Medium",
    stage: "Rising",
    tags: ["Flash", "Editorial", "Paparazzi-Style", "Raw"],
    industries: ["Photography"],
    tones: ["Edgy & Creative", "Bold & Energetic"],
    insight: "Soft, natural lighting is being replaced by harsh, direct on-camera flash. This 'Candid Paparazzi' look feels more authentic and high-energy to Gen Z audiences."
  },
  {
    name: "C2PA 'Digital Fingerprint' Proof",
    platform: "X (Twitter)",
    relevance: 95,
    risk: "Low",
    stage: "Rising",
    tags: ["Authenticity", "Ethics", "Metadata", "Journalism"],
    industries: ["Photography"], 
    tones: ["Professional & Clean", "Premium & Minimal"],
    insight: "As deepfakes rise, photographers are using C2PA metadata to prove their images are untouched. On X, 'Verified Human' photography is becoming a requirement for high-end brand deals."
  },
  {
    name: "Multi-Slide 'Contact Sheet' Reveals",
    platform: "Instagram",
    relevance: 88,
    risk: "Low",
    stage: "Peak",
    tags: ["Process", "Storytelling", "Curation", "Retro"],
    industries: ["Photography"],
    tones: ["Warm & Friendly", "Premium & Minimal", "Edgy & Creative"],
    insight: "Instead of one perfect shot, creators are posting the whole 10-shot carousel as a 'digital contact sheet.' It builds a narrative around the session and keeps users on the post longer."
  },
  {
    name: "Lo-Fi CCD Sensor Nostalgia",
    platform: "TikTok",
    relevance: 91,
    risk: "Low",
    stage: "Peak",
    tags: ["Vintage-Tech", "CCD", "Colors", "Nostalgia"],
    industries: ["Photography"],
    tones: ["Playful & Fun", "Warm & Friendly", "Edgy & Creative"],
    insight: "The 2000s 'Point-and-shoot' aesthetic is peaking. Professional photographers are incorporating old CCD-sensor cameras into high-fashion shoots to get that specific, creamy color science that modern sensors lack."
  },
  {
    name: "Long-Form 'Silent Edit' Sessions",
    platform: "YouTube",
    relevance: 76,
    risk: "Low",
    stage: "Rising",
    tags: ["ASMR", "Editing", "Workflow", "Deep-Work"],
    industries: ["Photography"],
    tones: ["Premium & Minimal", "Professional & Clean"],
    insight: "Audiences are using 'Study With Me' style long-form videos of photographers editing in Lightroom. These 'Silent Edits' (no music, just keyboard clicks) are the new high-retention format for educational marketing."
  },
  {
    name: "Intentional Shutter-Drag Motion",
    platform: "Instagram",
    relevance: 93,
    risk: "Low",
    stage: "Rising",
    tags: ["Motion-Blur", "Energy", "Abstract", "Night-Life"],
    industries: ["Photography"], 
    tones: ["Edgy & Creative", "Bold & Energetic", "Premium & Minimal"],
    insight: "Movement is the new 'sharpness.' Photographers are using slow shutter speeds to create intentional streaks of light and motion blur, capturing the 'energy' of a scene rather than just a frozen moment. It's the ultimate 'Anti-AI' look because of its organic unpredictability."
  },
  {
    name: "Vertical Negative-Space Composition",
    platform: "TikTok / Reels",
    relevance: 97,
    risk: "Low",
    stage: "Peak",
    tags: ["Mobile-First", "UX-Design", "Minimalism", "Layout"],
    industries: ["Photography"],
    tones: ["Professional & Clean", "Premium & Minimal", "Warm & Friendly"],
    insight: "Photographers are now shooting specifically for the 'UI Overlay.' By placing subjects in the bottom third and leaving massive negative space at the top for text/captions, they are seeing 40% higher engagement on mobile-first platforms."
  },
  // --- INFLUENCER MARKETING ---
  {
    name: "Nano-Influencer Performance Pods",
    platform: "TikTok / Instagram",
    relevance: 95,
    risk: "Low",
    stage: "Rising",
    tags: ["Nano-Creators", "Engagement", "Efficiency", "ROI"],
    industries: ["Influencer Marketing"], 
    tones: ["Professional & Clean", "Warm & Friendly", "Bold & Energetic"],
    insight: "Small is the new big. Brands are seeing 10.3% engagement with nano-influencers (<10k followers) compared to <1% for mega-stars. Scaling via 'Pods' (groups of 20+ nano-creators) is driving 3x higher conversion for the same budget."
  },
  {
    name: "Long-Term 'Brand Ambassador' Retainers",
    platform: "YouTube / Instagram",
    relevance: 91,
    risk: "Low",
    stage: "Peak",
    tags: ["Partnership", "Trust", "Retention", "Sustainability"],
    industries: ["Influencer Marketing"],
    tones: ["Professional & Clean", "Warm & Friendly", "Premium & Minimal"],
    insight: "The one-off post is dead. Audiences now spot 'ads' instantly. Long-term partnerships (6+ months) allow the product to integrate naturally into a creator's lifestyle, resulting in 70% higher audience trust scores."
  },
  {
    name: "Lo-Fi 'Story-Fit' Co-Creation",
    platform: "TikTok / Reels",
    relevance: 88,
    risk: "Medium",
    stage: "Rising",
    tags: ["Authenticity", "UGC", "Creative-Freedom", "B-Roll"],
    industries: ["Influencer Marketing"],
    tones: ["Edgy & Creative", "Playful & Fun", "Warm & Friendly"],
    insight: "Brands are abandoning rigid scripts for 'briefs.' Letting creators use their own voice and phone-shot 'B-roll' makes the content feel like a friend's recommendation rather than a corporate interruption."
  },
  {
    name: "AI-Disclosure & Ethical Transparency",
    platform: "X (Twitter) / Instagram",
    relevance: 84,
    risk: "Low",
    stage: "Rising",
    tags: ["Ethics", "AI-Transparency", "Trust", "Compliance"],
    industries: ["Influencer Marketing"],
    tones: ["Professional & Clean", "Premium & Minimal"],
    insight: "With the rise of virtual influencers, human creators who explicitly label AI-assisted content (or guarantee 'Human-Only' production) are becoming the gold standard for high-trust brand safety."
  },
  {
    name: "Affiliate-Live 'Flash' Selling",
    platform: "TikTok Shop / Instagram",
    relevance: 96,
    risk: "Low",
    stage: "Peak",
    tags: ["Social-Commerce", "Live-Stream", "Affiliate", "Sales"],
    industries: ["Influencer Marketing"], 
    tones: ["Bold & Energetic", "Playful & Fun", "Warm & Friendly"],
    insight: "Influencers are moving from 'reviewers' to 'closers.' Live-streamed flash sales—where creators offer 15-minute exclusive discount codes—are driving $500M+ in weekend revenue as social commerce reaches full adoption."
  },
  {
    name: "Serialized 'World-Building' Narratives",
    platform: "YouTube / TikTok",
    relevance: 85,
    risk: "Low",
    stage: "Rising",
    tags: ["Storytelling", "Long-Form", "Retention", "Series"],
    industries: ["Influencer Marketing"],
    tones: ["Edgy & Creative", "Premium & Minimal", "Warm & Friendly"],
    insight: "Audiences are craving episodic consistency. Influencers who build recurring 'shows' or serialized storylines (e.g., 'Season 1 of my Home Reno') see 45% higher affiliate sales due to sustained viewer loyalty."
  },
  {
    name: "AI-Optimized Creator 'Whitelisting'",
    platform: "Facebook / Instagram",
    relevance: 92,
    risk: "Medium",
    stage: "Rising",
    tags: ["Ads", "AI-Optimization", "Whitelisting", "Performance"],
    industries: ["Influencer Marketing"],
    tones: ["Professional & Clean", "Bold & Energetic"],
    insight: "Brands are no longer just posting on creator feeds. They are 'whitelisting'—using AI to turn high-performing creator posts into dark ads. This 'Human-Face-meets-AI-Spend' strategy is the highest ROI format for 2026."
  },
  {
    name: "Co-Created 'Community-Validated' Products",
    platform: "TikTok / X (Twitter)",
    relevance: 87,
    risk: "Low",
    stage: "Rising",
    tags: ["Co-Creation", "Product-Dev", "Community", "Trust"],
    industries: ["Influencer Marketing"],
    tones: ["Warm & Friendly", "Edgy & Creative", "Professional & Clean"],
    insight: "The next phase of influence is product ownership. Brands that involve influencers in the R&D stage and document the 'vote' from the community are seeing zero-cost customer acquisition at launch."
  },
  {
    name: "Subscription-Based 'Inner Circle' Access",
    platform: "Instagram / YouTube",
    relevance: 91,
    risk: "Low",
    stage: "Rising",
    tags: ["Subscriptions", "Exclusivity", "Monetization", "Loyalty"],
    industries: ["Influencer Marketing"], 
    tones: ["Premium & Minimal", "Warm & Friendly", "Professional & Clean"],
    insight: "Influencers are moving away from 'Public' reach to 'Private' depth. Brands that sponsor a creator’s subscriber-only content see 12x higher conversion because the audience is pre-vetted as 'Super-Fans'."
  },
  {
    name: "Creator-as-a-Service (CaaS)",
    platform: "X (Twitter) / LinkedIn",
    relevance: 83,
    risk: "Low",
    stage: "Rising",
    tags: ["B2B", "Thought-Leadership", "Strategy", "Consulting"],
    industries: ["Influencer Marketing"],
    tones: ["Professional & Clean", "Edgy & Creative"],
    insight: "Influencers are no longer just 'billboards'; they are becoming strategic consultants. Brands are hiring influencers to sit in on product dev meetings, ensuring the final product has 'viral-DNA' built-in before it even hits the market."
  }
];
