import { ActionIcon, Menu, Indicator, Text, ScrollArea } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";

//mock data
import notificationData from "@mock/notification";

function NotificationPopover() {
  return (
    <Menu shadow="md" width={350}>
      <Menu.Target>
        <Indicator>
          <ActionIcon>
            <IconBell />
          </ActionIcon>
        </Indicator>
      </Menu.Target>

      <Menu.Dropdown>
        <ScrollArea h={500}>
          <Menu.Label>Notifications</Menu.Label>
          {notificationData?.map(({ id, title, description, isRead }) => (
            <NotificationItem
              key={id}
              title={title}
              description={description}
              isRead={isRead}
            />
          ))}
        </ScrollArea>
      </Menu.Dropdown>
    </Menu>
  );
}

type NotificationProps = {
  title: string;
  description: string;
  isRead: boolean;
};

function NotificationItem({ title, description, isRead }: NotificationProps) {
  return (
    <Menu.Item icon={""}>
      <Text fw={500}>{title}</Text>
      <Text c="dimmed" lineClamp={2}>
        {description}
      </Text>
    </Menu.Item>
  );
}

export default NotificationPopover;
