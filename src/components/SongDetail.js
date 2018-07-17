import React from 'react';

  const SongDetail = (props) => {
    if(!props.children) return null;

    function cutLink (link) {
      let cutted = link.slice(14)
      console.log(cutted);
      let newLink = "https://embed.music" + cutted
      console.log(newLink);
      return newLink
    }

    return (
      <div className="songDiv" class="songCss" >
        <h4>{props.children["im:artist"].label}</h4>
        <p>{props.children["im:name"].label}</p>
         <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src={cutLink(props.children.id.label)} width="660"></iframe>
      </div>
    )
  }

export default SongDetail
