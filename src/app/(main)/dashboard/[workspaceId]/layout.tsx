import MobileSidebar from "@/src/components/sidebar/mobile-sidebar";
import Sidebar from "@/src/components/sidebar/sidebar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

const Layout: React.FC<LayoutProps> = ({ children, params }) => {
  return (
    <main
      className="flex h-screen
  w-screen
  overflow-hidden"
    >
      <Sidebar params={params} />
      <MobileSidebar>
        <Sidebar params={params} className="w-screen inline-block sm:hidden"></Sidebar>
      </MobileSidebar>
      <div
        className="dark:border-Neutrals-12/70
      relative
      w-full
      overflow-scroll 
      border-l-[1px]"
      >
        {children}
      </div>
    </main>
  );
};

export default Layout;
