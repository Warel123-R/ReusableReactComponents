import {Fragment} from 'react';
function Table({data, config, keyFn}){
    const renderedrows = data.map((rowData)=>{
        const renderedcells = config.map((column)=>{
            return <td className="p-2" key={column.label}>{column.render(rowData)}</td>
        });
        return(
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedcells}
            </tr>
        );
    });
    const renderedheaders = config.map((currconfig)=>{
        if(currconfig.header){
            return <Fragment key={currconfig.label}>{currconfig.header()}</Fragment>
        }
        return(
            <th key={currconfig.label}>{currconfig.label}</th>
        );
    });

    return(
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedheaders}
                </tr>
            </thead>
            <tbody>
                {console.log(renderedrows)}
                {renderedrows}
            </tbody>
        </table>
    );
}
export default Table;