"use client";

import Image from 'next/image'
import styles from './page.module.css'

import Head from 'next/head';
import { doLogin } from "@/services/Web3Service";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {

  const { push } = useRouter();

  const [message, setMessage] = useState('');

  function logar() {
    // alert("Ola Mundo");

    setMessage("Conectando com MetaMask...aguarde...");

    doLogin()
      .then( wallet => { 
        setMessage(wallet);
        push("/timeline");
      })
      .catch(err => {
        console.error(err);
        setMessage(err.message);
      });

  }

  return (
    <>
    <Head>
      <title>CryptTwitter | Login</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className='container px-4 py-5'>

      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

        <div className="col-10 col-sm-8 col-lg-6">

          <img className='d-block mx-lg-auto img-fluid' 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80" 
              alt="" 
              width="700" 
              height="500"/>

        </div>

        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">CryptTwitter</h1>
          <p className='lead'>Sua rede social descentralizada</p>
          <p className='lead mb-3'>Autentique-se com a sua carteira, escreva suas mensagens e saiba o que está acontecendo no mundo.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type='button' className='btn btn-primary btn-lg px-4 me-md-2' onClick={logar}>
              <img src="/metamask.svg" alt="" width="64" className='me-3'/>
              Conectar com a MetaMask
            </button>
          </div>
        </div>
        <p className='message'>{message}</p>
      </div>

    </div>
    </>
  )
}
