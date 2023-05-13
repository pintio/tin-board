import { AppShell } from "@mantine/core";
import { Header } from "@components/layout/admin";
import { Navbar } from "@components/layout/admin";

function AdminLayout({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar />}
      header={<Header />}
      layout="alt"
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {/* Your application here */}
      {children}
    </AppShell>
  );
}

export default AdminLayout;
