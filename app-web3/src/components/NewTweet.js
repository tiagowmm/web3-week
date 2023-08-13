"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addTweet } from "@/services/Web3Service";


export default function NewTweet() {

    const [text, setText] = useState("");
    const [message, setMessage] = useState("");
    const { push }  = useRouter();

    function enviarTweet() {
        setMessage("Enviando seu tweet para a blockchain...aguarde....");
        // alert("Ola!!!" + text);
        addTweet(text)
            .then(res => {
                setText("");
                setMessage("Tweet enviado com sucesso. Aguarde alguns instantes para atualizar a pagina.");
            })
            .catch(err => {
                console.error(err);
                setMessage(err.message);
            });
    }

    useEffect(() => {
        const wallet = localStorage.getItem("wallet");
        if (!wallet) {
            push('/');
        }
    }, []);

    return (
        <>
            <div className="top">
                <div className="left">
                    <img src="/twitter.svg" className="brand" />
                </div>
                <h1>
                    Bem vindo de volta!
                </h1>
                <p>O que está acontecendo?</p>
                <textarea className="form-control my-3" value={text} onChange={evt => setText(evt.target.value)}>
                </textarea>
                <div>
                    <input type="button" className="btn btn-primary" value="Enviar" onClick={enviarTweet} />
                    <span className="message">
                        {message}
                    </span>
                </div>
            </div>
        </>
    )
}