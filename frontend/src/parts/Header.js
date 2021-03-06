// Header Component
// navbar atas,navbar kategori, search input, login, daftar, icon keranjang

import React, { useState, useEffect } from "react";
import Logo from "../assets/images/blibli-logo.svg";
import Button from "../elements/Button";
import PesonaLogo from "../assets/images/logo-pesona.svg";
import LogoCart from "../assets/images/shopping-cart.svg";
import TabletLogo from "../assets/images/tablet-logo.svg";
import Computer from "../assets/images/computer-logo.svg";
import Camera from "../assets/images/camera.svg";
import LogoShop from "../assets/images/empty-shopping-bag.png";
import Kategori from "../assets/images/kategori.svg";
import ButtonSign from "../elements/ButtonSign/index";
import Bag from "../assets/images/bag.svg";
import Axios from "axios";

// import Button from "../elements/Button";

export default function Header() {
	let API = "http://localhost:3000/v1/api/blibli";
	const [getData, setGetData] = useState([]);
	const [searchKey, setSearchKey] = useState("");

	useEffect(() => {
		Axios.get(`${API}`)
			.then((res) => {
				setGetData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	});
	const handleSearch = () => {
		Axios.get(`${API}?searchKey=${searchKey}`)
			.then((res) => {
				setGetData(res.data);
			})
			.catch((err) => {
				console.log("Error Handle Search", err);
			});
	};
	const handleClearSearch = () => {
		setSearchKey("");
		Axios.get(`${API}?searchKey=`)
			.then((res) => {
				setGetData(res.data);
			})
			.catch((err) => {
				console.log("Error Handle Search", err);
			});
	};
	return (
		<header className="spicing-sm">
			<nav
				className="navbar navbar-expand-lg navbar-light navbar-text "
				style={{ height: "30px" }}
			>
				<div className="container">
					<span>Download Aplikasi Blibli</span>
					<span className="ml-5">Bantuan 24/7</span>

					<ul className="navbar-nav ml-auto ">
						<li className="nav-item ">
							<span className="nav-link text-white">Jual diblibli</span>
						</li>
						<li className="nav-item">
							<span className="nav-link text-white">Blibli Rewards</span>
						</li>
						<li className="nav-item">
							<span className="nav-link text-white">Cek Daftar Pesanan</span>
						</li>
					</ul>
				</div>
			</nav>

			<nav className="navbar navbar-menu navbar-expand-lg navbar-light blue ">
				<div className="container">
					<Button type="link" href={`/`} className="navbar-brand">
						<img src={Logo} alt="Blibli" className="img-fluid" width={114} />
					</Button>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#blibliNav"
						aria-controls="blibliNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<p
							className="ml-5 mt-4 text-white"
							data-toggle="modal"
							data-target="#exampleModal"
						>
							<img src={Kategori} className="img-fluid" alt="Kategori" />
							<span className="ml-2">Kategori</span>
						</p>

						<div
							className="modal fade"
							id="exampleModal"
							tabIndex="-1"
							role="dialog"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true"
						>
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="exampleModalLabel">
											Kategori
										</h5>
										<button
											type="button"
											className="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body">
										<ul className="list-group list-group-flush">
											<li className="list-group-item">
												<img
													src={PesonaLogo}
													alt="Logo"
													style={{ height: "30px", marginRight: "15px" }}
												/>
												Galeri Indonesia
											</li>
											<li className="list-group-item">
												<img
													src={LogoCart}
													alt="logo"
													style={{ height: "30px", marginRight: "15px" }}
												/>
												BlibliMart
											</li>
											<li className="list-group-item">
												<img
													src={TabletLogo}
													alt="logo"
													style={{ height: "30px", marginRight: "15px" }}
												/>
												Handphone dan Tablet
											</li>
											<li className="list-group-item">
												<img
													src={Computer}
													alt="logo"
													style={{ height: "30px", marginRight: "15px" }}
												/>
												Komputer & Laptop
											</li>
											<li className="list-group-item">
												<img
													src={Camera}
													alt="logo"
													style={{ height: "30px", marginRight: "15px" }}
												/>
												Kamera
											</li>
										</ul>
									</div>
									<div className="modal-footer">
										<button
											type="button"
											className="btn btn-secondary"
											data-dismiss="modal"
										>
											Close
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="input-group md-form form-sm form-1 pl-0 w-50 ml-5">
							<div className="input-group-prepend">
								<span
									className="input-group-text purple lighten-3 ml-3"
									style={{ borderRadius: "0px" }}
									id="basic-text1"
								>
									<i
										className="fas fa-search text-white"
										aria-hidden="true"
									></i>
								</span>
							</div>
							<input
								className="form-control my-0 py-1"
								onChange={(e) => setSearchKey(e.target.value)}
								style={{ borderRadius: "0px" }}
								value={searchKey}
								type="text"
								placeholder="Kamu lagi cari apa?"
								aria-label="Search"
							/>
							<button onClick={handleSearch}>Search</button>
							<button onClick={handleClearSearch}>Clear</button>
						</div>

						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<p
								className="ml-auto mt-4 text-white"
								data-toggle="modal"
								data-target="#bagModal"
							>
								<img src={Bag} alt="" />
								<span className="ml">Bag</span>
							</p>

							<div
								className="modal fade"
								id="bagModal"
								tabIndex="-1"
								role="dialog"
								aria-labelledby="exampleModalLabel"
								aria-hidden="true"
							>
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-body">
											<img
												src={LogoShop}
												alt="Logo"
												style={{ margin: "auto", display: "block" }}
											/>
											<h6
												className="font-weight-bold"
												style={{ textAlign: "center" }}
											>
												Lho, Kok Sepi?
											</h6>
											<p
												className="text-muted text-center"
												style={{ textAlign: "center" }}
											>
												Mau diisi apa ya Bag sebesar ini? Coba masukkan produk
												yang sudah kebawa mimpi. Habis belanja bisa dapat poin
												Blibli Rewards lagi!
											</p>
										</div>
									</div>
								</div>
							</div>

							<ul className="navbar-nav ml-auto">
								<ButtonSign />
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
