import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Phone, MapPin, Clock, Sparkles, BookOpen, Gamepad2, Users, Award, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const openWhatsApp = () => {
    const message = 'Hi! I would like to know more about TOY STATION and your available products.';
    const whatsappUrl = `https://wa.me/917900197763?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-green-300 rounded-full opacity-10 animate-spin"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-full">
                  <Sparkles className="w-16 h-16 text-white animate-spin" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                TOY STATION
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
              Where Learning Meets Fun! 🎮📚
            </p>
            
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover endless adventures with our magical collection of 
              <span className="font-bold text-pink-600"> 15 toy categories</span> and 
              <span className="font-bold text-orange-600"> 15 book categories</span>. 
              Perfect for little explorers of all ages!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/catalog"
                className="group bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <BookOpen className="w-6 h-6 group-hover:animate-bounce" />
                Explore Catalog
                <Sparkles className="w-5 h-5" />
              </Link>
              
              <button 
                onClick={openWhatsApp}
                className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <Phone className="w-6 h-6 group-hover:animate-bounce" />
                Chat with Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent mb-4">
              Why Choose TOY STATION?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just a toy library - we're your partner in creating magical childhood memories!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Curated with Love",
                description: "Every toy and book is hand-picked by Ms. Rachna Mehta to ensure quality and educational value.",
                color: "from-pink-500 to-orange-500"
              },
              {
                icon: Star,
                title: "Premium Quality",
                description: "All products are thoroughly tested for safety and durability. Only the best for your little ones!",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Users,
                title: "Personal Touch",
                description: "Get personalized recommendations based on your child's age, interests, and developmental needs.",
                color: "from-blue-500 to-teal-500"
              },
              {
                icon: Zap,
                title: "Instant Support",
                description: "Quick responses via WhatsApp for all your queries, bookings, and special requests.",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: Award,
                title: "Trusted by Parents",
                description: "Join hundreds of happy families who trust TOY STATION for their children's learning journey.",
                color: "from-indigo-500 to-blue-500"
              },
              {
                icon: Sparkles,
                title: "Always Fresh",
                description: "Regular updates to our collection ensure there's always something new and exciting to discover!",
                color: "from-pink-500 to-orange-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:animate-bounce`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent mb-6">
                Meet Ms. Rachna Mehta
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With a passion for child development and years of experience in education, 
                Ms. Rachna Mehta founded TOY STATION to create a magical space where learning 
                and fun come together seamlessly.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our carefully curated collection of <strong>30 categories</strong> ensures that 
                every child finds something that sparks their curiosity and imagination.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <Gamepad2 className="w-5 h-5 text-pink-500" />
                  <span className="font-semibold text-gray-700">15 Toy Categories</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <BookOpen className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold text-gray-700">15 Book Categories</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Gamepad2 className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Educational Toys</h4>
                    <p className="text-sm text-gray-600">STEM, puzzles, building blocks & more</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Learning Books</h4>
                    <p className="text-sm text-gray-600">Stories, activities, educational content</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Safe & Clean</h4>
                    <p className="text-sm text-gray-600">Sanitized & quality checked</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Age Appropriate</h4>
                    <p className="text-sm text-gray-600">Perfect for every development stage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent mb-4">
              Let's Connect!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your child's learning adventure? We're just a message away!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-pink-500" />
                Visit Our Library
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Opening Hours</p>
                    <p className="text-gray-600">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Contact us for address details</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Phone className="w-8 h-8 text-green-500" />
                Instant Support
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Have questions about our toys, books, or want personalized recommendations? 
                Chat with Ms. Rachna Mehta directly on WhatsApp for instant assistance!
              </p>
              <button
                onClick={openWhatsApp}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Start WhatsApp Chat
                <Sparkles className="w-5 h-5" />
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">
                Quick responses guaranteed! 🚀
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;