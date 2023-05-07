import { ActionIcon, Menu, Text } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";

function NotificationPopover() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon>
          <IconBell />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item icon={""}>Settings</Menu.Item>
        <Menu.Item icon={""}>Messages</Menu.Item>
        <Menu.Item icon={""}>Gallery</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default NotificationPopover;
