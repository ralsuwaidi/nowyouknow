import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router";


const List: NextPage = () => {
    const router = useRouter();
    const {
        query: { pid },
    } = router;

    return (
        <h1>hi {pid}</h1>
    )
}
export default List