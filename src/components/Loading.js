import React from "react";
import ReactLoading from "react-loading";

const Loading = () => (
  <div style={{ margin: "auto", width: "3.35rem" }}>
    <ReactLoading type={"spin"} color={"RGB(27, 28, 29)"} height={"100%"} width={"100%"} />
  </div>
);

export default Loading;
