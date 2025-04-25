import { useEffect, useState } from "react";

const categoryData = () => {

    const [categories, setCategory] = useState([])
        useEffect(()=>{
            fetch('/Category.json')
            .then(res=>res.json())
            .then(data=>setCategory(data))
        },[])

    return  {categories};
};

export default categoryData;