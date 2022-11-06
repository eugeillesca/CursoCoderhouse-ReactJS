import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import {customFetch} from "../utils/customFetch"
import {categories} from "../utils/categories"


const Menu = () => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        customFetch(0, categories)
        .then (result => setCategorias(categories))
        .catch(err => console.log(err))
    }, [])

    return (
        <>
            <ul>
                {categorias.map(i => (
                    <MenuItem key = {i.id}
                    name = {i.name}/>
                ))}
                
            </ul>
        </>
    )
}

export default Menu