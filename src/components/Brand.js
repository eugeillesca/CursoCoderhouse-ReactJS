const Brand = (props) => {
    let brand = props.name == null ? "GENERICA" : props.name;
    return (
        <div className="brand">{brand}</div>
        )
}

export default Brand;