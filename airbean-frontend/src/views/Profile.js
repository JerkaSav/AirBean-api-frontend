import ImgHeader from '../components/ImgHeader';
import Avatar from '../components/Avatar';
import OrderHistory from '../components/OrderHistory';
import DropdownBtn from '../components/DropdownBtn';
import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector((state) => state.user);

  return (
    <div className="grid bg-brown profile">
      <DropdownBtn />
      <ImgHeader />
      <Avatar />
      <div className="user-info">
        <h2 className="white">{user.username}</h2>
        <p className="white">{user.email}</p>
      </div>
      <OrderHistory />
    </div>
  );
}

export default Profile;
