import { LineChart as LChart, Line ,XAxis,YAxis } from "recharts";

const LineChart = () => {
  const subjectMarksData = [
    {
      "name": "Student 1",
      "math_marks": 85,
      "physics_marks": 78,
      "chemistry_marks": 92
    },
    {
      "name": "Student 2",
      "math_marks": 78,
      "physics_marks": 85,
      "chemistry_marks": 88
    },
    {
      "name": "Student 3",
      "math_marks": 92,
      "physics_marks": 89,
      "chemistry_marks": 90
    },
    {
      "name": "Student 4",
      "math_marks": 63,
      "physics_marks": 70,
      "chemistry_marks": 75
    },
    {
      "name": "Student 5",
      "math_marks": 95,
      "physics_marks": 92,
      "chemistry_marks": 96
    },
    {
      "name": "Student 6",
      "math_marks": 70,
      "physics_marks": 68,
      "chemistry_marks": 72
    },
    {
      "name": "Student 7",
      "math_marks": 88,
      "physics_marks": 84,
      "chemistry_marks": 87
    },
    {
      "name": "Student 8",
      "math_marks": 75,
      "physics_marks": 72,
      "chemistry_marks": 78
    },
    {
      "name": "Student 9",
      "math_marks": 82,
      "physics_marks": 79,
      "chemistry_marks": 85
    },
    {
      "name": "Student 10",
      "math_marks": 91,
      "physics_marks": 88,
      "chemistry_marks": 92
    }
  ]

  return (
    <div>
      <LChart width={800} height={400} data={subjectMarksData}>
        <XAxis dataKey={'name'}/>
        <YAxis />
      <Line dataKey='math_marks'stroke="red"></Line>
      <Line dataKey='physics_marks' stroke="green"></Line>
      <Line dataKey='chemistry_marks' stroke="blue"></Line>
      </LChart>
      
    </div>
  );
};

export default LineChart;
