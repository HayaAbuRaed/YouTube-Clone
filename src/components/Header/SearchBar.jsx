import React from 'react'
import InputBase from '@mui/material/InputBase';
import {styled} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, Paper } from '@mui/material';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const search = {
    position: 'relative',
    borderRadius: '100px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#f6f6f6',
    },
    marginRight: '20px',
    marginLeft: 1,
    border: '#909090 1px solid',
    boxShadow: 'none'
  };
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0.45),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = {
    color: 'inherit',
    paddingLeft: `calc(1em + 30px)`,
    width: '100%',
  };

const SearchBar = () => {
    
    const [searchResult, setSearchResult] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      if (searchResult) {
        navigate(`/search/${searchResult}`);

        setSearchResult('');
      }
    };
         
  return (
    <Box>
        
        <Box display={'flex'} width={'100%'} sx={{display:{xs:'flex', sm:'none'}}}>
            <SearchIcon style={{marginLeft:'5em'}}/> 
        </Box> 
        
        <Box sx={{display:{xs:'none', sm:'block'}}}>
            <Paper sx={search} component='form' onSubmit={handleSubmit}>
                <SearchIconWrapper>
                <IconButton type='submit' sx={{ p: '10px', color: 'f1f1f1' }} aria-label='search'>
                  <SearchIcon />
                </IconButton>
                </SearchIconWrapper>
                <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                style={StyledInputBase}
                value={searchResult}
                onSubmit={handleSubmit}
                onChange={(e) => setSearchResult(e.target.value)}
                />
            </Paper>
        </Box>
    
  </Box>
  )
}

export default SearchBar

