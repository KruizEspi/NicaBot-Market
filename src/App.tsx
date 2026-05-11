import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Chip,
  Paper,
} from '@mui/material';

const products = [
  {
    name: 'Audífonos Bluetooth X3',
    store: 'Tecno Centro Managua',
    price: 'C$ 890',
    category: 'Electrónica',
  },
  {
    name: 'Café molido nicaragüense',
    store: 'Mercadito Las Colinas',
    price: 'C$ 180',
    category: 'Abarrotes',
  },
  {
    name: 'Protector solar FPS 50',
    store: 'Farmacia Altamira',
    price: 'C$ 420',
    category: 'Salud',
  },
];

const categories = ['Todos', 'Abarrotes', 'Electrónica', 'Salud'];

export default function CompraLocal(): React.ReactElement {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todos');

  const filteredProducts = products.filter((product) => {
    const matchesQuery = product.name
        .toLowerCase()
        .includes(query.toLowerCase());

    const matchesCategory =
        category === 'Todos' || product.category === category;

    return matchesQuery && matchesCategory;
  });

  return (
      <Box sx={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
        <AppBar position="static" sx={{ backgroundColor: '#0f172a' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              NicaBot Market
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Box sx={{ mb: 6 }}>
            <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: '#0f172a',
                }}
            >
              Encontrá productos en tiendas locales
            </Typography>

            <Typography
                sx={{
                  color: '#475569',
                  fontSize: '18px',
                  mb: 4,
                }}
            >
              Buscá productos disponibles en Managua y descubrí negocios cercanos.
            </Typography>

            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    flexWrap: 'wrap',
                  }}
              >
                <TextField
                    fullWidth
                    placeholder="Buscar productos..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    sx={{ flex: 1 }}
                />

                <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#059669',
                      px: 4,
                    }}
                >
                  Buscar
                </Button>
              </Box>

              <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    flexWrap: 'wrap',
                    mt: 3,
                  }}
              >
                {categories.map((item) => (
                    <Chip
                        key={item}
                        label={item}
                        onClick={() => setCategory(item)}
                        sx={{
                          backgroundColor:
                              category === item ? '#0f172a' : '#e2e8f0',
                          color: category === item ? '#fff' : '#0f172a',
                        }}
                    />
                ))}
              </Box>
            </Paper>
          </Box>

          <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 4,
                color: '#0f172a',
              }}
          >
            Productos encontrados
          </Typography>

          <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: '1fr 1fr',
                  md: '1fr 1fr 1fr',
                },
                gap: 3,
              }}
          >
            {filteredProducts.map((product) => (
                <Card
                    key={product.name}
                    sx={{
                      borderRadius: 4,
                      boxShadow: 3,
                    }}
                >
                  <CardContent>
                    <Typography
                        sx={{
                          color: '#64748b',
                          mb: 1,
                        }}
                    >
                      {product.category}
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          mb: 1,
                        }}
                    >
                      {product.name}
                    </Typography>

                    <Typography sx={{ mb: 2 }}>
                      {product.store}
                    </Typography>

                    <Typography
                        sx={{
                          color: '#059669',
                          fontWeight: 'bold',
                          fontSize: '20px',
                        }}
                    >
                      {product.price}
                    </Typography>
                  </CardContent>
                </Card>
            ))}
          </Box>
        </Container>
      </Box>
  );
}
