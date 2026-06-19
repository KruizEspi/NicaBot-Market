import { useState } from "react";
import {
    categoryProductsMock,
    dashboardActionsMock,
    dashboardActivityMock,
    dashboardStatsMock,
    monthlySalesMock,
    storeStatusMock,
} from "../data/dashboard.mock";
import { DashboardTemplate } from "../templates/dashboard-template";

export default function DashboardPage() {
    const [chatOpen, setChatOpen] = useState(false);

    return (
        <DashboardTemplate
            stats={dashboardStatsMock}
            actions={dashboardActionsMock}
            activities={dashboardActivityMock}
            monthlySales={monthlySalesMock}
            categoryProducts={categoryProductsMock}
            storeStatus={storeStatusMock}
            chatOpen={chatOpen}
            onChatToggle={() => setChatOpen((prev) => !prev)}
        />
    );
}