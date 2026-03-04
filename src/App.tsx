import { Container, Typography, Stack, Chip, Box, Button } from "@mui/material";
import { profile } from "./data/profile";
import { SocialLinks } from "./components/SocialLinks";
import "./App.css";
import { BaseBackground } from "./components/BaseBackground";
import { GlassSection } from "./components/GlassSection";

export default function App() {
  const { name, title, about, skills, contacts, experience, projects } = profile;

  return (
    <BaseBackground>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack spacing={2}>
          {/* HERO */}
          <GlassSection>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems="center">
              <Box
                component="img"
                src="/profile.png"
                alt={`${name} profile`}
                sx={{
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />

              <Stack spacing={0}>
                <Typography variant="h3" component="h1">
                  Hello
                </Typography>
                <Typography variant="h3" component="h2">
                  I am {name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {title}
                </Typography>


              </Stack>
            </Stack>
          </GlassSection>

          {/* SKILLS */}
          <GlassSection title="Skills">
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {skills.map((s) => (
                <Chip key={s} label={s} />
              ))}
            </Stack>
          </GlassSection>

          {/* ABOUT */}
          <GlassSection title="About">
            <Stack spacing={1}>
              {about.map((p) => (
                <Typography key={p}>{p}</Typography>
              ))}
            </Stack>
          </GlassSection>

          {/* EXPERIENCE */}
          <GlassSection title="Experience">
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
          </GlassSection>

          {/* PROJECTS */}
          <GlassSection title="Projects">
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
          </GlassSection>

          {/* CONTACTS */}
          <GlassSection title="Contacts">
            <Stack direction="row" spacing={1.5} sx={{ mt: 2 }} alignItems="center">
              <SocialLinks
                telegram={contacts.telegram}
                github={contacts.github}
                linkedin={contacts.linkedin}
                email={contacts.email}
              />

              <Button
                variant="contained"
                component="a"
                href="/Igor_Kondurov_CV.pdf"
                download
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 700,

                  color: "rgba(250, 250, 250, 0.95)",
                  backgroundColor: "rgba(10, 10, 12, 0.35)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid rgba(255, 138, 0, 0.35)",

                  "&:hover": {
                    backgroundColor: "rgba(10, 10, 12, 0.50)",
                    borderColor: "rgba(255, 138, 0, 0.60)",
                  },
                }}
              >
                Download my CV
              </Button>
            </Stack>
          </GlassSection>
        </Stack>
      </Container>
    </BaseBackground>
  );
}