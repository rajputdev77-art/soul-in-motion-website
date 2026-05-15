// All eight Soul in Motion logo concepts.
// Each is a self-contained SVG/HTML component returning a centered mark.
// Convention: 480x480 artboard, mark sized to ~280px square, wordmark below.

const BRAND = {
  ink:    "#0A0B10",
  paper:  "#F5F1E8",
  amber:  "#E8A04A",
  ember:  "#C8732A",
  blue:   "#3D8FE0",
  glow:   "#7BB6F0",
  mute:   "#6B7689",
};

// Shared wordmark — lowercase, tight tracking, the "in" subtly italicized.
function Wordmark({ color = BRAND.ink, size = 22, italic = true, letterSpacing = "0.18em", weight = 600 }) {
  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      fontWeight: weight,
      fontSize: size,
      letterSpacing,
      color,
      textTransform: "lowercase",
      display: "flex",
      gap: "0.5em",
      alignItems: "baseline",
    }}>
      <span>soul</span>
      <span style={{ fontStyle: italic ? "italic" : "normal", fontWeight: weight - 100 }}>in</span>
      <span>motion</span>
    </div>
  );
}

function Caption({ children }) {
  return (
    <div style={{
      position: "absolute",
      bottom: 18,
      left: 0,
      right: 0,
      textAlign: "center",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: BRAND.mute,
    }}>{children}</div>
  );
}

function Frame({ bg = BRAND.paper, children, caption }) {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      background: bg,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 28,
      position: "relative",
      overflow: "hidden",
    }}>
      {children}
      {caption ? <Caption>{caption}</Caption> : null}
    </div>
  );
}

// =============================================================
// 01 — Möbius monogram (SiM as a single continuous ribbon)
// =============================================================
function MobiusMark() {
  return (
    <Frame bg={BRAND.paper} caption="01 · möbius monogram">
      <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
        <defs>
          <linearGradient id="mob-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={BRAND.amber} />
            <stop offset="100%" stopColor={BRAND.blue} />
          </linearGradient>
        </defs>
        {/* A ribbon shaped like an S that crosses itself — soul (S) + motion (loop) */}
        <path
          d="M 50 60 C 50 30, 110 30, 110 70 C 110 110, 50 110, 50 150 C 50 190, 110 190, 170 160 C 200 145, 200 110, 170 100 C 130 88, 90 110, 90 150"
          stroke="url(#mob-grad)"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
        {/* The "i" dot — the soul */}
        <circle cx="135" cy="58" r="9" fill={BRAND.ink} />
      </svg>
      <Wordmark />
    </Frame>
  );
}

// =============================================================
// 02 — Aperture (vertical slit of warm + cool, lifted from the photo)
// =============================================================
function ApertureMark() {
  return (
    <Frame bg={BRAND.ink} caption="02 · aperture · photo DNA">
      <svg width="200" height="240" viewBox="0 0 200 240" fill="none">
        <defs>
          <linearGradient id="ap-warm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={BRAND.amber} stopOpacity="0.95" />
            <stop offset="100%" stopColor={BRAND.ember} stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="ap-cool" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={BRAND.glow} stopOpacity="0.9" />
            <stop offset="100%" stopColor={BRAND.blue} stopOpacity="0.7" />
          </linearGradient>
          <filter id="ap-blur">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        {/* Glow halo */}
        <rect x="78" y="20" width="44" height="200" rx="22" fill="url(#ap-warm)" filter="url(#ap-blur)" opacity="0.45" />
        {/* The slit — warm half */}
        <path d="M 88 30 Q 88 20, 100 20 L 100 220 Q 88 220, 88 210 Z" fill="url(#ap-warm)" />
        {/* The slit — cool half */}
        <path d="M 100 20 Q 112 20, 112 30 L 112 210 Q 112 220, 100 220 Z" fill="url(#ap-cool)" />
        {/* Bright seam */}
        <line x1="100" y1="20" x2="100" y2="220" stroke={BRAND.paper} strokeWidth="0.6" opacity="0.5" />
      </svg>
      <Wordmark color={BRAND.paper} />
    </Frame>
  );
}

