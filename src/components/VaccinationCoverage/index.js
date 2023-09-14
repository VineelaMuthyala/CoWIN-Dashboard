import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverageData} = props
  const dataFormatted = number => number * 100

  return (
    <div className="vaccination-coverage-container">
      <h1 className="vaccination-coverage-heading">Vaccination Coverage</h1>
      <BarChart
        width={500}
        height={400}
        data={vaccinationCoverageData}
        margin={{
          top: 5,
          right: 20,
          left: 10,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            fontSize: 10,
            fontFamily: 'Roboto',
          }}
        />
        <YAxis
          tickFormatter={dataFormatted}
          tick={{
            fontSize: 10,
            fontFamily: 'Roboto',
          }}
        />
        <Legend />
        <Bar dataKey="dose1" fill="#5a8dee" name="Dose 1" />
        <Bar dataKey="dose2" fill="#f54394" name="Dose 2" />
      </BarChart>
    </div>
  )
}
export default VaccinationCoverage
