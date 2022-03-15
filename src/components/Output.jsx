import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ReadFile() {
    let navigate = useNavigate()
    const read = useSelector(state => state.file);
    const start = "//"
    const end = `\n`
    let split = read.split(end)

    split.forEach((i) => {
    if(i.includes(start) || i.includes("/*") || i.includes("*/")) {
    let remove = split.indexOf(i)
    split.splice(remove, 1)
  }
})
    let newRead = split.join(end)

      return (
        <>
        <button onClick={() => {
          navigate("/")}}>Go Back</button>
        <h1>Output component</h1>
          <p>{newRead}</p>
        </>
      );
}

export default ReadFile

