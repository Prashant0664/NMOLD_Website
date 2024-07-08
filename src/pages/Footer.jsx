import React from 'react';
import "../styles/Footer.css";
import Logo from "../assets/Logo.png";

export const Footer = () => {
    return (
        <>
            <div className=' h-[336px]  flex justify-between px-[10rem] items-center w-full mt-[1rem]'>
                <div className='h-[210px]'>
                    <div className='h-[187px] w-[285px]'>
                        <img src={Logo} alt='Logo' className='h-[34px]' />
                        <div className='footer-content mt-[2rem]'>
                            We built an elegant solution. Our team believe that the success of our company is a result of our clients growth.
                        </div>
                        <br />
                        <br />
                        <div className='flex gap-4'>
                            <div className='bg-[var(--theme)] rounded-full p-[3px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#F7F6FF" />
                                    <path d="M13 8.00024C15.103 8.00024 16 8.89724 16 11.0002H18C18 7.77524 16.225 6.00024 13 6.00024V8.00024ZM16.422 13.4432C16.2299 13.2686 15.9774 13.1754 15.7178 13.1835C15.4583 13.1915 15.212 13.3001 15.031 13.4862L12.638 15.9472C12.062 15.8372 10.904 15.4762 9.71204 14.2872C8.52004 13.0942 8.15904 11.9332 8.05204 11.3612L10.511 8.96724C10.6975 8.78637 10.8062 8.54006 10.8142 8.28045C10.8222 8.02083 10.7289 7.76828 10.554 7.57624L6.85904 3.51324C6.68408 3.3206 6.44092 3.20374 6.18119 3.1875C5.92146 3.17125 5.66564 3.2569 5.46804 3.42624L3.29804 5.28724C3.12515 5.46075 3.02196 5.69169 3.00804 5.93624C2.99304 6.18624 2.70704 12.1082 7.29904 16.7022C11.305 20.7072 16.323 21.0002 17.705 21.0002C17.907 21.0002 18.031 20.9942 18.064 20.9922C18.3086 20.9786 18.5394 20.8749 18.712 20.7012L20.572 18.5302C20.7415 18.3328 20.8273 18.077 20.8113 17.8173C20.7952 17.5576 20.6785 17.3143 20.486 17.1392L16.422 13.4432Z" fill="#F7F6FF" />
                                </svg>
                            </div>
                            <div className='bg-[var(--theme)] rounded-full p-[3px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#F7F6FF" />
                                    <path d="M13 8.00024C15.103 8.00024 16 8.89724 16 11.0002H18C18 7.77524 16.225 6.00024 13 6.00024V8.00024ZM16.422 13.4432C16.2299 13.2686 15.9774 13.1754 15.7178 13.1835C15.4583 13.1915 15.212 13.3001 15.031 13.4862L12.638 15.9472C12.062 15.8372 10.904 15.4762 9.71204 14.2872C8.52004 13.0942 8.15904 11.9332 8.05204 11.3612L10.511 8.96724C10.6975 8.78637 10.8062 8.54006 10.8142 8.28045C10.8222 8.02083 10.7289 7.76828 10.554 7.57624L6.85904 3.51324C6.68408 3.3206 6.44092 3.20374 6.18119 3.1875C5.92146 3.17125 5.66564 3.2569 5.46804 3.42624L3.29804 5.28724C3.12515 5.46075 3.02196 5.69169 3.00804 5.93624C2.99304 6.18624 2.70704 12.1082 7.29904 16.7022C11.305 20.7072 16.323 21.0002 17.705 21.0002C17.907 21.0002 18.031 20.9942 18.064 20.9922C18.3086 20.9786 18.5394 20.8749 18.712 20.7012L20.572 18.5302C20.7415 18.3328 20.8273 18.077 20.8113 17.8173C20.7952 17.5576 20.6785 17.3143 20.486 17.1392L16.422 13.4432Z" fill="#F7F6FF" />
                                </svg>
                            </div>
                            <div className='bg-[var(--theme)] rounded-full p-[3px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#F7F6FF" />
                                    <path d="M13 8.00024C15.103 8.00024 16 8.89724 16 11.0002H18C18 7.77524 16.225 6.00024 13 6.00024V8.00024ZM16.422 13.4432C16.2299 13.2686 15.9774 13.1754 15.7178 13.1835C15.4583 13.1915 15.212 13.3001 15.031 13.4862L12.638 15.9472C12.062 15.8372 10.904 15.4762 9.71204 14.2872C8.52004 13.0942 8.15904 11.9332 8.05204 11.3612L10.511 8.96724C10.6975 8.78637 10.8062 8.54006 10.8142 8.28045C10.8222 8.02083 10.7289 7.76828 10.554 7.57624L6.85904 3.51324C6.68408 3.3206 6.44092 3.20374 6.18119 3.1875C5.92146 3.17125 5.66564 3.2569 5.46804 3.42624L3.29804 5.28724C3.12515 5.46075 3.02196 5.69169 3.00804 5.93624C2.99304 6.18624 2.70704 12.1082 7.29904 16.7022C11.305 20.7072 16.323 21.0002 17.705 21.0002C17.907 21.0002 18.031 20.9942 18.064 20.9922C18.3086 20.9786 18.5394 20.8749 18.712 20.7012L20.572 18.5302C20.7415 18.3328 20.8273 18.077 20.8113 17.8173C20.7952 17.5576 20.6785 17.3143 20.486 17.1392L16.422 13.4432Z" fill="#F7F6FF" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='w-[308px] flex gap-[156px]'>
                    <div className=''>
                            <div className=''>
                                <div className='text-[#060336] mb-3 text-[16px]' style={{fontWeight:"600", fontSize:"15px", lineHeight:"22.4px"}}>Explore</div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{fontWeight:"400", fontSize:"14px", lineHeight:"22.4px"}}>Home</div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{fontWeight:"400", fontSize:"14px", lineHeight:"22.4px"}}>About Us</div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{fontWeight:"400", fontSize:"14px", lineHeight:"22.4px"}}>Services</div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{fontWeight:"400", fontSize:"14px", lineHeight:"22.4px"}}>Pricing</div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{fontWeight:"400", fontSize:"14px", lineHeight:"22.4px"}}>Contact Us</div>
                            </div>
                        </div>
                        <div className=''>
                            <div className=''>
                                <div className='text-[#060336] mb-3 ' style={{fontWeight:"600", fontSize:"15px", lineHeight:"22.4px"}}>Help Center</div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{fontWeight:"400", fontSize:"14px", lineHeight:"22.4px"}}>Community</div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{fontWeight:"400", fontSize:"14px", lineHeight:"22.4px"}}>Knowledge</div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{fontWeight:"400", fontSize:"14px", lineHeight:"22.4px"}}>Terms and Conditions</div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{fontWeight:"400", fontSize:"14px", lineHeight:"22.4px"}}>Privacy</div>
                                <div className='text-[#444444] mb-3 cursor-pointer text-[14px] hover:text-[var(--theme)]' style={{fontWeight:"400", fontSize:"14px", lineHeight:"22.4px"}}>Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
