import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className=' py-20'>
            <div>
                <h1 className='text-primary font-semibold text-xl text-center'>Contact Us</h1>
                <p className='text-3xl text-center text-white'>Stay connected with us</p>
            </div>
            <div className='mt-5'>
                <form className='flex flex-col items-center space-y-2'>
                    <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-sm" />
                    <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-sm" />
                    <textarea className="textarea w-full max-w-sm" placeholder="Your message"></textarea>
                    <input type="submit" className='btn btn-primary max-w-xs text-white' value='submit'/>
                </form>
            </div>
        </section>
    );
};

export default Contact;