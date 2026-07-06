import  img from "../assets/images/WhatsApp Image 2026-02-16 at 11.39.36 PM.jpeg"
function About()
{
    return(
        <>
        <section className="container">
 <h1 className="text-center my-5 fst-italic ">About Me</h1>
 
            <div className="row">

                <div className="col-lg-6">
                    <img src={img} alt="MyImg"  className="img-fluid shadow-lg p-3 mb-5 bg-body-tertiary rounded "/>
                </div>
                <div className="col-lg-6">
                <div className="row">
                     <p className="pt-5 fst-italic fw-semibold" > I am a third year Btech undergraduate of I.T. branch with a strong interest in full stack development. I enjoy satisfying my curiosity in how things work, exploring new opportunities as I go forward in my journey.</p>
                <p className="pt-5 fst-italic fw-semibold" >I believe growth comes from consistency. Beyond writing code, I value clear communication, adaptability, and collaboration.</p>
                    <div className="col-lg-6 pt-5">
                       <h6>Email:jasmeetkaur100606@gmail.com</h6>
                       <h6>Degree- Btech I.T.</h6>
                    </div>
                    <div className="col-lg-6 pt-5">
                       <h6>Location:Lucknow</h6>
                       <h6>Freelance- Available</h6>
                    </div>
                 
                </div>
               
                </div>
            </div>
        </section>
        </>
    )
}

export  default About