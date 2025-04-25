import { useEffect, useState } from "react";

const blogData = () => {

    const [blogs, setBlog] = useState(null)
            useEffect(()=>{
                fetch('/Blog.json')
                .then(res=>res.json())
                .then(data=>setBlog(data))
            },[])

    return {blogs};
};

export default blogData;