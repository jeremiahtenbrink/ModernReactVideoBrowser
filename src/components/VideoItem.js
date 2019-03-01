import React from "react";
import { List, Image, Grid } from "semantic-ui-react";

const VideoItem = ( { video, onVideoSelect } ) => {
    return (
        
        <List.Item onClick={ () => onVideoSelect( video ) }>
            <Grid>
                <Grid.Column width={ 5 }>
                    <Image
                        src={ video.snippet.thumbnails.default.url }
                        floated="left"
                        size={ "tiny" }
                        alt={ video.snippet.title } />
                </Grid.Column>
                
                <Grid.Column width={ 11 }>
                    <List.Content floated="right" verticalAlign='middle'>
                        <List.Header>{ video.snippet.title }</List.Header>
                        <p>{ video.snippet.description }</p>
                    </List.Content>
                </Grid.Column>
            </Grid>
        
        </List.Item>
    
    );
};

VideoItem.propTypes = {};
VideoItem.defaultProps = {};

export default VideoItem;
