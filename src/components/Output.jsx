import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const commentRemover = (item) => {
  const start = "//";
  const end = `\n`;
  let split = item.split(end);

  split.forEach((i) => {
    if (i.includes(start) || i.includes("/*") || i.includes("*/")) {
      let remove = split.indexOf(i);
      split.splice(remove, 1);
    }
  });
  return split.join(end);
};
function ReadFile() {
  let navigate = useNavigate();
  const read = useSelector((state) => state.file);
  commentRemover(read);
  return (
    <>
      <h1>Output component</h1>
      <textarea rows="10" cols="30">
        {read}
      </textarea>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
    </>
  );
}

export default ReadFile;
