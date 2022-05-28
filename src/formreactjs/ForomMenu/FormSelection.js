import React from "react";
import "./style.css"
const options = [
  {
    nameFruist: "Ca Phe Sua",
    price: 1000,
  },
  {
    nameFruist: "Ca phe da",
    price: 2000,

  },
  {
    nameFruist: "Sting Dau",
    price: 3000,
    
  },
  {
    
    nameFruist: "Tra da",
    price: 4000,

  },
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
          nameFruist: "",
          price: 0,
          tienthua:0,
          options:""
        }

    }
    
    change =(event)=>{
        let key = event.target.name;
        let value = event.target.value;
        this.setState({
            [key]: value
        })
    }
    onSubmithander=(event)=>{
       event.preventDefault();
      let priceInput = this.state.tien;
      let priceSelect = this.state.options.price;
      console.log(priceInput, priceSelect)
     
      
      
    }
       
    render() {
    return (
      <div id="App">
        <div className="select-container container">
          <form onSubmit={this.onSubmithander} className="form1">  
            <table width={700} className="tbl">
              <tbody><tr>
                  <td colSpan={2} id="td">Menu</td>
                </tr>
                <tr>
                  {options.map((els) => (
                      <tr >
                        <td>{els.nameFruist} __________________________________________ {els.price}$</td>
                        </tr>
                      ))}
                </tr>
                
              </tbody>
            </table>
            <table width={700} className="tbl">
              <tbody><tr>
                  <td colSpan={2} id="td">MỜI BẠN NHẬP</td>
                </tr>
                <tr>
                  <td>chọn thức uống</td>
                  <td>
                  <select class="form-select" value={this.state.options} aria-label="Default select example" name="drink"  onChange={this.change}>
                      {options.map((option) => (
                      <option  value={option.nameFruist}>{option.nameFruist}</option>
                      ))}
                  </select>
                  </td>   
                </tr>
                <tr>
                    <td>Nhập số tiền</td> 
                    <td> 
                      <input type="number" min={1000}  onChange={this.change} name="tien" id="tien" defaultValue="" />
                    </td>
                    
                </tr>
                <tr>
                  <td>Kết quả:</td>
                  <td>
                    <label>
                      <span>{this.noTyfile}</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Tiền thừa:</td>
                  <td>
                    <label>
                      <span>{101010110}</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td colSpan={6} align="center">
                    <label><input type="submit"  /></label>
                  </td>
                </tr>
              </tbody>
            </table>
          </form> 
        </div>
      </div>
    );
  }
}

export default App;