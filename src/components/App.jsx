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
// everything
// range(5*page-5*page+5)
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      video:this.props.video[0],
      fullCollection:this.props.video,
      videos:this.props.video,
      key: window.YOUTUBE_API_KEY,
      query: 'corgis',
      maxResults: 10,
      videoEmbeddable: "true",
      type:'video',
      autoplay: 0,
      autoplayBool: false,
      page: 0
    };

  }
  searchClick(text){
    this.setState({query:text});
    this.componentDidMount(this.state.query);
  }
  componentDidMount(){
    var context = this;
    var maxResults = 50;
    var url = "https://www.googleapis.com/youtube/v3/search?key=REDOAPIKEY"+ "&q="+ this.state.query +"&part=snippet&maxResults="+maxResults;

    fetch(url).then(function(response){
      if(response.status >= 400){
        throw new Error('Bad response');
      }
      return response.json();
    }).then(function(data){
      console.log('DATA',data)
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
          <VideoPlayer video = {this.state.video} autoplayBool = {this.state.autoplayBool} autoplay = {this.state.autoplay} state = {this.setState.bind(this)}/>
          <VideoList page={this.state.page} video={this.state.video} videos={this.state.videos} state={this.setState.bind(this)}/>
        </div>
      </div>
    );
  }
}
window.App = App;
