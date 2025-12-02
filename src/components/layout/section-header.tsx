import React from "react";
import MaxWidthContainer from "../max-width-container";

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="border-b border-dashed">
      <MaxWidthContainer className="px-0 border-l border-r border-dashed">
        <div
          className="h-18 px-6 flex items-center"
          style={{
            background:
              "repeating-linear-gradient(-45deg, var(--color-border), var(--color-border) 1px, transparent 1px, transparent 6px)",
          }}
        >
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
        </div>
      </MaxWidthContainer>
    </div>
  );
}
