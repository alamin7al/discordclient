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