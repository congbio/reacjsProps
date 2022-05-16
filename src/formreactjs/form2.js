
import React, {Component} from "react";
class Form2 extends Component {
    render() {
        return (
            <div className="container">
                <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="d-flex">
                    <div className="form-group form-check">
                        <input type="radio" className="form-form-check-input"  name="radioinput"id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> 
                    <div className="form-group form-check">
                        <input type="radio" className="form-form-check-input" name="radioinput" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> 
                    <div className="form-group form-check">
                        <input type="radio" className="form-form-check-input" name="radioinput" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                </div>
                 <div className="form-group">
                    <label for="exampleInputPassword1">Desscripton</label>
                    <input type="type" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
export default Form2;