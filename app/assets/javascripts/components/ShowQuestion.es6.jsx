class ShowQuestion extends React.Component {
  constructor(){
    super();
    this.state = {
      question: null,
      answers: [],
      comments: []
    }
    //BINDING IF U NEED IT
  }

componentDidMount() {
  $.ajax({
    method: 'get',
    url: '/questions/show.json'
  }).done((response) => {
    this.setState({
      question: response
    })
  })
}

render(){
  return(
    <div>
      <h1>yo</h1>
    </div>
  )
}














}
