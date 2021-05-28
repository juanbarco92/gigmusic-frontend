import React, {useMemo} from 'react'
import { useTable, useSortBy } from 'react-table'
import{NavLink} from 'react-router-dom'
import '../../Static/CSS/Artists/Discografia.css'
import { ReactComponent as Play } from '../../Static/Icons/Reproductor/play.svg'

const Discografia = (props) => {
	
	// ----- Obtencion de parametros de entrada
    const {canciones} = props

    // ----- Memorizacion de parametros de la tabla
    const data = useMemo(() => canciones, [canciones])
    const columns = useMemo(() => [
		{
			Header: 'Escuchar',
			accessor: 'id'
		},{
	    	Header: 'Canción',
	    	accessor: 'cancion',
	    },{
	    	Header: 'Álbum',
	    	accessor: 'album',
	    },{
	    	Header: 'Visualizaciones',
	    	accessor: 'views',
	    }
    ], [])

	// ----- Declaracion de la tabla
    const { getTableProps, getTableBodyProps, headerGroups, rows,
    prepareRow } = useTable({columns, data}, useSortBy)

  return (
      <div className='container-fluid' id='Discografia-container'>
		  <table {...getTableProps()} className='w-100 table-discography'>
		      <thead>
		      {headerGroups.map(headerGroup => (
		      	<tr {...headerGroup.getHeaderGroupProps()}>
		      	{headerGroup.headers.map(column => {
					if(column.Header==='Escuchar'){
						return (
							<th
							{...column.getHeaderProps()}
							className='header-discography'
							style={{'cursor': 'inherit'}}
							>
							  <span>
								{column.render('Header')}
							  </span>
							</th>
							)
					}else{
						return (
							<th
							{...column.getHeaderProps(column.getSortByToggleProps())}
							className='header-discography'
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
							)
					}
				})}
		      	</tr>
		      	))}
		      </thead>
		      <tbody {...getTableBodyProps()}>
		      {rows.map(row => {
		      	prepareRow(row)
		      	return (
		      		<tr {...row.getRowProps()}>
		      		{row.cells.map(cell => {
						if(cell.column.Header === 'Escuchar'){
							return (
								<td
								{...cell.getCellProps()}
								className='content-discography'
								>
									<NavLink className='link-react-nav border-0' to={{
									pathname: '/song/',
									search: `id=${cell.row.original.id}`,
									}}>
										<Play className="play-an rep-btn"/>
									</NavLink>
								</td>
							)
						}else{
							return (
								<td
								{...cell.getCellProps()}
							  className='content-discography'
								>
								{cell.render('Cell')}
								</td>
							)
						}
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
