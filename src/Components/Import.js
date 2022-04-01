
import Papa from 'papaparse';
import React ,{ useState  } from 'react'


function Import() {

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