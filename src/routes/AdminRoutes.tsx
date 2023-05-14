import React from "react";
import { IconHome, IconHome2 } from "@tabler/icons-react";
import { LinkWithoutLabel, Link } from "@routes/Link";

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
  if (onlyIcons) {
    return (
      <>
        {adminRoutes.map((route) => (
          <LinkWithoutLabel
            key={route.label}
            route={route}
            pathname={pathname}
            onlyIcons={onlyIcons}
          />
        ))}
      </>
    );
  }

  return (
    <>
      {adminRoutes.map((route) => (
        <Link
          key={route.label}
          route={route}
          pathname={pathname}
          onlyIcons={onlyIcons}
        />
      ))}
    </>
  );
}

export default AdminRoutes;
