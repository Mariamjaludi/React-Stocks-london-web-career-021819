import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const URL = 'http://localhost:3000/stocks'
class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    sort: '',
    filter: ''
  }

  componentDidMount(){
    fetch(URL)
      .then(r => r.json())
      .then(stocks => this.setState({stocks}))
  }

  addToPortfolio = stock => {
    if (!this.state.portfolio.includes(stock)){
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      })
    }
  }

  sellStock = stock =>
    this.setState({
      portfolio: this.state.portfolio.filter(s => s !== stock)
    })


  setSort = sort => this.setState({sort})
  setFilter = filter => this.setState({filter})


  sortedStocks = stocks => {
    const {sort} = this.state
    if ( sort === "Alphabetically") {
      return stocks.sort((stockA, stockB) => (stockA.name > stockB.name) ? 1: -1)
    } else if (sort === "Price") {
      return stocks.sort((stockA, stockB) => (stockA.price > stockB.price) ? 1: -1)
    } else {
      return stocks
    }
  }

  filteredStocks = () => {
    if (this.state.filter !== ''){
      return this.state.stocks.filter(stock => stock.type === this.state.filter)
    } else {
      return this.state.stocks
    }
  }

  displayedStocks = () =>
    this.sortedStocks(this.filteredStocks())



  render() {
    return (
      <div>
        <SearchBar setSort={this.setSort} setFilter={this.setFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer handleClick={this.addToPortfolio} stocks={this.displayedStocks()}/>

            </div>
            <div className="col-4">

              <PortfolioContainer handleClick={this.sellStock} portfolio={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
