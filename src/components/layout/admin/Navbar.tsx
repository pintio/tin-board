import React from "react";
import { Code, Group, Navbar, Text, createStyles, rem } from "@mantine/core";
import AdminRoutes from "@routes/AdminRoutes";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  navbarParent: {
    border: "none",
    boxShadow: theme.shadows.xl,
  },
  header: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    marginBottom: `${rem(16)}`,
    paddingBottom: `${rem(4)}`,
  },
  sectionHeading: {
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
  },
  logoSection: {
    padding: `0 ${theme.spacing.sm}`,
  },
}));

function CustomNavbar() {
  const { pathname } = useRouter();
  const { classes } = useStyles();

  return (
    <Navbar
      height={"auto"}
      width={{ sm: 240 }}
      className={classes.navbarParent}
      p="md"
    >
      <Navbar.Section className={classes.header}>
        {" "}
        <Group className={classes.logoSection} position="apart">
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
      </Navbar.Section>
      <Navbar.Section grow>
        <Text
          className={classes.sectionHeading}
          size="sm"
          weight={500}
          color="dimmed"
        >
          Management
        </Text>
        {/* {links} */}
        <AdminRoutes pathname={pathname} />
      </Navbar.Section>

      {/* uncomment below to add a footer section seperated with a border/line */}
      {/* <Navbar.Section className={classes.footer}></Navbar.Section> */}
    </Navbar>
  );
}

export default CustomNavbar;
