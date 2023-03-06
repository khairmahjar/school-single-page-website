import React, {useState, useEffect}from 'react';
import './karir.css';
import Datainfo from './Datainfo';

const Karir = () => {

    const url ='https://jsonplaceholder.typicode.com/posts';
    const [data, set_data] = useState([]);
    const load_data_post = () => {
        fetch(url, {
            method: 'GET'
        }).then(res => res.json())
        .then((result) => {
            if(result){
                set_data(result);
                console.log(result);
            }
        }).catch((err) => {
            console.log(err);
        });
        
    }
    useEffect(() => {
        load_data_post();            
    },[]);

    return (
        <div className="container karir-section">
            <div className="section-title-center">
                <h5>Ulasan</h5>
                <span className="section-title-line"></span>
            </div>
            <div className="row">
                {data && data.map((item, index) => (
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <Datainfo key={index} {...item}/>
                    </div>
                ))};
            </div>
        </div>
    );
}
export default Karir;