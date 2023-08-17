import '../App.css';
import './comp-styling/img-main.css';
import Sidebar from '../components/Sidebar.jsx';
import Header2 from '../components/Header2.jsx'
import photo from '../imgs/img.png';


function Mainbody() {
  return (
    <div className="gen-menu">
      <Header2 />
      
      <div className="Mainbody">
        <div className='main-body'>
          <div className="images-span">
            {/* Static image spans */}
          <span className="item-1">
            <img src={photo} alt="Photo 1" width={500} />
          </span>

          <span className="item-2">
          <img src={photo} alt="Photo 1" width={500} />
          </span>

          <span className="item-3">
          <img src={photo} alt="Photo 1" width={500} />
          </span>

          <span className="item-4">
          <img src={photo} alt="Photo 1" width={500}/>
          </span>

          <span className="item-5">
          <img src={photo} alt="Photo 1" width={500}/>
          </span>

          <span className="item-6">
          <img src={photo} alt="Photo 1" width={500} />
          </span>

          <span className="item-7">
          <img src={photo} alt="Photo 1" width={500} />
          </span>

          <span className="item-8">
          <img src={photo} alt="Photo 1" width={500} />
          </span>

          <span className="item-9">
          <img src={photo} alt="Photo 1" width={500} />
          </span>

          <span className="item-10">
          <img src={photo} alt="Photo 1" width={500} />
          </span>
          </div>
          
        </div>

        <Sidebar />
      </div>
    </div>
  );
}

export default Mainbody;
