import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ user, children }) => {
	if (!localStorage.getItem('token')) {
		return <Navigate to="/login" replace />
	}
	return children;
}

export default ProtectedRoute
