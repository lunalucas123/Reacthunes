import React, {useState}  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import SocialFollow from './SocialFollow';



const columns = [
  { id: 'singer', label: 'COMING UP CONCERT FROM YOUR ARTIST', minWidth: 10 },
 
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '500px',
    
  },
  container: {
    maxHeight: 440,
  },
});

function Api(props) {
  const [nestedData, setNestedData] = useState([props.dataEvent])
  // console.log(nestedData)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
  setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
  } ;

  if (props.submit){

    return ( 

    <div style={{width:500, paddingRight:90}}>
         
      <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
 

              <div>
                <TableRow hover role="checkbox" tabIndex={-1} >
                  {props.dataEvent.map((s) => {
       
                    return (
                      <div>

                        
                              <TableCell  >
                              <p> Singer : {s.name}  </p>
                                  
                              </TableCell>

                              <TableCell  >
                              <p > City : {s['_embedded'].venues[0]['city'].name}  </p>
                              
                              </TableCell>

                              <TableCell  >
                              <p > State : {s['_embedded'].venues[0]['state'].name}  </p> 
                              
                              </TableCell>

                              <TableCell  >
                              <p > Promoter : {s['promoter'].description} </p>  
                              
                              </TableCell>
                    </div>
                  
                    );
                 
                
                  })}
                </TableRow>
                
                </div>
                
              
            
      </TableBody>
      </Table>
      </TableContainer>

    </Paper>

);
            </div>
    )} else{

      return (
      

        <SocialFollow/>
      // <div style={{width:410, height:300, paddingLeft:30, paddingRight:130}}> <h1>Thanks for Visiting, Follow us on Twitter, Facebook, Instagram</h1> </div>
      
      
      )
    }
                   
  } 


export default Api
