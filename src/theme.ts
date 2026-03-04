import { createTheme } from "@mui/material/styles";

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
});