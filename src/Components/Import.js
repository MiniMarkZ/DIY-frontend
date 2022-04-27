import '../Style/Page.css';
import axios from 'axios';
import Papa from 'papaparse';
import React ,{ useState,useEffect } from 'react'



function Import() {

    const [Data,setData] = useState();

    // ปิดไว้ก่อนยัง ต้องใช้ backend
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.post('http://localhost:5000/authen', {
            token
          })
          .then(function (response) {
              
            console.log(response)
            if(response.data.status != 'ok'){
                alert('ยังไม่ได้ login')
                window.location = '/login'
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    })


    const parseFile = file => {
        if(file){
            Papa.parse(file, {
                complete: results => {
                    csvJson(results.data);
              }
            });
        }
    };

    const csvJson = data => {
        const line = data.toString().split(',');
        line.pop();
        const json = JSON.stringify(Object.assign({}, line));
        setData(line);
        console.log(line);
        console.log(json);
    }

return (
    <div>
        <div>
            <div className='page'>
                <h1>Import</h1>
                <form>
                    <input
                        className='Input'
                        type={"file"}
                        accept={".csv"}
                        onChange={e=>{parseFile(e.target.files[0])}}
                    />
                </form>
            </div>
        </div>
    </div>
);
}

export default Import