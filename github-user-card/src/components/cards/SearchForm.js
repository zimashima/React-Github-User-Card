import React, {Component} from 'react'

import {TextField} from '@material-ui/core'

class SearchForm extends Component {


    render() {
        return(
            <div>
                <TextField name="search" label="Search..."/>
            </div>
        )
    }
};

export default SearchForm;