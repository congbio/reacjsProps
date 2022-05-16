import React, { Component } from "react";
import Cocula from "./concacu";
export default class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hk1: 0,
            hk2: 0,
            avg: 0,
            result: "",
            xl: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange = (event) => {
        let key = event.target.name;
        let val = event.target.value;

        this.setState({ [key]: val });
        this.setState((state) => ({
            avg: parseFloat((parseFloat(state.hk1) + parseFloat(state.hk2)) / 2),
        }));
        this.setResult();
        this.setXL();
    };
    handleSubmit = (event) => {
        event.preventDefault();
        alert("Bạn là học sinh" + this.state.xl);
    };
    setResult = () => {
         (this.state.avg > 4.5) ? this.setState({ result: "Được lên lớp" })
        : this.setState({ result: "Ở lại lớp" });
    };
    setXL = () => {
        if (this.state.avg < 4.5) this.setState({ xl: "yếu" });
        else if (this.state.avg < 6.5) this.setState({ xl: "trung bình" });
        else if (this.state.avg < 8) this.setState({ xl: "khá" });
        else if (this.state.avg < 9) this.setState({ xl: "giỏi" });
        else if (this.state.avg < 10) this.setState({ xl: "Xuất sắc" });
    };
    render() {
        return (
            <div>
            <Cocula />   
            </div>
        );
    }
}