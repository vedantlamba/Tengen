import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import React from "react";

function Page() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center gap-4 bg-background">
      <h1 className="text-2xl font-semibold">Welcome To Tengen</h1>
      <div className="flex items-center gap-4">
        <OrganizationSwitcher />
        <UserButton />
      </div>
    </div>
  );
}

export default Page;
