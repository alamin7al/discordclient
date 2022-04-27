import React, { lazy, Suspense } from 'react'
import { Spinner } from 'react-bootstrap';


const BlogCard = lazy(() => import('./BlogCard'));
const BlogNavigation = lazy(() => import('./BlogNavigation'));
const BlogTitle = lazy(() => import('./BlogTitle'));
const BlogHedar = lazy(() => import('./BlogHedar'));
const Feature = lazy(() => import('./Feature'));
const Footer = lazy(() => import('../Footer/Footer'));
const Featurec = lazy(() => import('./Featurec'));

const BlogHome = () => {
    return (
        <div>
            <Suspense fallback={
                <div style={{ marginTop: '250px' }}>
                    <>
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
                    </>

                </div>}>
                <BlogNavigation />
                <BlogHedar />
                <BlogTitle />
                <BlogCard />
                <Feature />
                <Featurec />
                <Footer />
            </Suspense>

        </div >
    );
};

export default BlogHome;