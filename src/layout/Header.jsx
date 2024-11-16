import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { label: 'Inicio', icon: <HomeIcon /> },
    { label: 'Servicios', icon: <DesignServicesIcon /> },
    { label: 'Testimonios', icon: <EmojiPeopleIcon /> },
    { label: 'Contacto', icon: <ContactMailIcon /> },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundImage: 'linear-gradient(to right, #3f51b5, #5c6bc0)',
          color: '#fff',
        }}
      >
        <Toolbar>
          {/* Título */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Aprende Matemáticas
          </Typography>

          {/* Botones para escritorio */}
          <Box sx={{ display: { xs: 'none', sm: 'block',
          color: '#fff' } }}>
            {navItems.map((item) => (
              <Button key={item.label} color="inherit" startIcon={item.icon}>
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Menú hamburguesa para móvil */}
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

    {/* Drawer para móvil */}
<Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
  <Box
    sx={{
      width: 250,
      backgroundImage: 'linear-gradient(to right, #3f51b5, #5c6bc0)', // Gradiente en todo el Drawer
      color: '#fff', // Texto blanco para contraste
      height: '100%', // Asegura que el gradiente cubra todo el Drawer
    }}
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
    <List>
      {navItems.map((item) => (
        <ListItem button key={item.label}>
          <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon> {/* Iconos blancos para visibilidad */}
          <ListItemText primary={item.label} sx={{ color: '#fff' }} /> {/* Texto blanco */}
        </ListItem>
      ))}
    </List>
  </Box>
</Drawer>
    </>
  );
}

export default Header;