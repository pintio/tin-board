import React, { forwardRef } from "react";
import {
  ThemeIcon,
  ActionIcon,
  ActionIconProps,
  ButtonProps,
  useComponentDefaultProps,
  DefaultProps,
  Button,
  Box,
  createPolymorphicComponent,
} from "@mantine/core";

interface MyButtonProps extends ActionIconProps {}

// interface PT extends ActionIconProps, React.ComponentPropsWithoutRef<'button'>
// interface bu extends ButtonProps {}

const _IconButtonGradient = forwardRef<HTMLButtonElement, MyButtonProps>(
  function _IconButtonGradient({ children, ...props }, ref) {
    return (
      <ActionIcon ref={ref} component="button" {...props}>
        <ThemeIcon
          size="lg"
          variant="gradient"
          gradient={{ from: "teal", to: "lime", deg: 105 }}
        >
          {children}
        </ThemeIcon>
      </ActionIcon>
    );
  }
);

export const IconButtonGradient = createPolymorphicComponent<
  "button",
  MyButtonProps
>(_IconButtonGradient);
// export default IconButtonGradient;
