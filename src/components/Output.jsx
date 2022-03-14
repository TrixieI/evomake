import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


// useEffect 
function ReadFile() {
  let navigate = useNavigate()
  const commentStart = "/"
  const commentEnd = "\n"
  const read = useSelector(state => state.file);
  for(let i = 0; i < read.length; i++) {
        if(read.charAt(i) === "/" && read.charAt(i+1) === "/") {
            console.log("found")
            const [data] = read.split("//") && read.split("/*")
            console.log(data)
        }
    }
      return (
        <>
        <button onClick={() => {
          navigate("/")}}>Go Back</button>
        <h1>Output component</h1>
          <p>{read}</p>
        </>
      );
}

export default ReadFile

