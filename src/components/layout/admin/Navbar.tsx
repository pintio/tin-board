import React from "react";
import {
  ActionIcon,
  Group,
  Navbar,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import AdminRoutes from "@routes/AdminRoutes";
import { useRouter } from "next/router";
import { useToggle } from "@mantine/hooks";
import { IconArrowBarLeft } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  navbarParent: {
    border: "none",
    boxShadow: theme.shadows.xl,
    transition: "width 300ms ease, min-width 300ms ease",
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
  icon: {
    transition: "all 200ms ease, all 200ms ease",
    "&:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

function CustomNavbar() {
  const { pathname } = useRouter();
  const { classes } = useStyles();
  const [isMaximized, toggleSideBar] = useToggle([false, true]);

  return (
    <Navbar
      height={"auto"}
      width={{ sm: isMaximized ? 240 : 100 }}
      className={classes.navbarParent}
      p="md"
    >
      <Navbar.Section className={classes.header}>
        <Group noWrap className={classes.logoSection} position="apart">
          {/* <MantineLogo size={28} /> */}
          {isMaximized ? (
            <Text
              sx={{ fontWeight: "bold" }}
              component="span"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              inherit
            >
              tin-board
            </Text>
          ) : null}
          <ActionIcon
            onClick={() => toggleSideBar()}
            variant="subtle"
            radius="md"
            className={classes.icon}
            sx={{ rotate: isMaximized ? "0" : "180deg" }}
          >
            <IconArrowBarLeft size="1rem" />
          </ActionIcon>
        </Group>
      </Navbar.Section>
      <Navbar.Section grow>
        {/* {links} */}
        <AdminRoutes onlyIcons={!isMaximized} pathname={pathname} />
      </Navbar.Section>

      {/* uncomment below to add a footer section seperated with a border/line */}
      {/* <Navbar.Section className={classes.footer}></Navbar.Section> */}
    </Navbar>
  );
}

export default CustomNavbar;
