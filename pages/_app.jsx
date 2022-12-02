
import {CssBaseline, NextUIProvider} from "@nextui-org/react";
import './../styles/Home.module.css'
function MyApp({Component, pageProps}) {
    return (
            <NextUIProvider>
                {CssBaseline.flush()}
                <Component {...pageProps} />
            </NextUIProvider>
    )
}

export default MyApp
