import { PieChart } from "react-minimal-pie-chart";

const Chart = (props) => {
  const countEnables = () => {
    let enabled = 0;
    let disabled = 0;
    if (props.data) {
      props.data.forEach((el) => {
        if (el.enabled) enabled += 1;
        else disabled += 1;
      });
    }
    return { enabled: enabled, disabled: disabled };
  };

  return (
    <PieChart
      data={[
        { title: "Enabled", value: countEnables().enabled, color: "green" },
        { title: "Disabled", value: countEnables().disabled, color: "#c4c4c4" },
      ]}
      label={({ dataEntry }) =>
        `${
          dataEntry.title === "Enabled"
            ? `활성 / ${dataEntry.value} 석`
            : `비활성 / ${dataEntry.value} 석`
        }`
      }
      labelStyle={{ fontSize: "5px", fontWeight: "600" }}
      radius={50}
      style={{ opacity: "0.9", marginBottom: "150px" }}
      lineWidth={20}
    />
  );
};

export default Chart;
