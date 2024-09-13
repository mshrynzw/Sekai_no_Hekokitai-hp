import ChartDuration from "./ChartDuration";
import ChartView from "./ChartView";

const Charts = ({ initialData }) => {
  const convertDurationToHours = (duration) => {
    const match = duration.match(/(\d+)h(\d+)m(\d+)s/);
    if (match) {
      const hours = parseInt(match[1]);
      const minutes = parseInt(match[2]);
      const seconds = parseInt(match[3]);
      return Math.round(hours + minutes / 60 + seconds / 3600);
    }
    return 0;
  };

  return (
    <>
      <ChartDuration data={initialData} convertDurationToHours={convertDurationToHours}/>
      <ChartView data={initialData} convertDurationToHours={convertDurationToHours}/>
    </>
  );
};

export default Charts;