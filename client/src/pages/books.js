import React, { Component } from 'react';
import API from "../../utils/API";


class Books extends Component {

    state = {
        books: [],
        title: "",
        author: "",
        synopsis: ""
    }

componentDidMount() {
    this.loadBooks();
}

loadBooks = () =>{
    API.getBooks.then(res =>{
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    }).catch(err => console.log(err))
};

deleteBook = () =>{
    API.deleteBook(id)
    this.setState(res => this.loadBooks())
    .catch(err => console.log(err))
};

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    })
};

handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author){
        API.saveBook({
        title: this.State.title,
        author: this.state.author,
        synopsis: this.state.synopsis
        })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };





    render() {
        return (
            <div>
                <Container fluid>
                    
                </Container>
            </div>
        );
    }
}

export default Books;