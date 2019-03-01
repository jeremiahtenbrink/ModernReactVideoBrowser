import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "./youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import { Grid, Container } from "semantic-ui-react";
import "./style.scss";

class App extends Component {
    static defaultProps = {};
    
    static propTypes = {};
    
    state = {
        videos: [],
        selectedVideo: null
    };
    
    componentDidMount() {
        this.onSearch( "funny" );
    }
    
    onSearch = term => {
        youtube.get( "/search", {
            params: {
                q: term,
            }
        } ).then( res => this.setState( {
            videos: res.data.items,
            selectedVideo: res.data.items[ 0 ],
        } ) )
            .catch( err => console.log( err ) );
    };
    
    onVideoSelect = selectedVideo => {
        this.setState( { selectedVideo } );
    };
    
    render() {
        return (
            <div>
                
                <SearchBar onSearch={ this.onSearch } />
                <Container>
                    <Grid>
                        <Grid.Row>
                            <VideoDetails video={ this.state.selectedVideo } />
                            <VideoList
                                videoList={ this.state.videos }
                                onVideoSelect={ this.onVideoSelect } />
                        </Grid.Row>
                    </Grid>
                </Container>
            
            </div>
        );
    }
}

export default App;
