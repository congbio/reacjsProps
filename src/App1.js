
function NumberTwo(props){
  return(
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="card">
            <div >
            <img src={props.linkanh} className="card-img-top" alt="image" />
            <div className="card-body">
              <h5 className="card-title">{props.tieude}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p>Giá sản phẩm: 400K</p>
            </div>
          </div>
      </div>
    </div>
  );
}



function App1() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <NumberTwo tieude = "sản phẩm 1" linkanh ="https://vtv1.mediacdn.vn/zoom/550_339/2018/11/13/photo-11-15421149127921523173283.jpg"></NumberTwo>
          <NumberTwo tieude = "sản phẩm 2" linkanh ="https://vtv1.mediacdn.vn/zoom/550_339/2018/11/13/photo-11-15421149127921523173283.jpg"></NumberTwo>
          <NumberTwo tieude = "sản phẩm 3" linkanh ="https://travelgear.vn/blog/wp-content/uploads/2019/08/dia-diem-du-lich-va-canh-dep-nhat-ban.jpg"></NumberTwo>
          <NumberTwo tieude = "sản phẩm 4" linkanh ="https://travelgear.vn/blog/wp-content/uploads/2019/08/dia-diem-du-lich-va-canh-dep-nhat-ban.jpg"></NumberTwo>
        </div>
      </div>
    </div>
  );
}

export default App1;
