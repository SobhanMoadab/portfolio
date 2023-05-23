import '../../styles/global.css'

export default function DashboardRootLayout({ children }: any) {
    return (
        <html lang="en">
            <head />
            <body className="">
                {children}
            </body>
        </html>
    )
}