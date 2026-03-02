import { Container, Typography, Stack, Chip, Link, Divider } from "@mui/material";

export default function App() {
  return (
    // 6 - это просто для отступов сверху и снизу, чтобы было по центру
    <Container maxWidth="md" sx={{ py: 6 }}> 
      {/* spacing - это отступы между элементами внутри Stack */}
      <Stack spacing={2}>  
        <Typography variant="h3" component="h1">
          Igor Kondurov
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Senior QA Engineer • Automation • API • SQL
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>

          <Chip label="Python" />
          <Chip label="PyTest" />
          <Chip label="Playwright" />
          <Chip label="Postman" />
          <Chip label="SQL / ClickHouse" />
          <Chip label="CI/CD" />
          <Chip label="Docker" />
          <Chip label="Grafana / Graylog" />
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5">About</Typography>
        <Typography>
          Я QA, который закрывает риски релиза через автоматизацию, мониторинги и нормальную диагностику.
          Делаю тестовую инфраструктуру, понимаю API/SQL и люблю, когда баги умирают быстро.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5">Contacts</Typography>
        <Stack spacing={0.5}>
          <Link href="mailto:YOUR_EMAIL">YOUR_EMAIL</Link>
          <Link href="https://github.com/YOUR_GH" target="_blank" rel="noreferrer">
            github.com/YOUR_GH
          </Link>
          <Link href="https://t.me/YOUR_TG" target="_blank" rel="noreferrer">
            t.me/YOUR_TG
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}