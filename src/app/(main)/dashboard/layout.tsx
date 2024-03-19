import { SubscriptionModalProvider } from "@/src/lib/providers/subscription-modal-provider";
import { getActiveProductsWithPrice } from "@/src/lib/supabase/queries";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

const Layout: React.FC<LayoutProps> = async ({ children, params }) => {
  // const { data: products, error } = await getActiveProductsWithPrice();
  // if (error) throw new Error();
  return (
    <main className="flex over-hidden h-screen">
      <SubscriptionModalProvider products={[]}>
        {children}
      </SubscriptionModalProvider>
    </main>
  );
};

export default Layout;
