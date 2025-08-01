import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';

// Reusable Bar Chart component.
// Note: This component is specifically configured for the incomeVsExpenseData structure.
const Bar = ({ data, x, y, name, type, width, height, color }) => {
  const { currentMode } = useStateContext();

  // Configuration for the X-axis (Months)
  const primaryxAxis = { valueType: 'Category', title: 'Month' };
  // Configuration for the Y-axis (Amount)
  const primaryyAxis = { labelFormat: '${value}K', title: 'Amount' };
  
  return (
    <ChartComponent
        width={width}
        height={height}
        primaryXAxis={primaryxAxis}
        primaryYAxis={primaryyAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ background: 'white' }}
    >
      <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
      <SeriesCollectionDirective>
         <SeriesDirective dataSource={data} xName='month' yName='income' name='Income' type='Column' />
         <SeriesDirective dataSource={data} xName='month' yName='expense' name='Expense' type='Column' />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Bar;