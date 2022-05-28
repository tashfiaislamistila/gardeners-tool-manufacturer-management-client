import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://dry-waters-06111.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data =>
                // console.log(data));
                setReviews(data))
    }, []);
    return [reviews, setReviews]
}
export default useReviews;