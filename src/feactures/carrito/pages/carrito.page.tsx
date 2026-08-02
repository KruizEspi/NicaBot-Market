import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    Box,
    Button,
    Chip,
    Divider,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

import { AppHeader } from "../../compra-local/components/organisms/app-header";
import { Sidebar } from "../../compra-local/components/organisms/sidebar";
import { useCartStore } from "../store/use-cart-store";
import type { CustomerOrder } from "../types/cart.type";

export default function CarritoPage() {
    const {
        items,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getSubtotal,
        checkout,
    } = useCartStore();

    const [customerName, setCustomerName] = useState("Cliente invitado");
    const [customerEmail, setCustomerEmail] = useState("cliente@nicabot.com");
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpiration, setCardExpiration] = useState("");
    const [cardCvv, setCardCvv] = useState("");
    const [paidOrder, setPaidOrder] = useState<CustomerOrder | null>(null);

    const subtotal = getSubtotal();
    const shippingCost = items.length > 0 ? 80 : 0;
    const total = subtotal + shippingCost;

    const canPay =
        items.length > 0 &&
        customerName &&
        customerEmail &&
        deliveryAddress &&
        cardName &&
        cardNumber &&
        cardExpiration &&
        cardCvv;

    const handlePayment = () => {
        const order = checkout({
            customerName,
            customerEmail,
            deliveryAddress,
        });

        if (order) {
            setPaidOrder(order);
            setCardName("");
            setCardNumber("");
            setCardExpiration("");
            setCardCvv("");
            setDeliveryAddress("");
        }
    };

    return (
        <Box sx={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
            <AppHeader />

            <Box sx={{ display: "flex" }}>
                <Box
                    component="aside"
                    sx={{
                        width: 280,
                        flexShrink: 0,
                        minHeight: "calc(100vh - 86px)",
                        backgroundColor: "#fff",
                        borderRight: "1px solid #e2e8f0",
                        position: "sticky",
                        top: 86,
                        alignSelf: "flex-start",
                        display: { xs: "none", md: "block" },
                        overflowY: "auto",
                    }}
                >
                    <Sidebar />
                </Box>

                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        minWidth: 0,
                        p: { xs: 2, md: 4 },
                    }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            mb: 3,
                            p: { xs: 3, md: 4 },
                            borderRadius: 5,
                            color: "#fff",
                            background:
                                "linear-gradient(135deg, #064e3b 0%, #15803d 55%, #22c55e 100%)",
                            boxShadow: "0 18px 50px rgba(15, 23, 42, 0.12)",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 950,
                                fontSize: { xs: 30, md: 44 },
                                lineHeight: 1.1,
                            }}
                        >
                            Carrito de compras
                        </Typography>

                        <Typography
                            sx={{
                                mt: 1,
                                color: "rgba(255,255,255,0.9)",
                                fontWeight: 600,
                                maxWidth: 760,
                            }}
                        >
                            Revisa tus productos, simula el pago y genera un pedido para que el
                            negocio pueda enviarlo a delivery.
                        </Typography>
                    </Paper>

                    {paidOrder && (
                        <Paper
                            elevation={0}
                            sx={{
                                mb: 3,
                                p: 2.5,
                                borderRadius: 4,
                                border: "1px solid #bbf7d0",
                                backgroundColor: "#f0fdf4",
                            }}
                        >
                            <Typography sx={{ fontWeight: 900, color: "#064e3b" }}>
                                Pago simulado exitoso
                            </Typography>

                            <Typography variant="body2" sx={{ color: "#166534", mt: 0.5 }}>
                                Pedido #{paidOrder.id} pagado correctamente. El negocio ya puede
                                enviarlo a delivery.
                            </Typography>
                        </Paper>
                    )}

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                lg: "1.2fr 0.8fr",
                            },
                            gap: 3,
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 2.5, md: 3 },
                                borderRadius: 5,
                                border: "1px solid #e2e8f0",
                                backgroundColor: "#fff",
                                boxShadow: "0 18px 50px rgba(15, 23, 42, 0.06)",
                            }}
                        >
                            <Typography variant="h5" sx={{ fontWeight: 900, mb: 2 }}>
                                Productos seleccionados
                            </Typography>

                            {items.length > 0 ? (
                                <Box sx={{ display: "grid", gap: 2 }}>
                                    {items.map((item) => (
                                        <Paper
                                            key={item.producto.id}
                                            elevation={0}
                                            sx={{
                                                p: 2,
                                                borderRadius: 4,
                                                border: "1px solid #e2e8f0",
                                                display: "grid",
                                                gridTemplateColumns: {
                                                    xs: "1fr",
                                                    sm: "90px 1fr auto",
                                                },
                                                gap: 2,
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={item.producto.imagen}
                                                alt={item.producto.nombre}
                                                sx={{
                                                    width: 90,
                                                    height: 90,
                                                    objectFit: "contain",
                                                    borderRadius: 3,
                                                    backgroundColor: "#f8fafc",
                                                }}
                                            />

                                            <Box>
                                                <Typography sx={{ fontWeight: 900 }}>
                                                    {item.producto.nombre}
                                                </Typography>

                                                <Typography variant="body2" sx={{ color: "#64748b" }}>
                                                    {item.producto.tienda}
                                                </Typography>

                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: "#15803d", fontWeight: 900, mt: 0.5 }}
                                                >
                                                    C$ {item.producto.precio}
                                                </Typography>
                                            </Box>

                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 1,
                                                    justifyContent: "flex-end",
                                                    flexWrap: "wrap",
                                                }}
                                            >
                                                <Button
                                                    size="small"
                                                    variant="outlined"
                                                    onClick={() => decreaseQuantity(item.producto.id)}
                                                    sx={{ minWidth: 36 }}
                                                >
                                                    -
                                                </Button>

                                                <Chip
                                                    label={item.quantity}
                                                    sx={{ fontWeight: 900 }}
                                                />

                                                <Button
                                                    size="small"
                                                    variant="outlined"
                                                    onClick={() => increaseQuantity(item.producto.id)}
                                                    sx={{ minWidth: 36 }}
                                                >
                                                    +
                                                </Button>

                                                <Button
                                                    size="small"
                                                    color="error"
                                                    onClick={() => removeFromCart(item.producto.id)}
                                                    sx={{ textTransform: "none", fontWeight: 800 }}
                                                >
                                                    Quitar
                                                </Button>
                                            </Box>
                                        </Paper>
                                    ))}
                                </Box>
                            ) : (
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 5,
                                        textAlign: "center",
                                        borderRadius: 4,
                                        border: "1px dashed #86efac",
                                        backgroundColor: "#f8fafc",
                                    }}
                                >
                                    <Typography sx={{ fontSize: 42, mb: 1 }}>🛒</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                                        Tu carrito está vacío
                                    </Typography>

                                    <Button
                                        component={NavLink}
                                        to="/productos"
                                        variant="contained"
                                        sx={{
                                            mt: 2,
                                            textTransform: "none",
                                            borderRadius: 999,
                                            fontWeight: 900,
                                            backgroundColor: "#15803d",
                                        }}
                                    >
                                        Ver productos
                                    </Button>
                                </Paper>
                            )}
                        </Paper>

                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 2.5, md: 3 },
                                borderRadius: 5,
                                border: "1px solid #e2e8f0",
                                backgroundColor: "#fff",
                                boxShadow: "0 18px 50px rgba(15, 23, 42, 0.06)",
                                alignSelf: "flex-start",
                            }}
                        >
                            <Typography variant="h5" sx={{ fontWeight: 900, mb: 2 }}>
                                Pago simulado
                            </Typography>

                            <CreditCardPreview
                                cardName={cardName}
                                cardNumber={cardNumber}
                                cardExpiration={cardExpiration}
                            />

                            <Box sx={{ display: "grid", gap: 2 }}>
                                <TextField
                                    label="Nombre del cliente"
                                    value={customerName}
                                    onChange={(event) => setCustomerName(event.target.value)}
                                    fullWidth
                                />

                                <TextField
                                    label="Correo del cliente"
                                    value={customerEmail}
                                    onChange={(event) => setCustomerEmail(event.target.value)}
                                    fullWidth
                                />

                                <TextField
                                    label="Dirección de entrega"
                                    value={deliveryAddress}
                                    onChange={(event) => setDeliveryAddress(event.target.value)}
                                    multiline
                                    minRows={2}
                                    fullWidth
                                />

                                <Divider />

                                <TextField
                                    label="Nombre en la tarjeta"
                                    value={cardName}
                                    onChange={(event) => setCardName(event.target.value)}
                                    fullWidth
                                />

                                <TextField
                                    label="Número de tarjeta"
                                    value={cardNumber}
                                    onChange={(event) => {
                                        const value = event.target.value
                                            .replace(/\D/g, "")
                                            .slice(0, 16)
                                            .replace(/(.{4})/g, "$1 ")
                                            .trim();

                                        setCardNumber(value);
                                    }}
                                    placeholder="0000 0000 0000 0000"
                                    fullWidth
                                />

                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: 2,
                                    }}
                                >
                                    <TextField
                                        label="Vencimiento"
                                        value={cardExpiration}
                                        onChange={(event) => {
                                            const value = event.target.value
                                                .replace(/\D/g, "")
                                                .slice(0, 4);

                                            const formatted =
                                                value.length > 2
                                                    ? `${value.slice(0, 2)}/${value.slice(2)}`
                                                    : value;

                                            setCardExpiration(formatted);
                                        }}
                                        placeholder="12/28"
                                        fullWidth
                                    />

                                    <TextField
                                        label="CVV"
                                        type="password"
                                        value={cardCvv}
                                        onChange={(event) => {
                                            const value = event.target.value.replace(/\D/g, "").slice(0, 4);
                                            setCardCvv(value);
                                        }}
                                        placeholder="123"
                                        fullWidth
                                    />
                                </Box>

                                <Divider />

                                <SummaryRow label="Subtotal" value={`C$ ${subtotal}`} />
                                <SummaryRow label="Envío estimado" value={`C$ ${shippingCost}`} />
                                <SummaryRow label="Total" value={`C$ ${total}`} strong />

                                <Button
                                    fullWidth
                                    variant="contained"
                                    disabled={!canPay}
                                    onClick={handlePayment}
                                    sx={{
                                        mt: 1,
                                        py: 1.3,
                                        textTransform: "none",
                                        borderRadius: 999,
                                        fontWeight: 900,
                                        background:
                                            "linear-gradient(135deg, #15803d 0%, #22c55e 100%)",
                                    }}
                                >
                                    Pagar pedido
                                </Button>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

