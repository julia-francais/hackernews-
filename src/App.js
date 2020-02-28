import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Search  from './components/Search'
import Table  from './components/Table'

const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  ];

const isSearched = searchTerm => 
   item => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        list,
        searchTerm: '',
      };
      this.onDismiss = this.onDismiss.bind(this)
      this.onSearchChange = this.onSearchChange.bind(this)
    }

  onDismiss(id){
    const updatedList = this.state.list.filter((item => item.objectID !== id));
    this.setState({ list: updatedList});
  }

  onSearchChange(event) {
    this.setState({searchTerm : event.target.value});
  }

  render() {
    const { searchTerm, list} = this.state;

    return (
    <div className="App">
      <Search 
        value={searchTerm}
        onChange={this.onSearchChange}
        />
      
      <Table
      list= {list}
      pattern = {searchTerm}
      onDismiss= {this.onDismiss}
      />
  </div>
    );
  }
}
  

  export default App;
  

