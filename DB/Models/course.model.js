import { sql_Config } from "../connection";


const Course = sql_Config.define('Course', {
  courseName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

Course.hasMany(WeekContent);
WeekContent.belongsTo(Course);

export default Course;
