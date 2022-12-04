import HomePageSearchComponent from "../components/home-page-search-component";
import {useRef} from "react";
import Head from "next/head";


if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(position)
        },
        (positionError) => {
            console.log(positionError)
        })
}
const Home = () => {
    const inputRef = useRef()
    return (
        <>
            <Head>
                <title>Gravity Services</title>
            </Head>
            <div className={`flex justify-center items-center h-screen flex-col  gap-y-16`}>
                <div className={`flex justify-center items-center w-full gap-y-2 gap-x-2 `}>
                    <h1 className={`text-2xl lg:text-6xl md:text-4xl  font-semibold text-blue-400`}>Choose 100+ Services around you.</h1>
                </div>

                <HomePageSearchComponent inputRef={inputRef} placeholder={`Sydney, Australia`} />
            </div>
        </>
    )
}
export default Home