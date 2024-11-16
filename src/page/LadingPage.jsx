import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia, Box, IconButton, TextField, List, ListItem, ListItemText } from '@mui/material';
import { School, CalendarToday, ContactMail, LaptopMac, People, Functions } from '@mui/icons-material';

function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: '60vh',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://cdni.iconscout.com/illustration/premium/thumb/profesora-ensenando-matematicas-en-el-aula-9704251-7922187.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          ¡Domina las Matemáticas!
        </Typography>
        <Typography variant="h6" gutterBottom>
          Clases particulares personalizadas para estudiantes de todos los niveles.
        </Typography>
        <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
          Reserva tu clase ahora
        </Button>
      </Box>

      {/* Servicios Section */}
      <Container sx={{ my: 5 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Nuestros Servicios
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', padding: '1rem', boxShadow: 3 }}>
              <CardMedia>
                <IconButton>
                  <LaptopMac fontSize="large" color="primary" />
                </IconButton>
              </CardMedia>
              <CardContent>
                <Typography variant="h6">Clases por Zoom</Typography>
                <Typography>
                  Aprende desde cualquier lugar con nuestras clases en línea.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', padding: '1rem', boxShadow: 3 }}>
              <CardMedia>
                <IconButton>
                  <CalendarToday fontSize="large" color="primary" />
                </IconButton>
              </CardMedia>
              <CardContent>
                <Typography variant="h6">Horarios Flexibles</Typography>
                <Typography>
                  Elige el horario que más te convenga y aprende a tu ritmo.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', padding: '1rem', boxShadow: 3 }}>
              <CardMedia>
                <IconButton>
                  <School fontSize="large" color="primary" />
                </IconButton>
              </CardMedia>
              <CardContent>
                <Typography variant="h6">Modalidades Personalizadas</Typography>
                <Typography>
                  Clases diseñadas para cumplir tus objetivos académicos específicos.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Categorías Section */}
      <Container sx={{ my: 5 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          ¿Qué enseñamos?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', padding: '1rem', boxShadow: 3 }}>
              <CardMedia>
                <IconButton>
                  <Functions fontSize="large" color="primary" />
                </IconButton>
              </CardMedia>
              <CardContent>
                <Typography variant="h6">Álgebra</Typography>
                <Typography>
                  Desde ecuaciones básicas hasta álgebra avanzada.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', padding: '1rem', boxShadow: 3 }}>
              <CardMedia>
                <IconButton>
                  <Functions fontSize="large" color="primary" />
                </IconButton>
              </CardMedia>
              <CardContent>
                <Typography variant="h6">Geometría</Typography>
                <Typography>
                  Aprende figuras, teoremas y aplicaciones prácticas.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', padding: '1rem', boxShadow: 3 }}>
              <CardMedia>
                <IconButton>
                  <Functions fontSize="large" color="primary" />
                </IconButton>
              </CardMedia>
              <CardContent>
                <Typography variant="h6">Cálculo</Typography>
                <Typography>
                  Derivadas, integrales y más para nivel avanzado.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Público Objetivo Section */}
      <Container sx={{ my: 5 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          ¿A quién enseñamos?
        </Typography>
        <List>
          <ListItem>
            <IconButton>
              <People fontSize="large" color="primary" />
            </IconButton>
            <ListItemText primary="Estudiantes de Primaria" secondary="Refuerzo en fundamentos matemáticos." />
          </ListItem>
          <ListItem>
            <IconButton>
              <People fontSize="large" color="primary" />
            </IconButton>
            <ListItemText primary="Estudiantes de Secundaria" secondary="Preparación para exámenes y proyectos." />
          </ListItem>
          <ListItem>
            <IconButton>
              <People fontSize="large" color="primary" />
            </IconButton>
            <ListItemText primary="Estudiantes Universitarios" secondary="Asistencia en materias avanzadas." />
          </ListItem>
        </List>
      </Container>

      {/* Contact Section */}
      <Box sx={{ my: 5, padding: '2rem', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Contáctanos
        </Typography>
        <Container maxWidth="sm">
          <form>
            <TextField
              fullWidth
              label="Nombre"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Correo Electrónico"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Mensaje"
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
            />
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Enviar Mensaje
            </Button>
          </form>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: 'linear-gradient(to right, #3f51b5, #5c6bc0)', color: '#fff', py: 3, textAlign: 'center' }}>
        <Typography variant="body1">
          © 2024 Aprende Matemáticas. Todos los derechos reservados.
        </Typography>
      </Box>
    </>
  );
}

export default LandingPage;