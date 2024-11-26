const Footer = () => {
    return (
        <div className="mt-5">
            <footer className="footer footer-center bg-base-200 text-base-content rounded p-5">
                <div>
                    <h1 className="font-bold text-2xl">Gadget Heaven</h1>
                    <p>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <hr className="lg: w-[1280px]"/>
            </footer>
            <footer className="footer bg-base-200 text-base-content p-5 flex justify-around items-center">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Carrers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;