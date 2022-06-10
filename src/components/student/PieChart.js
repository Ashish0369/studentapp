import { PieChart } from 'react-minimal-pie-chart';

const PieChartComponent =({value}) => {
    <PieChart
  data={[
    { title: 'One', value: value, color: '#E38627' },
    { title: 'Two', value: value, color: '#C13C37' },
    { title: 'Three', value: value, color: '#6A2135' },
  ]}
/>;
}
export default PieChartComponent