// =============================================================
// 03 — Particle flow (S-shape made of dots, AI/data feel)
// =============================================================
function ParticleMark() {
  // Generate dots along a vertical S-curve
  const dots = [];
  const N = 26;
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    // S-curve: x oscillates with a sine, y is linear
    const x = 110 + Math.sin(t * Math.PI * 1.6 - 0.3) * 70;
    const y = 30 + t * 200;
    // Size grows in the middle
    const s = 2 + 6 * Math.sin(t * Math.PI);
    // Color shifts amber → blue
    const c = t < 0.5
      ? BRAND.amber
      : BRAND.blue;
    const opacity = 0.55 + 0.45 * Math.sin(t * Math.PI);
    dots.push({ x, y, s, c, opacity });
  }
  return (
    <Frame bg={BRAND.paper} caption="03 · particle flow">
      <svg width="220" height="260" viewBox="0 0 220 260" fill="none">
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.s} fill={d.c} opacity={d.opacity} />
        ))}
      </svg>
      <Wordmark />
    </Frame>
  );
}

// =============================================================
// 04 — Portrait lockup (your photo, cropped to a circle)
// =============================================================
function PortraitMark() {
  return (
    <Frame bg={BRAND.ink} caption="04 · portrait lockup · your photo">
      <div style={{ position: "relative", width: 200, height: 200 }}>
        {/* Glow ring */}
        <div style={{
          position: "absolute",
          inset: -20,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${BRAND.amber}33 0%, transparent 70%)`,
          filter: "blur(8px)",
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          overflow: "hidden",
          border: `1px solid ${BRAND.amber}55`,
          boxShadow: `0 0 0 6px ${BRAND.ink}, 0 0 0 7px ${BRAND.amber}22`,
        }}>
          <img
            src="assets/portrait.jpg"
            alt="portrait"
            style={{
              width: "260%",
              height: "260%",
              objectFit: "cover",
              objectPosition: "55% 38%",
              filter: "contrast(1.15) brightness(1.25) saturate(1.1)",
              transform: "translate(-32%, -22%)",
            }}
          />
        </div>
      </div>
      <Wordmark color={BRAND.paper} />
    </Frame>
  );
}

// =============================================================
// 05 — Ripple / orbit (concentric arcs implying soul + vibration)
// =============================================================
function RippleMark() {
  return (
    <Frame bg={BRAND.paper} caption="05 · ripple">
      <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
        {/* Solid soul core */}
        <circle cx="110" cy="110" r="14" fill={BRAND.ink} />
        {/* Concentric arcs, opening to the right (motion) */}
        {[30, 50, 72, 96, 122].map((r, i) => (
          <path
            key={i}
            d={`M ${110 + r * Math.cos(Math.PI * 0.85)} ${110 + r * Math.sin(Math.PI * 0.85)} A ${r} ${r} 0 1 1 ${110 + r * Math.cos(-Math.PI * 0.85)} ${110 + r * Math.sin(-Math.PI * 0.85)}`}
            stroke={BRAND.ink}
            strokeWidth={2 - i * 0.18}
            strokeLinecap="round"
            opacity={0.95 - i * 0.16}
            fill="none"
          />
        ))}
        {/* Tracer dots on the motion side */}
        <circle cx="172" cy="100" r="3" fill={BRAND.amber} />
        <circle cx="186" cy="118" r="2.2" fill={BRAND.amber} opacity="0.7" />
        <circle cx="158" cy="92" r="2" fill={BRAND.blue} opacity="0.7" />
      </svg>
      <Wordmark />
    </Frame>
  );
}

// =============================================================
// 06 — Comet (soul orb + motion trail)
// =============================================================
function CometMark() {
  return (
    <Frame bg={BRAND.ink} caption="06 · comet">
      <svg width="260" height="180" viewBox="0 0 260 180" fill="none">
        <defs>
          <linearGradient id="trail-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={BRAND.amber} stopOpacity="0" />
            <stop offset="60%" stopColor={BRAND.amber} stopOpacity="0.55" />
            <stop offset="100%" stopColor={BRAND.amber} stopOpacity="1" />
          </linearGradient>
          <radialGradient id="orb-grad" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor={BRAND.paper} />
            <stop offset="35%" stopColor={BRAND.amber} />
            <stop offset="100%" stopColor={BRAND.ember} />
          </radialGradient>
        </defs>
        {/* Trail */}
        <path
          d="M 20 100 Q 100 60, 200 90"
          stroke="url(#trail-grad)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        {/* Thin trailing line */}
        <path
          d="M 20 100 Q 100 60, 200 90"
          stroke={BRAND.blue}
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        {/* Orb */}
        <circle cx="200" cy="90" r="18" fill="url(#orb-grad)" />
        <circle cx="200" cy="90" r="22" fill="none" stroke={BRAND.amber} strokeWidth="0.5" opacity="0.4" />
      </svg>
      <Wordmark color={BRAND.paper} />
    </Frame>
  );
}

// =============================================================
// 07 — Brutalist stack (heavy type, sliced)
// =============================================================
function StackMark() {
  return (
    <Frame bg={BRAND.paper} caption="07 · stack">
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 900,
        fontSize: 56,
        lineHeight: 0.88,
        letterSpacing: "-0.04em",
        color: BRAND.ink,
        textAlign: "left",
        position: "relative",
      }}>
        <div>SOUL</div>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}>
          <span style={{
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: 32,
            color: BRAND.ember,
            transform: "translateY(-2px)",
          }}>in</span>
          <span style={{
            flex: 1,
            height: 1,
            background: BRAND.ink,
          }} />
        </div>
        <div>MOTION</div>
        <div style={{
          position: "absolute",
          right: -4,
          top: -10,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: BRAND.ember,
        }} />
      </div>
    </Frame>
  );
}

// =============================================================
// 08 — Wordmark with kinetic dot (most usable, primary candidate)
// =============================================================
function KineticMark() {
  return (
    <Frame bg={BRAND.paper} caption="08 · kinetic wordmark">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: 34,
          letterSpacing: "-0.025em",
          color: BRAND.ink,
          display: "flex",
          alignItems: "baseline",
          gap: "0.18em",
        }}>
          <span>soul</span>
          <span style={{
            fontStyle: "italic",
            fontWeight: 400,
            color: BRAND.ember,
          }}>in</span>
          <span>motion</span>
        </div>
        {/* Kinetic underscore — dot trailing into a line */}
        <svg width="280" height="14" viewBox="0 0 280 14" fill="none">
          <defs>
            <linearGradient id="kin-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={BRAND.amber} stopOpacity="0" />
              <stop offset="100%" stopColor={BRAND.amber} stopOpacity="1" />
            </linearGradient>
          </defs>
          <line x1="0" y1="7" x2="252" y2="7" stroke="url(#kin-line)" strokeWidth="1.5" />
          <circle cx="260" cy="7" r="5" fill={BRAND.ember} />
          <circle cx="275" cy="7" r="2" fill={BRAND.ember} opacity="0.5" />
        </svg>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: BRAND.mute,
        }}>ai · templates · craft</div>
      </div>
    </Frame>
  );
}

// =============================================================
// APPLICATIONS — favicon, app icon, social avatar, t-shirt tag
// =============================================================
function FaviconApp() {
  return (
    <Frame bg={BRAND.paper} caption="favicon · 32px">
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {[16, 24, 32, 48, 96].map(sz => (
          <div key={sz} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{
              width: sz,
              height: sz,
              borderRadius: sz <= 24 ? 4 : 8,
              background: BRAND.ink,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width={sz * 0.62} height={sz * 0.62} viewBox="0 0 24 24" fill="none">
                <path d="M 6 6 Q 6 3, 12 7 Q 18 11, 18 14 Q 18 18, 12 17 Q 6 16, 6 20" stroke={BRAND.amber} strokeWidth="2.4" strokeLinecap="round" fill="none" />
                <circle cx="14" cy="6" r="1.3" fill={BRAND.blue} />
              </svg>
            </div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: BRAND.mute }}>{sz}px</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function AppIconApp() {
  return (
    <Frame bg={BRAND.paper} caption="app icon · ios / android">
      <div style={{ display: "flex", gap: 32 }}>
        {/* Dark version */}
        <div style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: `radial-gradient(circle at 30% 30%, #1A1D26 0%, ${BRAND.ink} 70%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 12px 32px rgba(0,0,0,0.18), 0 2px 4px rgba(0,0,0,0.1)",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* slit glow background */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 30,
            height: 130,
            borderRadius: 16,
            background: `linear-gradient(180deg, ${BRAND.amber}, ${BRAND.ember})`,
            filter: "blur(20px)",
            opacity: 0.55,
          }} />
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ position: "relative" }}>
            <path d="M 30 30 Q 30 15, 60 35 Q 90 55, 90 70 Q 90 90, 60 85 Q 30 80, 30 100" stroke={BRAND.amber} strokeWidth="9" strokeLinecap="round" fill="none" />
            <circle cx="74" cy="28" r="6" fill={BRAND.blue} />
          </svg>
        </div>
        {/* Light version */}
        <div style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: BRAND.paper,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 12px 32px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.06)",
          border: `1px solid #E5DFD0`,
        }}>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <path d="M 30 30 Q 30 15, 60 35 Q 90 55, 90 70 Q 90 90, 60 85 Q 30 80, 30 100" stroke={BRAND.ink} strokeWidth="9" strokeLinecap="round" fill="none" />
            <circle cx="74" cy="28" r="6" fill={BRAND.ember} />
          </svg>
        </div>
      </div>
    </Frame>
  );
}

