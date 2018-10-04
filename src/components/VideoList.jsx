// var VideoList = () => (
//   <div className="video-list">
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   </div>
// );

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated


// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
var VideoList = function(props){
    return(
      <ul className="video-list">
        {props.videos.slice(props.page*5,(props.page*5)+5).map((video,index)=>
              <VideoListEntry key={index} video ={video} state={props.state}  />
        )}
        <button onClick={()=>{
          if(props.page !== 0){
            props.state({page:props.page-1})
          }
        }
      }>DOWN</button>
      <div> {props.page+1} </div>
      <button onClick={()=>{
        if ((props.page+1)*5  !== props.videos.length) {
          props.state({page:props.page+1})
        }

      }
    }>UP</button>
      </ul>
    )
};
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};
window.VideoList = VideoList;
