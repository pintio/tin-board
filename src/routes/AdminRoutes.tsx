import Link from "next/link";
import React from "react";
import { createStyles, getStylesRef } from "@mantine/core";
import { IconHome, IconHome2 } from "@tabler/icons-react";

const useStyles = createStyles((theme, { onlyIcons }: AdminRoutesProps) => ({
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
    justifyContent: !onlyIcons ? "flex-start" : "center",
    transition: "width 300ms ease, min-width 300ms ease",

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
  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: !onlyIcons ? theme.spacing.sm : 0,
  },
}));

const adminRoutes = [
  { label: "Home", link: "/home", icon: IconHome2 },
  { label: "Home2", link: "/home2", icon: IconHome },
  { label: "Home3", link: "/home3", icon: IconHome },
  { label: "Home4", link: "/home4", icon: IconHome },
  { label: "Home5", link: "/home5", icon: IconHome },
  { label: "Home6", link: "/home6", icon: IconHome },
];

type AdminRoutesProps = {
  pathname: string;
  onlyIcons?: boolean;
};

function AdminRoutes({ pathname, onlyIcons = false }: AdminRoutesProps) {
  const { classes, cx } = useStyles({ pathname, onlyIcons });
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
          <route.icon className={classes.linkIcon} stroke={1.5} />
          {!onlyIcons ? route.label : null}
        </Link>
      ))}
    </>
  );
}

export default AdminRoutes;
