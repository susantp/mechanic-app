import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Button, Container, Row, Spacer, Text} from "@nextui-org/react";
import {useState} from "react";
import {useRouter} from "next/router";

const Home = () => {
    const router = useRouter()
    const [query, setQuery] = useState("");
    const [homePageData, setHomePageData] = useState({
        appName: "Gravity Services",
        searchButtonText: "Search Service",
        searchButtonProgressText: "Searching...",
        footerText: "Powered By Techbizz"
    });
    const handleSearchClick = () => {
        const dd = {...homePageData}
        dd["searchButtonText"] = homePageData.searchButtonProgressText
        setHomePageData(dd)


        setTimeout(() => {
            const dd = {...homePageData}
            dd["searchButtonText"] = "Search Service"
            setHomePageData(dd)
            router.push('search')
        }, 3000)


    }
    return (
        <div className={styles.container}>
            <Head>
                <title>{homePageData.appName}</title>
                <meta name="description" content="get local services "/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>


                <Container>
                    {/*<Card css={{$$cardColor: '$colors$primary'}}>*/}
                    <Row justify="center" align="center">
                        <Text size={"2em"}>Welcome to</Text>
                    </Row>
                    <Row justify={`center`} align={`center`}>
                        <Text size={"5em"} h1={true} color={'#1b7bec'}>{homePageData.appName}</Text>
                        {/*<h1 className={styles.title}>*/}

                        {/*</h1>*/}
                    </Row>
                    <Spacer y={3}/>
                    <Row justify="center" align="center">
                        <SelectBox />
                        {/*<Input value={query} name={'query'} size={"xl"}*/}
                        {/*       label={"mechanics, taxi etc..."}/>*/}
                    </Row>
                    <Spacer y={3}/>
                    <Row justify="center" align="center">
                        <Button onPress={() => handleSearchClick()}
                                size={"md"}
                                color={'primary'}>{homePageData.searchButtonText}</Button>
                    </Row>
                </Container>
            </main>

            <footer className={styles.footer}>
                <Text>{homePageData.footerText}</Text>
            </footer>
        </div>
    )
}

export default Home
export const SelectBox = () => {
    return (
        <select style={{'width':"40vw", "height":"4vh"}}>
            <option value={`mechanics`}>Mechanics</option>
            <option value={`plumber`}>Plumber</option>
        </select>
    )
}