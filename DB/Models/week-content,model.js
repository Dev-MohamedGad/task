import { sql_Config } from "../connection";
import Course from "./course.model";



const WeekContent = sql_Config.define('WeekContent', {
  contentType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

WeekContent.belongsTo(Course);
Course.hasMany(WeekContent);

WeekContent.hasOne(Exam);
Exam.belongsTo(WeekContent);

export default WeekContent