function BusinessCardApp() {
  return (
    <Frame bg="#E8E2D2" caption="business card · 3.5×2 in">
      <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
        {/* Front */}
        <div style={{
          width: 340,
          height: 200,
          background: BRAND.ink,
          borderRadius: 6,
          padding: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
        }}>
          {/* slit glow */}
          <div style={{
            position: "absolute",
            right: 24,
            top: 24,
            bottom: 24,
            width: 6,
            borderRadius: 3,
            background: `linear-gradient(180deg, ${BRAND.amber}, ${BRAND.blue})`,
            boxShadow: `0 0 18px ${BRAND.amber}88`,
          }} />
          <div style={{ position: "absolute", left: 24, top: 24, fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.3em", color: BRAND.mute, textTransform: "uppercase" }}>est · 2026</div>
          <div style={{ position: "absolute", left: 24, bottom: 24 }}>
            <Wordmark color={BRAND.paper} size={16} letterSpacing="0.22em" weight={500} />
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.2em", color: BRAND.mute, textTransform: "uppercase", marginTop: 8 }}>ai · templates · craft</div>
          </div>
        </div>
        {/* Back */}
        <div style={{
          width: 340,
          height: 200,
          background: BRAND.paper,
          borderRadius: 6,
          padding: 24,
          position: "relative",
          boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 18, color: BRAND.ink, letterSpacing: "-0.01em" }}>your name</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: BRAND.mute, lineHeight: 1.6 }}>
            founder<br/>
            hello@soulinmotion.co<br/>
            soulinmotion.co
          </div>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" style={{ position: "absolute", right: 18, top: 18 }}>
            <path d="M 6 6 Q 6 3, 12 7 Q 18 11, 18 14 Q 18 18, 12 17 Q 6 16, 6 20" stroke={BRAND.ink} strokeWidth="2" strokeLinecap="round" fill="none" />
            <circle cx="14" cy="6" r="1.2" fill={BRAND.ember} />
          </svg>
        </div>
      </div>
    </Frame>
  );
}

