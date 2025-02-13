import { Calendar, Drum, Guitar, Instagram, MapPin, Mic, Mic2, Music, PartyPopper, Phone, Youtube } from 'lucide-react';
import VideoDialog from './components/PerformanceButton';
function App() {

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
            alt="Band performance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
            6thString
          </h1>
          <p className="text-2xl md:text-3xl text-center max-w-3xl mb-8 font-light">
            Where Words Fail, Music Speaks
          </p>
          <p className="text-lg md:text-xl text-center max-w-2xl mb-12 text-gray-300">
            Professional Live Band for Events & Shows in Ranchi, Jharkhand
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#booking"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Book Now
            </a>
            <VideoDialog videoUrl='/IMG_6379.MOV' />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-900 to-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Event Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<PartyPopper className="w-8 h-8" />}
              title="Corporate Events"
              description="Elevate your corporate gatherings with our professional performance"
            />
            <ServiceCard
              icon={<Music className="w-8 h-8" />}
              title="Wedding Ceremonies"
              description="Create unforgettable moments with live music at your special day"
            />
            <ServiceCard
              icon={<Mic className="w-8 h-8" />}
              title="Private Parties"
              description="Transform your private events into extraordinary experiences"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Meet The Band</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              image="/gaurav_lead_G.png"
              name="Gaurav"
              role="Lead Guitarist"
              instrument={<Mic className="w-4 h-4" />}
            />
            <TeamMember
              image="/nihar_lead_B.jpg"
              name="Nihar"
              role="Lead Bassist"
              instrument={<Guitar className="w-4 h-4" />}
            />
            <TeamMember
              image="/shubham_drums.jpg"
              name="Shubham"
              role="Drums"
              instrument={<Drum className="w-4 h-4" />}
            />
            <TeamMember
              image="/Jagdish.JPG"
              name="Jagdish"
              role="Singer"
              instrument={<Mic2 className="w-4 h-4" />}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-zinc-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Previous Performances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PerformanceCard
              image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80"
              title="Corporate Diwali Night"
              venue="Hotel BNR Chanakya"
              date="October 2023"
            />
            <PerformanceCard
              image="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80"
              title="New Year's Eve Celebration"
              venue="Capitol Hill"
              date="December 2023"
            />
            <PerformanceCard
              image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
              title="Wedding Reception"
              venue="Radisson Blu"
              date="February 2024"
            />
          </div>
          <div className="text-center mt-12">
            <a
              href="https://www.youtube.com/@6thstring"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-colors"
            >
              <Youtube className="w-5 h-5" />
              Watch More on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="performances" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Band</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Professional Live Performance Band</h3>
              <p className="text-gray-600 leading-relaxed">
                6thString is Ranchi's premier live performance band, bringing exceptional musical experiences to events across Jharkhand. Our versatile repertoire and professional approach make every performance memorable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Feature
                  icon={<Mic className="w-5 h-5 text-amber-500" />}
                  title="Vocals"
                />
                <Feature
                  icon={<Guitar className="w-5 h-5 text-amber-500" />}
                  title="Guitar"
                />
                <Feature
                  icon={<Drum className="w-5 h-5 text-amber-500" />}
                  title="Drums"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="/band.JPG"
                alt="Band performance"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-4 rounded-lg shadow-xl">
                <p className="font-semibold">10+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-4 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Book Us for Your Event</h2>
          <p className="text-lg mb-12 text-gray-300">
            Available for all kinds of events and shows. Contact us for bookings and enquiries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
            <div className="bg-zinc-800 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-amber-500" />
                <h3 className="font-semibold">Contact Numbers</h3>
              </div>
              <p className="text-gray-300">8825109715</p>
              <p className="text-gray-300">70041 41703</p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-amber-500" />
                <h3 className="font-semibold">Location</h3>
              </div>
              <p className="text-gray-300">Ranchi, Jharkhand</p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/thesixth_string_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
            <a
              href="tel:+918825109715"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} 6thString Band. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all hover:scale-105 border border-zinc-700/50">
      <div className="inline-block p-3 bg-amber-500/10 text-amber-500 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function TeamMember({ image, name, role, instrument }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-96 object-cover object-center group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-amber-500">{instrument}</span>
            <h3 className="text-xl font-semibold text-white">{name}</h3>
          </div>
          <p className="text-gray-300">{role}</p>
        </div>
      </div>
    </div>
  );
}

function PerformanceCard({ image, title, venue, date }) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center gap-2 text-gray-600 mb-1">
          <MapPin className="w-4 h-4" />
          <p>{venue}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
      {icon}
      <span className="font-medium">{title}</span>
    </div>
  );
}

export default App;
