import React from 'react';
import './footer.css';
import {IoLogoFacebook, IoLogoInstagram, IoLogoTiktok, IoLogoWhatsapp} from 'react-icons/io5';

const Footer = () => {
    return (
        <div className='container-fluid footer-section' id='kontak'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                        <div className='footer-kontak-1'>
                            <h6 style={{color:"white", marginTop:"20px"}}>Tentang Kami</h6>
                            <p>
                                Pondok Pesantren Darul 'Amal Buni Bakti terletak 
                                di desa Buni Bakti, Babelan, Bekasi, Jawa Barat. 
                                Lembaga pendidikan Islam ini didirikan pada tahun 
                                1984 oleh KH. Madrais Hajar, Lc dan hingga saat ini 
                                masih berdiri kokoh dan terus berkembang.
                            </p>
                            <span className='social-icons'>
                                <p><IoLogoFacebook size={30}/></p>
                                <p><IoLogoInstagram size={30}/></p>
                                <p><IoLogoTiktok size={30}/></p>
                                <p><IoLogoWhatsapp size={30}/></p>
                            </span>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                        <div className='footer-kontak-2'>
                            <h6 style={{color:"white", marginTop:"20px"}}>Link</h6>
                            <div className='footer-item'>
                                <li>Al-Quran dan Tafsir</li>
                                <li>Fiqih</li>
                                <li>Hadis</li>
                                <li>Akidah</li>
                                <li>Bahasa Arab</li>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                        <div className='footer-kontak-1'>
                            <h6 style={{color:"white", marginTop:"20px"}}>Kontak</h6>
                            <p>
                                WA: +62 815 1363 5429
                            </p>
                            <h6 style={{color:"white", marginTop:"20px"}}>Alamat</h6>
                            <p>
                            Desa Buni Bakti 06/08 Babelan Bekasi, Jl. Raya Buni Bakti, 
                            Bunibakti, Kec. Babelan, Kabupaten Bekasi, Jawa Barat 17610
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;