import Header from "./components/layout/header/Header";
import Banner from "./components/banner/Banner";
import NewPlay from "./components/newPlays/NewPlay";
import NewBlogs from "./components/newestBlogs/NewBlogs";
import Review from "./components/review/Review";
import Trailer from "./components/trailer/Trailer";
import Footer from "./components/layout/footer/Footer";
function App() {
	return (
		<>
			<Header />
			<Banner />
			<NewPlay />
			<NewBlogs />
			<Review />
			<Trailer />
			<Footer />
		</>
	);
}

export default App;
