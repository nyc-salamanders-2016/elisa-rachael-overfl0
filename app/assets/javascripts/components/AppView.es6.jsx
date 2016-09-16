class AppView extends React.Component {
  constructor(){
    super()
    this.state = {
      questions: []
    }
  }

  render(){
    return(
      <div>
        <h2> All Questions </h2>

        <QuestionIndex questions={JSON.parse(this.props.questions)} />

      </div>
    )
  }
}
