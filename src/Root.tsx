import { AbsoluteFill, Composition, interpolate, useCurrentFrame } from "remotion";

const ComparisonVideo = () => {
  const frame = useCurrentFrame();

  // --- ANIMACIONES MATEMÁTICAS ---
  const moneyHeight = interpolate(frame, [0, 150, 300, 500], [20, 100, 250, 480], { extrapolateRight: "clamp" });
  const battery = Math.floor(interpolate(frame, [0, 250, 400], [100, 10, 0], { extrapolateRight: "clamp" }));
  const egoRecline = interpolate(frame, [100, 200], [0, 30], { extrapolateRight: "clamp" });
  const progress = interpolate(frame, [0, 500], [0, 100], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0B0B14", width: 1080, height: 1920, fontFamily: "Arial, sans-serif", color: "#FFF" }}>
      
      {/* TÍTULO PRINCIPAL */}
      <div style={{ position: "absolute", top: 80, width: "100%", textAlign: "center" }}>
        <h1 style={{ fontSize: 50, fontWeight: "900", color: "#FFF", margin: 0 }}>
          EGO <span style={{ color: "#555" }}>VS</span> MOTIVACIÓN <span style={{ color: "#555" }}>VS</span> OBSESIÓN
        </h1>
        <div style={{ width: 180, height: 4, backgroundColor: "#FF2A6D", margin: "15px auto 0", boxShadow: "0 0 15px #FF2A6D" }} />
      </div>

      {/* --- MONITORES SUPERIORES --- */}
      {/* Ego Monitor */}
      <div style={{ position: "absolute", top: 220, left: 60, width: 280, height: 140, backgroundColor: "#141422", borderRadius: 16, border: "2px solid #FF2A6D", padding: 15 }}>
        <div style={{ fontSize: 18, fontWeight: "900", color: "#FF2A6D" }}>EGO</div>
        <svg viewBox="0 0 100 50" style={{ width: "100%", height: 70, marginTop: 10 }}>
          <path d="M 0 40 Q 50 5 100 45" fill="none" stroke="#FF2A6D" strokeWidth="4" />
        </svg>
      </div>

      {/* Motivación Monitor */}
      <div style={{ position: "absolute", top: 220, left: 400, width: 280, height: 140, backgroundColor: "#141422", borderRadius: 16, border: "2px solid #FFD700", padding: 15 }}>
        <div style={{ fontSize: 18, fontWeight: "900", color: "#FFD700" }}>MOTIVACIÓN</div>
        <svg viewBox="0 0 100 50" style={{ width: "100%", height: 70, marginTop: 10 }}>
          <path d="M 0 30 Q 50 15 100 48" fill="none" stroke="#FFD700" strokeWidth="4" />
        </svg>
      </div>

      {/* Obsesión Monitor */}
      <div style={{ position: "absolute", top: 220, left: 740, width: 280, height: 140, backgroundColor: "#141422", borderRadius: 16, border: "2px solid #05D9E8", padding: 15 }}>
        <div style={{ fontSize: 18, fontWeight: "900", color: "#05D9E8" }}>OBSESIÓN</div>
        <svg viewBox="0 0 100 50" style={{ width: "100%", height: 70, marginTop: 10 }}>
          <path d="M 0 45 Q 50 30 100 5" fill="none" stroke="#05D9E8" strokeWidth="4" />
        </svg>
      </div>

      {/* --- ESTACIÓN 1: EGO --- */}
      <div style={{ position: "absolute", top: 500, left: 100, transform: `rotate(${egoRecline}deg)`, transformOrigin: "bottom left" }}>
        <div style={{ width: 240, height: 120, backgroundColor: "#1C1C2D", borderTop: "6px solid #FF2A6D", borderRadius: "8px 8px 0 0", position: "relative" }}>
          <div style={{ position: "absolute", top: 15, left: 85, width: 70, height: 45, backgroundColor: "#05D9E8", borderRadius: 4 }} />
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 80, fontSize: 20, color: "#FF2A6D", fontWeight: "900" }}>😎 Genio</div>
      </div>

      {/* --- ESTACIÓN 2: MOTIVACIÓN --- */}
      <div style={{ position: "absolute", top: 920, left: 100, opacity: battery === 0 ? 0.3 : 1 }}>
        <div style={{ position: "absolute", top: -45, left: 20, backgroundColor: "#111", border: "2px solid #FFD700", padding: "4px 12px", borderRadius: 8, fontSize: 16, fontWeight: "900", color: "#FFD700" }}>
          🔋 {battery}%
        </div>
        <div style={{ width: 240, height: 120, backgroundColor: "#1C1C2D", borderTop: "6px solid #FFD700", borderRadius: "8px 8px 0 0", position: "relative" }}>
          <div style={{ position: "absolute", top: 15, left: 85, width: 70, height: 45, backgroundColor: "#333", borderRadius: 4 }} />
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 70, fontSize: 20, color: "#FFD700", fontWeight: "900" }}>
          {battery === 0 ? "🕸️ Zzz..." : "💻 Activo"}
        </div>
      </div>

      {/* --- ESTACIÓN 3: OBSESIÓN (DINERO CRECIENTE) --- */}
      <div style={{ position: "absolute", top: 1340, left: 100 }}>
        {/* Torre de dinero que crece */}
        <div style={{
          position: "absolute",
          bottom: 120,
          left: 65,
          width: 110,
          height: moneyHeight,
          backgroundColor: "#27ae60",
          border: "3px solid #2ecc71",
          borderRadius: "8px 8px 0 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 20,
          fontWeight: "900",
          color: "#FFF",
          boxShadow: "0 0 20px #2ecc71"
        }}>
          💰
        </div>
        <div style={{ width: 240, height: 120, backgroundColor: "#1C1C2D", borderTop: "6px solid #05D9E8", borderRadius: "8px 8px 0 0", position: "relative" }}>
          <div style={{ position: "absolute", top: 15, left: 85, width: 70, height: 45, backgroundColor: "#05D9E8", borderRadius: 4, boxShadow: "0 0 10px #05D9E8" }} />
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 60, fontSize: 20, color: "#05D9E8", fontWeight: "900" }}>⚡ Imparable</div>
      </div>

      {/* BARRA DE PROGRESO INFERIOR */}
      <div style={{ position: "absolute", bottom: 60, left: 60, width: 960, height: 16, backgroundColor: "#141422", borderRadius: 8, overflow: "hidden", border: "2px solid #222" }}>
        <div style={{ width: `${progress}%`, height: "100%", backgroundColor: "#05D9E8", boxShadow: "0 0 15px #05D9E8" }} />
      </div>

    </AbsoluteFill>
  );
};

export const Root = () => {
  return (
    <Composition
      id="GTAVI-HypeVideo"
      component={ComparisonVideo}
      durationInFrames={500}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
