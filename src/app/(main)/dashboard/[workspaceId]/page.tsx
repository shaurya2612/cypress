export const dynamic = "force-dynamic";

import QuillEditor from "@/src/components/quill-editor/quill-editor";
import { getWorkspaceDetails } from "@/src/lib/supabase/queries";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Workspace = async ({ params }: { params: { workspaceId: string } }) => {
  const { data, error } = await getWorkspaceDetails(params.workspaceId);
  if (error || !data.length) redirect('/dashboard');
  return (
    <div className="relative">
      <QuillEditor
        dirType="workspace"
        fileId={params.workspaceId}
        dirDetails={data[0] || {}}
      />
    </div>
  );
};

export default Workspace;
