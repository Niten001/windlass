const { Container, Seperator } = require("../../components").Layout;
const Text = require("../../components").Typography.Text;
const surveyQuestions = require("./surveyData").surveyQuestions;

function SurveyRadioButtons(questionNumber) {
  return `<input type="radio" class="radio-button" name="surveyQ${questionNumber}"/>
    <label class="radio-button" for=surveyQ${questionNumber}">Agree</label>
    <input type="radio" class="radio-button" name="surveyQ${questionNumber}" checked/>
    <label class="radio-button" for=surveyQ${questionNumber}">Neutral</label>
    <input type="radio" class="radio-button" name="surveyQ${questionNumber}"/>
    <label class="radio-button" for=surveyQ${questionNumber}">Disagree</label>
    <input type="radio" class="radio-button" name="surveyQ${questionNumber}"/>`;
}

module.exports = function SurveyQuestions() {
  return Container({
    class: "survey-container",
    content: surveyQuestions
      .map((surveyQuestion, i) => {
        return Container({
          content: [
            Text({
              paragraph: true,
              content: surveyQuestion.question,
            }),
            SurveyRadioButtons(i),
            Seperator(),
          ].join("\n"),
        });
      })
      .join("\n"),
  });
};
