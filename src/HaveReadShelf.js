import React, { Component } from 'react'
import ListBooks from './ListBooks'

class HaveReadShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Have Read</h2>
        <ListBooks books={this.props.hrbooks} />
      </div>
    )
  }
}

export default HaveReadShelf