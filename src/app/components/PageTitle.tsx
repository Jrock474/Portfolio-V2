import React from "react";

const PageTitle = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <h1 className="text-center bg-slate-800 text-slate-100 rounded-2xl py-4 px-6 m-0 w-full mb-6 text-2xl font-semibold">
      {pageTitle}
    </h1>
  );
};

export default PageTitle;
