function Footer() {
    return (
        <footer className="bg-secondary-main py-12" data-name="footer">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div data-name="footer-brand">
                        <img 
                            src="https://app.trickle.so/storage/public/images/usr_0b6c12ccc8000001/b9abdb97-cb91-43a8-942f-b459796bdd7c.jpeg"
                            alt="Homebor Logo"
                            className="h-10 mb-4"
                        />
                        <p className="text-gray-400">
                            Connecting students with perfect homestay families worldwide.
                        </p>
                    </div>
                    <div data-name="footer-links">
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                            <li><a href="#benefits" className="text-gray-400 hover:text-white">Benefits</a></li>
                            <li><a href="#providers" className="text-gray-400 hover:text-white">Providers</a></li>
                        </ul>
                    </div>
                    <div data-name="footer-contact">
                        <h4 className="text-lg font-bold mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Email: contact@homebor.com</li>
                            <li className="text-gray-400">Phone: +1 (555) 123-4567</li>
                        </ul>
                    </div>
                    <div data-name="footer-social">
                        <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center" data-name="footer-copyright">
                    <p className="text-gray-400">© 2024 Homebor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
