import { AbsoluteFill, Composition, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const GTAVIHypeVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- ESCENA 1: El Legado y la Espera (0:00 - 0:07 / Frames 0 - 210) ---
  const isScene1 = frame < 210;
  const scaleScene1 = spring({ frame, fps, config: { damping: 12 } });
  const currentYear = Math.floor(interpolate(frame, [0, 210], [2013, 2026], { extrapolateRight: "clamp" }));

  // --- ESCENA 2: Leonida y el Mundo Abierto (0:07 - 0:15 / Frames 210 - 450) ---
  const isScene2 = frame >= 210 && frame < 450;
  const scene2Frame = frame - 210;
  const zoomScene2 = interpolate(scene2Frame, [0, 240], [1.0, 1.15]);

  // --- ESCENA 3: Innovación y Protagonistas (0:15 - 0:23 / Frames 450 - 690) ---
  const isScene3 = frame >= 450 && frame < 690;

  // --- ESCENA 4: Impacto Cultural y Cierre (0:23 - 0:30 / Frames 690 - 900) ---
  const isScene4 = frame >= 690;
  const scene4Frame = frame - 690;
  const logoScale = spring({ frame: scene4Frame, fps, config: { damping: 10 } });

  return (
    <AbsoluteFill style={{
      backgroundColor: "#0B0B14",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      color: "#FFFFFF",
      flexDirection: "column",
      overflow: "hidden",
    }}>
      
      {/* ESCENA 1 */}
      {isScene1 && (
        <div style={{ textAlign: "center", transform: `scale(${scaleScene1})` }}>
          <p style={{ fontSize: 32, color: "#05D9E8", letterSpacing: "2px", margin: 0, fontWeight: "bold" }}>13 AÑOS DE ESPERA...</p>
          <h1 style={{ fontSize: 120, color: "#FF2A6D", margin: "10px 0", textShadow: "4px 4px #05D9E8", fontWeight: "900" }}>
            {currentYear}
          </h1>
          <p style={{ fontSize: 40, textTransform: "uppercase", margin: 0, fontWeight: "bold" }}>El Rey Está De Regreso</p>
        </div>
      )}

      {/* ESCENA 2 */}
      {isScene2 && (
        <div style={{ textAlign: "center", transform: `scale(${zoomScene2})` }}>
          <div style={{
            position: "absolute", top: 40, left: "50%", transform: "translateX(-50%)", background: "#FF2A6D", padding: "10px 30px",
            fontSize: 24, borderRadius: 8, textTransform: "uppercase", fontWeight: "bold"
          }}>
            🔴 Leonida / Vice City
          </div>
          <h1 style={{ fontSize: 75, color: "#05D9E8", textShadow: "0 0 20px rgba(5,217,232,0.8)", fontWeight: "900" }}>
            MÁS VIVA QUE NUNCA
          </h1>
          <p style={{ fontSize: 28, color: "#FFF", opacity: 0.9, marginTop: 15, fontWeight: "bold" }}>
            Redes sociales, caos y libertad absoluta
          </p>
        </div>
      )}

      {/* ESCENA 3 */}
      {isScene3 && (
        <AbsoluteFill style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 1, background: "linear-gradient(135deg, rgba(255,42,109,0.3), #0B0B14)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h2 style={{ fontSize: 60, color: "#FF2A6D", fontWeight: "900" }}>LUCIA</h2>
          </div>
          <div style={{ flex: 1, background: "linear-gradient(225deg, rgba(5,217,232,0.3), #0B0B14)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h2 style={{ fontSize: 60, color: "#05D9E8", fontWeight: "900" }}>JASON</h2>
          </div>
          <div style={{ position: "absolute", bottom: 60, width: "100%", textAlign: "center" }}>
            <span style={{ background: "#111", padding: "12px 30px", border: "2px solid #FF2A6D", fontSize: 26, borderRadius: 6, display: "inline-block", fontWeight: "bold" }}>
              Físicas de Nueva Generación & 6 Estrellas
            </span>
          </div>
        </AbsoluteFill>
      )}

      {/* ESCENA 4 */}
      {isScene4 && (
        <div style={{ textAlign: "center", transform: `scale(${logoScale})` }}>
          <h2 style={{ fontSize: 40, color: "#05D9E8", letterSpacing: "4px", margin: 0, fontWeight: "bold" }}>EL FENÓMENO DEL SIGLO</h2>
          <h1 style={{ fontSize: 110, color: "#FF2A6D", textShadow: "0 0 40px #FF2A6D", margin: "20px 0", fontWeight: "900" }}>
            GTA VI
          </h1>
          <p style={{ fontSize: 32, background: "#FFF", color: "#0B0B14", padding: "10px 30px", borderRadius: 4, fontWeight: "900", display: "inline-block", margin: 0 }}>
            19 DE NOVIEMBRE DE 2026
          </p>
        </div>
      )}

    </AbsoluteFill>
  );
};

export const Root = () => {
  return (
    <Composition
      id="GTAVI-HypeVideo"
      component={GTAVIHypeVideo}
      durationInFrames={900}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
