import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";

export function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  const handleEdit = () => {
    navigate(`/products/${product.id}`);
  };

  const handleDelete = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Card sx={{ width: "100%", maxWidth: 364 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.imageUrl}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Valor: R$ {product.value}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Marca: {product.brand}
          </Typography>
          <Typography
            noWrap
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}