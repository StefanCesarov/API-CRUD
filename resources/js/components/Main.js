import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AdProduct from './AdProduct';
import Product from './Product';


class Main extends Component{
  constructor(){
    super();
    this.state = {
        products: [],
        currentProduct: null,
    }

    //this.handleClick = this.handleClick.bind(this);
  }  

  componentDidMount(){
      fetch('/api/proizvod')
      .then(response => {return response.json();})
      .then(products => { this.setState({products});});
  }

  renderProducts(){
      return this.state.products.map(product => {
          return (    
            <li key={product.id} onClick={
                () => this.handleClick(product)}>
                { product.naziv } 
            </li>   
      );});
  }

  handleClick(product) {
      this.setState({currentProduct:product});
  }

  render(){
      return (
          <div>
            <div>
            <h2>All products</h2>
            <ul>
                { this.renderProducts() }
            </ul>
            </div>
            <Product product={this.state.currentProduct} />
           
            </div>
      );
  }
 
}
/*
function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">All products</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
*/
export default Main;

if (document.getElementById('example')) {
    ReactDOM.render(<Main />, document.getElementById('example'));
}
