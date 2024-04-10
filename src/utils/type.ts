export type Questions = {
    correct_answer: string,
    incorrect_answers: string[],
    question: string
}

type DataTypes = {
    id: number | string,
    name: string
}

export type Datasets = {
    category: DataTypes[],
    difficulty: DataTypes[],
    type: DataTypes[],
}

export type QuizInfo = {
    category: string,
    difficulty: string,
    type: string,
}