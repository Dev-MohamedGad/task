import { sql_Config } from "../connection";



const Question = sql_Config.define('Question', {
  questionText: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  options: {
    type: DataTypes.JSON,
    allowNull: false
  },
  correctAnswer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userAnswer: {
    type: DataTypes.STRING 
  }
});


export default Question