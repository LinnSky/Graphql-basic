import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { getAuthorsQuery, ADD_BOOK, getBooksQuery } from '../queries/queries';

function AddBook() {
    
    const {loading, data} = useQuery(getAuthorsQuery)

    const [addBook] = useMutation(ADD_BOOK)

    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    const displayAuthors = () => {        
        if(loading){
            return(<option>Loading Authors..</option>)
        }else{
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>{ author.name }</option>
                )
            })
        }
    }

    const submitForm = (e) => {
        e.preventDefault()
        addBook({variables: {name, genre, authorId}, refetchQueries: [{query: getBooksQuery}]})
    }

    return (
        <form id="id" onSubmit={submitForm}>
            <div className="field">
                <label>Book Name:</label>
                <input type="text" onChange={e => setName(e.target.value)}/>
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={e => setGenre(e.target.value)}/>
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={e => setAuthorId(e.target.value)}>
                    <option>Select author</option>
                    {displayAuthors()}
                </select>
            </div>

            <button>+</button>
        </form>
    )
}

export default AddBook;