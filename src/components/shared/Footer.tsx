const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white mt-10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo / About */}
          <div>
            <h2 className="text-3xl font-bold text-purple-400">
              Hero Apps
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Discover amazing apps, explore their features and find
              the perfect apps for your everyday needs.
            </p>

            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition"
              >
                f
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition"
              >
                X
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/" className="hover:text-purple-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/apps" className="hover:text-purple-400 transition">
                  Apps
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-purple-400 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-purple-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Support
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">
              <p>
                📧 support@heroapps.com
              </p>

              <p>
                📞 +880 1234-567890
              </p>

              <p>
                📍 Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">
            © 2026 Hero Apps. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Made with ❤️ for App Lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;