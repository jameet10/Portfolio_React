function Progress()
{
    return(
    <>
    <h1 className="py-5 text-center"> Progress Report</h1>

    <section className="container">
        <div className="row">
            <div className="col-lg-6">
                <h3>HTML</h3>
                <div className="progress mb-5">
  <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h3>CSS</h3>
<div className="progress mb-5 ">
  <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            </div>
            <div className="col-lg-6">
                <h3>JavaScript</h3>
                <div className="progress mb-5 ">
  <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{width: '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h3>React</h3>
<div className="progress mb-5">
  <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{width: '30%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            </div>
        </div>
    </section>


    </>
    )
}

export default Progress