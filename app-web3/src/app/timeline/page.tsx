
"use client";

import Head from 'next/head';
import { useState, useEffect } from "react";
import NewTweet from '@/components/NewTweet';
import Tweet from "@/components/Tweet";
import { getLastTweets } from "@/services/Web3Service";


export default function Timeline() {

    const [tweets, setTweets ] = useState([]);
    const [page, setPage ] = useState(1);

    function carregarMaisTweets() {
        setPage(page + 1);
    }

    async function loadTweet(page = 1) {
        try {
            const results = await getLastTweets(page);
            console.log(results);
            if (page > 1) {
                tweets.push(...results);
                setTweets(tweets.reverse())
            } else {
                setTweets(results.reverse());
            }
        } catch (err: any) {
            console.error(err);
            alert(err.message);
        }
    }

    useEffect(() => {
        loadTweet(page);
    }, [page]);

    return (
        <>
            <Head>
                <title>CryptTwitter | Login</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container">
                <div className="row">
                    <div className="layout">
                        <NewTweet />
                        {
                            tweets && tweets.length 
                            ? tweets.map(t => <Tweet key={Number(t.timestamp)} data={t} /> ) 
                            : <p className='message'>Ainda não tem tweet. Envie o seu primeiro tweet.</p>
                        }
                        {
                            tweets.length > 0 && tweets.length % 10 === 0
                                ? (<div className="center">
                                        <input type='button' className='btn btn-primary' value="Mais Tweets" onClick={carregarMaisTweets}/>
                                    </div>)
                                : <></> 
                        }
                    </div>
                </div>
            </div>
        </>
    )
}