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
    console.log(this.props.video[0])
    this.state = {
      curr:this.props.video[0],
      list:this.props.video
    }
  }
  handleClick(video){
    console.log(video)
  }
  render() {
    return (
        <div>
        <nav className="navbar">
            <Search />
        </nav>
        <div className="row">
            <VideoPlayer video = {this.state.curr}/>
            <VideoList video={this.props.video} list={this.state.list} state={this.setState.bind(this)}/>
        </div>
      </div>
    )
  }
}
window.App = App;
