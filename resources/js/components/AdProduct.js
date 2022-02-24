import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AdProduct extends Component {

    constructor (props) {
        super(props)

        this.state = {

            newProduct : {
                title : '',
                price : '',
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        
    }

    handleInput (key, e) {

        var state = Object.assign({}, this.state.newProduct)
        state[key] = e.target.value;
        this.setState({newProduct: state});
    }


    handleSubmit(e) {

        e.preventDefault();
        this.props.onAd(this.state.newProduct);

    }

    render () {

        retur (
            <div> 
                <h2> Add new product </h2>
                <form onSubmit={this.handleSubmit}>
                    <label> Title: 
                    { /*On every keystroke, the handeInput method is invoked */ }
                        <input type="text" onChange={(e)=>this.handleInput('title',e)} />
                    </label>
                    
                    <label> Price: 
                        <input type="text" onChange={(e)=>this.handleInput('price',e)} />
                    </label>

                  <input type="submit" value="Submit" />
                </form>
      
            </div>);
       
    }


}

export default AdProduct;