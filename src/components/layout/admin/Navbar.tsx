import React from "react";
import { Navbar, createStyles } from "@mantine/core";
import AdminRoutes from "@routes/AdminRoutes";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  navbarParent: {
    border: "none",
    boxShadow: theme.shadows.xl,
  },
}));

function CustomNavbar() {
  const { pathname } = useRouter();

  const { classes } = useStyles();

  return (
    <Navbar
      height={"auto"}
      width={{ sm: 200 }}
      className={classes.navbarParent}
      p="md"
    >
      <Navbar.Section grow>
        {/* {links} */}
        <AdminRoutes pathname={pathname} />
      </Navbar.Section>

      {/* uncomment below to add a footer section seperated with a border/line */}
      {/* <Navbar.Section className={classes.footer}></Navbar.Section> */}
    </Navbar>
  );
}

export default CustomNavbar;
