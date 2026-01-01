import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

export default function DownloadPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold tracking-tighter">
                        SU<span className="text-[#3caec3]">Robo</span>
                    </a>
                    <a href="/" className="text-sm text-gray-600 hover:text-[#3caec3] transition-colors">
                        ← Back to Home
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={fadeInUp}
                    >
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 text-[#3caec3] font-semibold text-sm tracking-wide uppercase">
                            Get the App
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-[#2C3E50]">
                            Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3caec3] to-[#583a83]">SU Robo</span>
                        </h1>
                        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
                            Scan the QR code with your phone camera to download the app instantly
                        </p>
                    </motion.div>

                    {/* QR Code Cards */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {/* iOS Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-800">iOS</h3>
                            <p className="text-sm text-gray-500 mb-6">Available on the App Store</p>

                            <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 inline-block mb-6">
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://apps.apple.com/app/su-robo&bgcolor=ffffff"
                                    alt="iOS QR Code"
                                    className="w-40 h-40"
                                />
                            </div>

                            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 0 002-2V5a2 0 00-2-2H8a2 0 00-2 2v14a2 0 002 2z"></path>
                                </svg>
                                Point your camera here
                            </div>
                        </motion.div>

                        {/* Android Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.523 15.341c-.759 0-1.373.616-1.373 1.373 0 .758.614 1.373 1.373 1.373.758 0 1.373-.615 1.373-1.373 0-.757-.615-1.373-1.373-1.373zm-11.046 0c-.758 0-1.373.616-1.373 1.373 0 .758.615 1.373 1.373 1.373.758 0 1.373-.615 1.373-1.373 0-.757-.615-1.373-1.373-1.373zm5.523-13.341l1.119-2.147c.062-.119.021-.265-.094-.328-.115-.062-.266-.022-.328.093l-1.133 2.175c-.91-.423-1.925-.659-2.992-.659-1.068 0-2.083.236-2.992.659l-1.133-2.175c-.062-.115-.213-.155-.328-.093-.115.063-.156.209-.094.328l1.119 2.147c-2.162 1.121-3.644 3.341-3.644 5.907h16c0-2.566-1.482-4.786-3.644-5.907zm-5.523 4.663c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75zm7 0c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75zm-14.477 2.337v7.5c0 .828.672 1.5 1.5 1.5h1.5v5.5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5v-5.5h2v5.5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5v-5.5h1.5c.828 0 1.5-.672 1.5-1.5v-7.5h-14z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-800">Android</h3>
                            <p className="text-sm text-gray-500 mb-6">Available on Google Play</p>

                            <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 inline-block mb-6">
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://play.google.com/store/apps/details?id=com.surobo.app&bgcolor=ffffff"
                                    alt="Android QR Code"
                                    className="w-40 h-40"
                                />
                            </div>

                            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 0 002-2V5a2 0 00-2-2H8a2 0 00-2 2v14a2 0 002 2z"></path>
                                </svg>
                                Point your camera here
                            </div>
                        </motion.div>
                    </div>

                    {/* Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-16 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
                    >
                        <div className="text-center">
                            <div className="text-3xl mb-2">⚡</div>
                            <h4 className="font-semibold text-gray-800 mb-1">Fast & Easy</h4>
                            <p className="text-sm text-gray-500">Order in seconds</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">🔒</div>
                            <h4 className="font-semibold text-gray-800 mb-1">Secure</h4>
                            <p className="text-sm text-gray-500">OTP-protected delivery</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">📍</div>
                            <h4 className="font-semibold text-gray-800 mb-1">Track Live</h4>
                            <p className="text-sm text-gray-500">Real-time GPS tracking</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">
                    © 2025 SU Robo. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
