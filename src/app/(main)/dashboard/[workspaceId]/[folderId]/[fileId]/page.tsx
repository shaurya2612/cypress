export const dynamic = "force-dynamic";

import QuillEditor from "@/src/components/quill-editor/quill-editor";
import { getFileDetails, getFolderDetails, getWorkspaceDetails } from "@/src/lib/supabase/queries";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const File = async ({ params }: { params: { fileId: string } }) => {
    const { data, error } = await getFileDetails(params.fileId);
    if (error || !data.length) redirect('/dashboard');

    return (
        <div className="relative ">
            <QuillEditor
                dirType="file"
                fileId={params.fileId}
                dirDetails={data[0] || {}}
            />
        </div>
    );
};

export default File;