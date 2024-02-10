import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";
import db from "@/src/lib/supabase/db";
import { redirect } from "next/navigation";
import DashboardSetup from "@/src/components/dashboard-setup/dashboard-setup";
import { getUserSubscriptionStatus } from "@/src/lib/supabase/queries";

const DashboardPage = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const workspace = await db.query.workspaces.findFirst({
    where: (workspace, { eq }) => eq(workspace.workspaceOwner, user.id),
  });

  const {data: subscription, error: subscriptionError} = await getUserSubscriptionStatus(user.id);

  if(subscriptionError) return;

  if (!workspace)
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-background">
        <DashboardSetup user={user} subscription={subscription}></DashboardSetup>
      </div>
    );

  redirect(`/dashboard/${workspace.id}`);
};

export default DashboardPage;