function SocialAvatarApp() {
  return (
    <Frame bg={BRAND.paper} caption="social avatar · circular crop">
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {/* Variant: monogram */}
        <div style={{
          width: 140, height: 140, borderRadius: "50%",
          background: BRAND.ink,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
            <path d="M 6 6 Q 6 3, 12 7 Q 18 11, 18 14 Q 18 18, 12 17 Q 6 16, 6 20" stroke={BRAND.amber} strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <circle cx="14" cy="6" r="1.2" fill={BRAND.blue} />
          </svg>
        </div>
        {/* Variant: aperture */}
        <div style={{
          width: 140, height: 140, borderRadius: "50%",
          background: BRAND.ink,
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            width: 14, height: 86,
            borderRadius: 7,
            background: `linear-gradient(180deg, ${BRAND.amber} 0%, ${BRAND.ember} 45%, ${BRAND.blue} 100%)`,
            boxShadow: `0 0 24px ${BRAND.amber}66`,
          }} />
        </div>
        {/* Variant: portrait */}
        <div style={{
          width: 140, height: 140, borderRadius: "50%",
          overflow: "hidden",
          border: `1px solid ${BRAND.amber}55`,
        }}>
          <img
            src="assets/portrait.jpg"
            alt="avatar"
            style={{
              width: "260%", height: "260%",
              objectFit: "cover",
              filter: "contrast(1.15) brightness(1.25) saturate(1.1)",
              transform: "translate(-32%, -22%)",
            }}
          />
        </div>
      </div>
    </Frame>
  );
}

// =============================================================
// EXPORTS
// =============================================================
Object.assign(window, {
  MobiusMark, ApertureMark, ParticleMark, PortraitMark,
  RippleMark, CometMark, StackMark, KineticMark,
  FaviconApp, AppIconApp, BusinessCardApp, SocialAvatarApp,
  BRAND,
});
