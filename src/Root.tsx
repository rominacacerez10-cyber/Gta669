import { AbsoluteFill, Composition, interpolate, useCurrentFrame } from "remotion";

const GTAVIHypeVideo = () => {
  const frame = useCurrentFrame();

  // --- CONTROL DE ESCENAS POR FRAMES (30 segundos total / 900 frames) ---
  // Escena 1: 0 - 210 frames (0 a 7s)
  const isScene1 = frame < 210;
  const opacity1 = interpolate(frame, [0, 20, 190, 210], [0, 1, 1, 0]);
  const scale1 = interpolate(frame, [0, 210], [0.95, 1.05]);
  const currentYear = Math.floor(interpolate(frame, [0, 210], [2013, 2026], { extrapolateRight: "clamp" }));

  // Escena 2: 210 - 450 frames (7 a 15s)
  const isScene2 = frame >= 210 && frame < 450;
  const frame2 = frame - 210;
  const opacity2 = interpolate(frame2, [0, 20, 220, 240], [0, 1, 1, 0]);
  const zoom2 = interpolate(frame2, [0, 240], [1.0, 1.15]);

  // Escena 3: 450 - 690 frames (15 a 23s)
  const isScene3 = frame >= 450 && frame < 690;
  const frame3 = frame - 450;
  const opacity3 = interpolate(frame3, [0, 20, 220, 240], [0, 1, 1, 0]);

  // Escena 4: 690 - 900 frames (23 a 30s)
  const isScene4 = frame >= 690;
  const frame4 = frame - 690;
  const opacity4 = interpolate(frame4, [0, 20, 190, 210], [0, 1, 1, 0]);
  const scale4 = interpolate(frame4, [0, 210], [0.9, 1.05]);

  return (
    <AbsoluteFill style={{
      backgroundColor: "#0B0B14",
      width: "1920px",
      height: "1080px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      color: "#FFFFFF",
      overflow: "hidden",
    }}>
      
      {/* --- ESCENA 1: EL LEGADO --- */}
      {isScene1 && (
        <div style={{
          position: "absolute", width: "100%", height: "100%",
          display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",
          opacity: opacity1, transform: `scale(${scale1})`, textAlign: "center"
        }}>
          <p style={{ fontSize: 32, color: "#05D9E8", letterSpacing: "4px", fontWeight: "bold", margin: 0 }}>
            13 AÑOS DE ESPERA...
          </p>
          <h1 style={{ fontSize: 130, color: "#FF2A6D", margin: "15px 0", textShadow: "6px 6px #05D9E8", fontWeight: "900" }}>
            {currentYear}
          </h1>
          <p style={{ fontSize: 40, textTransform: "uppercase", fontWeight: "bold", margin: 0 }}>
            El Rey Está De Regreso
          </p>
        </div>
      )}

      {/* --- ESCENA 2: LEONIDA Y VICE CITY --- */}
      {isScene2 && (
        <div style={{
          position: "absolute", width: "100%", height: "100%",
          display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",
          opacity: opacity2, transform: `scale(${zoom2})`, textAlign: "center"
        }}>
          <div style={{
            position: "absolute", top: "80px", background: "#FF2A6D", padding: "12px 35px",
            fontSize: 24, borderRadius: 8, textTransform: "uppercase", fontWeight: "bold", color: "#FFF"
          }}>
            🔴 Leonida / Vice City
          </div>
          <h1 style={{ fontSize: 80, color: "#05D9E8", textShadow: "0 0 30px rgba(5,217,232,0.8)", fontWeight: "900", margin: 0 }}>
            MÁS VIVA QUE NUNCA
          </h1>
          <p style={{ fontSize: 32, color: "#FFF", opacity: 0.9, marginTop: 20, fontWeight: "bold" }}>
            Redes sociales, caos y libertad absoluta
          </p>
        </div>
      )}

      {/* --- ESCENA 3: PROTAGONISTAS --- */}
      {isScene3 && (
        <div style={{
          position: "absolute", width: "100%", height: "100%",
          display: "flex", flexDirection: "row", opacity: opacity3
        }}>
          <div style={{ flex: 1, background: "linear-gradient(135deg, rgba(255,42,109,0.35), #0B0B14)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h2 style={{ fontSize: 75, color: "#FF2A6D", fontWeight: "900", textShadow: "0 0 20px #FF2A6D" }}>LUCIA</h2>
          </div>
          <div style={{ flex: 1, background: "linear-gradient(225deg, rgba(5,217,232,0.35), #0B0B14)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h2 style={{ fontSize: 75, color: "#05D9E8", fontWeight: "900", textShadow: "0 0 20px #05D9E8" }}>JASON</h2>
          </div>
          <div style={{ position: "absolute", bottom: "70px", width: "100%", textAlign: "center" }}>
            <span style={{ background: "#111", padding: "14px 35px", border: "2px solid #FF2A6D", fontSize: 28, borderRadius: 6, fontWeight: "bold", display: "inline-block" }}>
              Físicas de Nueva Generación & 6 Estrellas
            </span>
          </div>
        </div>
      )}

      {/* --- ESCENA 4: CIERRE Y FECHA --- */}
      {isScene4 && (
        <div style={{
          position: "absolute", width: "100%", height: "100%",
          display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",
          opacity: opacity4, transform: `scale(${scale4})`, textAlign: "center"
        }}>
          <h2 style={{ fontSize: 42, color: "#05D9E8", letterSpacing: "6px", fontWeight: "bold", margin: 0 }}>
            EL FENÓMENO DEL SIGLO
          </h2>
          <h1 style={{ fontSize: 120, color: "#FF2A6D", textShadow: "0 0 50px #FF2A6D", margin: "20px 0", fontWeight: "900" }}>
            GTA VI
          </h1>
          <div style={{ background: "#FFF", color: "#0B0B14", padding: "15px 45px", borderRadius: 6, fontWeight: "900", fontSize: 34 }}>
            19 DE NOVIEMBRE DE 2026
          </div>
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
