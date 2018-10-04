// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> view goes here</h5></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      video:this.props.video[0],
      videos:this.props.video,
      key: window.YOUTUBE_API_KEY,
      query: 'corgis',
      maxResults: 5,
      videoEmbeddable: "true",
      type:'video'
    };
  }
  searchClick(text){
    this.setState({query:text});
    this.componentDidMount(text);
  }
  componentDidMount(text){
    var context = this;
    var API_key = window.YOUTUBE_API_KEY;
    var maxResults = 5;
    var url = "https://www.googleapis.com/youtube/v3/search?key=API_key"+ "&q="+ text +"&part=snippet&maxResults="+maxResults;

    fetch(url).then(function(response){
      if(response.status >= 400){
        throw new Error('Bad response');
      }
      return response.json();
    }).then(function(data){
      context.setState({videos:data.items,video:data.items[0]});
    }).catch(error => {
      console.log(error);
    });
  }
  render() {
    return (
        <div>
        <nav className="navbar">
            <Search searchClick={this.searchClick.bind(this)}/>
        </nav>
        <div className="row">
            <VideoPlayer video = {this.state.video}/>
            <VideoList video={this.state.video} videos={this.state.videos} state={this.setState.bind(this)}/>
        </div>
      </div>
    )
  }
}
window.App = App;
