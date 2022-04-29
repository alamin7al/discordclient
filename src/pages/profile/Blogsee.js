import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
import { AiOutlineDislike } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';

export default function Blogsee() {


    const [fileData, setfileData] = useState([]);
    useEffect(() => {
        const url = `https://still-plateau-84079.herokuapp.com/blogdata`
        fetch(url)
            .then(res => res.json())
            .then(data => setfileData(data))
    }, [])
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();


    // const onSubmit = data => {

    //     // const url = `https://still-plateau-84079.herokuapp.com/user`
    //     // fetch(url, {
    //     //     method: 'POST',
    //     //     headers: {
    //     //         'content-type': 'application/json'
    //     //     },
    //     //     body: JSON.stringify(data)
    //     // })
    //     //     .then(res => res.json())
    //     //     .then(data => {
    //     //         if (data.insertedId) {
    //     //             alert('update')
    //     //         }
    //     //     })
    //     console.log(data);
    // }









    return (
        <div>
            <div className="row gx-5 gy-5">
                {
                    fileData.length === 0 ? <div style={{ marginTop: '10px' }}>
                        <>
                            <h5 className='text-white'>Add Blog</h5>

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
                    </div> : ''
                }

                {
                    fileData.map((s, i) => <>
                        <div key={i} className="col-lg-6 col-md-6 col-sm-12">
                            <div className='text-start'>
                                <img className='img-fluid blogimage' src={`data:image/png;base64,${s.image}`} alt="" />
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className='text-white lead m-0 p-0'> {s.heding}</h5>
                                </div>
                                <h3 className='text-white lead my-2'>{s.desc}
                                </h3>
                                <div className="d-flex justify-content-between align-items-center">
                               
                                        <button className='text-white lead m-0 p-0' style={{ border: '0', outline: '0', backgroundColor: 'transparent' }}>
                                            <AiFillLike className='fs-3 text-white'> </AiFillLike> (1)
                                        </button>
                                        <button className='text-white lead m-0 p-0' style={{ border: '0', outline: '0', backgroundColor: 'transparent' }}>
                                            <AiOutlineDislike className='fs-3 text-white'></AiOutlineDislike> (0)
                                        </button>

                        
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    )
}
