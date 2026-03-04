import { Container, Typography, Stack, Chip, Link, Divider } from "@mui/material";
import { profile } from "./data/profile";
import { SocialLinks } from "./components/SocialLinks";

export default function App() {
  const { name, title, about, skills, contacts, experience, projects } = profile;

  return (
    <Container maxWidth="md" sx={{ py: 6 }}> 
      <Stack spacing={2}>
        {/* HERO */}
        <Stack spacing={1}>
          <Typography variant="h3" component="h1">
            {name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
        </Stack>

        {/* SKILLS */}
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {skills.map((s) => (
            <Chip key={s} label={s} />
          ))}
        </Stack>

        <Divider />

        {/* ABOUT */}
        <Typography variant="h5">About</Typography>
        <Stack spacing={1}>
          {about.map((p) => (
            <Typography key={p}>{p}</Typography>
          ))}
        </Stack>

        <Divider />

        {/* EXPERIENCE */}
        <Typography variant="h5">Experience</Typography>
        <Stack spacing={2}>
          {experience.map((item) => (
            <Stack key={`${item.company}-${item.period}`} spacing={0.5}>
              <Typography variant="h6">
                {item.role} — {item.company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.period}
              </Typography>
              <Stack component="ul" sx={{ pl: 3, my: 0 }}>
                {item.bullets.map((b) => (
                  <Typography component="li" key={b}>
                    {b}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>

        <Divider />

        {/* PROJECTS */}
        <Typography variant="h5">Projects</Typography>
        <Stack spacing={2}>
          {projects.map((p) => (
            <Stack key={p.name} spacing={1}>
              <Typography variant="h6">{p.name}</Typography>
              <Typography>{p.description}</Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {p.stack.map((t) => (
                  <Chip key={t} label={t} size="small" />
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>

        <Divider />

        {/* CONTACTS */}
        <Typography variant="h5">Contacts</Typography>
        <SocialLinks
          telegram={profile.contacts.telegram}
          github={profile.contacts.github}
          linkedin={profile.contacts.linkedin}
          email={profile.contacts.email}
        />
      </Stack>
    </Container>
  );
}