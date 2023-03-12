export interface IAnswer {
  type: string;
  attributes: IAnswerAttributes;
}

interface IAnswerAttributes {
  answers: IAnswers[];
}
interface IAnswers {
  questionId: string;
  answer: any;
}
interface IQuestions {
  questionId: string;
  questionType: questionType;
  label: string;
  required: boolean;
  attributes?: IAttributeValues;
}
interface IAttributes {
  title: string;
  description: string;
  questions: IQuestions[];
}

export interface IAttributeValues {
  min: number;
  max: number;
}
export interface ISurvey {
  type: string;
  attributes: IAttributes;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}

export interface ISurveyFormError {
  errors: ISurveyError[];
}

interface ISurveyError {
  source: IFormErrorSource;
  detail: string;
}

interface IFormErrorSource {
  pointer: string;
}
type questionType = "text" | "rating";
