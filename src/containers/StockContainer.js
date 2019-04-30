import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {


  render() {
    const {stocks, handleClick} = this.props
    return (
      <div>
        <h2>Stocks</h2>
        {
          stocks.map(stock => <Stock stock={stock} handleClick={handleClick} key={stock.id}/>)//render the list of stocks here
        }
      </div>
    );
  }

}

export default StockContainer;
