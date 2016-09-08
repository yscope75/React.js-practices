var React = require('react');
var Stream = require('./stream.react');
var Collection = require('./collection.react'); 

var Application = React.createClass({

    getInitialState: function() {
        return {
            collectionTweets: {}
        };
    },

    addTweetToCollection: function (tweet) {
        var collectionTweets = this.state.collectionTweets;

        collectionTweets[tweet.id] = tweet;

        this.setState({
            collectionTweets: collectionTweets
        });
    }

    removeTweetsFromCollection: function (tweet) {
        var collectionTweets = this.state.collectionTweets;

        delete collectionTweets[tweet.id];

        this.setState({
            collectionTweets: collectionTweets;
        });
    }

    removeAllTweets: function () {
        this.setState({
            collectionTweets: {}
        });
    }

    render: function() {
        return (
            <div className="contatiner-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <Stream onAddTweetToCollection={this.addTweetToCollection} />
                    </div>
                    <div classname="col-md-8">
                        <Collection
                            tweets={this.state.collectionTweets}
                            onRemoveTweetFromCollection={this.removeTweetsFromCollection}
                            onRemoveAllTweets={this.removeAllTweets}
                         />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Application;