import { motion } from 'framer-motion';

const colors = {
  teal: '#3caec3',
  orange: '#ff6952',
  purple: '#583a83',
  dark: '#2C3E50',
  light: '#f8f9fa'
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#3caec3] selection:text-white overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter"
          >
            SU<span style={{ color: colors.teal }}>Robo</span>
          </motion.div>

          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-[#3caec3] transition-colors">Features</a>
            <a href="#app" className="hover:text-[#3caec3] transition-colors">App</a>
            <a href="#hardware" className="hover:text-[#3caec3] transition-colors">Tech</a>
            <a href="#contact" className="hover:text-[#3caec3] transition-colors">Contact</a>
          </div>

          <motion.a
            href="/download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#3caec3] text-white px-6 py-2 rounded-full font-medium text-sm shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all inline-block"
          >
            Get Started
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 text-[#3caec3] font-semibold text-sm tracking-wide uppercase">
              The Future of Campus Delivery
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-[#2C3E50]">
              Delivering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3caec3] to-[#583a83]">
                Future
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-500 mb-8 max-w-lg leading-relaxed">
              Experience the next generation of autonomous logistics.
              Safe, efficient, and contactless delivery right to your dorm.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex gap-4">
              <a href="/download" className="bg-[#3caec3] text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-teal-500/20 hover:bg-[#3599ac] transition-all flex items-center gap-2">
                Download App
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
              <a href="#features" className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all inline-block">
                Learn More
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-8 text-gray-400">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                ))}
              </div>
              <div className="text-sm">
                <strong className="text-gray-800 block">500+ Users</strong>
                Trusted by Students
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3caec3]/20 to-[#583a83]/20 rounded-full blur-3xl -z-10"></div>
            <img
              src="/robot-street.png"
              alt="SU Robo delivering on campus"
              className="rounded-3xl shadow-2xl border-8 border-white/50 backdrop-blur-sm transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <div className="font-bold text-gray-800">Order Delivered</div>
                <div className="text-xs text-gray-500">2 mins ago</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose SU Robo?</h2>
            <p className="text-gray-500">Advanced technology meets everyday convenience. Our robots are designed to make campus life easier.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Smart Navigation", icon: "🗺️", desc: "LiDAR-based obstacle avoidance and real-time path planning." },
              { title: "Secure Delivery", icon: "🔒", desc: "OTP-locked compartments ensure your package is safe until you arrive." },
              { title: "Real-time Tracking", icon: "📱", desc: "Watch your robot's journey live on the app map." },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* App Preview Section */}
      < section id="app" className="py-24 overflow-hidden" >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative h-[600px] w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-[#3caec3] rounded-full blur-[100px] opacity-10"></div>

            {/* Left Screen (Login) */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: 20 }}
              whileInView={{ opacity: 1, x: -140, rotateY: -15, scale: 0.85, zIndex: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-1/2 -translate-y-1/2 hidden lg:block"
            >
              <img
                src="/app-login.png"
                className="w-[280px] rounded-[2rem] shadow-2xl border-8 border-gray-900"
                alt="Login Screen"
              />
            </motion.div>

            {/* Right Screen (Tracking) */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -20 }}
              whileInView={{ opacity: 1, x: 140, rotateY: 15, scale: 0.85, zIndex: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-1/2 -translate-y-1/2 hidden lg:block"
            >
              <img
                src="/app-track.png"
                className="w-[280px] rounded-[2rem] shadow-2xl border-8 border-gray-900"
                alt="Tracking Screen"
              />
            </motion.div>

            {/* Center Screen (Home) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, zIndex: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-20"
            >
              <img
                src="/app-home.png"
                className="w-[300px] rounded-[2.5rem] shadow-2xl border-8 border-gray-900 mx-auto"
                alt="Home Screen"
              />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -right-8 top-20 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#ff6952] font-bold">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase">Estimated Arrival</div>
                    <div className="font-bold text-gray-800">12 Mins</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold mb-6">Your Personal Delivery Assistant</h2>
            <p className="text-gray-500 mb-8 text-lg">
              Ordering is as simple as a tap. Choose your location, select items, and watch the magic happen.
            </p>

            <div className="space-y-6">
              {[
                { title: "Easy Ordering", text: "Intuitive interface designed for speed." },
                { title: "Live Updates", text: "Push notifications at every step." },
                { title: "Wallet Integration", text: "Seamless payments with student ID." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-[#3caec3] mt-1 shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* How It Works */}
      < section className="py-24 bg-white" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-500">From order to delivery in 3 simple steps</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#3caec3] to-[#583a83]"></div>

            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Place Your Order",
                  desc: "Open the app, select your items, and choose your delivery location on campus.",
                  icon: "📱"
                },
                {
                  step: "02",
                  title: "Robot Dispatched",
                  desc: "Our AI assigns the nearest available robot and calculates the optimal route.",
                  icon: "🤖"
                },
                {
                  step: "03",
                  title: "Secure Delivery",
                  desc: "Track your robot live, receive an OTP, and unlock your package when it arrives.",
                  icon: "🔓"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                      <div className="text-5xl mb-4">{item.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3caec3] to-[#583a83] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {item.step}
                    </div>
                  </div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* Testimonials */}
      < section className="py-24 bg-gray-50" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">What Students Say</h2>
            <p className="text-gray-500">Real feedback from our campus community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", role: "Engineering Student", text: "Game changer! No more walking to the cafeteria in the rain. The robot delivered my lunch right to the library.", rating: 5 },
              { name: "Ahmed K.", role: "CS Major", text: "Super reliable and fast. I love tracking the robot on the map. It's like watching a real-life video game!", rating: 5 },
              { name: "Lisa T.", role: "Business Student", text: "The OTP security is genius. I feel safe knowing only I can unlock my package. Highly recommend!", rating: 5 }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3caec3] to-[#583a83]"></div>
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Tech Specs */}
      < section id="hardware" className="py-24 bg-gray-50 relative overflow-hidden" >
        {/* Background Pattern */}
        < div className="absolute inset-0 opacity-5" >
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3caec3 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div >

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 text-[#3caec3] font-semibold text-sm tracking-wide uppercase">
              Technology
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#2C3E50]">Powered by Advanced Robotics</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Cutting-edge hardware and AI working together to deliver the future
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Tech Features */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  title: "LiDAR Sensors",
                  desc: "360-degree vision for perfect obstacle avoidance and real-time environment mapping.",
                  color: "#ff6952",
                  icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                },
                {
                  title: "Electric Powertrain",
                  desc: "Eco-friendly zero-emission delivery with extended battery life for all-day operation.",
                  color: "#3caec3",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z"
                },
                {
                  title: "AI Navigation Core",
                  desc: "Neural network processing for dynamic path planning and intelligent decision making.",
                  color: "#583a83",
                  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                }
              ].map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="flex gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ backgroundColor: tech.color }}
                    >
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tech.icon} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2" style={{ color: tech.color }}>{tech.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{tech.desc}</p>
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl -z-10"
                    style={{ backgroundColor: tech.color }}
                  ></div>
                </motion.div>
              ))}
            </motion.div>

            {/* Robot Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-white p-8">
                <img
                  src="/robot-tech.png"
                  alt="SU Robo Technical Showcase"
                  className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Stats */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute top-8 right-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#3caec3]">99.9%</div>
                    <div className="text-xs text-gray-600 font-semibold">Accuracy</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-8 left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#ff6952]">24/7</div>
                    <div className="text-xs text-gray-600 font-semibold">Operation</div>
                  </div>
                </motion.div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3caec3]/20 to-[#583a83]/20 rounded-3xl blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section >


      {/* Contact Section */}
      < section className="py-24 bg-white" >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 text-[#3caec3] font-semibold text-sm tracking-wide uppercase">
              Contact Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#2C3E50]">Get in Touch</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Have questions about SU Robo? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
                <p className="text-gray-500 mb-8">
                  Whether you're interested in our technology, want to collaborate, or just have questions, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email Card */}
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-100">
                  <div className="w-12 h-12 rounded-xl bg-[#3caec3] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                    <a href="mailto:surobo8899@gmail.com" className="text-[#3caec3] hover:underline">surobo8899@gmail.com</a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                  <div className="w-12 h-12 rounded-xl bg-[#583a83] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Location</h4>
                    <p className="text-gray-600">Elsewedy University<br />Cairo, Egypt</p>
                  </div>
                </div>

                {/* Social Card */}
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                  <div className="w-12 h-12 rounded-xl bg-[#ff6952] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Follow Us</h4>
                    <div className="flex gap-3">
                      <a href="#" className="w-8 h-8 rounded-lg bg-white hover:bg-[#3caec3] hover:text-white flex items-center justify-center transition-all shadow-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-lg bg-white hover:bg-[#3caec3] hover:text-white flex items-center justify-center transition-all shadow-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-lg bg-white hover:bg-[#3caec3] hover:text-white flex items-center justify-center transition-all shadow-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-lg bg-white hover:bg-[#3caec3] hover:text-white flex items-center justify-center transition-all shadow-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3caec3] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3caec3] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3caec3] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      rows="5"
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3caec3] focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#3caec3] to-[#2a8a9a] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section >


      {/* Premium Footer */}
      < footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-100" >
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="text-2xl font-bold tracking-tighter mb-4">
                SU<span className="text-[#3caec3]">Robo</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Delivering the future of autonomous campus logistics with cutting-edge robotics technology.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#3caec3] hover:text-white flex items-center justify-center transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#3caec3] hover:text-white flex items-center justify-center transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#3caec3] hover:text-white flex items-center justify-center transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#3caec3] hover:text-white flex items-center justify-center transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Product</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" className="text-gray-500 hover:text-[#3caec3] transition-colors">Features</a></li>
                <li><a href="#app" className="text-gray-500 hover:text-[#3caec3] transition-colors">Mobile App</a></li>
                <li><a href="#hardware" className="text-gray-500 hover:text-[#3caec3] transition-colors">Technology</a></li>
                <li><a href="/download" className="text-gray-500 hover:text-[#3caec3] transition-colors">Download</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-500 hover:text-[#3caec3] transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#3caec3] transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#3caec3] transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#3caec3] transition-colors">Press Kit</a></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Support</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-500 hover:text-[#3caec3] transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#3caec3] transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#3caec3] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-[#3caec3] transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 SU Robo. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>at Elsewedy University</span>
            </div>
          </div>
        </div>
      </footer >
    </div >
  );
}

export default App;

