import React from 'react';
import b1 from '../img/f1.svg'
import b2 from '../img/f2.png'
import b3 from '../img/f3.png'
import b4 from '../img/f4.png'
import b5 from '../img/f5.png'
import BlogModal from './BlogModal';
import BlogModalthree from './BlogModalthree';
import CollectionModal from './CollectionModal';
function Feature() {
    return (
        <div className='my-5'>
            <div className="container my-5">
                <div className="row gx-5 gy-5">
                    <div className="col-lg-4 my-5">
                        <div className='text-start'>
                            <h4 style={{
                                color: '#333',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                lineHeight: '20px'
                            }}>COLLECTION</h4>
                            <h3 className='featureh' >
                                PRODUCT & FEATURES
                            </h3>
                            <img className='img-fliuid' src={b1} alt="" />
                            <p className='featuretext'>
                                Announcements, new features, and general info about the Discord app.</p>

                            <CollectionModal />


                        </div>
                    </div>
                    <div className="col-lg-8 my-5">
                        <div className="row">
                            <div className="col-lg-12 my-5">
                                <div className='text-start'>
                                    <img src={b2} className='img-fluid rounded-3' alt="" />


                                    <h3 className='ftitle my-4'> <BlogModalthree />
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-2 gy-5">
                            <div className="col-lg-4 col-md-4">
                                <div className='text-start'>
                                    <img src={b3} style={{ width: '100%', height: '150px' }} className='rounded-3 ' alt="" />
                                    
                                    <div className="d-flex justify-content-between align-items-center">
                                    
                                        <h5 className='blogtile  m-0 p-0'> <BlogModal /> </h5>
                                    </div>
                                    <h3 className='ftitle my-2'>Starting Now, Nitro Users Get 3 Months of Picsart Gold

                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className='text-start'>
                                    <img src={b4} style={{ width: '100%', height: '150px' }} className=' rounded-3' alt="" />
  
                                    <div className="d-flex justify-content-between align-items-center">
                                    
                                        <h5 className='blogtile  m-0 p-0'> <BlogModal /> </h5>
                                    </div>

                                    <h3 className='ftitle my-2'>Starting Now, Nitro Users Get 3 Months of Picsart Gold

                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className='text-start'>
                                    <img src={b5} style={{ width: '100%', height: '150px' }} className=' rounded-3' alt="" />
                                      
                                    <div className="d-flex justify-content-between align-items-center">
                                    
                                        <h5 className='blogtile  m-0 p-0'> <BlogModal /> </h5>
                                    </div>
                                    <h3 className='ftitle my-2'>Starting Now, Nitro Users Get 3 Months of Picsart Gold

                                    </h3>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div >
    );
}

export default Feature;
