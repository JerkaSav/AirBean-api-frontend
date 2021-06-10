import '../style/components/Dropdown.scss';
import { Fragment } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Dropdown() {
  const history = useHistory();
  const [showDropdown, setShowDropdown] = useState('dropdown hide');
  const [checkDropdown, setCheckDropdown] = useState(false);
  function handleClick() {
    if (!checkDropdown) {
      setShowDropdown('dropdown show');
      setCheckDropdown(!checkDropdown);
    } else {
      setShowDropdown('dropdown hide');
      setCheckDropdown(!checkDropdown);
    }
  }

  return (
    <Fragment>
      <div className="round" onClick={handleClick}>
        <div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className={showDropdown}>
        <div className="round" onClick={handleClick}>
          <div>
            <div className="line cross-1"></div>
            <div className="line cross-2"></div>
          </div>
        </div>
        <div className="dropdown-items">
          <h2
            onClick={() => {
              history.push('/menu');
            }}>
            Meny
          </h2>
          <h2
            onClick={() => {
              history.push('/about');
            }}>
            Vårt Kaffe
          </h2>
          <h2
            onClick={() => {
              history.push('/profile');
            }}>
            Min Profil
          </h2>
          <h2
            className="without-line"
            onClick={() => {
              history.push('/Status');
            }}>
            Orderstatus
          </h2>
        </div>
      </div>
    </Fragment>
  );
}

export default Dropdown;
