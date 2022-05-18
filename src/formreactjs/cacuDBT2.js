import React, { Component } from 'react';
import PropTypes from 'prop-types';

class cacuDBT2 extends Component {
   constructor (props){
   super (props);
   this.state={
       hk1: 0,
       hk2: 0,
       Mediumscore:'',
       academicPower:'',
       KQ:''
  };
myChangeHandler=(event) =>{
   let key=event.target.name; // laays gia tri name cua the input
   let value=event.target.value; // lay gia tri cua the input
   this.setState ({
       //firstName: event.target.value,
       //password: event.target.value // cho phep lay gia tri cacoinput type=text
       [key]: value
   });
    mySubmitHander = (event) => {

        event.preventDefault ();
        let hk1=this.state.hk1;
        let hk2=this.state.hk2;
        let Medium=0;
        if (!Number (hk1) || !Number (hk2)){
            alert ("Score semester must beanumber");
        }
        else{
            Medium= (parseFloat (hk1) +parseFloat (hk2))/3;
            this.setState ({MediumScore:Medium});
                if (Medium>=9){
                this.setState ({KQ: "HSG"});
                this.setState ({academicPower: "Được lên lớp"});
                }
                    else if (Medium>=7 && Medium<9){
                    this.setState ({KQ: "HSK"});
                    this.setState ({academicPower: "Được lên lớp"});
                    }
                    else if (Medium>=5 && Medium<7){
                    this.setState ({KQ: "HSTB"});
                    this.setState ({academicPower: "Đuợc lên lớp"});
                    }
                    else{
                    this.setState ({KQ: "HSY"});
                    this.setState ({academicPower: "Không được lên lớp"});
                    console.log (event);
                     }
            }
        


    

}