import img1 from "../assets/images/ImageGallery.png"
import img2 from "../assets/images/Amazon.png"
import img3 from "../assets/images/Tic2.png"
function Project() {
    return (
        <>
            <section className="container">
                <h1 className="text-center my-5 fst-italic">My Projects</h1>
                <div className="row">
                    <div className="col-lg-4 my-4">
                        <div className="card" >
                            <h2 className="text-center pt-2">Image Gallery</h2>
                            <div className="card-body">
                                
                                <img src={img1} alt="" className="img-fluid"  />
                                <p className="card-text py-3">A JavaScript based Image Gallery.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 my-4">
                        <div className="card" >
                            <h2  className="text-center pt-2">Amazon Clone</h2>
                            <div className="card-body">
                                
                                <img src={img2} alt="" className="img-fluid" />
                                <p className="card-text py-3">An HTML and CSS based clone of the official Amazon website.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 my-4">
                      
                        <div className="card" >
                              <h2  className="text-center pt-2">Tic Tac Toe Game
                              </h2>
                            <div className="card-body">
                                
                                <img src={img3} alt="" className="img-fluid" />
                                <p className="card-text py-3">A JavaScript based Tic Tac Toe Game.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Project