import React from "react";
import {
  ActionIcon,
  Code,
  Group,
  Navbar,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import AdminRoutes from "@routes/AdminRoutes";
import { useRouter } from "next/router";
import { useToggle } from "@mantine/hooks";
import {
  IconArrowBarLeft,
  IconMaximize,
  IconMinimize,
} from "@tabler/icons-react";

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
  icon: {
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
        <Group className={classes.logoSection} position="apart">
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
          >
            <IconArrowBarLeft size="1rem" />
          </ActionIcon>
        </Group>
      </Navbar.Section>
      <Navbar.Section grow>
        <Text
          hidden={!isMaximized}
          className={classes.sectionHeading}
          size="sm"
          weight={500}
          color="dimmed"
        >
          Management
        </Text>
        {/* {links} */}
        <AdminRoutes onlyIcons={!isMaximized} pathname={pathname} />
      </Navbar.Section>

      {/* uncomment below to add a footer section seperated with a border/line */}
      {/* <Navbar.Section className={classes.footer}></Navbar.Section> */}
    </Navbar>
  );
}

export default CustomNavbar;
