import React,{useState} from "react";
import './ulasan.css';

const Ulasan = () => {
    const data_ulasan = [
        {
            "img": "https://images.pexels.com/photos/15672283/pexels-photo-15672283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "ulasan": "Saya sangat menyukai suasana damai dan kondusif di pondok pesantren ini, membuat saya semakin fokus pada pelajaran agama dan akademik.",
            "nama": "Putri Ayu",
            "kelas": "Kelas 10"
        },
        {
            "img": "https://images.pexels.com/photos/15672379/pexels-photo-15672379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "ulasan": "Pondok pesantren ini memiliki pengajar yang sangat berpengalaman dan peduli dengan kebutuhan siswa, membuat saya merasa sangat terbantu dalam belajar.",
            "nama": "Ahmad Maulana",
            "kelas": "Kelas 11"
        },
        {
            "img": "https://images.pexels.com/photos/15645256/pexels-photo-15645256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "ulasan": "Kegiatan-kegiatan islami di pondok pesantren ini sangat bervariasi dan menarik, membuat saya semakin mencintai agama dan mengaplikasikan ajaran-ajaran Islam dalam kehidupan sehari-hari.",
            "nama": "Dwi Wulan",
            "kelas": "Kelas 8"
        },
        {
            "img": "https://images.pexels.com/photos/15636369/pexels-photo-15636369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "ulasan": "Saya senang dengan program-program sosial yang diadakan di pondok pesantren ini, seperti bakti sosial, kajian keagamaan, dan acara kebersamaan yang mempererat silaturahmi antara siswa dan pengajar.",
            "nama": "Made Aditya",
            "kelas": "Kelas 9"
        },
        {
            "img": "https://images.pexels.com/photos/15355407/pexels-photo-15355407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "ulasan": "Fasilitas di pondok pesantren ini sangat lengkap dan memadai, seperti asrama yang nyaman, aula serbaguna, dan lapangan olahraga yang luas.",
            "nama": "Rika Setiawan",
            "kelas": "Kelas 12"
        },
        {
            "img": "https://images.pexels.com/photos/15606190/pexels-photo-15606190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "ulasan": "Pondok pesantren ini memiliki suasana yang sangat baik dan kondusif, sehingga saya dapat lebih mudah berkonsentrasi dan memahami materi pelajaran yang diajarkan.",
            "nama": "Nurul Hidayah",
            "kelas": "Kelas 7"
        },
        {
            "img": "https://images.pexels.com/photos/14666954/pexels-photo-14666954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "ulasan": "Saya merasa terinspirasi oleh semangat kebersamaan yang diusung oleh pondok pesantren ini, membuat saya semakin termotivasi untuk berprestasi dalam berbagai bidang.",
            "nama": "Satria Ramadhan",
            "kelas": "Kelas 10"
        },
        {
            "img": "https://images.pexels.com/photos/13820654/pexels-photo-13820654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "ulasan": "Pondok pesantren ini memfasilitasi kegiatan-kegiatan dakwah dan pengembangan diri secara berkala, membuat saya dapat lebih banyak berkontribusi pada masyarakat dan lingkungan sekitar.",
            "nama": "Mega Safitri",
            "kelas": "Kelas 11"
        },
        {
            "img": "https://images.pexels.com/photos/14666954/pexels-photo-14666954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "ulasan": "Para pengajar di pondok pesantren ini sangat sabar dan profesional, membantu saya dalam mengatasi kesulitan dan memberikan motivasi untuk terus belajar dan berkembang.",
            "nama": "Irfan Saputra",
            "kelas": "Kelas 9"
        },
        {
            "img": "https://images.pexels.com/photos/13808820/pexels-photo-13808820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "ulasan": "Saya merasa sangat beruntung bisa bersekolah di pondok pesantren ini, karena saya dapat mempelajari nilai-nilai keagamaan yang sangat penting dan mengasah keterampilan akademik dan sosial yang akan berguna di masa depan.",
            "nama": "Ayu Lestari",
            "kelas": "Kelas 8"
        }
    ];

    const [show_more, set_show_more] = useState(3);
    const load_more = () => {
        set_show_more((prev) => prev + 3);
    };
    
    return (
        <div className="container ulasan-section">
            <div className="section-title-center">
                <h5>Ulasan</h5>
                <span className="section-title-line"></span>
            </div>   
            <div className="row">
                {data_ulasan.slice(0,show_more).map((item, index) => (
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                        <div className={index == 1 ? "ulasan-card-marked card-design" : "ulasan-card card-design"}>
                            <img src={item.img} alt="foto" />
                            <p>{item.ulasan}</p>
                            <span className="ulasan-nama">{item.nama}</span>
                            <p>{item.kelas}</p>                            
                        </div>
                    </div>
                ))}
                {show_more >= data_ulasan.length ? null : (
                    <span className="lainnya-button" onClick={load_more}>Lainnya</span>
                )}              

            </div>
        </div>
    );
}
export default Ulasan;