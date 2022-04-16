import './Nitro.css'

import React, { lazy, Suspense } from 'react'
import { Spinner } from 'react-bootstrap';



const NitroHeder = lazy(() => import('./NitroHeder'));
const DiscordBtn = lazy(() => import('./DiscordBtn'));
const DiscordCard = lazy(() => import('./DiscordCard'));
const DiscordNitroRext = lazy(() => import('./DiscordNitroRext'));
const NitroClassic = lazy(() => import('./NitroClassic'));
const Footer = lazy(() => import('../Footer/Footer'));
const NitroNavigation = lazy(() => import('./NitroNavigation'));





const Nitro = () => {
    return (
        <div>
            <Suspense fallback={
            <div style={{marginTop:'250px'}}>
            <Spinner  animation="border" variant="dark" />
            <Spinner  animation="border" variant="dark" />
            <Spinner  animation="border" variant="dark" />
            <Spinner  animation="border" variant="dark" />
            <Spinner  animation="border" variant="dark" />
            <Spinner  animation="border" variant="dark" />
            <Spinner  animation="border" variant="dark" />
            <Spinner  animation="border" variant="dark" />
            <Spinner  animation="border" variant="dark" />
           
          </div>}>

                <div className="nitro">
                    <NitroNavigation></NitroNavigation>
                    <NitroHeder></NitroHeder>
                </div>
                <DiscordNitroRext></DiscordNitroRext>
                <DiscordCard />
                <DiscordBtn />
                <NitroClassic />
                <Footer></Footer>
            </Suspense>
        </div>
    );
};

export default Nitro;