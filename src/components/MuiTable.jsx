import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from "@mui/material"

export const MuiTable = () => {
    return(
      <TableContainer 
        component={Paper}
        sx={{maxHeight: "300px"}}
      >
          <Table aria-label="simple table" stickyHeader>
              <TableHead>
                  <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>First name</TableCell>
                      <TableCell>Last name</TableCell>
                      <TableCell>Email</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {
                      tableData.map(row => (
                          <TableRow 
                            key={row.id} 
                            sx={{"&:last-child td, &:last-child th": {border: 0}}}
                          >
                              <TableCell>{row.id}</TableCell>
                              <TableCell>{row.first_name}</TableCell>
                              <TableCell>{row.last_name}</TableCell>
                              <TableCell>{row.email}</TableCell>
                          </TableRow>
                      ))
                  }
              </TableBody>
          </Table>

      </TableContainer>
    )
}

const tableData = [{
    "id": 1,
    "first_name": "Verena",
    "last_name": "Vater",
    "email": "vvater0@alexa.com",
    "gender": "Female",
    "ip_address": "205.225.114.89"
  }, {
    "id": 2,
    "first_name": "Florina",
    "last_name": "Morais",
    "email": "fmorais1@telegraph.co.uk",
    "gender": "Female",
    "ip_address": "129.135.125.145"
  }, {
    "id": 3,
    "first_name": "Georgy",
    "last_name": "Omand",
    "email": "gomand2@sohu.com",
    "gender": "Male",
    "ip_address": "181.11.223.8"
  }, {
    "id": 4,
    "first_name": "Harman",
    "last_name": "Squire",
    "email": "hsquire3@stanford.edu",
    "gender": "Male",
    "ip_address": "76.0.41.22"
  }, {
    "id": 5,
    "first_name": "Nelson",
    "last_name": "Huc",
    "email": "nhuc4@wikia.com",
    "gender": "Male",
    "ip_address": "236.224.50.12"
  }, {
    "id": 6,
    "first_name": "Codee",
    "last_name": "Choppen",
    "email": "cchoppen5@4shared.com",
    "gender": "Female",
    "ip_address": "170.108.14.210"
  }, {
    "id": 7,
    "first_name": "Eunice",
    "last_name": "Halahan",
    "email": "ehalahan6@slideshare.net",
    "gender": "Female",
    "ip_address": "214.39.56.6"
  }, {
    "id": 8,
    "first_name": "Germain",
    "last_name": "Christofe",
    "email": "gchristofe7@elpais.com",
    "gender": "Female",
    "ip_address": "105.255.78.131"
  }, {
    "id": 9,
    "first_name": "Donalt",
    "last_name": "Geeves",
    "email": "dgeeves8@plala.or.jp",
    "gender": "Male",
    "ip_address": "137.204.82.9"
  }]