import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div style={{fontSize:'0.7rem',direction:'rtl', textAlign:'center'}}>
      <h1 >הזמנתך התקבלה בהצלחה!</h1>
      <h3>מייד תועבר לדף הבית</h3>
    </div>
  );
}

export default OrderSuccess;
