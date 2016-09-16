class QuestionIndex extends React.Component {
  componentDidMount() {
    // debugger;
  }

  render(){
    return(
      <ul>
      {
        this.props.questions.map((question, index) => {
          return (<QuestionView key={index} data={question} />)
        })
      }

      </ul>
    )
  }
}
