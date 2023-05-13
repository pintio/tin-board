import Link from "next/link";
import React from "react";
import { createStyles, getStylesRef } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.md,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).hover,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },
  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },
  },
}));

const adminRoutes = [
  { label: "Home", link: "/home" },
  { label: "Home2", link: "/home2" },
  { label: "Home3", link: "/home3" },
  { label: "Home4", link: "/home4" },
  { label: "Home5", link: "/home5" },
  { label: "Home6", link: "/home6" },
];

type AdminRoutes = {
  pathname: string;
};

function AdminRoutes({ pathname }: AdminRoutes) {
  const { classes, cx } = useStyles();
  return (
    <>
      {adminRoutes.map((route) => (
        <Link
          className={cx(classes.link, {
            [classes.linkActive]: pathname === route.link,
          })}
          key={route.label}
          href={route.link}
        >
          {route.label}
        </Link>
      ))}
    </>
  );
}

export default AdminRoutes;
