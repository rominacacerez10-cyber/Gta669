import { AbsoluteFill, Composition, interpolate, useCurrentFrame } from "remotion";

const VectorAnimationVideo = () => {
  const frame = useCurrentFrame();

  // --- ANIMACIONES MATEMÁTICAS PRECISAS (500 frames / ~16.5s) ---
  // 1. Torre de dinero de Obsesión (crece de forma exponencial de 0 a 480px)
  const cashHeight = interpolate(frame, [0, 100, 300, 500], [0, 80, 260, 480], { extrapolateRight: "clamp" });

  // 2. Batería de Motivación (baja de 100% a 0%)
  const battery = Math.floor(interpolate(frame, [0, 200, 350], [100, 15, 0], { extrapolateRight: "clamp" }));

  // 3. Inclinación y actitud del Ego (se reclina confiado y luego decae)
  const egoLean = interpolate(frame, [80, 200, 400], [0, 25, 40], { extrapolateRight: "clamp" });

  // 4. Progreso global de la barra inferior
  const progress = interpolate(frame, [0, 500], [0, 100], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#06060A", width: 1080, height: 1920, fontFamily: "Arial, sans-serif", color: "#FFF", overflow: "hidden" }}>
      
      {/* --- TÍTULO PRINCIPAL NEON --- */}
      <div style={{ position: "absolute", top: 60, width: "100%", textAlign: "center" }}>
        <h1 style={{ fontSize: 50, fontWeight: "900", letterSpacing: "3px", margin: 0, textShadow: "0 0 20px rgba(255,255,255,0.3)" }}>
          EGO <span style={{ color: "#444" }}>VS</span> MOTIVACIÓN <span style={{ color: "#444" }}>VS</span> OBSESIÓN
        </h1>
        <div style={{ width: "200px", height: "4px", backgroundColor: "#FF2A6D", margin: "15px auto 0", boxShadow: "0 0 20px #FF2A6D" }} />
      </div>

      {/* --- GRÁFICAS SUPERIORES (MONITORES SVG) --- */}
      {/* 1. Ego Chart */}
      <div style={{ position: "absolute", top: 180, left: 60, width: 290, height: 150, backgroundColor: "#11111A", borderRadius: 16, border: "2px solid #FF2A6D", padding: 15 }}>
        <div style={{ fontSize: 16, fontWeight: "900", color: "#FF2A6D", marginBottom: 5 }}>EGO (Pico y caída)</div>
        <svg viewBox="0 0 100 40" style={{ width: "100%", height: 85 }}>
          <path d="M 0 35 Q 35 5 70 30 T 100 38" fill="none" stroke="#FF2A6D" strokeWidth="4" />
        </svg>
      </div>

      {/* 2. Motivación Chart */}
      <div style={{ position: "absolute", top: 180, left: 395, width: 290, height: 150, backgroundColor: "#11111A", borderRadius: 16, border: "2px solid #FFD700", padding: 15 }}>
        <div style={{ fontSize: 16, fontWeight: "900", color: "#FFD700", marginBottom: 5 }}>MOTIVACIÓN (Inestable)</div>
        <svg viewBox="0 0 100 40" style={{ width: "100%", height: 85 }}>
          <path d="M 0 25 Q 25 15 50 30 T 100 38" fill="none" stroke="#FFD700" strokeWidth="4" />
        </svg>
      </div>

      {/* 3. Obsesión Chart */}
      <div style={{ position: "absolute", top: 180, left: 730, width: 290, height: 150, backgroundColor: "#11111A", borderRadius: 16, border: "2px solid #05D9E8", padding: 15 }}>
        <div style={{ fontSize: 16, fontWeight: "900", color: "#05D9E8", marginBottom: 5 }}>OBSESIÓN (Constante)</div>
        <svg viewBox="0 0 100 40" style={{ width: "100%", height: 85 }}>
          <path d="M 0 38 Q 50 25 100 4" fill="none" stroke="#05D9E8" strokeWidth="4" />
        </svg>
      </div>

      {/* --- ESTACIONES DE TRABAJO (PERSONAJES VECTORIALES SVG) --- */}

      {/* --- ESTACIÓN 1: EGO --- */}
      <div style={{ position: "absolute", top: 480, left: 80, width: 920, height: 350, backgroundColor: "#0D0D14", borderRadius: 24, border: "2px solid #FF2A6D", display: "flex", alignItems: "center", padding: "0 50px", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: "900", color: "#FF2A6D", marginBottom: 10 }}>1. EGO</div>
          <div style={{ fontSize: 20, color: "#AAA", maxWidth: "450px" }}>Empieza creyéndose el rey, presume demasiado y termina perdiendo el control.</div>
          {frame > 100 && (
            <div style={{ marginTop: 15, backgroundColor: "#e74c3c", color: "#FFF", padding: "8px 18px", borderRadius: 8, display: "inline-block", fontWeight: "900", fontSize: 16, boxShadow: "0 0 15px rgba(231,76,60,0.5)" }}>
              💸 Dinero Quemado en Lujos
            </div>
          )}
        </div>
        {/* Personaje Vectorial SVG (Ego) */}
        <svg width="240" height="250" viewBox="0 0 200 200">
          {/* Escritorio */}
          <rect x="20" y="130" width="160" height="15" fill="#1C1C2E" rx="4" />
          <path d="M 30 145 L 40 190 M 170 145 L 160 190" stroke="#444" strokeWidth="6" />
          {/* Monitor */}
          <rect x="70" y="80" width="60" height="40" fill="#05D9E8" rx="4" />
          <rect x="95" y="120" width="10" height="10" fill="#333" />
          {/* Monigote Reclinado */}
          <g transform={`rotate(${egoLean}, 100, 110)`}>
            {/* Cabeza con Gafas de Sol */}
            <circle cx="100" cy="55" r="14" fill="#FFF" />
            <rect x="90" y="52" width="20" height="6" fill="#000" rx="2" />
            {/* Cuerpo */}
            <line x1="100" y1="69" x2="100" y2="120" stroke="#FFF" strokeWidth="6" strokeLinecap="round" />
            {/* Brazos cruzados */}
            <line x1="75" y1="90" x2="125" y2="90" stroke="#FFF" strokeWidth="5" strokeLinecap="round" />
            {/* Piernas sentadas */}
            <line x1="100" y1="120" x2="130" y2="150" stroke="#FFF" strokeWidth="5" strokeLinecap="round" />
            <line x1="130" y1="150" x2="145" y2="150" stroke="#FFF" strokeWidth="5" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      {/* --- ESTACIÓN 2: MOTIVACIÓN --- */}
      <div style={{ position: "absolute", top: 880, left: 80, width: 920, height: 350, backgroundColor: "#0D0D14", borderRadius: 24, border: "2px solid #FFD700", display: "flex", alignItems: "center", padding: "0 50px", justifyContent: "space-between", opacity: battery === 0 ? 0.45 : 1 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: 10 }}>
            <span style={{ fontSize: 28, fontWeight: "900", color: "#FFD700" }}>2. MOTIVACIÓN</span>
            <span style={{ backgroundColor: "#1A1A26", border: "1px solid #FFD700", padding: "4px 12px", borderRadius: 8, fontSize: 16, fontWeight: "900", color: "#FFD700" }}>🔋 {battery}%</span>
          </div>
          <div style={{ fontSize: 20, color: "#AAA", maxWidth: "450px" }}>{battery === 0 ? "Se quedó sin energía, le salieron telarañas y abandonó." : "Depende puramente de cómo se siente cada día."}</div>
        </div>
        {/* Personaje Vectorial SVG (Motivación Cansada) */}
        <svg width="240" height="250" viewBox="0 0 200 200">
          <rect x="20" y="130" width="160" height="15" fill="#1C1C2E" rx="4" />
          <path d="M 30 145 L 40 190 M 170 145 L 160 190" stroke="#444" strokeWidth="6" />
          <rect x="70" y="80" width="60" height="40" fill={battery === 0 ? "#1A1A1A" : "#333"} rx="4" />
          <rect x="95" y="120" width="10" height="10" fill="#333" />
          {/* Monigote Slouching */}
          <g transform={battery === 0 ? "translate(0, 20) rotate(15, 100, 120)" : ""}>
            <circle cx="100" cy="65" r="14" fill="#FFF" />
            <line x1="100" y1="79" x2="100" y2="120" stroke="#FFF" strokeWidth="6" strokeLinecap="round" />
            <line x1="80" y1="110" x2="120" y2="110" stroke="#FFF" strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="120" x2="125" y2="150" stroke="#FFF" strokeWidth="5" strokeLinecap="round" />
            {battery === 0 && <text x="120" y="60" fontSize="22">🕸️</text>}
          </g>
        </svg>
      </div>

      {/* --- ESTACIÓN 3: OBSESIÓN --- */}
      <div style={{ position: "absolute", top: 1280, left: 80, width: 920, height: 350, backgroundColor: "#0D0D14", borderRadius: 24, border: "2px solid #05D9E8", display: "flex", alignItems: "center", padding: "0 50px", justifyContent: "space-between", position: "relative" }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: "900", color: "#05D9E8", marginBottom: 10 }}>3. OBSESIÓN</div>
          <div style={{ fontSize: 20, color: "#AAA", maxWidth: "450px" }}>No necesita ganas ni inspiración. Trabaja en automático y construye un imperio imparable.</div>
        </div>
        
        {/* Torre de Dinero Creciendo */}
        <div style={{ position: "relative", display: "flex", alignItems: "flex-end" }}>
          <div style={{
            position: "absolute",
            bottom: "135px",
            left: "-110px",
            width: "90px",
            height: `${cashHeight}px`,
            backgroundColor: "#27ae60",
            border: "3px solid #2ecc71",
            borderRadius: "6px 6px 0 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            fontWeight: "900",
            boxShadow: "0 0 25px #27ae60"
          }}>
            💰
          </div>

          {/* Personaje Vectorial SVG (Obsesión Trabajando Sin Parar) */}
          <svg width="240" height="250" viewBox="0 0 200 200">
            <rect x="20" y="130" width="160" height="15" fill="#1C1C2E" rx="4" />
            <path d="M 30 145 L 40 190 M 170 145 L 160 190" stroke="#444" strokeWidth="6" />
            <rect x="70" y="80" width="60" height="40" fill="#05D9E8" rx="4" />
            <rect x="95" y="120" width="10" height="10" fill="#333" />
            {/* Monigote Inclinado al Teclado */}
            <circle cx="90" cy="70" r="14" fill="#FFF" />
            <line x1="95" y1="84" x2="100" y2="120" stroke="#FFF" strokeWidth="6" strokeLinecap="round" />
            <line x1="80" y1="105" x2="115" y2="110" stroke="#FFF" strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="120" x2="85" y2="150" stroke="#FFF" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* --- BARRA DE PROGRESO INFERIOR --- */}
      <div style={{ position: "absolute", bottom: 60, left: 80, width: 920, height: 16, backgroundColor: "#11111A", borderRadius: 8, overflow: "hidden", border: "2px solid #222" }}>
        <div style={{ width: `${progress}%`, height: "100%", backgroundColor: "#05D9E8", boxShadow: "0 0 15px #05D9E8" }} />
      </div>

    </AbsoluteFill>
  );
};

export const Root = () => {
  return (
    <Composition
      id="GTAVI-HypeVideo"
      component={VectorAnimationVideo}
      durationInFrames={500}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
