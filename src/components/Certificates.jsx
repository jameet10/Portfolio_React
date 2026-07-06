import img1 from "../assets/images/ByteBattle.jpeg"
import img2 from "../assets/images/SRDT.jpeg"
import img3 from "../assets/images/Suzuki.jpeg"

function Certificates()
{
return(
    <>
     <section className="container">
     <div className="row">
        <h1 className="text-center py-4 fst-italic">My Certificates</h1>
        <div className="col-lg-4">
         <div className="card" >
                                    
                                    <div className="card-body">
                                        
                                        <img src={img1} alt="" style={{height:'200px'}} />
                                        <h4 className="pt-2">DSA Challenge</h4>
                                    </div>
                                </div>
        </div>
        <div className="col-lg-4">
            <div className="card" >
                                    
                                    <div className="card-body">
                                        
                                        <img src={img2} alt="" style={{height:'200px'}} />
                                         <h4 className="pt-2">Python Internship</h4>
                                    </div>
                                </div>
        </div>
        <div className="col-lg-4"><div className="card" >
                                    
                                    <div className="card-body">
                                        
                                        <img src={img3} alt="" style={{height:'188px'}} />
                                         <h4 className="pt-2">Maruti Suzuki- Road Safety Challenge</h4>
                                    </div>
                                </div></div>
     </div>
     </section>
    </>
)
}
export default Certificates