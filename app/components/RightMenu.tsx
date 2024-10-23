import React from "react";

function RightMenu() {
  return (
    <section className="flex flex-col max-lg:hidden h-screen gap-8 text-xl w-[600px] px-10 pt-16 bg-neutral">
      <div>
        <p>Suggested Users</p>
      </div>
      <div>
        <p>Suggested Communities</p>
      </div>
    </section>
  );
}

export default RightMenu;
