import { Stack, IconButton, Tooltip } from "@mui/material";

import { ReactComponent as TelegramIcon } from "../assets/icons/TelegramIcon.svg";
import { ReactComponent as GitHubIcon } from "../assets/icons/GitHubIcon.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icons/LinkedInIcon.svg";
import { ReactComponent as MailIcon } from "../assets/icons/MailIcon.svg";

type Props = {
  telegram: string;  // username без @
  github: string;    // username
  linkedin: string;  // slug
  email: string;
};

const iconStyle: React.CSSProperties = { width: 28, height: 28 };

export function SocialLinks({ telegram, github, linkedin, email }: Props) {
  return (
    <Stack direction="row" spacing={1}>
      <Tooltip title="Telegram">
        <IconButton
          component="a"
          href={`https://t.me/${telegram}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <TelegramIcon style={iconStyle} />
        </IconButton>
      </Tooltip>

      <Tooltip title="GitHub">
        <IconButton
          component="a"
          href={`https://github.com/${github}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon style={iconStyle} />
        </IconButton>
      </Tooltip>

      <Tooltip title="LinkedIn">
        <IconButton
          component="a"
          href={`https://www.linkedin.com/in/${linkedin}/`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon style={iconStyle} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Email">
        <IconButton component="a" href={`mailto:${email}`} aria-label="Email">
          <MailIcon style={iconStyle} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}