import { TablerIconsProps } from "@tabler/icons-react";
import { default as NextLink } from "next/link";
import { getStylesRef, createStyles, Tooltip } from "@mantine/core";

const useStyles = createStyles(
  (theme, { onlyIcons }: Omit<LinkProps, "route">) => ({
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
          color: theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).color,
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
  })
);

type LinkProps = {
  pathname: string;
  onlyIcons?: boolean;
  route: {
    label: string;
    link: string;
    icon: (props: TablerIconsProps) => JSX.Element;
  };
};

export function Link({ route, pathname, onlyIcons }: LinkProps) {
  const { classes, cx } = useStyles({ pathname, onlyIcons });

  return (
    <NextLink
      className={cx(classes.link, {
        [classes.linkActive]: pathname === route.link,
      })}
      href={route.link}
    >
      <route.icon className={classes.linkIcon} stroke={1.5} />
      {route.label}
    </NextLink>
  );
}

export function LinkWithoutLabel({ route, pathname, onlyIcons }: LinkProps) {
  const { classes, cx } = useStyles({ pathname, onlyIcons });

  return (
    <Tooltip label={route.label} position="right" withArrow>
      <NextLink
        className={cx(classes.link, {
          [classes.linkActive]: pathname === route.link,
        })}
        href={route.link}
      >
        <route.icon className={classes.linkIcon} stroke={1.5} />
      </NextLink>
    </Tooltip>
  );
}
