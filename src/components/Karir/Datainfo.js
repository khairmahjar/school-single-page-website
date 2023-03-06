import React, {useState} from 'react';
import {FcCollapse, FcExpand} from 'react-icons/fc';

const Datainfo = ({title, body}) => {
const [show, set_show] = useState(false);

    return (
        <div className='post-card card-design' onClick={() => set_show(!show)}>
            <div className='collapse-option'>
                <h6>{title}</h6>
                <p>
                    {show ? <FcCollapse size={20}/> : <FcExpand size={20}/> }
                </p>
            </div>
            {show ? 
            <p>
                {body}
            </p>
            : null }
        </div>
    );
}
export default Datainfo;