import {
    Box,
    Button,
    Chip,
    Divider,
    Paper,
    Typography,
} from "@mui/material";

import { ProductCard } from "../../../productos/components/molecules/product-card";
import { TiendasCard } from "../../../tiendas/components/molecules/tiendas-card";
import { useFavoritesStore } from "../../store/use-favorites-store";

export const FavoritesSection = () => {
    const {
        favoriteProducts,
        favoriteStores,
        clearFavorites,
    } = useFavoritesStore();

    const totalFavorites = favoriteProducts.length + favoriteStores.length;

    return (
        <Box sx={{ width: "100%", minWidth: 0 }}>
            <Paper
                elevation={0}
                sx={{
                    mb: 3,
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 4,
                    border: "1px solid #e2e8f0",
                    background:
                        "linear-gradient(135deg, #ffffff 0%, #f8fafc 55%, #fef2f2 100%)",
                    boxShadow: "0 16px 40px rgba(15, 23, 42, 0.06)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        right: -80,
                        top: -80,
                        width: 190,
                        height: 190,
                        borderRadius: "50%",
                        backgroundColor: "rgba(239, 68, 68, 0.10)",
                    }}
                />

                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: { xs: "flex-start", md: "center" },
                        gap: 2,
                        flexDirection: { xs: "column", md: "row" },
                    }}
                >
                    <Box>
                        <Chip
                            label="Favoritos"
                            size="small"
                            sx={{
                                mb: 1,
                                fontWeight: 800,
                                color: "#991b1b",
                                backgroundColor: "#fee2e2",
                                borderRadius: 999,
                            }}
                        />

                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 900,
                                color: "#0f172a",
                            }}
                        >
                            Mis favoritos
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                mt: 0.7,
                                color: "#64748b",
                                maxWidth: 580,
                                lineHeight: 1.6,
                            }}
                        >
                            Aquí se muestran los productos y tiendas que marcaste como
                            favoritos dentro de NicaBot Market.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            gap: 1,
                            flexWrap: "wrap",
                            justifyContent: { xs: "flex-start", md: "flex-end" },
                        }}
                    >
                        <Chip
                            label={`${totalFavorites} favoritos`}
                            color="error"
                            variant="outlined"
                            sx={{ fontWeight: 800 }}
                        />

                        <Button
                            variant="outlined"
                            color="error"
                            disabled={totalFavorites === 0}
                            onClick={clearFavorites}
                            sx={{
                                textTransform: "none",
                                borderRadius: 999,
                                fontWeight: 800,
                            }}
                        >
                            Limpiar favoritos
                        </Button>
                    </Box>
                </Box>
            </Paper>

            {totalFavorites === 0 && (
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 4, md: 6 },
                        textAlign: "center",
                        borderRadius: 5,
                        border: "1px dashed #fecaca",
                        background:
                            "linear-gradient(135deg, #ffffff 0%, #f8fafc 55%, #fef2f2 100%)",
                    }}
                >
                    <Box
                        sx={{
                            width: 86,
                            height: 86,
                            mx: "auto",
                            mb: 2,
                            borderRadius: "50%",
                            backgroundColor: "#fee2e2",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 40,
                        }}
                    >
                        ❤️
                    </Box>

                    <Typography variant="h5" sx={{ fontWeight: 900, mb: 1 }}>
                        Aún no tienes favoritos
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color: "#64748b",
                            maxWidth: 430,
                            mx: "auto",
                            lineHeight: 1.7,
                        }}
                    >
                        Marca productos o tiendas con el corazón para guardarlos aquí y
                        consultarlos rápidamente después.
                    </Typography>
                </Paper>
            )}

            {favoriteProducts.length > 0 && (
                <Box sx={{ mb: 4 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 900,
                            color: "#0f172a",
                            mb: 2,
                        }}
                    >
                        Productos favoritos
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2, minmax(0, 1fr))",
                                lg: "repeat(3, minmax(0, 1fr))",
                                xl: "repeat(4, minmax(0, 1fr))",
                            },
                            gap: 3,
                        }}
                    >
                        {favoriteProducts.map((product) => (
                            <Box key={product.id} sx={{ minWidth: 0 }}>
                                <ProductCard producto={product} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            )}

            {favoriteProducts.length > 0 && favoriteStores.length > 0 && (
                <Divider sx={{ my: 4 }} />
            )}

            {favoriteStores.length > 0 && (
                <Box>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 900,
                            color: "#0f172a",
                            mb: 2,
                        }}
                    >
                        Tiendas favoritas
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2, minmax(0, 1fr))",
                                lg: "repeat(3, minmax(0, 1fr))",
                            },
                            gap: 3,
                        }}
                    >
                        {favoriteStores.map((store) => (
                            <Box key={store.id} sx={{ minWidth: 0 }}>
                                <TiendasCard tienda={store} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    );
};