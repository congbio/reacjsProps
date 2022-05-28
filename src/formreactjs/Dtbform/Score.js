import React, { Component } from "react";
class Score1 extends Component {
    constructor (props) {
        super (props);
        this.state = {
            hk1: 0,
            hk2: 0,
            MediumScore: '',
            academicPower: '',
            RQ:''
        };
    }
    myChangeHandler = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        this.setState({
            [key]: value
        })
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        let hk1 = this.state.hk1;
        let hk2 = this.state.hk2;
        console.log(hk1, hk2);
        let Medium = 0;
        if (!Number (hk1) || !Number(hk2)) {
            alert("Score semester must be a number");
        }else{
            Medium=(parseFloat(hk1) + parseFloat(hk2)*2)/3;
           
            this.setState({MediumScore:Medium});
            if(Medium>=9){
                this.setState({KQ: "HSG"});
                this.setState({academicPower: "Duoc len lop"});
            }
            else if(Medium>=7 && Medium<9){
                this.setState({KQ: "HSK"});
                this.setState({academicPower: "Duoc len lop"});
            }
            else if(Medium>=5 && Medium){
                this.setState({KQ: "HSTB"});
                this.setState({academicPower: "Duoc len lop"});
            }
            else{
                this.setState({KQ: "HSY"});
                this.setState({academicPower: "Khong duoc len lop"});
            }
        }
        console.log(event);
    }
    render() {
        return (
            <div className="container">
                <form name="form" onSubmit={this.mySubmitHandler} >
                    <table width={670} height={177} border={0} align="center" bgcolor="ffcccc">
                        <tbody>
                            <tr bgcolor>
                                <td colSpan={2} align="center" bgcolor="#ff0099">
                                    <font color size={5}>
                                        <b> KET QUA HOC TAP</b>
                                    </font>
                                </td>
                            </tr>
                            <tr>
                                <td width={125}><span>Diem HK1: </span></td>
                                <td width={261}> 
                                    <label>
                                        <input name="hk1" type="number" min="0" max="10" size={20} onChange={this.myChangeHandler}/>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td width={125}><span>Diem HK2: </span></td>
                                <td width={261}> 
                                    <label>
                                        <input name="hk2" type="number" min="0" max="10" onChange={this.myChangeHandler}/>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td><span>Diem TB: </span></td>
                                <td width={261}> 
                                    <label>
                                        <input name="MediumScore" type="text" readOnly value={this.state.MediumScore} onChange={this.myChangeHandler}/>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td><span>Ket qua: </span></td>
                                <td> 
                                    <label>
                                        <input name="ketqua" type="text" value={this.state.KQ} />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td><span>Xep loai hoc luc: </span></td>
                                <td> 
                                    <label>
                                        <input name="x" type="text" value={this.state.academicPower} />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} align="center"><button type="submit">Gui</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default Score1






