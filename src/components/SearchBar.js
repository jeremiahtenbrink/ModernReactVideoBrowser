import React, { Component } from "react";
import { Segment, Form, Label, Input, Container } from "semantic-ui-react";
import PropTypes from "prop-types";

class SearchBar extends Component {
    static defaultProps = {};
    
    static propTypes = {};
    
    state = { term: "" };
    
    onInputChange = e => {
        this.setState( { term: e.target.value } );
    };
    
    onSearch = e => {
        e.preventDefault();
        
        //Todo: make sure we call callback from parent component
    };
    
    render() {
        return (
            <Container>
                <Segment>
                    <Form onSubmit={ this.onSearch }>
                        <Form.Field>
                            <Label>Video Search</Label>
                            <Input
                                name={ "search" }
                                type={ "text" }
                                icon={ "search" }
                                value={ this.state.term }
                                onChange={ this.onInputChange } />
                        </Form.Field>
                    </Form>
                </Segment>
            </Container>
        
        );
    }
    
}

export default SearchBar;
