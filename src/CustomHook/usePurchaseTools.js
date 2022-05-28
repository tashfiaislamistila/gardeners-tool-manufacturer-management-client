import { useEffect, useState } from "react";

const usePurchaseTools = toolsId => {
    const [tool, setTool] = useState({});

    useEffect(() => {
        const url = `https://dry-waters-06111.herokuapp.com/tools/${toolsId}`;
        console.log(url);
        fetch(url, {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            }
        })
            .then(res => res.json())
            .then(data =>
                setTool(data));

    }, [toolsId]);
    return [tool, setTool]
}
export default usePurchaseTools;