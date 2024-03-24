import { sql_Config } from "../connection";





const Exam = sql_Config.define('Exam', {
  examTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

Exam.hasMany(Question);
Question.belongsTo(Exam);

