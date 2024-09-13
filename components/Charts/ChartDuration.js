import moment from "moment";
import {Bar, ComposedChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Line} from "recharts";

const ChartDuration = ({data, convertDurationToHours}) => {
 const processedData = data
  .filter(video => convertDurationToHours(video.duration) > 0)
  .map(video => ({
    date: moment(video.published_at).format("YYYY-MM-DD"),
    duration: convertDurationToHours(video.duration),
    ratio: Math.floor(video.view_count / convertDurationToHours(video.duration))
  }))
  .sort((a, b) => moment(a.date).diff(moment(b.date)));

return (
  <ResponsiveContainer width="100%" height={800}>
    <ComposedChart
      data={processedData}
      margin={{top: 20, right: 20, bottom: 20, left: 20}}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis yAxisId="left" label={{value: "時間", angle: -90, position: "insideLeft"}} />
      <YAxis yAxisId="right" orientation="right" label={{value: "回数 / 時間", angle: 90, position: "insideRight"}} />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="duration" fill="#1E293B" name="配信時間" />
      <Line yAxisId="right" type="monotone" dataKey="ratio" stroke="red" strokeWidth={3} name="視聴回数 / 配信時間" />
    </ComposedChart>
  </ResponsiveContainer>
);
};

export default ChartDuration;