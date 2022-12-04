import {useRouter} from "next/router";
import Head from "next/head";

const ServiceList = () => {
    const router = useRouter()
    const {query} = router
    const {service, loc} = query
    const handleServiceClick = (e) => {
        console.log(e)
    }
    return (
        <>
            <Head>
                <title>{`5 result found for ${service}`}</title>
            </Head>
            <div className={`flex flex-col justify-center items-center h-64`}>
                <div className={`text-6xl`}>{`5 results found for ${service}...`}</div>
            </div>
            <div className={`flex flex-col justify-center items-center`}>
                <div className={`grid grid-cols-3 items-center gap-6`}>
                    {
                        ['service1', 'service2', 'service3', 'service4', 'service5', 'service6']
                            .map(service =>
                                <ServiceComponent key={service}
                                                  value={service}
                                                  loc={loc}
                                                  handleClick={handleServiceClick}
                                />
                            )
                    }
                </div>
            </div>
        </>

    )
}
export default ServiceList

const ServiceComponent = ({value, loc, handleClick}) => {
    console.log(loc)
    return (
        <div onClick={handleClick}
             title={value}
             className={`w-64 bg-slate-200 hover:bg-slate-400 text-white flex flex-col items-center gap-y-8 py-8 rounded-xl`}
        >
            <div className={`text-4xl`} title={value} id={`title`}>{value}</div>
            <div title={value} id={`description`}>{`description`}</div>
            <div title={`ping him!`} id={`distance`}>
                <button className={`cursor-pointer text-2xl px-4 py-2 bg-green-600 rounded-xl`}>Ping him!</button>
            </div>
        </div>
    )
}