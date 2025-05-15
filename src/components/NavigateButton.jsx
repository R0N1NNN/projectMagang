// src/components/NavigateButton.jsx
import { useNavigate } from 'react-router-dom';

export default function NavigateButton({ to, className, children }) {
  const navigate = useNavigate();
  return (
    <button className={className} onClick={() => navigate(to)}>
      {children}
    </button>
  );
}
