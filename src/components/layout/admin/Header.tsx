import { ThemeToggler } from "@components/ThemeToggler";
import NotificationPopover from "@components/layout/admin/NotificationPopover";
import SettingsPopover from "@components/layout/admin/SettingsPopover";
import {
  Header,
  createStyles,
  Container,
  Group,
  Code,
  Text,
  Divider,
  rem,
  Avatar,
  Title,
} from "@mantine/core";
import user from "@mock/user.mock";

const useStyles = createStyles((theme) => ({
  headerContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 0,
    height: "100%",
    maxWidth: "100%",
    gap: `${rem(16)}`,
  },
  header: {
    backgroundColor: "transparent",
    border: "none",
  },
}));
function CustomHeader() {
  const { classes } = useStyles();
  return (
    <Header height={48} p="xs" className={classes.header}>
      <Container className={classes.headerContainer}>
        <Group>
          <NotificationPopover />
          <SettingsPopover />
          <ThemeToggler />
        </Group>
        <Divider orientation="vertical" />
        <Group>
          <Avatar radius="xl" src={user[0]?.avatar} alt={user[0].first_name}>
            {user[0].first_name[0] + user[0].last_name[0]}
          </Avatar>
          <Title order={5}>{user[0].first_name}</Title>
        </Group>
      </Container>
    </Header>
  );
}

export default CustomHeader;
