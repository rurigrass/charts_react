import React from 'react';

  const SongDetail = (props) => {
    if(!props.children) return null;

    function cutLink (link) {
      let cutted = link.slice(14)
      let newLink = "https://embed.music" + cutted
      return newLink
    }

    return (
      <div className="songDiv" className="songCss">
        <hr></hr>
        <h4><span className="position">{props.position}</span> {props.children["im:artist"].label} - <span className="songName">{props.children["im:name"].label}</span></h4>
         <iframe allow="autoplay *; encrypted-media *;" frameBorder="0" height="150" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src={cutLink(props.children.id.label)} width="660"></iframe>
      </div>
    )
  }

export default SongDetail
