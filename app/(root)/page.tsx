import React from "react";
import LeftMenu from "../components/LeftMenu";
import RightMenu from "../components/RightMenu";

function HomePage() {
  return (
    <div className="flex">
      <LeftMenu />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas eaque
        laboriosam minus doloremque eos illum debitis necessitatibus fuga
        quibusdam laudantium autem, molestias odio suscipit nihil quod iusto,
        repellat fugit ratione ab amet soluta ut ea magni! Error, pariatur
        atque?
      </div>
      <RightMenu />
    </div>
  );
}

export default HomePage;
