import React, {useMemo} from 'react'
import { useTable, useSortBy } from 'react-table'
import '../../Static/CSS/Artists/Discografia.css'

const Discografia = (props) => {
	
	// ----- Obtencion de parametros de entrada
    const {canciones} = props

    // ----- Memorizacion de parametros de la tabla
    const data = useMemo(() => canciones, [canciones])
    const columns = useMemo(() => [
	    {
	    	Header: 'Canción',
	    	accessor: 'cancion',
	    },{
	    	Header: 'Álbum',
	    	accessor: 'album',
	    },{
	    	Header: 'Género',
	    	accessor: 'genero',
	    }
    ], [])

    // ----- Declaracion de filtro

	// ----- Declaracion de la tabla
    const { getTableProps, getTableBodyProps, headerGroups, rows,
    prepareRow } = useTable({columns, data}, useSortBy)


  return (
      <div className='container-fluid' id='Discografia-container'>
	      <table {...getTableProps()} className='w-100'>
		      <thead>
		      {headerGroups.map(headerGroup => (
		      	<tr {...headerGroup.getHeaderGroupProps()}>
		      	{headerGroup.headers.map(column => (
		      		<th
		      		{...column.getHeaderProps(column.getSortByToggleProps())}
		      		style={{
		      			fontWeight: 'bold',
						cursor: 'pointer',
		      		}}
		      		>
						<span>
						  {column.render('Header')}
						</span>
						{
							column.isSorted ? 
								column.isSortedDesc ? 
								(<span> &uarr; </span>) 
								: 
								(<span> &darr; </span>)
							:
							''
						}
		      		</th>
		      		))}
		      	</tr>
		      	))}
		      </thead>
		      <tbody {...getTableBodyProps()}>
		      {rows.map(row => {
		      	prepareRow(row)
		      	return (
		      		<tr {...row.getRowProps()}>
		      		{row.cells.map(cell => {
		      			return (
		      				<td
		      				{...cell.getCellProps()}
		      				style={{
		      					border: 'solid 1px gray',
		      				}}
		      				>
		      				{cell.render('Cell')}
		      				</td>
		      				)
		      		})}
		      		</tr>
		      		)
		      })}
		      </tbody>
	      </table>
      </div>
  );
}

export default Discografia;
