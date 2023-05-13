import React from "react";
import { Navbar } from "@mantine/core";
import AdminRoutes from "@routes/AdminRoutes";
import { useRouter } from "next/router";

function CustomNavbar() {
  const { pathname } = useRouter();

  return (
    <Navbar height={"auto"} width={{ sm: 300 }} p="md">
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
