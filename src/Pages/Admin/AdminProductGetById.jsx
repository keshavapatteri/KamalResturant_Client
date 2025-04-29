import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../Config/AxiosInstance';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Chip, 
  Divider, 
  Grid, 
  Paper, 
  CircularProgress,
  Alert,
  Stack,
  Breadcrumbs,
  Link
} from '@mui/material';
import {
  ArrowBack,
  Edit,
  Delete,
  CalendarToday,
  Update,
  Category,
  Description,
  AttachMoney,
  LocalOffer,
  Image
} from '@mui/icons-material';

export const AdminProductGetById = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/admin/getProductById/${id}`);
        console.log(response);
        
        setProduct(response.data.data);
      } catch (error) {
        setError(error.response?.data?.message || 'Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axiosInstance.delete(`/admin/product/${id}`);
        navigate('/admin/products');
      } catch (err) {
        alert(err.response?.data?.message || 'Delete failed');
      }
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ m: 2 }}>
        {error}
      </Alert>
    );
  }

  if (!product) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6">Product not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
        <Link 
          underline="hover" 
          color="inherit" 
          onClick={() => navigate('/admin/products')}
          sx={{ cursor: 'pointer' }}
        >
          Products
        </Link>
        <Typography color="text.primary">{product.title}</Typography>
      </Breadcrumbs>

      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate(-1)}
        sx={{ mb: 3 }}
      >
        Back
      </Button>

      <Card elevation={3}>
        <Grid container>
          {/* Product Image */}
          <Grid item xs={12} md={5}>
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
              {product.image ? (
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{ 
                    maxHeight: 400, 
                    width: 'auto', 
                    borderRadius: 1,
                    objectFit: 'contain'
                  }}
                />
              ) : (
                <Paper
                  elevation={0}
                  sx={{
                    height: 300,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default'
                  }}
                >
                  <Image color="disabled" sx={{ fontSize: 60, mb: 2 }} />
                  <Typography color="text.secondary">No image available</Typography>
                </Paper>
              )}
            </Box>
          </Grid>

          {/* Product Details */}
          <Grid item xs={12} md={7}>
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom>
                {product.title}
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <Chip
                  icon={<Category />}
                  label={product.category}
                  color="primary"
                  variant="outlined"
                />
                <Chip
                  icon={<AttachMoney />}
                  label={`Price: ₹${product.price}`}
                  color="success"
                />
                <Chip
                  icon={<LocalOffer />}
                  label={`MRP: ₹${product.mrp}`}
                  variant="outlined"
                />
              </Stack>

              <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                {product.description}
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Created Date
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <CalendarToday color="action" fontSize="small" />
                      <Typography>
                        {new Date(product.createdAt).toLocaleDateString()}
                      </Typography>
                    </Stack>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Last Updated
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Update color="action" fontSize="small" />
                      <Typography>
                        {new Date(product.updatedAt).toLocaleDateString()}
                      </Typography>
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>

            
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};