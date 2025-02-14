import { useEffect, useState } from "react"
import axios from "axios";
export const Projects = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then((res) => {
            setItems(res.data.meals)
        }).catch((error) => {
            console.log(error)
        })

    }, []);

    const itemsList = items?.map(({ strMeal, strMealThumb, idMeal }) => {
        return (
            <>

                <img src={strMealThumb} />
                <span>{strMeal}</span>
                <span>{idMeal}</span>
            </>
        )

    })
    return (
        <div>{itemsList}</div>
    )

}