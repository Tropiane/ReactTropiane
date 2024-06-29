import Category from "./utilities/Category";


const Home = ()=>{

    return(
        <>
        <div className="saludoInicio text-center uppercase text-sky-50 text-xl">
            <h2>Encontrá los mejores <span>productos</span></h2>
            <Category/>
        </div>
        </>
    )
}

export default Home;