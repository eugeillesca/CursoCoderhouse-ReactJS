import ItemList from "./ItemList";
const ItemListContainer = () => {
    return (<>
        {/* <div className="navoption">
            <a href=".">{props.text}</a>
        </div> */}

        <ul>
            <ItemList text="Zapatillas"></ItemList>
            <ItemList text="Botas"></ItemList>
            <ItemList text="Sandalias"></ItemList>
            <ItemList text="Ojotas"></ItemList>
        </ul>
    </>)
}

export default ItemListContainer;