import React from "react";
import './fasilitas.css'
import foto from '../../Image/about.jpg';
import { FcOk, FcPaid, FcPlus } from "react-icons/fc";

const Fasilitas = () => {
    return (
        <div className="container fasilitas-section" id='fasilitas'>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="about-image">
                        <img src={foto} height="300px" width="300px" alt="about-image" />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="fasilitas-details">
                        <div className="section-title-center">
                            <h5>Fasilitas</h5>
                            <span className="section-title-line"></span>
                        </div>
                        <p>
                        Fasilitas utama di pondok pesantren adalah 
                        asrama santri yang berfungsi sebagai tempat 
                        tinggal bagi para santri.
                        </p>
                        <div className="card-design">
                            <div className="fasilitas-list-item">
                                <div className="fasilitas-details-icon">
                                    <p>
                                        <FcOk size={50} />
                                    </p>
                                </div>
                                <div>
                                    <h6>Masjid</h6>
                                    <p>
                                    Tempat utama untuk beribadah dan 
                                    mengadakan kegiatan keagamaan.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card-design">
                            <div className="fasilitas-list-item">
                                <div className="fasilitas-details-icon">
                                    <p>
                                        <FcPaid size={50} />
                                    </p>
                                </div>
                                <div>
                                    <h6>Lapangan Olahraga</h6>
                                    <p>
                                    Fasilitas untuk kegiatan fisik dan 
                                    rekreasi seperti sepak bola dll.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card-design">
                            <div className="fasilitas-list-item">
                                <div className="fasilitas-details-icon">
                                    <p>
                                        <FcPlus size={50} />
                                    </p>
                                </div>
                                <div>
                                    <h6>Dapur Umum</h6>
                                    <p>
                                    Fasilitas untuk makan dan minum 
                                    bagi para santri.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Fasilitas;