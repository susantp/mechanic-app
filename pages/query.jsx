import React from 'react';
import {useRouter} from "next/router";
import Head from "next/head";

function Query(props) {
    const router = useRouter()
    const {query: {service, lat, long}} = router
    setTimeout(() => {
        router.push(`service-list?service=${service}&loc=${lat},${long}`)
    }, 4000)
    return (
        <>
            <Head>
                <title>{`Searching for ${service}...`}</title>
            </Head>
            <SearchingProcessComponent service={service} lat={lat} long={long}/>
        </>
    );
}

export default Query;

const SearchingProcessComponent = ({service, lat, long}) => {
    return <div className={`flex justify-center items-center h-screen flex-col gap-y-2`}>
        <h1 className={`text-3xl`}>Searching for <span
            className={`text-2xl md:text-4xl  lg:text-5xl text-blue-600 font-semibold`}>{service}...</span></h1>
        <p>{`for location ${lat}, ${long}`}</p>
    </div>
}