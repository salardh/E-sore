import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

import Product1 from "../../images/one.avif"
import Product2 from "../../images/two.avif"
import Product3 from "../../images/three.avif"
import Product4 from "../../images/four.avif"
import Product5 from "../../images/five.avif"
import {   Card, Rating, } from '@mui/material'
import axios from 'axios';






interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

 function Layout(props: Props) {
  const Productdata =[
    {
        Name:"Mobile Charger", Price:2500,Catogury:"Electrons",img:Product1
    },
    {
        Name:"Eir birds", Price:2500,Catogury:"Electrons",img:Product2
    },
    {
        Name:"USB", Price:2500,Catogury:"Electrons",img:Product3
    },
    {
        Name:"Ear Birds", Price:2500,Catogury:"Electrons",img:Product4
    },
    {
        Name:"Ear birds", Price:2500,Catogury:"Electrons",img:Product5
    },
]
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        E-Store
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const [AllProducts,setAllProducts]=React.useState([])
  console.log(AllProducts);

  React.useEffect(()=>{
    const ProductData=axios.get("https://api.escuelajs.co/api/v1/products").then((data)=>setAllProducts(data.data)
    
    
    )
    
    
  },[])
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
              
            ))}
          <Button className='text-white'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <AccountCircleIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}><Link to="/signin"> My account</Link></MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
       
      </Box>
    
    </Box >
  


    
     
      <Box>
      <Grid className='container' container spacing={3} >
      {AllProducts.map((Product)=>{
          return(
            <Grid item md={4} sx={4} >
                <Card className='p-2 shadow'>
              <Box className="text-center">  
      <img style={{minHeight:"190px",maxHeight:"190px",minWidth:"380px",maxWidth:"380px"}} src={Product?.images?.[0]} alt="" />
      <Typography variant='h5'>{Product.title}</Typography>
      <Typography variant='body2'>{Product.
price
}</Typography>
      <Rating name="read-only" value={4} readOnly />
       <Box className="d-flex align-items-center justify-content-between">
       <Typography variant='h6'>{Product.Price}</Typography>
       <Button variant='contained'> + Add</Button>
       </Box>
      
              </Box>
              </Card>
              </Grid>
          )
      })}
     </Grid>
        </Box>
      
    
        </>
  );
}
export default Layout