import { reactive } from 'vue'

export type getAllSubjectsDetailsType = () => ISubject[] | undefined
export type getSubjectDetailsByIdType = (id: number) => ISubject | undefined
export type getQuestionsDetailsBySubjectIdType = (
  subjectId: number
) => IQuestionDetails[] | undefined

export interface ISubject {
  id: number
  name: string
}

export interface IGetData {
  getAllSubjectsDetails: getAllSubjectsDetailsType
  getSubjectDetailsById: getSubjectDetailsByIdType
  getQuestionsDetailsBySubjectId: getQuestionsDetailsBySubjectIdType
}

export interface IQuestionDetails {
  text: string
  image: {
    url: string
    alt: string
  }
  answers: string[]
}

export interface IQuestion {
  subjectId: number
  questionsDetails: IQuestionDetails[]
}

const subjectsDetails = reactive<ISubject[]>([
  { id: 1, name: 'Physics' },
  { id: 2, name: 'Biology' },
])

const questions = reactive<IQuestion[]>([
  {
    subjectId: 1,
    questionsDetails: [
      {
        text: 'What is Physics?',
        image: {
          url: 'https://www.environmentalscience.org/wp-content/uploads/2018/08/physics-640x416.jpg',
          alt: 'physics',
        },
        answers: ['one', 'two', 'three', 'four'],
      },
      {
        text: 'What is Physics 2?',
        image: {
          url: 'https://images.theconversation.com/files/191827/original/file-20171025-25516-g7rtyl.jpg?ixlib=rb-1.1.0&rect=0%2C70%2C7875%2C5667&q=45&auto=format&w=926&fit=clip',
          alt: 'physics',
        },
        answers: ['one', 'two', 'three', 'four'],
      },
    ],
  },
  {
    subjectId: 2,
    questionsDetails: [
      {
        text: 'What is Biology?',
        image: {
          url: 'https://thumbs.dreamstime.com/z/biology-hand-drawn-doodles-lettering-education-science-vector-white-background-135246167.jpg',
          alt: 'biology',
        },
        answers: ['one', 'two', 'three', 'four'],
      },
    ],
  },
])

const getQuestionsDetailsBySubjectId: getQuestionsDetailsBySubjectIdType = (
  subjectId: number
): IQuestionDetails[] | undefined => {
  return questions.find((x: IQuestion) => x.subjectId == subjectId)
    ?.questionsDetails
}

const getAllSubjectsDetails: getAllSubjectsDetailsType = (): ISubject[] => {
  return subjectsDetails
}

const getSubjectDetailsById: getSubjectDetailsByIdType = (
  id: number
): ISubject | undefined => {
  return subjectsDetails.find((x: ISubject) => x.id == id)
}

export const getData = (): IGetData => {
  return {
    getAllSubjectsDetails,
    getSubjectDetailsById,
    getQuestionsDetailsBySubjectId,
  }
}
