class AppView extends React.Component {
  constructor(){
    super()
    this.state = {
      questions: []
    }
    this.renderNewQuestions = this.renderNewQuestions.bind(this);
  }

  componentDidMount() {
    this.setState({
      questions: JSON.parse(this.props.questions)
    })
  }

  renderNewQuestions(newQuestion) {
    this.setState({
      questions: [newQuestion].concat(this.state.questions)
    })
  }

  render(){
    return(
      <div>
        <h2> All Questions </h2>

        <QuestionIndex questions={this.state.questions} />

        <NewQuestion updateQuestions={this.renderNewQuestions}/>
      </div>
    )
  }
}
