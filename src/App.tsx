import React, { useState } from 'react';
import { CreditCard, ShieldCheck, Lock, ChevronRight, Apple, Smartphone, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Layout 1: Minimalist Modern ---
const MinimalistPayment = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Checkout</h2>
          <p className="text-zinc-500 mt-2 text-sm">Complete your purchase securely</p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors">
              <Apple size={20} />
              <span className="font-medium">Apple Pay</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors">
              <Smartphone size={20} />
              <span className="font-medium">Google Pay</span>
            </button>
          </div>

          <div className="relative py-4 flex items-center">
            <div className="flex-grow border-t border-zinc-200"></div>
            <span className="flex-shrink mx-4 text-zinc-400 text-xs uppercase tracking-widest">Or pay with card</span>
            <div className="flex-grow border-t border-zinc-200"></div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-zinc-500 uppercase mb-1.5 ml-1">Card Number</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="0000 0000 0000 0000"
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-900 transition-all"
                />
                <CreditCard className="absolute right-4 top-3.5 text-zinc-400" size={18} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-500 uppercase mb-1.5 ml-1">Expiry Date</label>
                <input 
                  type="text" 
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-900 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 uppercase mb-1.5 ml-1">CVC</label>
                <input 
                  type="text" 
                  placeholder="123"
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-900 transition-all"
                />
              </div>
            </div>

            <button className="w-full bg-zinc-900 text-white py-4 rounded-xl font-medium hover:bg-zinc-800 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 mt-4">
              Pay $129.00
              <ChevronRight size={18} />
            </button>
          </form>

          <div className="flex items-center justify-center gap-4 pt-6 text-zinc-400">
            <div className="flex items-center gap-1.5 text-xs">
              <Lock size={14} />
              Secure SSL
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <ShieldCheck size={14} />
              Buyer Protection
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Layout 2: Split Screen Bento ---
const SplitScreenPayment = () => {
  return (
    <section className="min-h-screen bg-[#F5F5F4] flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8">
        {/* Left: Summary */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200/50 flex flex-col">
          <h3 className="text-xl font-semibold mb-8">Order Summary</h3>
          <div className="space-y-6 flex-grow">
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-zinc-100 rounded-2xl flex items-center justify-center">
                <Smartphone className="text-zinc-400" />
              </div>
              <div className="flex-grow">
                <h4 className="font-medium">iPhone 15 Pro Case</h4>
                <p className="text-sm text-zinc-500">Natural Titanium / MagSafe</p>
                <div className="flex justify-between mt-1">
                  <span className="text-sm font-medium">$49.00</span>
                  <span className="text-xs text-zinc-400">Qty: 1</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-zinc-100 rounded-2xl flex items-center justify-center">
                <CreditCard className="text-zinc-400" />
              </div>
              <div className="flex-grow">
                <h4 className="font-medium">Screen Protector</h4>
                <p className="text-sm text-zinc-500">Ceramic Shield / 2-Pack</p>
                <div className="flex justify-between mt-1">
                  <span className="text-sm font-medium">$29.00</span>
                  <span className="text-xs text-zinc-400">Qty: 1</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-100 space-y-3">
            <div className="flex justify-between text-sm text-zinc-500">
              <span>Subtotal</span>
              <span>$78.00</span>
            </div>
            <div className="flex justify-between text-sm text-zinc-500">
              <span>Shipping</span>
              <span className="text-emerald-600 font-medium">Free</span>
            </div>
            <div className="flex justify-between text-lg font-semibold pt-2">
              <span>Total</span>
              <span>$78.00</span>
            </div>
          </div>
        </div>

        {/* Right: Payment */}
        <div className="flex flex-col gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200/50">
            <h3 className="text-xl font-semibold mb-6">Payment Method</h3>
            <div className="space-y-4">
              <label className="flex items-center gap-4 p-4 border-2 border-zinc-900 rounded-2xl cursor-pointer bg-zinc-50/50">
                <div className="w-5 h-5 border-4 border-zinc-900 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-zinc-900 rounded-full"></div>
                </div>
                <div className="flex-grow">
                  <p className="font-medium">Credit Card</p>
                  <p className="text-xs text-zinc-500">Visa, Mastercard, AMEX</p>
                </div>
                <div className="flex gap-1">
                  <div className="w-8 h-5 bg-zinc-100 rounded"></div>
                  <div className="w-8 h-5 bg-zinc-100 rounded"></div>
                </div>
              </label>
              <label className="flex items-center gap-4 p-4 border border-zinc-200 rounded-2xl cursor-pointer hover:bg-zinc-50 transition-colors">
                <div className="w-5 h-5 border border-zinc-300 rounded-full"></div>
                <div className="flex-grow">
                  <p className="font-medium">PayPal</p>
                  <p className="text-xs text-zinc-500">Fast and secure checkout</p>
                </div>
                <div className="w-12 h-5 bg-zinc-100 rounded"></div>
              </label>
            </div>
          </div>

          <button className="w-full bg-zinc-900 text-white py-5 rounded-3xl font-semibold shadow-lg shadow-zinc-900/20 hover:bg-zinc-800 transition-all active:scale-[0.99]">
            Complete Order
          </button>
          <p className="text-center text-xs text-zinc-400">
            By clicking "Complete Order", you agree to our Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default function PaymentShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const layouts = [
    { name: 'Minimalist', component: <MinimalistPayment /> },
    { name: 'Split Screen', component: <SplitScreenPayment /> },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-zinc-200 px-2 py-2 rounded-2xl shadow-xl shadow-black/5 flex gap-1">
        {layouts.map((layout, idx) => (
          <button
            key={layout.name}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === idx 
                ? 'bg-zinc-900 text-white shadow-lg shadow-zinc-900/20' 
                : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            {layout.name}
          </button>
        ))}
      </nav>

      {/* Content */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {layouts[activeTab].component}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Label */}
      <div className="fixed bottom-6 right-6 text-[10px] font-mono uppercase tracking-widest text-zinc-400 pointer-events-none">
        Payment Layout System v1.0
      </div>
    </div>
  );
}
