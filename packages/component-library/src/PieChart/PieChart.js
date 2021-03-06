import React from "react";
import PropTypes from "prop-types";
import { VictoryPie, VictoryLabel, VictoryContainer } from "victory";
import ChartContainer from "../ChartContainer";
import { VictoryTheme } from "../_Themes/index";
import SimpleLegend from "../SimpleLegend";
import DataChecker from "../utils/DataChecker";

const PieChart = props => {
  const {
    title,
    subtitle,
    colors,
    data,
    dataValue,
    dataLabel,
    innerRadius,
    loading,
    error,
    halfDoughnut,
    useLegend,
    width,
    height,
    theme
  } = props;

  const safeData = data && data.length ? data : [{}];
  const startAngle = halfDoughnut ? -90 : 0;
  const endAngle = halfDoughnut ? 90 : 360;
  const adjustedHeight = halfDoughnut ? height / 2 : height;
  const legendLabels = safeData.map(value => ({ name: value[dataLabel] }));
  const legendProps = {};
  const colorScale = colors.length ? colors : theme.group.colorScale;
  const aspectRatio = halfDoughnut ? 650 / 175 : 650 / 350;

  if (useLegend) {
    legendProps.labels = () => null;
    legendProps.padding = 25;
  }

  return (
    <ChartContainer
      title={title}
      subtitle={subtitle}
      loading={loading}
      error={error}
      aspectRatio={aspectRatio}
    >
      <DataChecker dataAccessors={{ dataValue }} data={safeData}>
        {useLegend && (
          <SimpleLegend
            className="legend"
            legendData={legendLabels}
            colorScale={colorScale}
          />
        )}
        <VictoryPie
          width={width}
          height={height}
          data={safeData}
          innerRadius={innerRadius}
          colorScale={colorScale}
          theme={theme}
          animate={{
            duration: 1000
          }}
          x={dataLabel}
          y={dataValue}
          startAngle={startAngle}
          endAngle={endAngle}
          labelComponent={<VictoryLabel style={{ ...theme.pieLabel.style }} />}
          {...legendProps}
          containerComponent={
            <VictoryContainer height={adjustedHeight} width={width} />
          }
        />
      </DataChecker>
    </ChartContainer>
  );
};

PieChart.defaultProps = {
  useLegend: false
};

PieChart.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dataLabel: PropTypes.string,
  dataValue: PropTypes.string,
  error: PropTypes.string,
  halfDoughnut: PropTypes.bool,
  height: PropTypes.number,
  innerRadius: PropTypes.number,
  loading: PropTypes.bool,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  useLegend: PropTypes.bool,
  width: PropTypes.number,
  theme: PropTypes.shape({})
};

PieChart.defaultProps = {
  dataLabel: "x",
  dataValue: "y",
  theme: VictoryTheme,
  colors: []
};

export default PieChart;
