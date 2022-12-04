import {useRouter} from "next/router";
import Head from "next/head";

const ServiceList = () => {
    const router = useRouter()
    const {query} = router
    const {service, loc} = query
    const handleServiceClick = (e, service) => {
        alert(`you have pinged ${service}`)
    }
    return (
        <>
            <Head>
                <title>{`5 result found for ${service}`}</title>
            </Head>
            <div className={`flex flex-col justify-center items-center h-64 md:mx-auto  mx-4`}>
                <div className={`text-6xl`}>{`5 results found for ${service}...`}</div>
            </div>
            <div className={`container md:mx-auto mx-4`}>
                <div className={`flex flex-col gap-2 w-full`}>
                    {
                        ['service1', 'service2', 'service3', 'service4', 'service5', 'service6']
                            .map(service =>
                                <ServiceComponent key={service}
                                                  service={service}
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

const ServiceComponent = ({service, loc, handleClick, handleViewClick}) => {
    return (
        <div
            title={service}
            className={`px-8 bg-gradient-to-r from-blue-400 from-blue-600 text-white flex flex-col gap-y-4 md:gap-y-8 py-8 rounded-xl select-none `}
        >
            <div className={`text-2xl md:text-4xl`} title={service} id={`title`}>{service.toUpperCase()}</div>
            <div className={`text-md md:text-lg`} title={service} id={`description`}>{`description`}</div>
            <div className={`text-md md:text-lg`} title={service} id={`description`}>{loc}</div>

            <div className={`flex gap-3`} title={`ping him!`} id={`distance`}>
                <button title={`Ping him!`} onClick={(e) => handleClick(e, service)}
                        className={`cursor-pointer text-md md:text-xl px-4 py-2 bg-green-600 rounded-xl`}>Ping him!
                </button>
                <button title={ `Check on him!`} onClick={(e) => console.log(e, service)}
                        className={`cursor-pointer text-md md:text-xl px-4 py-2 bg-yellow-600 rounded-xl`}>Check on him!
                </button>
            </div>
        </div>
    )
}