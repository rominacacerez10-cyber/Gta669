import { AbsoluteFill, Composition, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

// --- ESCENA 1 (0 a 7 segundos / Frames 0 a 210) ---
const Scene1 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 12 } });
  const currentYear = Math.floor(interpolate(frame, [0, 210], [2013, 2026], { extrapolateRight: "clamp" }));

  return (
    <AbsoluteFill style={{ backgroundColor: "#0B0B14", width: "1920px", height: "1080px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", fontFamily: "Arial, sans-serif" }}>
      <div style={{ textAlign: "center", transform: `scale(${scale})` }}>
        <p style={{ fontSize: 32, color: "#05D9E8", letterSpacing: "2px", fontWeight: "bold", margin: 0 }}>13 AÑOS DE ESPERA...</p>
        <h1 style={{ fontSize: 120, color: "#FF2A6D", margin: "10px 0", textShadow: "4px 4px #05D9E8", fontWeight: "900" }}>
          {currentYear}
        </h1>
        <p style={{ fontSize: 40, textTransform: "uppercase", color: "#FFF", fontWeight: "bold", margin: 0 }}>El Rey Está De Regreso</p>
      </div>
    </AbsoluteFill>
  );
};

// --- ESCENA 2 (7 a 15 segundos / Frames 210 a 450) ---
const Scene2 = () => {
  const frame = useCurrentFrame();
  const zoom = interpolate(frame, [0, 240], [1.0, 1.15]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#0B0B14", width: "1920px", height: "1080px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", fontFamily: "Arial, sans-serif" }}>
      <div style={{ textAlign: "center", transform: `scale(${zoom})`, position: "relative", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <div style={{ position: "absolute", top: "60px", background: "#FF2A6D", padding: "12px 35px", fontSize: 24, borderRadius: 8, color: "#FFF", fontWeight: "bold", textTransform: "uppercase" }}>
          🔴 Leonida / Vice City
        </div>
        <h1 style={{ fontSize: 75, color: "#05D9E8", textShadow: "0 0 20px rgba(5,217,232,0.8)", fontWeight: "900", margin: 0 }}>
          MÁS VIVA QUE NUNCA
        </h1>
        <p style={{ fontSize: 28, color: "#FFF", opacity: 0.9, marginTop: 15, fontWeight: "bold" }}>
          Redes sociales, caos y libertad absoluta
        </p>
      </div>
    </AbsoluteFill>
  );
};

// --- ESCENA 3 (15 a 23 segundos / Frames 450 a 690) ---
const Scene3 = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0B0B14", width: "1920px", height: "1080px", display: "flex", flexDirection: "row", fontFamily: "Arial, sans-serif", position: "relative" }}>
      <div style={{ flex: 1, background: "linear-gradient(135deg, rgba(255,42,109,0.3), #0B0B14)", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <h2 style={{ fontSize: 60, color: "#FF2A6D", fontWeight: "900" }}>LUCIA</h2>
      </div>
      <div style={{ flex: 1, background: "linear-gradient(225deg, rgba(5,217,232,0.3), #0B0B14)", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <h2 style={{ fontSize: 60, color: "#05D9E8", fontWeight: "900" }}>JASON</h2>
      </div>
      <div style={{ position: "absolute", bottom: "60px", width: "100%", textAlign: "center" }}>
        <span style={{ background: "#111", padding: "12px 30px", border: "2px solid #FF2A6D", fontSize: 26, borderRadius: 6, color: "#FFF", fontWeight: "bold", display: "inline-block" }}>
          Físicas de Nueva Generación & 6 Estrellas
        </span>
      </div>
    </AbsoluteFill>
  );
};

// --- ESCENA 4 (23 a 30 segundos / Frames 690 a 900) ---
const Scene4 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const logoScale = spring({ frame, fps, config: { damping: 10 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0B0B14", width: "1920px", height: "1080px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", fontFamily: "Arial, sans-serif" }}>
      <div style={{ textAlign: "center", transform: `scale(${logoScale})` }}>
        <h2 style={{ fontSize: 40, color: "#05D9E8", letterSpacing: "4px", fontWeight: "bold", margin: 0 }}>EL FENÓMENO DEL SIGLO</h2>
        <h1 style={{ fontSize: 110, color: "#FF2A6D", textShadow: "0 0 40px #FF2A6D", margin: "20px 0", fontWeight: "900" }}>
          GTA VI
        </h1>
        <p style={{ fontSize: 32, background: "#FFF", color: "#0B0B14", padding: "10px 30px", borderRadius: 4, fontWeight: "900", display: "inline-block", margin: 0 }}>
          19 DE NOVIEMBRE DE 2026
        </p>
      </div>
    </AbsoluteFill>
  );
};

// Componente Principal
const GTAVIHypeVideo = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0B0B14", width: "1920px", height: "1080px" }}>
      <Sequence from={0} durationInFrames={210}>
        <Scene1 />
      </Sequence>
      <Sequence from={210} durationInFrames={240}>
        <Scene2 />
      </Sequence>
      <Sequence from={450} durationInFrames={240}>
        <Scene3 />
      </Sequence>
      <Sequence from={690} durationInFrames={210}>
        <Scene4 />
      </Sequence>
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
