import React, { lazy, Suspense } from 'react'
import { Spinner } from 'react-bootstrap';




const Header = lazy(() => import('../Header/Header'));
const Navigation = lazy(() => import('../Navigation/Navigation'));
const Invite = lazy(() => import('./Invite'));
const Fandom = lazy(() => import('./Fandom'));
const Hanging = lazy(() => import('./Hanging'));
const Relable = lazy(() => import('./Relable'));
export default function Home() {

    return (
        <div className="">
            <Suspense fallback={
            <div  style={{marginTop:'250px'}}>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="info" />
            <Spinner animation="border" variant="light" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
          </div>}>
                <Navigation ></Navigation>
                <Header></Header>
                <Invite></Invite>
                <Hanging></Hanging>
                <Fandom></Fandom>
                <Relable></Relable>

            </Suspense>


        </div >
    )
}
