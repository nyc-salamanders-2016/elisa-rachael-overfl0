class QuestionView extends React.Component {
  constructor(){
    super()
    this.state = {
      detailsDisplayed: false
    }
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails(e){
    e.preventDefault();
    let shouldToggleDetails = !this.state.detailsDisplayed

    this.setState({
      detailsDisplayed: shouldToggleDetails
    })
  }

  render(){
    return(
      <div>
      <li onClick={this.toggleDetails}>
        <h3>{this.props.data.title}</h3> asked by <span id="author-info">{this.props.data.author.username}</span>
        { this.state.detailsDisplayed ? (<p> {this.props.data.body} - <a href={`/questions/${this.props.data.id}`}>See full question</a></p>)
         : null }
      </li>
      </div>
    )
  }
}
