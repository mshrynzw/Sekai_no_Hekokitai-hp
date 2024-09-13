import moment from "moment";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend, Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const ChartView = ({data, convertDurationToHours}) => {
  const processedData = data
    .filter(video => convertDurationToHours(video.duration) > 0)
    .map(video => ({
      date: moment(video.published_at).format("YYYY-MM-DD"),
      view: video.view_count,
      ratio: Math.floor(video.view_count / convertDurationToHours(video.duration))
    }));

  return (
    <ResponsiveContainer width="100%" height={800}>
      <ComposedChart
        data={processedData}
        margin={{top: 20, right: 20, bottom: 20, left: 20}}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="date"/>
        <YAxis label={{value: "回数", angle: -90, position: "insideLeft"}}/>
        <YAxis yAxisId="right" orientation="right" label={{value: "回数 / 時間", angle: 90, position: "insideRight"}} />
        <Tooltip/>
        <Legend/>
        <Bar dataKey="view" fill="#1E293B" name="視聴回数"/>
        <Line yAxisId="right" type="monotone" dataKey="ratio" stroke="red" strokeWidth={3} name="視聴回数 / 配信時間" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ChartView;