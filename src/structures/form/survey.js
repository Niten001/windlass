const surveyQuestions = require("./surveyData.js").surveyQuestions;

class SurveyRadioButtons {
  constructor(questionNumber) {
    this.questionNumber = questionNumber;
  }

  render() {
    return (
      `
            <input type="radio" class="radio-button" name="surveyQ` +
      this.questionNumber +
      `"/>
            <label class="radio-button" for=surveyQ` +
      this.questionNumber +
      `">Agree</label>
            <input type="radio" class="radio-button" name="surveyQ` +
      this.questionNumber +
      `" checked/>
            <label class="radio-button" for=surveyQ` +
      this.questionNumber +
      `">Neutral</label>
            <input type="radio" class="radio-button" name="surveyQ` +
      this.questionNumber +
      `"/>
            <label class="radio-button" for=surveyQ` +
      this.questionNumber +
      `">Disagree</label>
        `
    );
  }
}

module.exports = class SurveyQuestions {
  constructor() {}

  render() {
    let surveyQuestionsHTML = "";
    for (let i = 0; i < surveyQuestions.length; i++) {
      const surveyRadioButtons = new SurveyRadioButtons(i);
      surveyQuestionsHTML +=
        `
                <div><p>` +
        surveyQuestions[i].question +
        `</p>
                    ` +
        surveyRadioButtons.render() +
        `
                </div>
                <div class="seperator"></div>
            `;
    }

    return (
      `
            <div class="survey-container">
                ` +
      surveyQuestionsHTML +
      `
            </div>
        `
    );
  }
};
