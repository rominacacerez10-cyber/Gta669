import { AbsoluteFill, Composition, interpolate, useCurrentFrame } from "remotion";

const GTAVIHypeVideo = () => {
  const frame = useCurrentFrame();

  // Animación de zoom y opacidad fluida basada en el frame actual (0 a 900)
  const opacity = interpolate(frame, [0, 30, 870, 900], [0, 1, 1, 0]);
  const scale = interpolate(frame, [0, 900], [1, 1.1]);

  return (
    <AbsoluteFill style={{
      backgroundColor: "#0B0B14",
      width: "1920px",
      height: "1080px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontFamily: "Arial, sans-serif",
      opacity: opacity,
      transform: `scale(${scale})`,
    }}>
      {/* Contenido visual directo que Chromium renderizará al 100% */}
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: 32, color: "#05D9E8", letterSpacing: "4px", fontWeight: "bold", margin: 0 }}>
          13 AÑOS DE ESPERA...
        </p>
        <h1 style={{ fontSize: 130, color: "#FF2A6D", margin: "20px 0", textShadow: "6px 6px #05D9E8", fontWeight: "900" }}>
          GTA VI
        </h1>
        <div style={{ background: "#FF2A6D", padding: "15px 40px", borderRadius: 10, display: "inline-block", marginTop: 10 }}>
          <span style={{ fontSize: 36, color: "#FFF", fontWeight: "bold", textTransform: "uppercase" }}>
            Leonida / Vice City • 19 de Noviembre de 2026
          </span>
        </div>
      </div>
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
