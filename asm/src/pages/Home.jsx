const Home = ({ products }) => {
    return (

        <>
            {products.map((value, index) => {
                return (
                    <div key={index + 1}>
                        <h2>{value.name}</h2>
                        <p>{value.price}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Home;