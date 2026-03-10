import { createTheme } from "@mui/material/styles";

const ORANGE = "#FF8A00";

export const theme = createTheme({
  palette: {
    primary: { main: "#ffffff" },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.7)",
    },
    // text: { primary: "#000", secondary: "rgba(0,0,0,0.7)" }
    divider: "rgba(255,255,255,0.25)",
  },
  typography: {
    fontFamily: "Nunito, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    h3: { fontWeight: 800 },
    h5: { fontWeight: 800 },
  },

  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          // color: "rgba(255, 138, 0, 0.95)",
          backgroundColor: "rgba(10,10,12,0.45)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255,138,0,0.35)",
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
        },
      },
    },
  },
});