import React from "react";

const SectionTitle = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <h2 className="text-center bg-slate-800 text-slate-100 rounded-2xl py-4 px-6 m-0 w-full mb-6 text-2xl font-semibold">
      {pageTitle}
    </h2>
  );
};

export default SectionTitle;
