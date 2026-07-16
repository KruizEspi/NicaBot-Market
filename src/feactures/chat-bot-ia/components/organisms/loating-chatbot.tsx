import {
    useEffect,
    useRef,
    useState,
    type FormEvent,
    type KeyboardEvent,
} from "react";
import {
    Avatar,
    Box,
    CircularProgress,
    IconButton,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import SendRoundedIcon from "@mui/icons-material/SendRounded";

type FloatingChatbotProps = {
    open: boolean;
    onToggle: () => void;
};

type ChatMessageRole = "user" | "bot" | "error";

type ChatMessage = {
    id: string;
    role: ChatMessageRole;
    text: string;
};

type RasaResponse = {
    recipient_id?: string;
    text?: string;
    image?: string;
    buttons?: Array<{
        title: string;
        payload: string;
    }>;
    custom?: unknown;
};

type ConnectionStatus = "checking" | "online" | "offline";

const RASA_BASE_URL = (
    process.env.REACT_APP_RASA_URL ?? "http://localhost:5005"
).replace(/\/$/, "");

const SENDER_STORAGE_KEY = "nicabot-rasa-sender-id";

const createId = (): string => {
    if (
        typeof crypto !== "undefined" &&
        typeof crypto.randomUUID === "function"
    ) {
        return crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}`;
};

const getOrCreateSenderId = (): string => {
    const savedSenderId = localStorage.getItem(
        SENDER_STORAGE_KEY,
    );

    if (savedSenderId) {
        return savedSenderId;
    }

    const newSenderId = createId();

    localStorage.setItem(
        SENDER_STORAGE_KEY,
        newSenderId,
    );

    return newSenderId;
};

export const FloatingChatbot = ({
                                    open,
                                    onToggle,
                                }: FloatingChatbotProps) => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: createId(),
            role: "bot",
            text: "Hola 👋 Soy NicaBot, tu asistente para buscar productos, tiendas y recomendaciones locales.",
        },
    ]);

    const [inputValue, setInputValue] = useState("");
    const [isSending, setIsSending] = useState(false);

    const [connectionStatus, setConnectionStatus] =
        useState<ConnectionStatus>("checking");

    const [senderId] = useState<string>(() =>
        getOrCreateSenderId(),
    );

    const messagesEndRef =
        useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!open) {
            return;
        }

        let componentMounted = true;

        const checkConnection = async () => {
            setConnectionStatus("checking");

            try {
                const response = await fetch(
                    `${RASA_BASE_URL}/status`,
                );

                if (!componentMounted) {
                    return;
                }

                setConnectionStatus(
                    response.ok ? "online" : "offline",
                );
            } catch {
                if (!componentMounted) {
                    return;
                }

                setConnectionStatus("offline");
            }
        };

        void checkConnection();

        return () => {
            componentMounted = false;
        };
    }, [open]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, isSending, open]);

    const addMessage = (
        role: ChatMessageRole,
        text: string,
    ) => {
        setMessages((currentMessages) => [
            ...currentMessages,
            {
                id: createId(),
                role,
                text,
            },
        ]);
    };

    const sendMessageToRasa = async (
        message: string,
    ): Promise<RasaResponse[]> => {
        const response = await fetch(
            `${RASA_BASE_URL}/webhooks/rest/webhook`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    sender: senderId,
                    message,
                }),
            },
        );

        if (!response.ok) {
            const responseBody = await response.text();

            throw new Error(
                `Rasa respondió con HTTP ${response.status}. ${responseBody}`,
            );
        }

        const responseData: unknown =
            await response.json();

        if (!Array.isArray(responseData)) {
            throw new Error(
                "Rasa devolvió una respuesta con formato inválido.",
            );
        }

        return responseData as RasaResponse[];
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        const cleanMessage = inputValue.trim();

        if (!cleanMessage || isSending) {
            return;
        }

        addMessage("user", cleanMessage);

        setInputValue("");
        setIsSending(true);

        try {
            const rasaResponses =
                await sendMessageToRasa(cleanMessage);

            setConnectionStatus("online");

            const textResponses = rasaResponses.filter(
                (
                    response,
                ): response is RasaResponse & {
                    text: string;
                } =>
                    typeof response.text === "string" &&
                    response.text.trim().length > 0,
            );

            if (textResponses.length === 0) {
                addMessage(
                    "bot",
                    "Recibí tu mensaje, pero todavía no tengo una respuesta configurada para esa consulta.",
                );

                return;
            }

            textResponses.forEach((response) => {
                addMessage(
                    "bot",
                    response.text.trim(),
                );
            });
        } catch (error) {
            setConnectionStatus("offline");

            const errorMessage =
                error instanceof Error
                    ? error.message
                    : "Ocurrió un error desconocido.";

            addMessage(
                "error",
                `No fue posible comunicarse con NicaBot. ${errorMessage}`,
            );
        } finally {
            setIsSending(false);
        }
    };

    const handleInputKeyDown = (
        event: React.KeyboardEvent,
    ) => {
        if (
            event.key === "Enter" &&
            !event.shiftKey &&
            !isSending
        ) {
            event.preventDefault();

            handleSubmit(event as unknown as FormEvent<HTMLFormElement>);
        }
    };

    const statusText: Record<
        ConnectionStatus,
        string
    > = {
        checking: "Comprobando conexión...",
        online: "Rasa conectado",
        offline: "Rasa no disponible",
    };

    const statusColor: Record<
        ConnectionStatus,
        string
    > = {
        checking: "#facc15",
        online: "#86efac",
        offline: "#fecaca",
    };

    return (
        <Box
            sx={{
                position: "fixed",
                right: { xs: 16, md: 24 },
                bottom: { xs: 16, md: 24 },
                zIndex: 1200,
            }}
        >
            {open && (
                <Paper
                    elevation={0}
                    sx={{
                        width: {
                            xs: "calc(100vw - 32px)",
                            sm: 390,
                        },
                        height: {
                            xs: 480,
                            sm: 520,
                        },
                        mb: 2,
                        borderRadius: 5,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        border:
                            "1px solid rgba(34, 197, 94, 0.28)",
                        background:
                            "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
                        boxShadow:
                            "0 28px 80px rgba(15, 23, 42, 0.28), 0 0 0 1px rgba(255,255,255,0.6)",
                    }}
                >
                    {/* Encabezado */}
                    <Box
                        sx={{
                            position: "relative",
                            overflow: "hidden",
                            p: 2,
                            color: "#fff",
                            background:
                                "linear-gradient(135deg, #064e3b 0%, #15803d 45%, #22c55e 100%)",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                inset: 0,
                                background:
                                    "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.25), transparent 26%), radial-gradient(circle at 85% 20%, rgba(250,204,21,0.22), transparent 28%)",
                                pointerEvents: "none",
                            },
                        }}
                    >
                        <Stack
                            direction="row"
                            spacing={1.5}
                            sx={{
                                position: "relative",
                                zIndex: 2,
                                alignItems: "center",
                                justifyContent:
                                    "space-between",
                            }}
                        >
                            <Stack
                                direction="row"
                                spacing={1.5}
                                sx={{
                                    alignItems: "center",
                                }}
                            >
                                <Avatar
                                    src="/ave-chatbot.png"
                                    alt="NicaBot"
                                    sx={{
                                        width: 46,
                                        height: 46,
                                        backgroundColor:
                                            "#facc15",
                                        color: "#064e3b",
                                        fontWeight: 900,
                                        boxShadow:
                                            "0 10px 24px rgba(0,0,0,0.22)",
                                    }}
                                >
                                    N
                                </Avatar>

                                <Box>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontWeight: 900,
                                            lineHeight: 1.1,
                                        }}
                                    >
                                        NicaBot Asistente
                                    </Typography>

                                    <Stack
                                        direction="row"
                                        spacing={0.7}
                                        sx={{
                                            alignItems:
                                                "center",
                                            mt: 0.5,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius:
                                                    "50%",
                                                backgroundColor:
                                                    statusColor[
                                                        connectionStatus
                                                        ],
                                                boxShadow: `0 0 12px ${
                                                    statusColor[
                                                        connectionStatus
                                                        ]
                                                }`,
                                            }}
                                        />

                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color:
                                                    "rgba(255,255,255,0.88)",
                                                fontWeight: 600,
                                            }}
                                        >
                                            {
                                                statusText[
                                                    connectionStatus
                                                    ]
                                            }
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Stack>

                            <IconButton
                                size="small"
                                onClick={onToggle}
                                aria-label="Cerrar chat"
                                sx={{
                                    color: "#fff",
                                    backgroundColor:
                                        "rgba(255,255,255,0.14)",
                                    border:
                                        "1px solid rgba(255,255,255,0.22)",
                                    "&:hover": {
                                        backgroundColor:
                                            "rgba(255,255,255,0.22)",
                                    },
                                }}
                            >
                                ✕
                            </IconButton>
                        </Stack>
                    </Box>

                    {/* Mensajes */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            p: 2,
                            overflowY: "auto",
                            background:
                                "radial-gradient(circle at top right, rgba(34,197,94,0.10), transparent 30%), #f8fafc",
                        }}
                    >
                        <Stack spacing={1.5}>
                            {messages.map((message) => {
                                const isUser =
                                    message.role === "user";

                                const isError =
                                    message.role === "error";

                                return (
                                    <Box
                                        key={message.id}
                                        sx={{
                                            display: "flex",
                                            justifyContent:
                                                isUser
                                                    ? "flex-end"
                                                    : "flex-start",
                                        }}
                                    >
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 1.5,
                                                maxWidth: "86%",
                                                borderRadius:
                                                    isUser
                                                        ? "18px 18px 6px 18px"
                                                        : "18px 18px 18px 6px",
                                                backgroundColor:
                                                    isError
                                                        ? "#fee2e2"
                                                        : isUser
                                                            ? "#15803d"
                                                            : "#ffffff",
                                                color: isError
                                                    ? "#991b1b"
                                                    : isUser
                                                        ? "#ffffff"
                                                        : "#0f172a",
                                                border: isError
                                                    ? "1px solid #fecaca"
                                                    : isUser
                                                        ? "1px solid #16a34a"
                                                        : "1px solid #e2e8f0",
                                                boxShadow:
                                                    "0 8px 20px rgba(15, 23, 42, 0.06)",
                                            }}
                                        >
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    lineHeight: 1.6,
                                                    whiteSpace:
                                                        "pre-wrap",
                                                    overflowWrap:
                                                        "anywhere",
                                                }}
                                            >
                                                {
                                                    message.text
                                                }
                                            </Typography>
                                        </Paper>
                                    </Box>
                                );
                            })}

                            {isSending && (
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent:
                                            "flex-start",
                                    }}
                                >
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            px: 2,
                                            py: 1.3,
                                            borderRadius:
                                                "18px 18px 18px 6px",
                                            backgroundColor:
                                                "#fff",
                                            border:
                                                "1px solid #e2e8f0",
                                        }}
                                    >
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            sx={{
                                                alignItems: "center",
                                            }}
                                        >
                                            <CircularProgress
                                                size={15}
                                                thickness={5}
                                                sx={{
                                                    color:
                                                        "#16a34a",
                                                }}
                                            />

                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color:
                                                        "#64748b",
                                                    fontWeight: 700,
                                                }}
                                            >
                                                NicaBot está
                                                escribiendo...
                                            </Typography>
                                        </Stack>
                                    </Paper>
                                </Box>
                            )}

                            <Box ref={messagesEndRef} />
                        </Stack>
                    </Box>

                    {/* Formulario */}
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            p: 1.5,
                            borderTop:
                                "1px solid #e2e8f0",
                            backgroundColor: "#fff",
                        }}
                    >
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                                alignItems: "center",
                            }}
                        >
                            <TextField
                                fullWidth
                                size="small"
                                value={inputValue}
                                onChange={(event) => {
                                    setInputValue(event.target.value);
                                }}
                                onKeyDown={handleInputKeyDown}
                                placeholder="Escribe tu mensaje..."
                                disabled={isSending}
                                autoComplete="off"
                                slotProps={{
                                    htmlInput: {
                                        maxLength: 500,
                                        "aria-label": "Mensaje para NicaBot",
                                    },
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: 999,
                                        backgroundColor: "#f8fafc",
                                        fontWeight: 600,
                                    },
                                }}
                            />

                            <IconButton
                                type="submit"
                                disabled={
                                    isSending ||
                                    inputValue.trim()
                                        .length === 0
                                }
                                aria-label="Enviar mensaje"
                                sx={{
                                    width: 42,
                                    height: 42,
                                    flexShrink: 0,
                                    color: "#fff",
                                    background:
                                        "linear-gradient(135deg, #15803d 0%, #22c55e 100%)",
                                    "&:hover": {
                                        background:
                                            "linear-gradient(135deg, #166534 0%, #16a34a 100%)",
                                    },
                                    "&.Mui-disabled": {
                                        color: "#94a3b8",
                                        backgroundColor:
                                            "#e2e8f0",
                                        backgroundImage:
                                            "none",
                                    },
                                }}
                            >
                                {isSending ? (
                                    <CircularProgress
                                        size={20}
                                        sx={{
                                            color: "inherit",
                                        }}
                                    />
                                ) : (
                                    <SendRoundedIcon />
                                )}
                            </IconButton>
                        </Stack>
                    </Box>
                </Paper>
            )}

            {/* Botón flotante */}
            <IconButton
                onClick={onToggle}
                aria-label={
                    open
                        ? "Cerrar asistente"
                        : "Abrir asistente"
                }
                sx={{
                    position: "relative",
                    width: 68,
                    height: 68,
                    background:
                        "linear-gradient(135deg, #064e3b 0%, #16a34a 55%, #22c55e 100%)",
                    color: "#fff",
                    boxShadow:
                        "0 18px 42px rgba(21,128,61,0.45), 0 0 0 8px rgba(34,197,94,0.12)",
                    border:
                        "1px solid rgba(255,255,255,0.35)",
                    overflow: "hidden",
                    transition: "all 0.22s ease",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: -8,
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(250,204,21,0.35), transparent 60%)",
                        opacity: open ? 0.4 : 1,
                    },
                    "&:hover": {
                        transform:
                            "translateY(-4px) scale(1.03)",
                        boxShadow:
                            "0 24px 54px rgba(21,128,61,0.55), 0 0 0 10px rgba(34,197,94,0.16)",
                    },
                }}
            >
                <Box
                    component="img"
                    src="/ave-chatbot.png"
                    alt="NicaBot"
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        width: open ? 30 : 48,
                        height: open ? 30 : 48,
                        objectFit: "contain",
                        transition: "all 0.2s ease",
                    }}
                />
            </IconButton>
        </Box>
    );
};