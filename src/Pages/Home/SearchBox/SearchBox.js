import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './SearchBox.css'

const SearchBox = () => {
    return (
        <div>
            <div className='d-flex mt-4 search-container justify-content-center align-items-center'>
                <div className='mb-5'>
                    <h1>Best Food For Your Belly</h1>
                    <InputGroup className="mb-5">
                        <FormControl className='rounded-pill border-0 ps-4'
                            placeholder="Search Food Items"
                            aria-label="Search Food Items"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2" className='btn btn-danger rounded-pill px-4'>Search</InputGroup.Text>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;