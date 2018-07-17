import React from 'react';
import SongsList from '../components/SongsList';

class ChartsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
    .then(response => response.json())
    .then(songsData => this.setState({songs: songsData.feed.entry}))
    .catch(err => console.error(err));
  }


  render(){
    return (
      <div>
        <h1>Charts Container</h1>
        <SongsList data={this.state.songs} />


      </div>
    );
  }

}




export default ChartsContainer;
