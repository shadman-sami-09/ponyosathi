import React, { useState } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import { SearchFilters } from '../lib/types';
import { companies } from '../lib/data/companies';
import { categories } from '../lib/data/categories';

export default function ProductsPage() {
  const [filters, setFilters] = useState<SearchFilters>({});
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">পণ্যসাথী - Products</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <aside className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Filter size={20} /> Filters
              </h3>

              {/* Company Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Company</label>
                <select
                  value={filters.company || ''}
                  onChange={(e) => handleFilterChange('company', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Companies</option>
                  {companies.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Category</label>
                <select
                  value={filters.category || ''}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Categories</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Price Range (৳)</label>
                <div className="space-y-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.priceMin || ''}
                    onChange={(e) => handleFilterChange('priceMin', e.target.value ? parseInt(e.target.value) : undefined)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.priceMax || ''}
                    onChange={(e) => handleFilterChange('priceMax', e.target.value ? parseInt(e.target.value) : undefined)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Availability</label>
                <select
                  value={filters.availability || ''}
                  onChange={(e) => handleFilterChange('availability', e.target.value as any)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All</option>
                  <option value="in_stock">In Stock</option>
                  <option value="out_of_stock">Out of Stock</option>
                </select>
              </div>

              <button className="w-full btn-primary bg-gray-300 text-gray-800 hover:bg-gray-400">Reset Filters</button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-3">
            {/* View Mode Toggle */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">All Products</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${
                    viewMode === 'grid'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${
                    viewMode === 'list'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>

            {/* Empty State */}
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <p className="text-gray-600 text-lg">Products will be displayed here once data is added to the database.</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
