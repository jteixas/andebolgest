import { Navbar } from "~/components/nav-bar";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar/ >     
            <div className="-mt-24 h-screen flex items-center justify-center">                     
                {children}
            </div>  
        </>
    )
}