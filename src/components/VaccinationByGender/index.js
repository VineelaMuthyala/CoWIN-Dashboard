import {PieChart, Pie, Cell, Legend} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderData} = props
  return (
    <div className="vaccination-coverage-container">
      <h1 className="vaccination-coverage-heading">Vaccination By Gender</h1>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="count"
          startAngle={180}
          endAngle={0}
          innerRadius="30%"
          outerRadius="60%"
          cx="50%"
          cy="60%"
          data={vaccinationByGenderData}
          fill="#8884d8"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill=" #5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
