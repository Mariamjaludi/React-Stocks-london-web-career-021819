import React from 'react'
export default class Stock extends React.Component {

  render () {
    const {stock, handleClick} = this.props
    return (
      <div onClick={ () => handleClick(stock)}>

        <div className="card" >
          <div className="card-body">
            <h5 className="card-title">{
                stock.name
              }</h5>
            <p className="card-text">
                {stock.ticker} : {stock.price}
              </p>
          </div>
        </div>

      </div>
    )
  }
}
