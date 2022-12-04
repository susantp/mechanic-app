import {useRouter} from "next/router";
import Head from "next/head";
import {AiOutlineStar} from "react-icons/ai";

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

            <div className={`flex flex-col justify-center items-center h-64 md:mx-auto  mx-4 gap-y-2`}>
                <div className={`text-6xl`}>{`5 results found for ${service}...`}</div>

            </div>
            <div className={`container md:mx-auto mx-4`}>
                <div className={`flex gap-x-6 w-full justify-start  my-4`}>
                    <div className={`p-2.5`}>
                        <h2 >{`Filter By`}</h2>
                    </div>
                    <div>
                        <select onClick={()=>console.log('filter by name ', )} value={`filter-by-name`} id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value={`0`}>by name</option>
                            <option  value={`ascending`}>{`A-Z`}</option>
                            <option value={`descending`}>{`Z-A`}</option>
                        </select>

                    </div>
                    <div>

                        <select onClick={()=>console.log('filter by rating ', )} defaultValue={`filter-by-rating`} id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value={`0`}>by rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div>
                        <div></div>
                        <button className={`py-2 px-4 bg-blue-600 text-white rounded-lg`}>{`Filter`}</button>
                    </div>
                </div>
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
                        className={`cursor-pointer text-md md:text-xl px-4 py-2 bg-green-800 hover:bg-green-600 rounded-xl`}>Ping
                    him!
                </button>
                <button title={`Check on him!`} onClick={(e) => console.log(e, service)}
                        className={`cursor-pointer text-md md:text-xl px-4 py-2 bg-yellow-800 hover:bg-yellow-600 rounded-xl`}>Check
                    on him!
                </button>
            </div>
        </div>
    )
}