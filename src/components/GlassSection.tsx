import React from "react";
import { Box } from "@mui/material";

type Props = React.PropsWithChildren<{
  title?: string;
}>;

export function GlassSection({ title, children }: Props) {
  return (
    <Box
      sx={{
        borderRadius: 4,
        px: { xs: 2, sm: 3 },
        py: { xs: 2, sm: 3 },
        background: "rgba(10, 10, 12, 0.40)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
      }}
    >
      {title ? (
        <Box
          component="h2"
          style={{
            margin: 0,
            marginBottom: 12,
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: 0.2,
          }}
        >
          {title}
        </Box>
      ) : null}

      {children}
    </Box>
  );
}