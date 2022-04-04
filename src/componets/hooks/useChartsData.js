import { useEffect, useState } from "react"

const useChartsData= () =>{
          const [data , setData] = useState([])
          useEffect(() => {
                   fetch('Data.json')
                   .then(res => res.json())
                   .then(data =>setData(data))
          }, []);
          return [data , setData]
}
export default useChartsData;