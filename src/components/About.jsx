import  img from "../assets/images/WhatsApp Image 2026-02-16 at 11.39.36 PM.jpeg"
function About()
{
    return(
        <>
        <section className="container">
 <h1 className="text-center my-5">About Me</h1>
            <div className="row">
                <div className="col-lg-6">
                    <img src={img} alt="MyImg"  className="img-fluid"/>
                </div>
                <div className="col-lg-6">
                <h2 className="text-center my-4 ">FULL STACK DEVELOPER</h2>
                <div className="row">
                    <div className="col-lg-6 p-4 ">
                       <h4>Name: xyz</h4> 
                       <h4>Email:xyz@gmail.com</h4>
                       <h4>Phone No- 999999999</h4>
                    </div>
                    <div className="col-lg-6 p-4">
                        <h4>Experience:x years</h4> 
                       <h4>Location:Lucknow</h4>
                       <h4>Freelance- Available</h4>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}

export  default About