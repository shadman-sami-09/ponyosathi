import React, { useState } from 'react';
import Link from 'next/link';
import { Search, TrendingUp, BarChart3 } from 'lucide-react';
import { categories } from '../lib/data/categories';
import { companies } from '../lib/data/companies';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            পণ্যসাথী
            <span className="block text-sm text-gray-600 font-normal">Ponyosathi</span>
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Companies</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Find. Compare. Buy Wholesale. Resell.
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Discover products from Bangladesh's leading companies at wholesale prices
          </p>

          {/* Search Bar */}
          <div className="flex gap-2 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
            </div>
            <button className="btn-primary bg-amber-500 hover:bg-amber-600">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Companies */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp size={28} className="text-blue-600" />
            Featured Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {companies.map((company) => (
              <Link key={company.id} href={`/company/${company.id}`}>
                <a className="card text-center hover:shadow-lg transition-all cursor-pointer">
                  {company.logo ? (
                    <img src={company.logo} alt={company.name} className="w-full h-16 object-contain mb-2" />
                  ) : (
                    <div className="w-full h-16 bg-gray-200 rounded flex items-center justify-center mb-2">
                      <span className="text-sm text-gray-600">{company.name}</span>
                    </div>
                  )}
                  <p className="text-xs font-medium text-gray-700">{company.name}</p>
                </a>
              </Link>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BarChart3 size={28} className="text-blue-600" />
            Browse Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link key={category.id} href={`/category/${category.id}`}>
                <a className="card text-center hover:shadow-lg transition-all cursor-pointer">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <p className="font-medium text-gray-900">{category.name}</p>
                  <p className="text-xs text-gray-600">{category.nameBn}</p>
                </a>
              </Link>
            ))}
          </div>
        </section>

        {/* How it Works */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">How Ponyosathi Works</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold text-blue-600">1</div>
              <h4 className="font-semibold mb-2">Search & Explore</h4>
              <p className="text-sm text-gray-600">Find products from major Bangladeshi companies</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold text-blue-600">2</div>
              <h4 className="font-semibold mb-2">Compare Prices</h4>
              <p className="text-sm text-gray-600">View wholesale & retail prices side by side</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold text-blue-600">3</div>
              <h4 className="font-semibold mb-2">Calculate Profit</h4>
              <p className="text-sm text-gray-600">See estimated profit margins instantly</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold text-blue-600">4</div>
              <h4 className="font-semibold mb-2">Make Decisions</h4>
              <p className="text-sm text-gray-600">Find the best wholesale deals for your business</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">পণ্যসাথী</h4>
              <p className="text-sm">Bangladesh's leading wholesale product discovery platform</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Products</a></li>
                <li><a href="#" className="hover:text-white">Companies</a></li>
                <li><a href="#" className="hover:text-white">Categories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 পণ্যসাথী (Ponyosathi). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
