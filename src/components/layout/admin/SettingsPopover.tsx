import { ActionIcon, Menu, Text } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";

function SettingsPopover() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon>
          <IconSettings />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item icon={""}>Settings</Menu.Item>
        <Menu.Item icon={""}>Messages</Menu.Item>
        <Menu.Item icon={""}>Gallery</Menu.Item>
        <Menu.Item
          icon={""}
          rightSection={
            <Text size="xs" color="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item icon={""}>Transfer my data</Menu.Item>
        <Menu.Item color="red" icon={""}>
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default SettingsPopover;
