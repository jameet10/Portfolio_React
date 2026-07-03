import img1 from "../assets/images/cert1.avif"
import img2 from "../assets/images/cert2.jpg"
import img3 from "../assets/images/cert3.webp"

function Certificates()
{
return(
    <>
     <section className="container">
     <div className="row">
        <h1 className="text-center py-4">My Certificates</h1>
        <div className="col-lg-4">
         <div className="card" >
                                    
                                    <div className="card-body">
                                        
                                        <img src={img1} alt="" style={{height:'200px'}} />
                                        <h2>HTML Course</h2>
                                    </div>
                                </div>
        </div>
        <div className="col-lg-4">
            <div className="card" >
                                    
                                    <div className="card-body">
                                        
                                        <img src={img2} alt="" style={{height:'200px'}} />
                                         <h2>CSS Course</h2>
                                    </div>
                                </div>
        </div>
        <div className="col-lg-4"><div className="card" >
                                    
                                    <div className="card-body">
                                        
                                        <img src={img3} alt="" style={{height:'188px'}} />
                                         <h2>JavaScript Course</h2>
                                    </div>
                                </div></div>
     </div>
     </section>
    </>
)
}
export default Certificates