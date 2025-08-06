import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const CommonLayout = () => {
	return (
		<div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
			<Header />
			<main style={{ flex: 1, padding: "24px" }}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default CommonLayout;
