import  img from "../assets/images/WhatsApp Image 2026-02-16 at 11.39.36 PM.jpeg"
function About()
{
    return(
        <>
        <section className="container">
 <h1 className="text-center my-5">About Me</h1>
            <div className="row">
                <div className="col-lg-6">
                    <img src={img} alt="MyImg"  className="img-fluid rounded-5"/>
                </div>
                <div className="col-lg-6">
                <div className="row d-flex ">
                    
                    <div className="col-lg-6 pt-2 ">
                       <h5>Name: xyz</h5> 
                       <h5>Email:xyz@gmail.com</h5>
                       <h5>Phone No- 999999999</h5>
                    </div>
                    <div className="col-lg-6 pt-2">
                        <h5>Experience:x years</h5> 
                       <h5>Location:Lucknow</h5>
                       <h5>Freelance- Available</h5>
                    </div>
                 
                </div>
                </div>
            </div>
        </section>
        </>
    )
}

export  default About