export const dynamic = "force-dynamic";

import QuillEditor from "@/src/components/quill-editor/quill-editor";
import { getFolderDetails, getWorkspaceDetails } from "@/src/lib/supabase/queries";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Folder = async ({ params }: { params: { folderId: string } }) => {
  const { data, error } = await getFolderDetails(params.folderId);
  if (error || !data.length) redirect('/dashboard');

  return (
    <div className="relative ">
      <QuillEditor
        dirType="folder"
        fileId={params.folderId}
        dirDetails={data[0] || {}}
      />
    </div>
  );
};

export default Folder;