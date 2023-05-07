import { IconButtonGradient } from "@components/IconButtonGradient";
import {
  Header,
  createStyles,
  Container,
  Group,
  Code,
  rem,
  Text,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
    height: "100%",
  },
}));
function CustomHeader() {
  const { classes } = useStyles();
  return (
    <Header sx={{}} height={48} p="xs">
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
        </Group>
      </Container>
      {/* Header content */}
    </Header>
  );
}

export default CustomHeader;
