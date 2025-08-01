import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries, Legend } from '@syncfusion/ej2-react-charts';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

// TODO: Replace with real user data from an API endpoint.
// Helper function to generate mock timeseries data for the chart demo.
const generateDateValue = (count, range) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        data.push({
            x: new Date(2023, 4, i + 1), // May 2023
            y: Math.floor(Math.random() * (range.max - range.min + 1) + range.min)
        });
    }
    return data;
}

const areaChartData = [
  generateDateValue(30, { min: 50, max: 250 })
];

// Chart configuration
const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'MMM d',
  majorGridLines: { width: 0 },
  intervalType: 'Days',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' }
};

const areaPrimaryYAxis = {
  labelFormat: '${value}',
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' }
};


const Analytics = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Spending Analytics" />
      <div className="w-full flex flex-wrap justify-around">
        <div className="w-full lg:w-2/3">
          <p className="font-semibold text-xl mb-4">Daily Spending Trend</p>
          <ChartComponent
            id="area-chart"
            height="420px"
            primaryXAxis={areaPrimaryXAxis}
            primaryYAxis={areaPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            legendSettings={{ background: 'white' }}
          >
            <Inject services={[SplineAreaSeries, DateTime, Legend]} />
            <SeriesCollectionDirective>
              <SeriesDirective
                dataSource={areaChartData[0]}
                xName="x"
                yName="y"
                name="Expenses"
                opacity={0.6}
                type="SplineArea"
                width={2}
              />
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
        <div className="w-full lg:w-1/3 lg:pl-10 mt-10 lg:mt-0">
          <p className="font-semibold text-xl mb-4">Spending Calendar</p>
          <CalendarComponent />
        </div>
      </div>
    </div>
  );
};

export default Analytics;