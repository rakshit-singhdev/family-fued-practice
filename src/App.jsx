import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const App = () => {
    return (
        <>
            <Outlet />

            <Toaster
                theme="dark"
                richColors
                closeButton
                position="top-right"
                toastOptions={{
                    classNames: {
                        toast: "bg-slate-900 border border-slate-700 text-white",
                        title: "font-bold text-white",
                        description: "text-slate-300",
                        actionButton: "bg-amber-500 text-black",
                        cancelButton: "bg-slate-700 text-white",
                        closeButton: "text-slate-400 hover:text-white",
                    },
                }}
            />
        </>
    );
};

export default App;