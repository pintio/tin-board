import { IconButtonGradient } from "@components/IconButtonGradient";
import UserSettings from "@components/layout/admin/UserSettings";
import {
  Header,
  createStyles,
  Container,
  Group,
  Code,
  Text,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
    height: "100%",
    maxWidth: "100%",
  },
}));
function CustomHeader() {
  const { classes } = useStyles();
  return (
    <Header height={48} p="xs">
      <Container className={classes.headerContainer}>
        <Group position="apart">
          {/* <MantineLogo size={28} /> */}
          <Text
            sx={{ fontWeight: "bold" }}
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            tin-board
          </Text>
          <Code sx={{ fontWeight: 700 }}>v0.1.1</Code>
        </Group>
        <Group>
          <IconButtonGradient onClick={() => alert("as")}>
            oo
          </IconButtonGradient>
          <UserSettings />
        </Group>
      </Container>
    </Header>
  );
}

export default CustomHeader;
