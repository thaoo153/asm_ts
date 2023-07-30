import { Link } from "react-router-dom";

const Home = ({ products }) => {
    return (

        <>
            {products.map((value, index) => {
                return (
                    <div key={index + 1}>
                        <h2>{value.name}</h2>
                        <p>{value.price}</p>
                        <Link to={`detail/${value.id}`}><button>Detail</button></Link>
                    </div>
                )
            })}
        </>
    )
}

export default Home;