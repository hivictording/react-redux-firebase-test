import React from "react";

import FixedHeader from "../FixedHeader";

function Layout({ children }) {
  return (
    <>
      <FixedHeader />
      {children}
    </>
  );
}

export default Layout;
