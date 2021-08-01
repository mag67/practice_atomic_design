import React from "react";
import Balloon from "./index.js";

export default (stories) =>
  stories
    .add("2文字ラベル", () => (
      <Balloon style={{ position: "absolute", top: "200px", left: "200px" }}>
        左上から200pxに配置
      </Balloon>
    ))
    .add("4文字ラベル", () => <Balloon>削除する</Balloon>);