type CreditCardPreviewProps = {
    cardName: string;
    cardNumber: string;
    cardExpiration: string;
};

const CreditCardPreview = ({
                               cardName,
                               cardNumber,
                               cardExpiration,
                           }: CreditCardPreviewProps) => {
    const cleanNumber = cardNumber.replace(/\D/g, "");

    const formattedNumber =
        cleanNumber.length > 0
            ? cleanNumber
                .padEnd(16, "•")
                .match(/.{1,4}/g)
                ?.join(" ")
            : "•••• •••• •••• ••••";

    return (
        <Paper
            elevation={0}
            sx={{
                mb: 3,
                p: 3,
                minHeight: 190,
                borderRadius: 5,
                color: "#fff",
                background:
                    "linear-gradient(135deg, #064e3b 0%, #15803d 45%, #22c55e 100%)",
                boxShadow: "0 18px 45px rgba(21, 128, 61, 0.28)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    width: 220,
                    height: 220,
                    borderRadius: "50%",
                    right: -70,
                    top: -90,
                    backgroundColor: "rgba(255,255,255,0.16)",
                },
                "&::after": {
                    content: '""',
                    position: "absolute",
                    width: 160,
                    height: 160,
                    borderRadius: "50%",
                    left: -50,
                    bottom: -70,
                    backgroundColor: "rgba(250,204,21,0.22)",
                },
            }}
        >
            <Box sx={{ position: "relative", zIndex: 2 }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 3,
                    }}
                >
                    <Typography sx={{ fontWeight: 900, letterSpacing: 1 }}>
                        NicaBot Pay
                    </Typography>

                    <Typography
                        sx={{
                            px: 1.5,
                            py: 0.4,
                            borderRadius: 999,
                            backgroundColor: "rgba(255,255,255,0.18)",
                            fontSize: 12,
                            fontWeight: 900,
                        }}
                    >
                        Débito / Crédito
                    </Typography>
                </Box>

                <Box
                    sx={{
                        width: 46,
                        height: 34,
                        borderRadius: 1.2,
                        mb: 3,
                        background:
                            "linear-gradient(135deg, #fde68a 0%, #facc15 50%, #f59e0b 100%)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.45)",
                    }}
                />

                <Typography
                    sx={{
                        fontSize: { xs: 20, sm: 24 },
                        fontWeight: 900,
                        letterSpacing: 2,
                        mb: 3,
                        fontFamily: "monospace",
                    }}
                >
                    {formattedNumber}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 2,
                    }}
                >
                    <Box sx={{ minWidth: 0 }}>
                        <Typography
                            sx={{
                                fontSize: 10,
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.72)",
                                fontWeight: 800,
                                letterSpacing: 0.6,
                            }}
                        >
                            Titular
                        </Typography>

                        <Typography
                            sx={{
                                fontWeight: 900,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                textTransform: "uppercase",
                            }}
                        >
                            {cardName || "NOMBRE DEL CLIENTE"}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontSize: 10,
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.72)",
                                fontWeight: 800,
                                letterSpacing: 0.6,
                            }}
                        >
                            Vence
                        </Typography>

                        <Typography sx={{ fontWeight: 900 }}>
                            {cardExpiration || "MM/AA"}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
};

type SummaryRowProps = {
    label: string;
    value: string;
    strong?: boolean;
};

const SummaryRow = ({ label, value, strong = false }: SummaryRowProps) => {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
            <Typography
                sx={{
                    color: strong ? "#0f172a" : "#64748b",
                    fontWeight: strong ? 900 : 700,
                }}
            >
                {label}
            </Typography>

            <Typography
                sx={{
                    color: strong ? "#15803d" : "#0f172a",
                    fontWeight: 950,
                }}
            >
                {value}
            </Typography>
        </Box>
    );
};