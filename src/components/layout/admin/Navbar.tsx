import React from "react";
import {
  Navbar,
  Group,
  Code,
  createStyles,
  rem,
  getStylesRef,
} from "@mantine/core";
import AdminRoutes from "@routes/AdminRoutes";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  navbar: {
    background: theme.fn.linearGradient(0, "#E2E2E2", "#ffffff"),
  },
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },
}));

function CustomNavbar() {
  const { classes } = useStyles();
  const { pathname } = useRouter();

  return (
    <Navbar
      height={"auto"}
      width={{ sm: 300 }}
      p="md"
      className={classes.navbar}
    >
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          {/* <MantineLogo size={28} /> */}
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
        {/* {links} */}
        <AdminRoutes pathname={pathname} />
      </Navbar.Section>

      {/* uncomment below to add a footer section seperated with a border/line */}
      {/* <Navbar.Section className={classes.footer}></Navbar.Section> */}
    </Navbar>
  );
}

export default CustomNavbar;
