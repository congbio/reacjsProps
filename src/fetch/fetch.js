import React,{Component} from "react";
import "./style.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            items:[],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://61bc10bed8542f0017824524.mockapi.io/name')
            .then(res=> res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }



    render() {
        const {isLoaded, items} = this.state;

        if(!isLoaded){
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h2>Ảnh áo</h2>
                <div className="wrapper">
                    {/* eslint-disable-next-line array-callback-return */}
                    {items.map(item => {
                        return(
                            <div className="macbook__cart" key={item.id}>
                                <img src={item.image} alt=""/>
                                <p>{item.title}</p>
                                
                               
                            </div>
                        )
                    })}
                </div>
            </div>

        );
    }
}


export default App;