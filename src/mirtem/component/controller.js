// import Header from "./Header";
import Left from "./left";
import Right from "./right";
const Controller =() =>{

  return(
     <div className="container">
          
          <section>
            <div className="row">
             <Left/>
              <Right/>
            </div>
          </section>
    </div>
  )
}
export default Controller;