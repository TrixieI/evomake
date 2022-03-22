import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { file } from "../redux/actions"


function ReadFile() {
  let navigate = useNavigate()
  const [text, setText] = useState()
  const dispatch = useDispatch();

    const showFile = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = (e) => {
           setText(e.target.result)
          };
          reader.readAsText(e.target.files[0]);
        };
        dispatch(file(text))
        
      return (
        <>
        <h1>ReadFile component</h1>
          <input type="file" onChange={showFile} />
        <button onClick={() => {
          navigate("/output")}}>Go to Output</button>
        </>
      );
}

export default ReadFile

