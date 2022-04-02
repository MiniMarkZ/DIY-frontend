
import axios from 'axios';
import Papa from 'papaparse';
import React ,{ useState,useEffect } from 'react'


function Import() {
    // ปิดไว้ก่อนยัง ต้องใช้ backend
    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     axios.post('http://localhost:5000/authen', {
    //         token
    //       })
    //       .then(function (response) {
              
    //         console.log(response)
    //         if(response.data.status != 'ok'){
    //             alert('ยังไม่ได้ login')
    //             window.location = '/login'
    //         }
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // })

    const [Data,setData] = useState();

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
        setData(line);
        console.log(line);
    }

return (
    <div>
        <div>
            <div style={{ textAlign: "center" }}>
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