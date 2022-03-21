import React from "react";
import './imageLinkForm.css';

const imageLinkForm = () => {
    return (
        <div>
           <p className="f3">
            {'Teddy will detact faces in your picture'}
            </p>
            <div className="center">
              <div className="form center pa4 br3 shadow-5 " >
                <input className="f4 pa2 w-70 center" type= "tex" />
                <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
            </div>
            </div>
        </div>
        
    );
}

export default imageLinkForm;