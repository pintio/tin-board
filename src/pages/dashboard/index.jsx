import { AdminLayout } from "@components/layout";
import { Text } from "@mantine/core";
import Head from "@components/seo/Head";

function Dashboard() {
  return (
    <AdminLayout>
      <Head title="dashboard" description="testing head description" />
      <Text>HEading goes here</Text>
    </AdminLayout>
  );
}

export default Dashboard;
