import { AbsoluteFill, Composition, interpolate, useCurrentFrame } from "remotion";

const ComparisonVideo = () => {
  const frame = useCurrentFrame();

  // --- ANIMACIONES Y ESTADOS DINÁMICOS (500 frames / ~16.5s) ---
  // 1. Obsesión: Crecimiento de la torre de dinero (de 0 a 550px de altura)
  const cashHeight = interpolate(frame, [0, 100, 300, 500], [0, 120, 320, 560], { extrapolateRight: "clamp" });

  // 2. Motivación: Batería bajando de 100% a 0%
  const batteryLevel = Math.floor(interpolate(frame, [0, 200, 350], [100, 20, 0], { extrapolateRight: "clamp" }));

  // 3. Ego: Inclinación del cuerpo hacia atrás (de 0 a 35 grados)
  const egoLean = interpolate(frame, [120, 250], [0, 35], { extrapolateRight: "clamp" });

  // 4. Progreso general de la barra inferior
  const progress = interpolate(frame, [0, 500], [0, 100], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#12121a", width: 1080, height: 1920, fontFamily: "Arial, sans-serif", color: "#FFF", overflow: "hidden" }}>
      
      {/* --- TÍTULO SUPERIOR --- */}
      <div style={{ position: "absolute", top: 50, width: "100%", textAlign: "center" }}>
        <h1 style={{ fontSize: 44, fontWeight: "900", letterSpacing: "2px", margin: 0, color: "#FFFFFF" }}>
          EGO <span style={{ color: "#666" }}>VS</span> MOTIVACIÓN <span style={{ color: "#666" }}>VS</span> OBSESIÓN
        </h1>
        <div style={{ display: "flex", justifyContent: "space-around", width: "100%", padding: "0 100px", marginTop: 15 }}>
          <span style={{ fontSize: 18, color: "#FF2A6D", fontWeight: "900" }}>EGO</span>
          <span style={{ fontSize: 18, color: "#FFD700", fontWeight: "900" }}>MOTIVACIÓN</span>
          <span style={{ fontSize: 18, color: "#05D9E8", fontWeight: "900" }}>OBSESIÓN</span>
        </div>
      </div>

      {/* --- MONITORES SUPERIORES CON GRÁFICAS --- */}
      {/* Columna 1: Ego */}
      <div style={{ position: "absolute", top: 160, left: 90, width: 260, height: 220, backgroundColor: "#1a1a26", borderRadius: 16, border: "2px solid #FF2A6D", padding: 15, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: 12, height: 12, backgroundColor: "#FF2A6D", borderRadius: "50%", boxShadow: "0 0 10px #FF2A6D", marginBottom: 10 }} />
        <svg viewBox="0 0 100 50" style={{ width: "100%", height: 110 }}>
          <path d="M 0 40 Q 50 10 100 45" fill="none" stroke="#FF2A6D" strokeWidth="4" />
          <circle cx={interpolate(frame, [0, 500], [0, 100], { extrapolateRight: "clamp" })} cy={40} r={5} fill="#FF2A6D" />
        </svg>
      </div>

      {/* Columna 2: Motivación */}
      <div style={{ position: "absolute", top: 160, left: 410, width: 260, height: 220, backgroundColor: "#1a1a26", borderRadius: 16, border: "2px solid #FFD700", padding: 15, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: 12, height: 12, backgroundColor: "#FFD700", borderRadius: "50%", boxShadow: "0 0 10px #FFD700", marginBottom: 10 }} />
        <svg viewBox="0 0 100 50" style={{ width: "100%", height: 110 }}>
          <path d="M 0 30 Q 50 20 100 48" fill="none" stroke="#FFD700" strokeWidth="4" />
          <circle cx={interpolate(frame, [0, 500], [0, 100], { extrapolateRight: "clamp" })} cy={35} r={5} fill="#FFD700" />
        </svg>
      </div>

      {/* Columna 3: Obsesión */}
      <div style={{ position: "absolute", top: 160, left: 730, width: 260, height: 220, backgroundColor: "#1a1a26", borderRadius: 16, border: "2px solid #05D9E8", padding: 15, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: 12, height: 12, backgroundColor: "#05D9E8", borderRadius: "50%", boxShadow: "0 0 10px #05D9E8", marginBottom: 10 }} />
        <svg viewBox="0 0 100 50" style={{ width: "100%", height: 110 }}>
          <path d="M 0 45 Q 50 30 100 8" fill="none" stroke="#05D9E8" strokeWidth="4" />
          <circle cx={interpolate(frame, [0, 500], [0, 100], { extrapolateRight: "clamp" })} cy={35} r={5} fill="#05D9E8" />
        </svg>
      </div>

      {/* --- ESTACIONES DE TRABAJO (OFICINA) --- */}

      {/* --- 1. EGO (Izquierda) --- */}
      <div style={{ position: "absolute", top: 560, left: 100, transform: `rotate(${egoLean}deg)`, transformOrigin: "bottom left" }}>
        <div style={{ width: 240, height: 130, backgroundColor: "#222233", borderTop: "6px solid #FF2A6D", borderRadius: "8px 8px 0 0", position: "relative" }}>
          <div style={{ position: "absolute", top: 15, left: 85, width: 70, height: 45, backgroundColor: "#05D9E8", borderRadius: 4 }} />
        </div>
        <div style={{ position: "absolute", bottom: -20, left: 80, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontSize: 16, color: "#FF2A6D", fontWeight: "900", marginBottom: 4 }}>😎</div>
          <div style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: "#FFF" }} />
          <div style={{ width: 6, height: 50, backgroundColor: "#FFF" }} />
        </div>
        {frame > 100 && (
          <div style={{ position: "absolute", bottom: -30, left: 140, backgroundColor: "#27ae60", padding: "6px 12px", borderRadius: 6, fontSize: 16, fontWeight: "900" }}>
            💸 💸
          </div>
        )}
      </div>

      {/* --- 2. MOTIVACIÓN (Centro) --- */}
      <div style={{ position: "absolute", top: 980, left: 420, opacity: batteryLevel === 0 ? 0.35 : 1 }}>
        <div style={{ position: "absolute", top: -50, left: 55, backgroundColor: "#1a1a26", border: "2px solid #FFD700", padding: "4px 10px", borderRadius: 8, fontSize: 14, fontWeight: "900", color: "#FFD700" }}>
          🔋 {batteryLevel}%
        </div>
        <div style={{ width: 240, height: 130, backgroundColor: "#222233", borderTop: "6px solid #FFD700", borderRadius: "8px 8px 0 0", position: "relative" }}>
          <div style={{ position: "absolute", top: 15, left: 85, width: 70, height: 45, backgroundColor: "#333", borderRadius: 4 }} />
        </div>
        <div style={{ position: "absolute", bottom: -20, left: 80, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontSize: 16, marginBottom: 4 }}>{batteryLevel === 0 ? "🕸️" : "💻"}</div>
          <div style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: "#FFF", transform: batteryLevel === 0 ? "translateY(12px)" : "none" }} />
          <div style={{ width: 6, height: 50, backgroundColor: "#FFF" }} />
        </div>
        {batteryLevel === 0 && (
          <div style={{ position: "absolute", bottom: 20, left: 130, fontSize: 18, color: "#888", fontWeight: "900" }}>
            Zzz...
          </div>
        )}
      </div>

      {/* --- 3. OBSESIÓN (Derecha - Imparable) --- */}
      <div style={{ position: "absolute", top: 1400, left: 740 }}>
        <div style={{
          position: "absolute",
          bottom: 130,
          left: 65,
          width: 110,
          height: cashHeight,
          backgroundColor: "#27ae60",
          border: "3px solid #2ecc71",
          borderRadius: "8px 8px 0 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 22,
          fontWeight: "900",
          color: "#FFF",
          boxShadow: "0 0 25px #2ecc71"
        }}>
          💰
        </div>
        <div style={{ width: 240, height: 130, backgroundColor: "#222233", borderTop: "6px solid #05D9E8", borderRadius: "8px 8px 0 0", position: "relative" }}>
          <div style={{ position: "absolute", top: 15, left: 85, width: 70, height: 45, backgroundColor: "#05D9E8", borderRadius: 4, boxShadow: "0 0 10px #05D9E8" }} />
        </div>
        <div style={{ position: "absolute", bottom: -20, left: 80, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontSize: 16, color: "#05D9E8", fontWeight: "900", marginBottom: 4 }}>⚡</div>
          <div style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: "#FFF" }} />
          <div style={{ width: 6, height: 50, backgroundColor: "#FFF" }} />
        </div>
      </div>

      {/* --- BARRA DE PROGRESO INFERIOR --- */}
      <div style={{ position: "absolute", bottom: 50, left: 90, width: 900, height: 14, backgroundColor: "#1a1a26", borderRadius: 7, overflow: "hidden", border: "2px solid #2a2a3a" }}>
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
