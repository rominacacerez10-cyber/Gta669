import { AbsoluteFill, Composition, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

const ComparisonVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- ANIMACIONES Y TRAYECTORIAS (500 frames / ~16.5s) ---
  // Altura del dinero de Obsesión (crece de forma exponencial)
  const obsessionMoneyHeight = interpolate(frame, [0, 100, 300, 500], [10, 80, 280, 520], { extrapolateRight: "clamp" });
  
  // Batería de Motivación (baja de 100% a 0%)
  const motivationBattery = Math.floor(interpolate(frame, [0, 250, 350], [100, 15, 0], { extrapolateRight: "clamp" }));

  // Posición y estados de Ego (se relaja y cae hacia atrás)
  const egoRecline = interpolate(frame, [100, 180], [0, 25], { extrapolateRight: "clamp" });

  // Progreso global de las gráficas superiores
  const graphProgress = interpolate(frame, [0, 500], [0, 100], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      backgroundColor: "#0B0B14",
      width: 1080,
      height: 1920,
      fontFamily: "Arial, sans-serif",
      color: "#FFF",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "60px 40px",
      overflow: "hidden",
    }}>
      
      {/* --- CABECERA PRINCIPAL --- */}
      <h1 style={{ fontSize: 52, fontWeight: "900", color: "#FFF", textAlign: "center", letterSpacing: "2px", marginBottom: 10 }}>
        EGO <span style={{ color: "#555" }}>VS</span> MOTIVACIÓN <span style={{ color: "#555" }}>VS</span> OBSESIÓN
      </h1>
      <div style={{ width: "200px", height: "4px", backgroundColor: "#FF2A6D", marginBottom: 40, boxShadow: "0 0 15px #FF2A6D" }} />

      {/* --- ZONA 1: MONITORES / GRÁFICAS SUPERIORES --- */}
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "20px", marginBottom: 70 }}>
        
        {/* Monitor Ego */}
        <div style={{ flex: 1, backgroundColor: "#141422", borderRadius: 16, padding: "20px 10px", border: "2px solid #FF2A6D", textAlign: "center" }}>
          <span style={{ fontSize: 20, fontWeight: "900", color: "#FF2A6D" }}>EGO</span>
          <div style={{ height: "90px", marginTop: 15, position: "relative", borderBottom: "2px solid #333", borderLeft: "2px solid #333" }}>
            {/* Línea simulada de gráfico que sube y cae */}
            <svg width="100%" height="100%" style={{ position: "absolute", left: 0, bottom: 0 }}>
              <path d={`M 0 70 Q 50 10 100 85`} fill="none" stroke="#FF2A6D" strokeWidth="4" />
            </svg>
          </div>
        </div>

        {/* Monitor Motivación */}
        <div style={{ flex: 1, backgroundColor: "#141422", borderRadius: 16, padding: "20px 10px", border: "2px solid #FFD700", textAlign: "center" }}>
          <span style={{ fontSize: 20, fontWeight: "900", color: "#FFD700" }}>MOTIVACIÓN</span>
          <div style={{ height: "90px", marginTop: 15, position: "relative", borderBottom: "2px solid #333", borderLeft: "2px solid #333" }}>
            <svg width="100%" height="100%" style={{ position: "absolute", left: 0, bottom: 0 }}>
              <path d={`M 0 60 Q 50 30 100 90`} fill="none" stroke="#FFD700" strokeWidth="4" />
            </svg>
          </div>
        </div>

        {/* Monitor Obsesión */}
        <div style={{ flex: 1, backgroundColor: "#141422", borderRadius: 16, padding: "20px 10px", border: "2px solid #05D9E8", textAlign: "center" }}>
          <span style={{ fontSize: 20, fontWeight: "900", color: "#05D9E8" }}>OBSESIÓN</span>
          <div style={{ height: "90px", marginTop: 15, position: "relative", borderBottom: "2px solid #333", borderLeft: "2px solid #333" }}>
            <svg width="100%" height="100%" style={{ position: "absolute", left: 0, bottom: 0 }}>
              <path d={`M 0 85 Q 50 50 100 10`} fill="none" stroke="#05D9E8" strokeWidth="4" />
            </svg>
          </div>
        </div>

      </div>

      {/* --- ZONA 2: LA OFICINA / ESTACIONES DE TRABAJO --- */}
      <div style={{ flex: 1, width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "90px", paddingBottom: "100px" }}>
        
        {/* --- PERSONAJE 1: EGO --- */}
        <div style={{ display: "flex", alignItems: "flex-end", position: "relative", transform: `rotate(${egoRecline}deg)`, transformOrigin: "bottom left", transition: "transform 0.2s" }}>
          {/* Escritorio y PC */}
          <div style={{ width: "220px", height: "140px", backgroundColor: "#1C1C2D", borderTop: "6px solid #FF2A6D", borderRadius: "8px 8px 0 0", position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "15px" }}>
            <div style={{ width: "70px", height: "45px", backgroundColor: "#05D9E8", borderRadius: 4, boxShadow: "0 0 10px #05D9E8" }} />
          </div>
          {/* Silla y Stickman Arrogante */}
          <div style={{ marginLeft: "-140px", marginBottom: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 22, color: "#FF2A6D", fontWeight: "900", marginBottom: 5 }}>¡Genio! 😎</div>
            <div style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "#FFF", border: "3px solid #333" }} />
            <div style={{ width: "6px", height: "55px", backgroundColor: "#FFF" }} />
          </div>
          {/* Dinero desperdiciado en el piso */}
          {frame > 120 && (
            <div style={{ position: "absolute", bottom: -20, left: 350, backgroundColor: "#2ecc71", padding: "8px 16px", borderRadius: 6, fontWeight: "900", color: "#000", fontSize: 18, boxShadow: "0 0 15px #2ecc71" }}>
              💸 Gastado
            </div>
          )}
        </div>

        {/* --- PERSONAJE 2: MOTIVACIÓN --- */}
        <div style={{ display: "flex", alignItems: "flex-end", position: "relative", opacity: motivationBattery === 0 ? 0.4 : 1 }}>
          {/* Barra de batería flotante */}
          <div style={{ position: "absolute", top: -50, left: 50, backgroundColor: "#111", border: "2px solid #FFD700", padding: "4px 12px", borderRadius: 8, fontSize: 18, fontWeight: "900", color: "#FFD700" }}>
            🔋 {motivationBattery}%
          </div>
          {/* Escritorio y PC apagada */}
          <div style={{ width: "220px", height: "140px", backgroundColor: "#1C1C2D", borderTop: "6px solid #FFD700", borderRadius: "8px 8px 0 0", position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "15px" }}>
            <div style={{ width: "70px", height: "45px", backgroundColor: "#333", borderRadius: 4 }} />
          </div>
          {/* Stickman Cansado / Agotado */}
          <div style={{ marginLeft: "-140px", marginBottom: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: "22px" }}>{motivationBattery === 0 ? "🕸️💤" : "💻💦"}</div>
            <div style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "#FFF", border: "3px solid #333", transform: motivationBattery === 0 ? "translateY(15px)" : "none" }} />
            <div style={{ width: "6px", height: "55px", backgroundColor: "#FFF" }} />
          </div>
          {motivationBattery === 0 && (
            <div style={{ position: "absolute", bottom: 10, left: 260, fontSize: 24, fontWeight: "900", color: "#888" }}>
              Zzz... (Abandonó)
            </div>
          )}
        </div>

        {/* --- PERSONAJE 3: OBSESIÓN (IMPARABLE) --- */}
        <div style={{ display: "flex", alignItems: "flex-end", position: "relative" }}>
          {/* Escritorio y torre masiva de dinero que crece */}
          <div style={{ width: "220px", height: "140px", backgroundColor: "#1C1C2D", borderTop: "6px solid #05D9E8", borderRadius: "8px 8px 0 0", position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "15px" }}>
            <div style={{ width: "70px", height: "45px", backgroundColor: "#05D9E8", borderRadius: 4, boxShadow: "0 0 15px #05D9E8" }} />
            {/* Torre de dinero apilada */}
            <div style={{
              position: "absolute",
              bottom: "140px",
              width: "110px",
              height: `${obsessionMoneyHeight}px`,
              backgroundColor: "#27ae60",
              border: "3px solid #2ecc71",
              borderRadius: "8px 8px 0 0",
              boxShadow: "0 0 25px #2ecc71",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 22,
              fontWeight: "900",
              color: "#FFF"
            }}>
              💰 MÁXIMO
            </div>
          </div>
          {/* Stickman Trabajando sin parar */}
          <div style={{ marginLeft: "-140px", marginBottom: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 22, color: "#05D9E8", fontWeight: "900", marginBottom: 5 }}>⚡ IMPARABLE</div>
            <div style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "#FFF", border: "3px solid #333" }} />
            <div style={{ width: "6px", height: "55px", backgroundColor: "#FFF" }} />
          </div>
        </div>

      </div>

      {/* --- BARRA DE PROGRESO INFERIOR --- */}
      <div style={{ width: "100%", backgroundColor: "#141422", height: 16, borderRadius: 8, overflow: "hidden", border: "2px solid #222" }}>
        <div style={{ width: `${graphProgress}%`, height: "100%", backgroundColor: "#05D9E8", boxShadow: "0 0 15px #05D9E8" }} />
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
