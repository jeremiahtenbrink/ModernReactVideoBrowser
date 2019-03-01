import React from "react";
import { Segment, Embed, Grid } from "semantic-ui-react";

const VideoDetails = ( { video } ) => {
    if( !video ) {
        return <Grid.Column key={ "1" } width={ 10 }>
            Loading....
        </Grid.Column>;
    }
    
    return (
        <Grid.Column key={ "1" } width={ 10 }>
            <Embed
                active={ true }
                autoplay={ true }
                color='green'
                hd={ false }
                id={ video.id.videoId }
                iframe={ {
                    title: "video play",
                    allowFullScreen: true,
                    style: {
                        padding: 10,
                    },
                } }
                placeholder={ video.snippet.thumbnails.high.url }
                source='youtube'
            />
            <Segment>
                <h4>{ ( video.snippet && video.snippet.title ) }</h4>
                <p>{ video.snippet.description }</p>
            </Segment>
        </Grid.Column>
    
    );
};

VideoDetails.propTypes = {};
VideoDetails.defaultProps = {};

export default VideoDetails;
