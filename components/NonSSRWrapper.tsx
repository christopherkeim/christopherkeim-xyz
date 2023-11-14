import dynamic from "next/dynamic";
import React from "react";

function NonSSRWrapper({ children }: { children: React.ReactNode }) {
  return <React.Fragment>{children}</React.Fragment>;
}
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
