import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'
// import PropTypes from 'prop-types'
//maybe books should be divided into three kinds of books corresponding to three bookshelves
// or, we may add a var in each book to represent this state(shelf) right now
//the formor strategy means we need to change more info(add and delete the whole book element) each time we want to
// change the state of a book, therefore, I personally reckon the latter one is better in this issue
//but if I choose the latter one, it means that I need to iterate all books to put them in corresponding shelves

class BooksApp extends React.Component {
  state = {
    crbooks: [],
    wtrbooks: [],
    hrbooks: []
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then((books)=>{
      this.setState({
        crbooks:books.filter((b)=>{
          return b.shelf === 'currentlyReading'
        }),
        wtrbooks:books.filter((b)=>{
          return b.shelf === 'wantToRead'
        }),
        hrbooks:books.filter((b)=>{
          return b.shelf === 'read'
        })
      })
    })
  }

  render() {
    BooksAPI.getAll()
    .then((books)=>{
      console.log(books.filter((b)=>{
        return b.shelf !== 'currentlyReading' && b.shelf !== 'wantToRead'
      }))
    })
    
    return (
      <div className="app">
        <Route exact path='/' render={()=>(
          <MainPage 
            crbooks={this.state.crbooks}
            wtrbooks={this.state.wtrbooks}
            hrbooks={this.state.hrbooks}
          />
        )}/>
        <Route path='/search' render={()=>(
          <SearchPage />
        )}/>
      </div>
    )
  }
}

export default BooksApp
