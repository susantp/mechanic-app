import HomePageSearchComponent from "../components/home-page-search-component";
import {useRef, useState} from "react";
import Head from "next/head";
import {useRouter} from "next/router";


const useLocation = () => {
    const [position, setPosition] = useState({});
    const [positionError, setPositionError] = useState({});
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                setPosition(position)
            },
            (positionError) => {
                setPositionError(positionError)
            })
    }
    return {positionError, position}
}
const Home = () => {
    const router = useRouter()
    const inputRef = useRef("")
    const {position, positionError} = useLocation()
    const handleQuery = (e) => {
        const {coords: {latitude, longitude}} = position
        const {value} = inputRef.current
        router.push(`query?service=${value}&lat=${latitude}&long=${longitude}`)
    }
    return (
        <>
            <Head>
                <title>Gravity Services</title>
            </Head>
            <div className={`flex justify-center items-center h-screen flex-col  gap-y-16`}>
                <div className={`flex justify-center items-center w-full gap-y-2 gap-x-2 `}>
                    <h1 className={`text-2xl lg:text-6xl md:text-4xl  font-semibold text-blue-400`}>Choose 100+ Services
                        around you.</h1>
                </div>

                <HomePageSearchComponent inputRef={inputRef} handleClick={handleQuery}
                                         placeholder={`Car repairing, Electricity repairing`}/>
            </div>
        </>
    )
}
export default Home