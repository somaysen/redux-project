import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthProtected = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return isAuthenticated ? <Navigate to="/" replace /> : children;
  }

  return children;
};

export default AuthProtected;
