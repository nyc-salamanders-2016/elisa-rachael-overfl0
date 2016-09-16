class AppView extends React.Component {
  constructor(){
    super()
    this.state = {
      questions: []
    }
    this.renderNewQuestions = this.renderNewQuestions.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'get',
      url: '/questions.json'
    }).done((response) => {
      this.setState({
        questions: response
      })
    })
  }

  renderNewQuestions(newQuestion) {
    this.setState({
      questions: newQuestion.concat(this.state.questions)
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
