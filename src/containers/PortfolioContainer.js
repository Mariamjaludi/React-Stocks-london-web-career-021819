import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const {portfolio, handleClick} = this.props

    return (
      <div>
        <h2>My Portfolio</h2>
          {
            portfolio.map(stock => <Stock stock={stock} key={stock.id} handleClick={handleClick}/>)//render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
