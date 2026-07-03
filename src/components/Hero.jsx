import myimg from "../assets/images/portfolio.jpeg"
function Hero()
{
    return(
        <>
        <section className="container">
        <div className="row">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <div>
                <h5>Hi I'm</h5>
                <h1>Jasmeet Kaur</h1>
                <h4>An aspiring web developer.</h4>
                <p>Technology genuinely excites me. I enjoy exploring new tools, building projects, and turning ideas into functional applications. I am motivated by curiosity and driven by the desire to keep learning and creating impactful software throughout my career.</p>
                <button className="btn btn-primary p-2 mx-2 my-2"> hire me</button>
            <button className="border p-2 my-2"> Download CV</button>
            </div></div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
             <img src={myimg} alt="" className="img-fluid  rounded-circle shadow-lg  h-50" />
            </div>
            </div>
            
            </section>
        </>
    )
}

export default Hero
