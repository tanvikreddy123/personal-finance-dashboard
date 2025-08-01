import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { transactionsData } from '../data/dummy';
import { Header } from '../components';

const Transactions = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  const pageSettings = { pageSize: 10 };
  const filterSettings = { type: 'Menu' };
  
  // Custom template for the Amount column to apply color and currency format
  const formatAmount = (props) => {
    const amount = props.Amount;
    const color = amount > 0 ? 'green' : 'red';
    return (<span style={{color: color}}>${Math.abs(amount).toFixed(2)}</span>);
  }
  
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Data" title="Transactions" />
      <GridComponent
        id="gridcomp"
        dataSource={transactionsData}
        allowPaging
        allowSorting
        allowFiltering
        pageSettings={pageSettings}
        filterSettings={filterSettings}
        editSettings={editing}
      >
        <ColumnsDirective>
            <ColumnDirective field='TransactionID' headerText='ID' width='120' textAlign="Center" isPrimaryKey={true} />
            <ColumnDirective field='Date' headerText='Date' width='130' format='yMd' textAlign='Center' />
            <ColumnDirective field='Description' headerText='Description' width='250' />
            <ColumnDirective field='Category' headerText='Category' width='150' textAlign='Center' />
            <ColumnDirective field='Type' headerText='Type' width='120' textAlign='Center' />
            <ColumnDirective field='Amount' headerText='Amount' width='150' textAlign='Right' template={formatAmount} />
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Filter, Page, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Transactions;