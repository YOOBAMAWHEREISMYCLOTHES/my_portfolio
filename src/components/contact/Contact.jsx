import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useForm } from 'react-hook-form';
import './contact.css';


const Contact = () => {


    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,

    } = useForm({
        mode: 'onBlur',
    });

    const [submitted, setSubmitted] = useState(false);
    const [showSubmitButton, setShowSubmitButton] = useState(true);

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        setSubmitted(true);
        setShowSubmitButton(false);
        reset();
    }

    return (<section id='contact'>
        <Container className='form_main'>
            <Row>

                <Col lg='6' md='6'>
                    <div className='form_content'>
                        <h2>Contact Me!</h2>
                        <p>I will definitely read your message.</p>
                    </div>
                    <div className='table_form'>
                        <form className='book_table row' onSubmit={handleSubmit(onSubmit)}>
                            <div className='form_group col-md-12'>

                                <input className='input_field' placeholder="Enter your name" disabled={submitted} {...register('firstName', {
                                    required: 'This field is required.',
                                    minLength: {
                                        value: 2,
                                        message: 'Please, at least two symbols.'
                                    }
                                })} />

                                <div className='error_msg'>
                                    {errors?.firstName && <p>{errors?.firstName.message || 'Error!'}</p>}
                                </div>
                            </div>

                            <div className='form_group col-md-12'>

                                <input className='input_field' placeholder="Enter your Email" type='email' id='email' name='email' disabled={submitted} {...register('email', {
                                    required: 'This field is required.',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Email must have required format.'
                                    }
                                })} />

                                <div className='error_msg'>
                                    {errors?.email && <p>{errors?.email.message || 'Error!'}</p>}
                                </div>
                            </div>

                            <div className='form_group col-md-12'>

                                <select className='input_field' disabled={submitted} label='select...' {...register("table", {
                                    required: 'Please, choose type of proposal.'
                                })}>
                                    <option value="">Choose type of proposal...</option>
                                    <option value="1">Freelance project proposal</option>
                                    <option value="2">Part-time work proposal</option>
                                    <option value="3">Full-time work proposal</option>
                                    <option value="4">Other type of proposal</option>
                                </select>
                                <div className='error_msg'>
                                    {errors?.table && <p>{errors?.table.message || 'Error!'}</p>}
                                </div>
                            </div>

                            <div className='form_group col-md-12'>

                                <textarea rows = "5" cols = "60" name = "message" className='input_field' placeholder="Your message..." maxLength={1000} disabled={submitted} {...register('firstName', {
                                    required: 'This field is required.',
                                    minLength: {
                                        value: 2,
                                        message: 'That is all? Come on...'
                                    }
                                })} />

                                <div className='error_msg'>
                                    {errors?.firstName && <p>{errors?.firstName.message || 'Error!'}</p>}
                                </div>
                            </div>

                            <div className='form_group col-md-12'>
                                {showSubmitButton && <input className='submit_btn' type='submit' value='Submit' disabled={!isValid} />}
                            </div>
                        </form>
                        {submitted && <div><p>Thank you!</p></div>}
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    )
}

export default Contact;