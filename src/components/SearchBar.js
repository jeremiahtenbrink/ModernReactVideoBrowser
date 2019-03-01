import React, { Component } from "react";
import { Segment, Form, Label, Input, Container } from "semantic-ui-react";

class SearchBar extends Component {
    static defaultProps = {};
    
    static propTypes = {};
    
    state = { term: "" };
    
    onInputChange = e => {
        this.setState( { term: e.target.value } );
    };
    
    onSearch = e => {
        e.preventDefault();
        
        this.props.onSearch(this.state.term);
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
