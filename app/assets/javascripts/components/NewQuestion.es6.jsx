class NewQuestion extends React.Component {
  constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}


  handleSubmit(e) {
    e.preventDefault();
    var newQuestionTitle = this.refs.questionTitle.value,
    newQuestionBody = this.refs.questionBody.value;

  $.ajax({
    url: '/questions',
    method: 'POST',
    data: {
      question: {
        title: newQuestionTitle,
        body: newQuestionBody
      }
    }
  }).done((response) => {
    this.props.updateQuestions(response);
    this.refs.questionTitle.value = ""
    this.refs.questionBody.value = ""
  })
}

  render() {
    return (
      <div id="new-question-box">
        <h2>Ask a question</h2>
        <form id="question-form" onSubmit={this.handleSubmit}>
        Title: <input ref="questionTitle" name="question[title]"/><br />
          <textarea ref="questionBody" cols="40" rows="10" maxLength="200" name="question[body]" placeholder="question"></textarea>
          <input type="submit" value="Ask" />
        </form>
      </div>

    )
  }
}
