import React from "react";
import { styled } from "@mui/system";

const Root = styled("div")({
  minHeight: "100vh",
  width: "100%",
  background: `
    radial-gradient(910px 650px at 80% 25%, rgba(255, 140, 0, 0.28), transparent 60%),
    radial-gradient(1170px 845px at 15% 50%, rgba(255, 120, 0, 0.22), transparent 65%),
    radial-gradient(780px 650px at 70% 85%, rgba(255, 90, 0, 0.19), transparent 70%),
    linear-gradient(135deg, #0b0708 0%, #171012 35%, #0c0708 100%)
  `,
});

const Content = styled("div")({
  minHeight: "100vh",
  width: "100%",
});

export function BaseBackground({ children }: React.PropsWithChildren) {
  return (
    <Root>
      <Content>{children}</Content>
    </Root>
  );
}