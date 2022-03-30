import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {

  const [file, changeFile] = useState();
  const [fileName, changeFileName] = useState("");

  return (
    <div className="App">
      <input type="file" onChange={ (e)=>{
        changeFile(e.target.files[0]);
        changeFileName(e.target.files[0].name);
      } } />
      <button onClick={ ()=>{

        const formData = new FormData();

        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
          axios.post("https://api-storage.cloud.toast.com/v1/AUTH_35682dae0076479ab712dbb328468535/ckj", formData).then(
            (response)=>{
              console.log(response);
            }
          )

        } catch (exception) {
          console.log(exception);
        }

      } }>업로드!!</button>
    </div>
  );

}

export default App;
