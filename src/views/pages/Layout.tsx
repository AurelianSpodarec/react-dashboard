import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "routes/CustomRoutes";

import { Footer, Header, Navigation } from "./components";

function Layout() {
    return (
        <BrowserRouter>  
        <div className="flex h-full overflow-hidden">

            <div>
                <Navigation />
            </div>

            <div className="flex w-full h-full flex-col h-screen">
                <Header />

                <main>
                    <CustomRoutes />
                </main>

                <Footer />
            </div>

        </div>
        </BrowserRouter>
    )
}

export default Layout;