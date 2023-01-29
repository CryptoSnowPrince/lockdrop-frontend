import React, { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { TerraWebappProvider } from "@arthuryeti/terra";
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";

import Navbar from "components/Navbar";
import whitelist from "constants/whitelist.json";
import { AstroAppProvider } from "modules/common";

const Layout: FC = ({ children }) => {
  const wallet = useWallet();
  const isInitializing = wallet.status == WalletStatus.INITIALIZING;

  return (
    <Flex height="100vh" direction="column">
      <Global
        styles={{
          "html,body": {
            // height: "100%",
            width: "100%",
            overflowX: "hidden",
            position: "relative",
          },
          body: {
            backgroundColor: "#000D37",
          },
          "*::-webkit-scrollbar": {
            width: "6px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#5643F2",
            borderRadius: "6px",
          },
          "#chakra-toast-manager-bottom-right": {
            right: "32px!important",
            bottom: "32px!important",
          },
          "@font-face": {
            fontFamily: "WhyteInktrap",
            src: "url('/WhyteInktrap-Regular.woff') format('woff')",
          },
        }}
      />
      {!isInitializing && (
        <TerraWebappProvider>
          <AstroAppProvider data={whitelist}>
            <Box>
              <Navbar />
            </Box>
            <Box flex="1">{children}</Box>
          </AstroAppProvider>
        </TerraWebappProvider>
      )}
    </Flex>
  );
};

export default Layout;
