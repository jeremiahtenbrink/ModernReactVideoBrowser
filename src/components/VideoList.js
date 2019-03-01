import React from "react";
import VideoItem from "./VideoItem";
import { Grid, Segment, List } from "semantic-ui-react";

const VideoList = ( { videoList, onVideoSelect } ) => {
    return (
        <Grid.Column key={ "2" } width={ 6 }>
            <Segment>
                <List selection relaxed divided size="big" animated celled>
                    { ( videoList && videoList.map( video => {
                        return <VideoItem
                            key={ video.id.videoId }
                            onVideoSelect={ onVideoSelect }
                            video={ video } />;
                    } ) ) }
                </List>
            </Segment>
        </Grid.Column>
    );
};

VideoList.propTypes = {};
VideoList.defaultProps = {};

export default VideoList;
