import React from "react";

function RightMenu() {
  return (
    <section className="flex flex-col max-lg:hidden h-screen text-xl bg-neutral pt-10 w-[600px] px-10">
      <div className="h-1/2">
        <p>Suggested Users</p>
      </div>
      <div className="h-1/2">
        <p>Suggested Communities</p>
      </div>
    </section>
  );
}

export default RightMenu;
