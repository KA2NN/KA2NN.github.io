import React from "react";
import { Stack, IconButton } from "@mui/material";

import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

type Props = {
  telegram: string;
  github: string;
  linkedin: string;
  email: string;
};

const ORANGE = "rgba(255, 138, 0, 0.95)";

const iconBtnSx = {
  width: 40,              // было больше
  height: 40,
  p: 0,                   // убираем лишний padding
  borderRadius: 2.5,      // чуть меньше “пузатость”
  color: "rgba(255,255,255,0.95)",

  backgroundColor: "rgba(10, 10, 12, 0.25)",
  border: "1px solid rgba(255, 138, 0, 0.55)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",

  "&:hover": {
    backgroundColor: "rgba(10, 10, 12, 0.38)",
    borderColor: "rgba(255, 138, 0, 0.85)",
  },

  "&:focus-visible": {
    boxShadow: "0 0 0 2px rgba(255, 138, 0, 0.25)",
  },
};

export function SocialLinks({ telegram, github, linkedin, email }: Props) {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        sx={iconBtnSx}
        component="a"
        href={`https://t.me/${telegram}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
      >
        <TelegramIcon fontSize="small" />
      </IconButton>

      <IconButton
        sx={iconBtnSx}
        component="a"
        href={`https://github.com/${github}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GitHubIcon fontSize="small" />
      </IconButton>

      <IconButton
        sx={iconBtnSx}
        component="a"
        href={`https://www.linkedin.com/in/${linkedin}/`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedInIcon fontSize="small" />
      </IconButton>

      <IconButton
        sx={iconBtnSx}
        component="a"
        href={`mailto:${email}`}
        aria-label="Email"
      >
        <MailOutlineIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
}