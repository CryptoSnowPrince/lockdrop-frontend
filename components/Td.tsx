import React, { FC, ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  isRight?: boolean;
} & BoxProps;

const Td: FC<Props> = ({ children, isRight = false, ...props }) => {
  let extraProps = {};

  if (isRight) {
    extraProps = {
      textAlign: "right",
    };
  }

  return (
    <Box flex="1" py={{ base: 1, md: 0 }} {...extraProps} {...props}>
      {children}
    </Box>
  );
};

export default Td;
