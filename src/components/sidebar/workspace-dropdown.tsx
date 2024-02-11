"use client";
import { useAppState } from "@/src/lib/providers/state-provider";
import { workspace } from "@/src/lib/supabase/supabase.types";
import React, { useEffect, useState } from "react";
import SelectedWorkspace from "./selected-workspace";

interface WorkspaceDropdownProps {
  privateWorkspaces: workspace[];
  sharedWorkspaces: workspace[];
  collaboratingWorkspaces: workspace[];
  defaultValue: workspace | undefined;
}

const WorkspaceDropdown: React.FC<WorkspaceDropdownProps> = ({
  privateWorkspaces,
  sharedWorkspaces,
  collaboratingWorkspaces,
  defaultValue,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch, state } = useAppState();

  useEffect(() => {
    if (state.workspaces.length == 0) {
      dispatch({
        type: "SET_WORKSPACES",
        payload: {
          workspaces: [
            ...privateWorkspaces,
            ...sharedWorkspaces,
            ...collaboratingWorkspaces,
          ].map((workspace) => ({ ...workspace, folders: [] })),
        },
      });
    }
  }, [
    collaboratingWorkspaces,
    dispatch,
    privateWorkspaces,
    sharedWorkspaces,
    state.workspaces.length,
  ]);

  const handleSelect = (option: workspace) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span onClick={() => setIsOpen(!isOpen)}>
          {selectedOption ? (
            <SelectedWorkspace workspace={selectedOption} />
          ) : (
            "Select a workspace"
          )}
        </span>
      </div>
      {isOpen && (
        <div
          className="group
          absolute
          z-50
          h-[190px]
          w-full
          origin-top-right
          overflow-scroll
          rounded-md
          border-[1px]
          border-muted
          bg-black/10
          shadow-md
          backdrop-blur-lg"
        ></div>
      )}
    </div>
  );
};

export default WorkspaceDropdown;
