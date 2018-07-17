import React from 'react';
import SongDetail from './SongDetail.js';

class SongsList extends React.Component {

  render(){

    const songDetailComponents = this.props.data.map((song, index) => {
      return <SongDetail key={index}>{song}</SongDetail>
    })

    return(
      <div>
        {songDetailComponents}
      </div>
    )
  }

}

export default SongsList;
