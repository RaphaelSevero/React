import Item from './Item'

function List() {

    return(
    <>
    <h1>Lista Marcas</h1>
    <ul>
        <Item marca= "Ferrari" ano_lancamento={1985} />
        <Item marca= "Fiat" ano_lancamento={1964} />
        <Item marca= "Toyota" />
        <Item marca= "Renault" ano_lancamento={2001} />
        <Item/>
    </ul>
    </>
    )
}

export default List