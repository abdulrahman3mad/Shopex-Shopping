import HeaderNav from "./sections/HeaderNav";
import HomeSection from "./sections/HomeSection";

function App() {
	return (
		<div className="App">
			<HeaderNav />
			<HomeSection />
			<h1 className="text-clr-primary ff-primary">Hello World</h1>
			<h2 className="text-clr-primary ff-secondary">Hello World 2</h2>
			<h3 className="text-clr-primary ff-secondary">Hello World 2</h3>
			<h4 className="text-clr-primary  ff-primary">Hello World 2</h4>
			<p className="fw-semibold">fdfds</p>
			<p className="fw-bold">fdfds</p>
			<p className="fw-regular">fdfds</p>
			<p className="bg-clr-primary">fdfds</p>
			<p className="bg-clr-accent">fdfds</p>
			<p className="bg-clr-primary-light">fdfds</p>
			<p className="bg-clr-primary-light">fdfds</p>
			<section className="section-spacing">
				<h2 className="heading-box-spacing">Hello World</h2>
				<p>dsfdsdakfdsakjfldskahfksldfjhsdkaljfhjhflkdj</p>
			</section>
			<section className="section-spacing">
				<h2 className="heading-box-spacing">Hello World</h2>
				<p>dsfdsdakfdsakjfldskahfksldfjhsdkaljfhjhflkdj</p>
			</section>
		</div>
	);
}

export default App;
