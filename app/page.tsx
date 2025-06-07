"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Sparkles,
  RefreshCw,
  Eye,
  Zap,
  Star,
  Grid3X3,
  Waves,
  Code,
  GitFork,
  Cpu,
  Radio,
  Wifi,
  Activity,
} from "lucide-react"

interface HeroSection {
  id: string
  title: string
  subtitle: string
  cta: string
  animationType: string
  category: string
  icon: React.ReactNode
  description: string
  code: string
}

const heroSets = [
  // Set 1: Geometric & Shapes
  [
    {
      id: "floating-shapes",
      title: "Transform Your Digital Presence",
      subtitle: "Create stunning websites that captivate and convert your audience",
      cta: "Get Started Today",
      animationType: "Floating Geometric Shapes",
      category: "geometric",
      icon: <Grid3X3 className="w-5 h-5" />,
      description: "Animated geometric shapes float and rotate in the background with smooth parallax motion",
      code: `<div className="relative h-96 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-bounce" />
    <div className="absolute top-12 right-8 w-6 h-6 bg-white/30 rotate-45 animate-bounce" style={{animationDelay: '0.5s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Transform Your Digital Presence</h1>
      <p className="text-xl opacity-90">Create stunning websites that captivate and convert</p>
      <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold">Get Started Today</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "geometric-grid",
      title: "Geometric Precision",
      subtitle: "Where mathematics meets beautiful design",
      cta: "Explore Patterns",
      animationType: "Animated Geometric Grid",
      category: "geometric",
      icon: <Grid3X3 className="w-5 h-5" />,
      description: "Dynamic geometric grid with rotating and scaling elements creating mesmerizing patterns",
      code: `<div className="relative h-96 bg-gradient-to-br from-indigo-600 to-purple-700 overflow-hidden">
  <div className="absolute inset-0">
    <div className="grid grid-cols-8 grid-rows-6 h-full w-full gap-2 p-4">
      {Array.from({length: 48}).map((_, i) => (
        <div key={i} className="bg-white/10 rounded animate-pulse" style={{animationDelay: \`\${i * 0.1}s\`}} />
      ))}
    </div>
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4 bg-black/20 backdrop-blur-sm rounded-2xl p-8">
      <h1 className="text-5xl font-bold">Geometric Precision</h1>
      <p className="text-xl opacity-90">Where mathematics meets beautiful design</p>
      <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold">Explore Patterns</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "particle-stars",
      title: "Reach for the Stars",
      subtitle: "Unlock unlimited potential with our revolutionary platform",
      cta: "Start Your Journey",
      animationType: "Animated Stars",
      category: "particles",
      icon: <Star className="w-5 h-5" />,
      description: "Twinkling star particles that move and fade in space with realistic stellar motion",
      code: `<div className="relative h-96 bg-gradient-to-b from-indigo-900 to-purple-900 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-8 left-8 w-2 h-2 bg-white rounded-full animate-ping" />
    <div className="absolute top-16 right-12 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Reach for the Stars</h1>
      <p className="text-xl opacity-90">Unlock unlimited potential with our revolutionary platform</p>
      <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold">Start Your Journey</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "electric-grid",
      title: "Power Your Innovation",
      subtitle: "Harness cutting-edge technology for unprecedented results",
      cta: "Activate Now",
      animationType: "Electric Grid",
      category: "techy",
      icon: <Zap className="w-5 h-5" />,
      description: "High-tech electrical grid with pulsing energy lines and circuit-like animations",
      code: `<div className="relative h-96 bg-gradient-to-br from-cyan-900 to-blue-900 overflow-hidden">
  <div className="absolute inset-0 opacity-30">
    <div className="grid grid-cols-12 grid-rows-8 h-full w-full gap-px">
      {Array.from({length: 96}).map((_, i) => (
        <div key={i} className="border border-cyan-400/30 animate-pulse" style={{animationDelay: \`\${i * 0.05}s\`}} />
      ))}
    </div>
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Power Your Innovation</h1>
      <p className="text-xl opacity-90">Harness cutting-edge technology for unprecedented results</p>
      <button className="bg-cyan-400 text-black px-8 py-3 rounded-lg font-semibold">Activate Now</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "morphing-blobs",
      title: "Fluid Innovation",
      subtitle: "Adapt and evolve with our dynamic business solutions",
      cta: "Discover More",
      animationType: "Morphing Blobs",
      category: "organic",
      icon: <Sparkles className="w-5 h-5" />,
      description: "Organic blob shapes that continuously morph and change with fluid animations",
      code: `<div className="relative h-96 bg-gradient-to-bl from-violet-500 to-pink-500 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full animate-pulse" />
    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Fluid Innovation</h1>
      <p className="text-xl opacity-90">Adapt and evolve with our dynamic business solutions</p>
      <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold">Discover More</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "circuit-pulse",
      title: "Neural Network Solutions",
      subtitle: "Connect your systems with intelligent automation",
      cta: "Interface Now",
      animationType: "Circuit Pulse",
      category: "techy",
      icon: <Cpu className="w-5 h-5" />,
      description: "Circuit board patterns with pulsing electrical signals and data flow visualization",
      code: `<div className="relative h-96 bg-gradient-to-tr from-green-900 to-emerald-900 overflow-hidden">
  <div className="absolute inset-0">
    <svg className="w-full h-full opacity-40" viewBox="0 0 400 300">
      <path d="M50 50 L350 50 L350 250 L50 250 Z" stroke="#10b981" strokeWidth="2" fill="none" className="animate-pulse" />
      <circle cx="100" cy="100" r="4" fill="#10b981" className="animate-ping" />
      <circle cx="300" cy="200" r="4" fill="#10b981" className="animate-ping" style={{animationDelay: '0.5s'}} />
    </svg>
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Neural Network Solutions</h1>
      <p className="text-xl opacity-90">Connect your systems with intelligent automation</p>
      <button className="bg-emerald-400 text-black px-8 py-3 rounded-lg font-semibold">Interface Now</button>
    </div>
  </div>
</div>`,
    },
  ],
  // Set 2: Tech & Digital
  [
    {
      id: "digital-rain",
      title: "Enter the Matrix",
      subtitle: "Decode the future with advanced data analytics",
      cta: "Jack In",
      animationType: "Digital Rain",
      category: "techy",
      icon: <Code className="w-5 h-5" />,
      description: "Matrix-style digital rain effect with flowing code and cyber aesthetics",
      code: `<div className="relative h-96 bg-black overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-0 left-8 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse" />
    <div className="absolute top-0 left-16 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse" style={{animationDelay: '0.3s'}} />
    <div className="absolute top-0 left-24 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse" style={{animationDelay: '0.6s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-green-400 p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Enter the Matrix</h1>
      <p className="text-xl opacity-90">Decode the future with advanced data analytics</p>
      <button className="bg-green-400 text-black px-8 py-3 rounded-lg font-semibold">Jack In</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "holographic-display",
      title: "Holographic Interface",
      subtitle: "Experience the next dimension of user interaction",
      cta: "Project Forward",
      animationType: "Holographic Display",
      category: "techy",
      icon: <Radio className="w-5 h-5" />,
      description: "Futuristic holographic display with scanning lines and projection effects",
      code: `<div className="relative h-96 bg-gradient-to-b from-blue-900 to-purple-900 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse" />
    <div className="absolute top-0 left-0 w-full h-px bg-cyan-400 animate-pulse" />
    <div className="absolute bottom-0 left-0 w-full h-px bg-cyan-400 animate-pulse" style={{animationDelay: '0.5s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold text-cyan-400">Holographic Interface</h1>
      <p className="text-xl opacity-90">Experience the next dimension of user interaction</p>
      <button className="bg-cyan-400 text-black px-8 py-3 rounded-lg font-semibold">Project Forward</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "data-stream",
      title: "Data Stream Analytics",
      subtitle: "Visualize your data flow in real-time",
      cta: "Stream Now",
      animationType: "Data Stream",
      category: "techy",
      icon: <Activity className="w-5 h-5" />,
      description: "Flowing data streams with real-time analytics visualization and dynamic charts",
      code: `<div className="relative h-96 bg-gradient-to-r from-slate-900 to-blue-900 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" />
    <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{animationDelay: '0.3s'}} />
    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" style={{animationDelay: '0.6s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Data Stream Analytics</h1>
      <p className="text-xl opacity-90">Visualize your data flow in real-time</p>
      <button className="bg-blue-400 text-black px-8 py-3 rounded-lg font-semibold">Stream Now</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "cyber-grid",
      title: "Cyber Security Grid",
      subtitle: "Protect your digital assets with advanced encryption",
      cta: "Secure Access",
      animationType: "Cyber Grid",
      category: "techy",
      icon: <Wifi className="w-5 h-5" />,
      description: "Cyberpunk-style grid with security scanning effects and threat detection",
      code: `<div className="relative h-96 bg-gradient-to-br from-red-900 to-orange-900 overflow-hidden">
  <div className="absolute inset-0 opacity-40">
    <div className="grid grid-cols-16 grid-rows-12 h-full w-full gap-px">
      {Array.from({length: 192}).map((_, i) => (
        <div key={i} className="border border-red-400/30 animate-pulse" style={{animationDelay: \`\${i * 0.02}s\`}} />
      ))}
    </div>
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Cyber Security Grid</h1>
      <p className="text-xl opacity-90">Protect your digital assets with advanced encryption</p>
      <button className="bg-red-400 text-black px-8 py-3 rounded-lg font-semibold">Secure Access</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "neon-circuit",
      title: "Neon Circuit Board",
      subtitle: "Illuminate your path to digital transformation",
      cta: "Light Up",
      animationType: "Neon Circuit",
      category: "techy",
      icon: <Zap className="w-5 h-5" />,
      description: "Glowing neon circuit traces with electrical pulses and energy flow",
      code: `<div className="relative h-96 bg-black overflow-hidden">
  <div className="absolute inset-0">
    <svg className="w-full h-full" viewBox="0 0 400 300">
      <path d="M0 150 L100 150 L100 100 L300 100 L300 200 L400 200" stroke="#ff00ff" strokeWidth="3" fill="none" className="animate-pulse" style={{filter: 'drop-shadow(0 0 10px #ff00ff)'}} />
      <circle cx="100" cy="150" r="6" fill="#ff00ff" className="animate-ping" style={{filter: 'drop-shadow(0 0 10px #ff00ff)'}} />
      <circle cx="300" cy="100" r="6" fill="#00ffff" className="animate-ping" style={{animationDelay: '0.5s', filter: 'drop-shadow(0 0 10px #00ffff)'}} />
    </svg>
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold" style={{textShadow: '0 0 20px #ff00ff'}}>Neon Circuit Board</h1>
      <p className="text-xl opacity-90">Illuminate your path to digital transformation</p>
      <button className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold">Light Up</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "quantum-field",
      title: "Quantum Computing Field",
      subtitle: "Harness the power of quantum algorithms",
      cta: "Quantum Leap",
      animationType: "Quantum Field",
      category: "techy",
      icon: <Sparkles className="w-5 h-5" />,
      description: "Quantum field visualization with particle interactions and quantum effects",
      code: `<div className="relative h-96 bg-gradient-to-r from-purple-900 to-indigo-900 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-8 left-8 w-3 h-3 bg-purple-400 rounded-full animate-ping" />
    <div className="absolute top-16 right-12 w-2 h-2 bg-indigo-400 rounded-full animate-ping" style={{animationDelay: '0.3s'}} />
    <div className="absolute bottom-12 left-16 w-4 h-4 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '0.6s'}} />
    <div className="absolute bottom-8 right-8 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.9s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Quantum Computing Field</h1>
      <p className="text-xl opacity-90">Harness the power of quantum algorithms</p>
      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold">Quantum Leap</button>
    </div>
  </div>
</div>`,
    },
  ],
  // Set 3: Nature & Organic
  [
    {
      id: "wave-motion",
      title: "Ride the Wave of Success",
      subtitle: "Surf through challenges with our comprehensive toolkit",
      cta: "Catch the Wave",
      animationType: "Wave Motion",
      category: "organic",
      icon: <Waves className="w-5 h-5" />,
      description: "Smooth wave animations flow across the background with ocean-like motion",
      code: `<div className="relative h-96 bg-gradient-to-b from-cyan-500 to-blue-600 overflow-hidden">
  <div className="absolute inset-0">
    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
      <path d="M0,150 Q100,100 200,150 T400,150 L400,300 L0,300 Z" fill="rgba(255,255,255,0.1)" className="animate-pulse" />
      <path d="M0,180 Q100,130 200,180 T400,180 L400,300 L0,300 Z" fill="rgba(255,255,255,0.05)" className="animate-pulse" style={{animationDelay: '0.5s'}} />
    </svg>
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Ride the Wave of Success</h1>
      <p className="text-xl opacity-90">Surf through challenges with our comprehensive toolkit</p>
      <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold">Catch the Wave</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "particle-flow",
      title: "Go With the Flow",
      subtitle: "Streamline your workflow with intelligent automation",
      cta: "Flow Forward",
      animationType: "Particle Flow",
      category: "particles",
      icon: <Sparkles className="w-5 h-5" />,
      description: "Particles flow in smooth, curved trajectories creating dynamic movement patterns",
      code: `<div className="relative h-96 bg-gradient-to-br from-emerald-500 to-cyan-500 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-bounce" />
    <div className="absolute top-8 left-12 w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
    <div className="absolute top-12 left-20 w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.4s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Go With the Flow</h1>
      <p className="text-xl opacity-90">Streamline your workflow with intelligent automation</p>
      <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold">Flow Forward</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "aurora-borealis",
      title: "Northern Lights Innovation",
      subtitle: "Illuminate your business with natural inspiration",
      cta: "See the Light",
      animationType: "Aurora Borealis",
      category: "organic",
      icon: <Star className="w-5 h-5" />,
      description: "Aurora-like flowing lights across the night sky with ethereal color shifts",
      code: `<div className="relative h-96 bg-gradient-to-b from-indigo-900 to-green-900 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/30 to-transparent animate-pulse" style={{transform: 'skewY(-10deg)'}} />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse" style={{transform: 'skewY(5deg)', animationDelay: '0.5s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Northern Lights Innovation</h1>
      <p className="text-xl opacity-90">Illuminate your business with natural inspiration</p>
      <button className="bg-green-400 text-black px-8 py-3 rounded-lg font-semibold">See the Light</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "crystal-formation",
      title: "Crystal Clear Solutions",
      subtitle: "Transparent processes, crystalline results",
      cta: "Crystallize",
      animationType: "Crystal Formation",
      category: "geometric",
      icon: <Grid3X3 className="w-5 h-5" />,
      description: "Geometric crystal formations with prismatic effects and light refraction",
      code: `<div className="relative h-96 bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-8 left-8 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-white/30 animate-pulse" />
    <div className="absolute top-16 right-12 w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-white/20 animate-pulse" style={{animationDelay: '0.3s'}} />
    <div className="absolute bottom-12 left-16 w-0 h-0 border-l-10 border-r-10 border-b-20 border-l-transparent border-r-transparent border-b-white/25 animate-pulse" style={{animationDelay: '0.6s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Crystal Clear Solutions</h1>
      <p className="text-xl opacity-90">Transparent processes, crystalline results</p>
      <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold">Crystallize</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "liquid-mercury",
      title: "Liquid Metal Interface",
      subtitle: "Fluid design that adapts to your needs",
      cta: "Flow Into Action",
      animationType: "Liquid Mercury",
      category: "organic",
      icon: <Waves className="w-5 h-5" />,
      description: "Metallic liquid effects with surface tension dynamics and fluid motion",
      code: `<div className="relative h-96 bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-1/3 left-0 w-full h-16 bg-gradient-to-r from-transparent via-gray-400/40 to-transparent animate-pulse" style={{borderRadius: '50%'}} />
    <div className="absolute bottom-1/3 left-0 w-full h-12 bg-gradient-to-r from-transparent via-gray-400/30 to-transparent animate-pulse" style={{borderRadius: '50%', animationDelay: '0.5s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Liquid Metal Interface</h1>
      <p className="text-xl opacity-90">Fluid design that adapts to your needs</p>
      <button className="bg-gradient-to-r from-gray-400 to-gray-500 text-black px-8 py-3 rounded-lg font-semibold">Flow Into Action</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "plasma-energy",
      title: "Plasma Energy Core",
      subtitle: "Unleash the power of controlled fusion",
      cta: "Ignite Plasma",
      animationType: "Plasma Energy",
      category: "techy",
      icon: <Zap className="w-5 h-5" />,
      description: "High-energy plasma effects with electrical arcs and fusion reactions",
      code: `<div className="relative h-96 bg-gradient-to-r from-purple-900 to-blue-900 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" style={{filter: 'blur(20px)'}} />
    <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white animate-ping" />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Plasma Energy Core</h1>
      <p className="text-xl opacity-90">Unleash the power of controlled fusion</p>
      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold">Ignite Plasma</button>
    </div>
  </div>
</div>`,
    },
  ],
  // Set 4: Minimalist & Clean
  [
    {
      id: "typing-effect",
      title: "Code Your Dreams Into Reality",
      subtitle: "Build powerful applications with our developer-first platform",
      cta: "Start Building",
      animationType: "Typing Animation",
      category: "text",
      icon: <Code className="w-5 h-5" />,
      description: "Text appears with realistic typing animation effect and cursor blinking",
      code: `<div className="relative h-96 bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden">
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold font-mono">
        Code Your Dreams Into Reality
        <span className="animate-pulse">|</span>
      </h1>
      <p className="text-xl opacity-90">Build powerful applications with our developer-first platform</p>
      <button className="bg-green-500 text-black px-8 py-3 rounded-lg font-semibold">Start Building</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "constellation",
      title: "Connect the Dots",
      subtitle: "Link your ideas together with our integrated solutions",
      cta: "Make Connections",
      animationType: "Constellation",
      category: "particles",
      icon: <Star className="w-5 h-5" />,
      description: "Connected dots form constellation patterns with animated line connections",
      code: `<div className="relative h-96 bg-gradient-to-t from-slate-900 to-blue-900 overflow-hidden">
  <div className="absolute inset-0">
    <svg className="w-full h-full" viewBox="0 0 400 300">
      <circle cx="100" cy="100" r="2" fill="white" className="animate-pulse" />
      <circle cx="200" cy="80" r="2" fill="white" className="animate-pulse" style={{animationDelay: '0.2s'}} />
      <circle cx="300" cy="120" r="2" fill="white" className="animate-pulse" style={{animationDelay: '0.4s'}} />
      <line x1="100" y1="100" x2="200" y2="80" stroke="white" strokeWidth="1" opacity="0.5" className="animate-pulse" />
      <line x1="200" y1="80" x2="300" y2="120" stroke="white" strokeWidth="1" opacity="0.5" className="animate-pulse" style={{animationDelay: '0.3s'}} />
    </svg>
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Connect the Dots</h1>
      <p className="text-xl opacity-90">Link your ideas together with our integrated solutions</p>
      <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold">Make Connections</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "minimal-gradient",
      title: "Less is More",
      subtitle: "Simplicity meets powerful functionality",
      cta: "Simplify Now",
      animationType: "Minimal Gradient",
      category: "gradient",
      icon: <Sparkles className="w-5 h-5" />,
      description: "Clean gradient transitions with subtle animations and elegant simplicity",
      code: `<div className="relative h-96 bg-gradient-to-br from-slate-100 to-slate-300 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 animate-pulse" />
  <div className="absolute inset-0 flex items-center justify-center text-center text-slate-800 p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Less is More</h1>
      <p className="text-xl opacity-80">Simplicity meets powerful functionality</p>
      <button className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold">Simplify Now</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "paper-fold",
      title: "Unfold Your Potential",
      subtitle: "Discover new dimensions of possibility",
      cta: "Unfold",
      animationType: "Paper Fold",
      category: "geometric",
      icon: <Grid3X3 className="w-5 h-5" />,
      description: "Origami-inspired folding paper effects with dimensional transformations",
      code: `<div className="relative h-96 bg-gradient-to-br from-orange-100 to-red-200 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-8 left-8 w-16 h-16 bg-white/60 transform rotate-45 animate-pulse" />
    <div className="absolute top-16 right-12 w-12 h-12 bg-white/40 transform -rotate-12 animate-pulse" style={{animationDelay: '0.3s'}} />
    <div className="absolute bottom-12 left-16 w-20 h-20 bg-white/50 transform rotate-12 animate-pulse" style={{animationDelay: '0.6s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-red-800 p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Unfold Your Potential</h1>
      <p className="text-xl opacity-80">Discover new dimensions of possibility</p>
      <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold">Unfold</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "ink-splash",
      title: "Make Your Mark",
      subtitle: "Leave a lasting impression with bold design",
      cta: "Create Impact",
      animationType: "Ink Splash",
      category: "organic",
      icon: <Sparkles className="w-5 h-5" />,
      description: "Dynamic ink splash effects with organic flow and artistic expression",
      code: `<div className="relative h-96 bg-white overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-8 left-8 w-24 h-24 bg-black/20 rounded-full animate-pulse" style={{clipPath: 'polygon(50% 0%, 80% 10%, 100% 35%, 85% 70%, 50% 100%, 15% 70%, 0% 35%, 20% 10%)'}} />
    <div className="absolute bottom-12 right-16 w-16 h-16 bg-black/15 rounded-full animate-pulse" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', animationDelay: '0.5s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-black p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Make Your Mark</h1>
      <p className="text-xl opacity-80">Leave a lasting impression with bold design</p>
      <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold">Create Impact</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "glass-morphism",
      title: "Crystal Clear Vision",
      subtitle: "See through to what matters most",
      cta: "See Clearly",
      animationType: "Glass Morphism",
      category: "gradient",
      icon: <Eye className="w-5 h-5" />,
      description: "Frosted glass effects with backdrop blur and translucent layers",
      code: `<div className="relative h-96 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-8 left-8 w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl animate-pulse" />
    <div className="absolute bottom-12 right-16 w-24 h-24 bg-white/15 backdrop-blur-sm rounded-2xl animate-pulse" style={{animationDelay: '0.5s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4 bg-white/10 backdrop-blur-md rounded-2xl p-8">
      <h1 className="text-5xl font-bold">Crystal Clear Vision</h1>
      <p className="text-xl opacity-90">See through to what matters most</p>
      <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-lg font-semibold">See Clearly</button>
    </div>
  </div>
</div>`,
    },
  ],
  // Set 5: Retro & Vintage
  [
    {
      id: "retro-grid",
      title: "Back to the Future",
      subtitle: "Vintage aesthetics meet modern functionality",
      cta: "Time Travel",
      animationType: "Retro Grid",
      category: "geometric",
      icon: <Grid3X3 className="w-5 h-5" />,
      description: "80s-style neon grid with perspective effects and synthwave aesthetics",
      code: `<div className="relative h-96 bg-gradient-to-b from-purple-900 to-black overflow-hidden">
  <div className="absolute inset-0" style={{perspective: '1000px'}}>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/20" style={{transform: 'rotateX(60deg) translateZ(-100px)'}}>
      <div className="grid grid-cols-20 grid-rows-20 h-full w-full gap-px opacity-50">
        {Array.from({length: 400}).map((_, i) => (
          <div key={i} className="border border-pink-400/30 animate-pulse" style={{animationDelay: \`\${i * 0.01}s\`}} />
        ))}
      </div>
    </div>
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold" style={{textShadow: '0 0 20px #ff00ff, 0 0 40px #ff00ff'}}>Back to the Future</h1>
      <p className="text-xl opacity-90">Vintage aesthetics meet modern functionality</p>
      <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold">Time Travel</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "vhs-glitch",
      title: "Analog Dreams",
      subtitle: "Embrace the beautiful imperfection of vintage tech",
      cta: "Rewind",
      animationType: "VHS Glitch",
      category: "glitch",
      icon: <Radio className="w-5 h-5" />,
      description: "VHS-style glitch effects with scan lines and analog distortion",
      code: `<div className="relative h-96 bg-black overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent animate-pulse" />
    <div className="absolute top-0 left-0 w-full h-px bg-white/20 animate-pulse" style={{animationDelay: '0.1s'}} />
    <div className="absolute top-4 left-0 w-full h-px bg-white/20 animate-pulse" style={{animationDelay: '0.2s'}} />
    <div className="absolute top-8 left-0 w-full h-px bg-white/20 animate-pulse" style={{animationDelay: '0.3s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold font-mono" style={{textShadow: '2px 0 #ff0000, -2px 0 #00ffff'}}>Analog Dreams</h1>
      <p className="text-xl opacity-90">Embrace the beautiful imperfection of vintage tech</p>
      <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold font-mono">Rewind</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "neon-sign",
      title: "Electric Nights",
      subtitle: "Illuminate your brand with retro neon vibes",
      cta: "Light It Up",
      animationType: "Neon Sign",
      category: "techy",
      icon: <Zap className="w-5 h-5" />,
      description: "Classic neon sign effects with flickering lights and electric glow",
      code: `<div className="relative h-96 bg-black overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-8 left-8 w-4 h-4 bg-pink-400 rounded-full animate-ping" style={{filter: 'blur(2px) drop-shadow(0 0 10px #ff1493)'}} />
    <div className="absolute top-16 right-12 w-3 h-3 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.3s', filter: 'blur(2px) drop-shadow(0 0 10px #00ffff)'}} />
    <div className="absolute bottom-12 left-16 w-5 h-5 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0.6s', filter: 'blur(2px) drop-shadow(0 0 10px #ffff00)'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold" style={{textShadow: '0 0 10px #ff1493, 0 0 20px #ff1493, 0 0 30px #ff1493'}}>Electric Nights</h1>
      <p className="text-xl opacity-90">Illuminate your brand with retro neon vibes</p>
      <button className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold" style={{boxShadow: '0 0 20px #ff1493'}}>Light It Up</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "synthwave-sunset",
      title: "Synthwave Horizon",
      subtitle: "Drive into the digital sunset of tomorrow",
      cta: "Drive Forward",
      animationType: "Synthwave Sunset",
      category: "gradient",
      icon: <Star className="w-5 h-5" />,
      description: "80s synthwave aesthetic with gradient sunset and retro-futuristic vibes",
      code: `<div className="relative h-96 bg-gradient-to-b from-purple-900 via-pink-500 to-orange-400 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
    <svg className="absolute bottom-0 w-full h-1/2" viewBox="0 0 400 150" preserveAspectRatio="none">
      <path d="M0,75 Q100,50 200,75 T400,75 L400,150 L0,150 Z" fill="url(#gradient)" opacity="0.7" />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff00ff" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold" style={{textShadow: '0 0 20px #ff00ff'}}>Synthwave Horizon</h1>
      <p className="text-xl opacity-90">Drive into the digital sunset of tomorrow</p>
      <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold">Drive Forward</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "arcade-cabinet",
      title: "Game On",
      subtitle: "Level up your digital experience",
      cta: "Insert Coin",
      animationType: "Arcade Cabinet",
      category: "geometric",
      icon: <Grid3X3 className="w-5 h-5" />,
      description: "Retro arcade-style pixelated animations with 8-bit aesthetics",
      code: `<div className="relative h-96 bg-gradient-to-b from-blue-900 to-black overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-8 left-8 w-8 h-8 bg-yellow-400 animate-pulse" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}} />
    <div className="absolute top-8 left-20 w-8 h-8 bg-red-400 animate-pulse" style={{animationDelay: '0.2s'}} />
    <div className="absolute top-8 left-32 w-8 h-8 bg-green-400 animate-pulse" style={{animationDelay: '0.4s'}} />
    <div className="absolute top-20 left-8 w-8 h-8 bg-blue-400 animate-pulse" style={{animationDelay: '0.6s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold font-mono">Game On</h1>
      <p className="text-xl opacity-90 font-mono">Level up your digital experience</p>
      <button className="bg-yellow-400 text-black px-8 py-3 rounded font-semibold font-mono">Insert Coin</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "cassette-tape",
      title: "Rewind & Play",
      subtitle: "Nostalgic vibes for modern solutions",
      cta: "Press Play",
      animationType: "Cassette Tape",
      category: "organic",
      icon: <Radio className="w-5 h-5" />,
      description: "Spinning cassette reels with magnetic tape flow and vintage audio aesthetics",
      code: `<div className="relative h-96 bg-gradient-to-r from-amber-800 to-orange-900 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-1/2 left-1/4 w-16 h-16 -translate-y-1/2 border-4 border-white/30 rounded-full animate-spin" style={{animationDuration: '3s'}} />
    <div className="absolute top-1/2 right-1/4 w-16 h-16 -translate-y-1/2 border-4 border-white/30 rounded-full animate-spin" style={{animationDuration: '3s', animationDirection: 'reverse'}} />
    <div className="absolute top-1/2 left-1/4 right-1/4 h-1 bg-amber-600 -translate-y-1/2" />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Rewind & Play</h1>
      <p className="text-xl opacity-90">Nostalgic vibes for modern solutions</p>
      <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold">Press Play</button>
    </div>
  </div>
</div>`,
    },
  ],
  // Set 6: Abstract & Artistic
  [
    {
      id: "paint-strokes",
      title: "Artistic Expression",
      subtitle: "Paint your vision with bold creative strokes",
      cta: "Create Art",
      animationType: "Paint Strokes",
      category: "organic",
      icon: <Sparkles className="w-5 h-5" />,
      description: "Dynamic paint brush strokes with artistic flair and creative energy",
      code: `<div className="relative h-96 bg-white overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-8 left-8 w-32 h-4 bg-red-400/60 transform -rotate-12 animate-pulse" style={{borderRadius: '50px'}} />
    <div className="absolute top-20 right-16 w-24 h-6 bg-blue-400/60 transform rotate-6 animate-pulse" style={{borderRadius: '50px', animationDelay: '0.3s'}} />
    <div className="absolute bottom-16 left-20 w-40 h-3 bg-yellow-400/60 transform -rotate-3 animate-pulse" style={{borderRadius: '50px', animationDelay: '0.6s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-gray-800 p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Artistic Expression</h1>
      <p className="text-xl opacity-80">Paint your vision with bold creative strokes</p>
      <button className="bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold">Create Art</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "kaleidoscope",
      title: "Infinite Patterns",
      subtitle: "Discover beauty in mathematical symmetry",
      cta: "Explore Patterns",
      animationType: "Kaleidoscope",
      category: "geometric",
      icon: <Star className="w-5 h-5" />,
      description: "Kaleidoscopic patterns with rotating symmetry and fractal-like beauty",
      code: `<div className="relative h-96 bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 animate-spin" style={{animationDuration: '10s'}}>
      <div className="absolute top-0 left-1/2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-white/40 -translate-x-1/2" />
      <div className="absolute top-0 left-1/2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-white/40 -translate-x-1/2 rotate-60" />
      <div className="absolute top-0 left-1/2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-white/40 -translate-x-1/2 rotate-120" />
    </div>
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Infinite Patterns</h1>
      <p className="text-xl opacity-90">Discover beauty in mathematical symmetry</p>
      <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold">Explore Patterns</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "watercolor-blend",
      title: "Fluid Creativity",
      subtitle: "Let your ideas flow like watercolor paint",
      cta: "Start Flowing",
      animationType: "Watercolor Blend",
      category: "organic",
      icon: <Waves className="w-5 h-5" />,
      description: "Soft watercolor blending effects with organic flow and artistic gradients",
      code: `<div className="relative h-96 bg-gradient-to-br from-blue-200 to-purple-200 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-8 left-8 w-24 h-24 bg-blue-300/50 rounded-full animate-pulse" style={{filter: 'blur(10px)'}} />
    <div className="absolute top-16 right-12 w-32 h-32 bg-purple-300/40 rounded-full animate-pulse" style={{filter: 'blur(15px)', animationDelay: '0.5s'}} />
    <div className="absolute bottom-12 left-16 w-20 h-20 bg-pink-300/60 rounded-full animate-pulse" style={{filter: 'blur(8px)', animationDelay: '1s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-gray-800 p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Fluid Creativity</h1>
      <p className="text-xl opacity-80">Let your ideas flow like watercolor paint</p>
      <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold">Start Flowing</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "geometric-mandala",
      title: "Sacred Geometry",
      subtitle: "Find harmony in perfect mathematical forms",
      cta: "Find Balance",
      animationType: "Geometric Mandala",
      category: "geometric",
      icon: <Grid3X3 className="w-5 h-5" />,
      description: "Intricate mandala patterns with rotating geometry and spiritual symmetry",
      code: `<div className="relative h-96 bg-gradient-to-r from-indigo-800 to-purple-800 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 animate-spin" style={{animationDuration: '20s'}}>
      <div className="absolute inset-0 border-2 border-white/30 rounded-full" />
      <div className="absolute inset-4 border-2 border-white/20 rounded-full" />
      <div className="absolute inset-8 border-2 border-white/10 rounded-full" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/20" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-white/20" />
    </div>
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Sacred Geometry</h1>
      <p className="text-xl opacity-90">Find harmony in perfect mathematical forms</p>
      <button className="bg-white text-indigo-800 px-8 py-3 rounded-lg font-semibold">Find Balance</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "abstract-shapes",
      title: "Abstract Thinking",
      subtitle: "Break free from conventional design boundaries",
      cta: "Think Different",
      animationType: "Abstract Shapes",
      category: "geometric",
      icon: <Sparkles className="w-5 h-5" />,
      description: "Free-form abstract shapes with dynamic movement and creative expression",
      code: `<div className="relative h-96 bg-gradient-to-br from-yellow-400 to-red-500 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-8 left-8 w-16 h-24 bg-white/30 transform rotate-45 animate-pulse" style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'}} />
    <div className="absolute top-20 right-12 w-20 h-16 bg-white/25 transform -rotate-12 animate-pulse" style={{borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%', animationDelay: '0.3s'}} />
    <div className="absolute bottom-12 left-20 w-24 h-20 bg-white/35 transform rotate-30 animate-pulse" style={{borderRadius: '50% 50% 50% 50% / 60% 40% 60% 40%', animationDelay: '0.6s'}} />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Abstract Thinking</h1>
      <p className="text-xl opacity-90">Break free from conventional design boundaries</p>
      <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold">Think Different</button>
    </div>
  </div>
</div>`,
    },
    {
      id: "spiral-galaxy",
      title: "Cosmic Journey",
      subtitle: "Explore the infinite possibilities of space",
      cta: "Launch Mission",
      animationType: "Spiral Galaxy",
      category: "particles",
      icon: <Star className="w-5 h-5" />,
      description: "Swirling galaxy arms with stellar particles and cosmic motion",
      code: `<div className="relative h-96 bg-gradient-to-r from-black to-purple-900 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 animate-spin" style={{animationDuration: '30s'}}>
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-pulse" />
      <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
      <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-pink-300 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
    </div>
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Cosmic Journey</h1>
      <p className="text-xl opacity-90">Explore the infinite possibilities of space</p>
      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold">Launch Mission</button>
    </div>
  </div>
</div>`,
    },
  ],
]

export default function AboveTheFold() {
  const [currentSet, setCurrentSet] = useState(0)
  const [selectedHero, setSelectedHero] = useState<HeroSection | null>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const currentHeros = heroSets[currentSet]

  const generateNewSet = () => {
    setCurrentSet((prev) => (prev + 1) % heroSets.length)
  }

  const generateSimilar = (heroId: string) => {
    const currentHero = currentHeros.find((h) => h.id === heroId)
    if (!currentHero) return

    // Find a set that contains heroes with the same category
    const similarSets = heroSets.filter((set) =>
      set.some((hero) => hero.category === currentHero.category && hero.id !== heroId),
    )

    if (similarSets.length > 0) {
      const randomSimilarSet = similarSets[Math.floor(Math.random() * similarSets.length)]
      const setIndex = heroSets.indexOf(randomSimilarSet)
      setCurrentSet(setIndex)
    } else {
      generateNewSet()
    }
  }

  const forkToV0 = (hero: HeroSection) => {
    const v0Url = `https://v0.dev/chat?q=${encodeURIComponent(`Create a hero section with ${hero.animationType.toLowerCase()} animation. Here's the code to start with: ${hero.code}`)}`
    window.open(v0Url, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Above the Fold
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover stunning animated hero sections for your next project. Click any card to preview in full detail and
            fork to v0.
          </p>
          <div className="text-sm text-muted-foreground">
            Set {currentSet + 1} of {heroSets.length} • {heroSets.flat().length} total variations
          </div>
        </div>
      </header>

      {/* Hero Cards Grid */}
      <main className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentHeros.map((hero, index) => (
            <Card
              key={hero.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] focus-within:ring-2 focus-within:ring-purple-500"
              onClick={() => setSelectedHero(hero)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setSelectedHero(hero)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Preview ${hero.title} hero section`}
            >
              <CardContent className="p-6 space-y-4">
                {/* Animation Preview */}
                <div className={`relative h-32 rounded-lg overflow-hidden ${getPreviewBackground(hero.id)}`}>
                  <div className={`absolute inset-0 ${!prefersReducedMotion ? getAnimationClass(hero.id) : ""}`}>
                    {getAnimationElements(hero.id, prefersReducedMotion)}
                  </div>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content Preview */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {hero.icon}
                    <span>{hero.animationType}</span>
                  </div>
                  <h3 className="font-semibold text-lg line-clamp-2">{hero.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{hero.subtitle}</p>
                  <div className="pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation()
                        generateSimilar(hero.id)
                      }}
                      className="w-full hover:bg-purple-50 hover:border-purple-300 transition-colors duration-200"
                    >
                      Generate Similar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Generate New Set Button */}
        <div className="text-center">
          <Button
            onClick={generateNewSet}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Generate Fresh Set
          </Button>
        </div>
      </main>

      {/* Modal */}
      <Dialog open={!!selectedHero} onOpenChange={() => setSelectedHero(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedHero?.icon}
              {selectedHero?.animationType}
            </DialogTitle>
          </DialogHeader>

          {selectedHero && (
            <div className="space-y-6">
              {/* Full Hero Preview */}
              <div className={`relative h-96 rounded-lg overflow-hidden ${getPreviewBackground(selectedHero.id)}`}>
                <div className={`absolute inset-0 ${!prefersReducedMotion ? getAnimationClass(selectedHero.id) : ""}`}>
                  {getAnimationElements(selectedHero.id, prefersReducedMotion)}
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                  <div className="space-y-4 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold">{selectedHero.title}</h2>
                    <p className="text-xl opacity-90">{selectedHero.subtitle}</p>
                    <Button size="lg" className="bg-white text-black hover:bg-gray-100 transition-colors duration-200">
                      {selectedHero.cta}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h3 className="font-semibold">Animation Details</h3>
                <p className="text-muted-foreground">{selectedHero.description}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 flex-wrap">
                <Button
                  onClick={() => forkToV0(selectedHero)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  <GitFork className="w-4 h-4 mr-2" />
                  Fork to v0
                </Button>
                <Button
                  onClick={() => {
                    generateSimilar(selectedHero.id)
                    setSelectedHero(null)
                  }}
                  variant="outline"
                  className="hover:bg-purple-50 hover:border-purple-300 transition-colors duration-200"
                >
                  Generate Similar
                </Button>
                <Button
                  onClick={() => setSelectedHero(null)}
                  variant="secondary"
                  className="hover:bg-gray-200 transition-colors duration-200"
                >
                  Close Preview
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

function getPreviewBackground(id: string): string {
  const backgrounds = {
    "floating-shapes": "bg-gradient-to-br from-blue-500 to-purple-600",
    "geometric-grid": "bg-gradient-to-br from-indigo-600 to-purple-700",
    "particle-stars": "bg-gradient-to-b from-indigo-900 to-purple-900",
    "electric-grid": "bg-gradient-to-br from-cyan-900 to-blue-900",
    "morphing-blobs": "bg-gradient-to-bl from-violet-500 to-pink-500",
    "circuit-pulse": "bg-gradient-to-tr from-green-900 to-emerald-900",
    "digital-rain": "bg-black",
    "holographic-display": "bg-gradient-to-b from-blue-900 to-purple-900",
    "data-stream": "bg-gradient-to-r from-slate-900 to-blue-900",
    "cyber-grid": "bg-gradient-to-br from-red-900 to-orange-900",
    "neon-circuit": "bg-black",
    "quantum-field": "bg-gradient-to-r from-purple-900 to-indigo-900",
    "wave-motion": "bg-gradient-to-b from-cyan-500 to-blue-600",
    "particle-flow": "bg-gradient-to-br from-emerald-500 to-cyan-500",
    "aurora-borealis": "bg-gradient-to-b from-indigo-900 to-green-900",
    "crystal-formation": "bg-gradient-to-br from-purple-600 to-pink-600",
    "liquid-mercury": "bg-gradient-to-r from-gray-800 to-gray-900",
    "plasma-energy": "bg-gradient-to-r from-purple-900 to-blue-900",
    "typing-effect": "bg-gradient-to-r from-gray-800 to-gray-900",
    constellation: "bg-gradient-to-t from-slate-900 to-blue-900",
    "minimal-gradient": "bg-gradient-to-br from-slate-100 to-slate-300",
    "paper-fold": "bg-gradient-to-br from-orange-100 to-red-200",
    "ink-splash": "bg-white",
    "glass-morphism": "bg-gradient-to-br from-blue-400 to-purple-500",
    "retro-grid": "bg-gradient-to-b from-purple-900 to-black",
    "vhs-glitch": "bg-black",
    "neon-sign": "bg-black",
    "synthwave-sunset": "bg-gradient-to-b from-purple-900 via-pink-500 to-orange-400",
    "arcade-cabinet": "bg-gradient-to-b from-blue-900 to-black",
    "cassette-tape": "bg-gradient-to-r from-amber-800 to-orange-900",
    "paint-strokes": "bg-white",
    kaleidoscope: "bg-gradient-to-r from-purple-600 to-pink-600",
    "watercolor-blend": "bg-gradient-to-br from-blue-200 to-purple-200",
    "geometric-mandala": "bg-gradient-to-r from-indigo-800 to-purple-800",
    "abstract-shapes": "bg-gradient-to-br from-yellow-400 to-red-500",
    "spiral-galaxy": "bg-gradient-to-r from-black to-purple-900",
  }
  return backgrounds[id as keyof typeof backgrounds] || "bg-gradient-to-r from-gray-500 to-gray-600"
}

function getAnimationClass(id: string): string {
  if (id.includes("pulse") || id.includes("gradient")) return "animate-pulse"
  if (id.includes("spin") || id.includes("galaxy") || id.includes("kaleidoscope") || id.includes("mandala"))
    return "animate-spin"
  return ""
}

function getAnimationElements(id: string, prefersReducedMotion: boolean) {
  if (prefersReducedMotion) return null

  switch (id) {
    case "floating-shapes":
      return (
        <>
          <div
            className="absolute top-4 left-4 w-12 h-12 bg-white/30 rounded-lg animate-bounce"
            style={{ animationDuration: "2s" }}
          />
          <div
            className="absolute top-12 right-8 w-8 h-8 bg-white/40 rotate-45 animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
          />
          <div
            className="absolute bottom-8 left-12 w-16 h-6 bg-white/25 rounded-full animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "3s" }}
          />
          <div
            className="absolute bottom-16 right-16 w-6 h-12 bg-white/35 rounded-lg animate-bounce"
            style={{ animationDelay: "1.5s", animationDuration: "2.2s" }}
          />
        </>
      )
    case "geometric-grid":
      return (
        <div className="absolute inset-0">
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full gap-2 p-4">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className="bg-white/20 rounded animate-pulse"
                style={{ animationDelay: `${i * 0.1}s`, animationDuration: "2s" }}
              />
            ))}
          </div>
        </div>
      )
    case "particle-stars":
      return (
        <>
          <div
            className="absolute top-8 left-8 w-3 h-3 bg-white rounded-full animate-ping"
            style={{ animationDuration: "2s" }}
          />
          <div
            className="absolute top-16 right-12 w-2 h-2 bg-white rounded-full animate-ping"
            style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
          />
          <div
            className="absolute bottom-12 left-16 w-4 h-4 bg-white rounded-full animate-ping"
            style={{ animationDelay: "1s", animationDuration: "3s" }}
          />
          <div
            className="absolute bottom-8 right-8 w-2 h-2 bg-white rounded-full animate-ping"
            style={{ animationDelay: "1.5s", animationDuration: "2.8s" }}
          />
          <div
            className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"
            style={{ animationDelay: "2s", animationDuration: "2.2s" }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-ping"
            style={{ animationDelay: "2.5s", animationDuration: "2.7s" }}
          />
        </>
      )
    case "electric-grid":
      return (
        <div className="absolute inset-0 opacity-40">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full gap-px">
            {Array.from({ length: 96 }).map((_, i) => (
              <div
                key={i}
                className="border border-cyan-400/50 animate-pulse"
                style={{ animationDelay: `${i * 0.05}s`, animationDuration: "2s" }}
              />
            ))}
          </div>
        </div>
      )
    case "morphing-blobs":
      return (
        <>
          <div
            className="absolute top-4 right-4 w-20 h-20 bg-white/30 rounded-full animate-pulse"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute bottom-4 left-4 w-16 h-16 bg-white/40 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-12 h-12 bg-white/25 rounded-full animate-pulse -translate-x-1/2 -translate-y-1/2"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          />
        </>
      )
    case "circuit-pulse":
      return (
        <svg className="w-full h-full opacity-60" viewBox="0 0 400 300">
          <path
            d="M50 50 L350 50 L350 250 L50 250 Z"
            stroke="#10b981"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: "2s" }}
          />
          <circle cx="100" cy="100" r="6" fill="#10b981" className="animate-ping" style={{ animationDuration: "2s" }} />
          <circle
            cx="300"
            cy="200"
            r="6"
            fill="#10b981"
            className="animate-ping"
            style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
          />
          <path
            d="M100 100 L200 150 L300 200"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s", animationDuration: "3s" }}
          />
        </svg>
      )
    case "digital-rain":
      return (
        <>
          <div
            className="absolute top-0 left-8 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse"
            style={{ animationDuration: "2s" }}
          />
          <div
            className="absolute top-0 left-16 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse"
            style={{ animationDelay: "0.3s", animationDuration: "2.5s" }}
          />
          <div
            className="absolute top-0 left-24 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse"
            style={{ animationDelay: "0.6s", animationDuration: "3s" }}
          />
          <div
            className="absolute top-0 right-8 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse"
            style={{ animationDelay: "0.9s", animationDuration: "2.2s" }}
          />
          <div
            className="absolute top-0 right-16 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse"
            style={{ animationDelay: "1.2s", animationDuration: "2.8s" }}
          />
        </>
      )
    case "holographic-display":
      return (
        <>
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute top-0 left-0 w-full h-px bg-cyan-400 animate-pulse"
            style={{ animationDuration: "2s" }}
          />
          <div
            className="absolute bottom-0 left-0 w-full h-px bg-cyan-400 animate-pulse"
            style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
          />
          <div
            className="absolute left-0 top-0 w-px h-full bg-cyan-400/50 animate-pulse"
            style={{ animationDelay: "1s", animationDuration: "3s" }}
          />
          <div
            className="absolute right-0 top-0 w-px h-full bg-cyan-400/50 animate-pulse"
            style={{ animationDelay: "1.5s", animationDuration: "2.8s" }}
          />
        </>
      )
    case "data-stream":
      return (
        <>
          <div
            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"
            style={{ animationDuration: "2s" }}
          />
          <div
            className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"
            style={{ animationDelay: "0.3s", animationDuration: "2.5s" }}
          />
          <div
            className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
            style={{ animationDelay: "0.6s", animationDuration: "3s" }}
          />
          <div
            className="absolute top-8 left-8 w-2 h-2 bg-blue-400 rounded-full animate-ping"
            style={{ animationDuration: "2s" }}
          />
          <div
            className="absolute bottom-8 right-8 w-2 h-2 bg-purple-400 rounded-full animate-ping"
            style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
          />
        </>
      )
    case "cyber-grid":
      return (
        <div className="absolute inset-0 opacity-50">
          <div className="grid grid-cols-16 grid-rows-12 h-full w-full gap-px">
            {Array.from({ length: 192 }).map((_, i) => (
              <div
                key={i}
                className="border border-red-400/40 animate-pulse"
                style={{ animationDelay: `${i * 0.02}s`, animationDuration: "2s" }}
              />
            ))}
          </div>
        </div>
      )
    case "neon-circuit":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300">
          <path
            d="M0 150 L100 150 L100 100 L300 100 L300 200 L400 200"
            stroke="#ff00ff"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
            style={{ filter: "drop-shadow(0 0 10px #ff00ff)", animationDuration: "2s" }}
          />
          <circle
            cx="100"
            cy="150"
            r="6"
            fill="#ff00ff"
            className="animate-ping"
            style={{ filter: "drop-shadow(0 0 10px #ff00ff)", animationDuration: "2s" }}
          />
          <circle
            cx="300"
            cy="100"
            r="6"
            fill="#00ffff"
            className="animate-ping"
            style={{ animationDelay: "0.5s", filter: "drop-shadow(0 0 10px #00ffff)", animationDuration: "2.5s" }}
          />
          <path
            d="M50 50 L350 250"
            stroke="#ff00ff"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s", animationDuration: "3s" }}
          />
        </svg>
      )
    case "quantum-field":
      return (
        <>
          <div
            className="absolute top-8 left-8 w-3 h-3 bg-purple-400 rounded-full animate-ping"
            style={{ animationDuration: "2s" }}
          />
          <div
            className="absolute top-16 right-12 w-2 h-2 bg-indigo-400 rounded-full animate-ping"
            style={{ animationDelay: "0.3s", animationDuration: "2.5s" }}
          />
          <div
            className="absolute bottom-12 left-16 w-4 h-4 bg-pink-400 rounded-full animate-ping"
            style={{ animationDelay: "0.6s", animationDuration: "3s" }}
          />
          <div
            className="absolute bottom-8 right-8 w-2 h-2 bg-cyan-400 rounded-full animate-ping"
            style={{ animationDelay: "0.9s", animationDuration: "2.8s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full animate-ping -translate-x-1/2 -translate-y-1/2"
            style={{ animationDelay: "1.2s", animationDuration: "2.2s" }}
          />
        </>
      )
    case "wave-motion":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
          <path
            d="M0,150 Q100,100 200,150 T400,150 L400,300 L0,300 Z"
            fill="rgba(255,255,255,0.2)"
            className="animate-pulse"
            style={{ animationDuration: "3s" }}
          />
          <path
            d="M0,180 Q100,130 200,180 T400,180 L400,300 L0,300 Z"
            fill="rgba(255,255,255,0.1)"
            className="animate-pulse"
            style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
          />
          <path
            d="M0,120 Q100,70 200,120 T400,120 L400,300 L0,300 Z"
            fill="rgba(255,255,255,0.15)"
            className="animate-pulse"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          />
        </svg>
      )
    case "particle-flow":
      return (
        <>
          <div
            className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-bounce"
            style={{ animationDuration: "2s" }}
          />
          <div
            className="absolute top-8 left-12 w-1 h-1 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0.2s", animationDuration: "2.5s" }}
          />
          <div
            className="absolute top-12 left-20 w-2 h-2 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0.4s", animationDuration: "3s" }}
          />
          <div
            className="absolute top-16 left-28 w-1 h-1 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0.6s", animationDuration: "2.8s" }}
          />
          <div
            className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0.8s", animationDuration: "2.2s" }}
          />
          <div
            className="absolute bottom-8 right-12 w-1 h-1 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "2.7s" }}
          />
        </>
      )
    case "aurora-borealis":
      return (
        <>
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/40 to-transparent animate-pulse"
            style={{ transform: "skewY(-10deg)", animationDuration: "4s" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse"
            style={{ transform: "skewY(5deg)", animationDelay: "0.5s", animationDuration: "4.5s" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse"
            style={{ transform: "skewY(-5deg)", animationDelay: "1s", animationDuration: "5s" }}
          />
        </>
      )
    case "crystal-formation":
      return (
        <>
          <div
            className="absolute top-8 left-8 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-white/40 animate-pulse"
            style={{ animationDuration: "2s" }}
          />
          <div
            className="absolute top-16 right-12 w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-white/30 animate-pulse"
            style={{ animationDelay: "0.3s", animationDuration: "2.5s" }}
          />
          <div
            className="absolute bottom-12 left-16 w-0 h-0 border-l-10 border-r-10 border-b-20 border-l-transparent border-r-transparent border-b-white/35 animate-pulse"
            style={{ animationDelay: "0.6s", animationDuration: "3s" }}
          />
          <div
            className="absolute bottom-8 right-8 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-white/25 animate-pulse"
            style={{ animationDelay: "0.9s", animationDuration: "2.8s" }}
          />
        </>
      )
    case "liquid-mercury":
      return (
        <>
          <div
            className="absolute top-1/3 left-0 w-full h-16 bg-gradient-to-r from-transparent via-gray-400/50 to-transparent animate-pulse"
            style={{ borderRadius: "50%", animationDuration: "3s" }}
          />
          <div
            className="absolute bottom-1/3 left-0 w-full h-12 bg-gradient-to-r from-transparent via-gray-400/40 to-transparent animate-pulse"
            style={{ borderRadius: "50%", animationDelay: "0.5s", animationDuration: "3.5s" }}
          />
          <div
            className="absolute top-1/2 left-0 w-full h-8 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent animate-pulse"
            style={{ borderRadius: "50%", animationDelay: "1s", animationDuration: "4s" }}
          />
        </>
      )
    case "plasma-energy":
      return (
        <>
          <div
            className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"
            style={{ filter: "blur(20px)", animationDuration: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white animate-ping"
            style={{ animationDuration: "2.5s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300 animate-ping"
            style={{ animationDelay: "0.5s", animationDuration: "3s" }}
          />
        </>
      )
    case "typing-effect":
      return (
        <div className="absolute top-4 left-4 text-green-400 font-mono text-xs">
          <span className="animate-pulse">&gt; initializing...</span>
        </div>
      )
    case "constellation":
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300">
          <circle cx="100" cy="100" r="2" fill="white" className="animate-pulse" style={{ animationDuration: "2s" }} />
          <circle
            cx="200"
            cy="80"
            r="2"
            fill="white"
            className="animate-pulse"
            style={{ animationDelay: "0.2s", animationDuration: "2.5s" }}
          />
          <circle
            cx="300"
            cy="120"
            r="2"
            fill="white"
            className="animate-pulse"
            style={{ animationDelay: "0.4s", animationDuration: "3s" }}
          />
          <circle
            cx="150"
            cy="200"
            r="2"
            fill="white"
            className="animate-pulse"
            style={{ animationDelay: "0.6s", animationDuration: "2.8s" }}
          />
          <line
            x1="100"
            y1="100"
            x2="200"
            y2="80"
            stroke="white"
            strokeWidth="1"
            opacity="0.5"
            className="animate-pulse"
            style={{ animationDuration: "3s" }}
          />
          <line
            x1="200"
            y1="80"
            x2="300"
            y2="120"
            stroke="white"
            strokeWidth="1"
            opacity="0.5"
            className="animate-pulse"
            style={{ animationDelay: "0.3s", animationDuration: "3.5s" }}
          />
          <line
            x1="150"
            y1="200"
            x2="300"
            y2="120"
            stroke="white"
            strokeWidth="1"
            opacity="0.5"
            className="animate-pulse"
            style={{ animationDelay: "0.6s", animationDuration: "4s" }}
          />
        </svg>
      )
    case "minimal-gradient":
      return (
        <div
          className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/30 animate-pulse"
          style={{ animationDuration: "4s" }}
        />
      )
    case "paper-fold":
      return (
        <>
          <div
            className="absolute top-8 left-8 w-16 h-16 bg-white/70 transform rotate-45 animate-pulse"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute top-16 right-12 w-12 h-12 bg-white/50 transform -rotate-12 animate-pulse"
            style={{ animationDelay: "0.3s", animationDuration: "3.5s" }}
          />
          <div
            className="absolute bottom-12 left-16 w-20 h-20 bg-white/60 transform rotate-12 animate-pulse"
            style={{ animationDelay: "0.6s", animationDuration: "4s" }}
          />
          <div
            className="absolute bottom-8 right-8 w-8 h-8 bg-white/40 transform rotate-30 animate-pulse"
            style={{ animationDelay: "0.9s", animationDuration: "3.2s" }}
          />
        </>
      )
    case "ink-splash":
      return (
        <>
          <div
            className="absolute top-8 left-8 w-24 h-24 bg-black/30 rounded-full animate-pulse"
            style={{
              clipPath: "polygon(50% 0%, 80% 10%, 100% 35%, 85% 70%, 50% 100%, 15% 70%, 0% 35%, 20% 10%)",
              animationDuration: "3s",
            }}
          />
          <div
            className="absolute bottom-12 right-16 w-16 h-16 bg-black/20 rounded-full animate-pulse"
            style={{
              clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              animationDelay: "0.5s",
              animationDuration: "3.5s",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-12 h-12 bg-black/25 rounded-full animate-pulse -translate-x-1/2 -translate-y-1/2"
            style={{
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              animationDelay: "1s",
              animationDuration: "4s",
            }}
          />
        </>
      )
    case "glass-morphism":
      return (
        <>
          <div
            className="absolute top-8 left-8 w-32 h-32 bg-white/30 backdrop-blur-sm rounded-2xl animate-pulse"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute bottom-12 right-16 w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl animate-pulse"
            style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
          />
          <div
            className="absolute top-1/2 right-8 w-16 h-16 bg-white/25 backdrop-blur-sm rounded-2xl animate-pulse"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          />
        </>
      )
    case "retro-grid":
      return (
        <div className="absolute inset-0" style={{ perspective: "1000px" }}>
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/30"
            style={{ transform: "rotateX(60deg) translateZ(-100px)" }}
          >
            <div className="grid grid-cols-20 grid-rows-20 h-full w-full gap-px opacity-60">
              {Array.from({ length: 400 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-pink-400/40 animate-pulse"
                  style={{ animationDelay: `${i * 0.01}s`, animationDuration: "2s" }}
                />
              ))}
            </div>
          </div>
        </div>
      )
    case "vhs-glitch":
      return (
        <>
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/20 to-transparent animate-pulse"
            style={{ animationDuration: "2s" }}
          />
          <div
            className="absolute top-0 left-0 w-full h-px bg-white/30 animate-pulse"
            style={{ animationDelay: "0.1s", animationDuration: "2.5s" }}
          />
          <div
            className="absolute top-4 left-0 w-full h-px bg-white/30 animate-pulse"
            style={{ animationDelay: "0.2s", animationDuration: "3s" }}
          />
          <div
            className="absolute top-8 left-0 w-full h-px bg-white/30 animate-pulse"
            style={{ animationDelay: "0.3s", animationDuration: "2.8s" }}
          />
          <div
            className="absolute top-12 left-0 w-full h-px bg-white/30 animate-pulse"
            style={{ animationDelay: "0.4s", animationDuration: "3.2s" }}
          />
          <div
            className="absolute top-16 left-0 w-full h-px bg-white/30 animate-pulse"
            style={{ animationDelay: "0.5s", animationDuration: "2.7s" }}
          />
        </>
      )
    case "neon-sign":
      return (
        <>
          <div
            className="absolute top-8 left-8 w-4 h-4 bg-pink-400 rounded-full animate-ping"
            style={{ filter: "blur(2px) drop-shadow(0 0 10px #ff1493)", animationDuration: "2s" }}
          />
          <div
            className="absolute top-16 right-12 w-3 h-3 bg-cyan-400 rounded-full animate-ping"
            style={{
              animationDelay: "0.3s",
              filter: "blur(2px) drop-shadow(0 0 10px #00ffff)",
              animationDuration: "2.5s",
            }}
          />
          <div
            className="absolute bottom-12 left-16 w-5 h-5 bg-yellow-400 rounded-full animate-ping"
            style={{
              animationDelay: "0.6s",
              filter: "blur(2px) drop-shadow(0 0 10px #ffff00)",
              animationDuration: "3s",
            }}
          />
          <div
            className="absolute bottom-8 right-8 w-2 h-2 bg-green-400 rounded-full animate-ping"
            style={{
              animationDelay: "0.9s",
              filter: "blur(2px) drop-shadow(0 0 10px #00ff00)",
              animationDuration: "2.8s",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-3 h-3 bg-purple-400 rounded-full animate-ping -translate-x-1/2 -translate-y-1/2"
            style={{
              animationDelay: "1.2s",
              filter: "blur(2px) drop-shadow(0 0 10px #8a2be2)",
              animationDuration: "2.2s",
            }}
          />
        </>
      )
    case "synthwave-sunset":
      return (
        <>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
          <svg className="absolute bottom-0 w-full h-1/2" viewBox="0 0 400 150" preserveAspectRatio="none">
            <path
              d="M0,75 Q100,50 200,75 T400,75 L400,150 L0,150 Z"
              fill="url(#gradient)"
              opacity="0.8"
              className="animate-pulse"
              style={{ animationDuration: "4s" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff00ff" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
            </defs>
          </svg>
          <div
            className="absolute top-8 left-8 w-2 h-2 bg-pink-400 rounded-full animate-ping"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute top-12 right-12 w-1 h-1 bg-purple-400 rounded-full animate-ping"
            style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
          />
        </>
      )
    case "arcade-cabinet":
      return (
        <>
          <div
            className="absolute top-8 left-8 w-8 h-8 bg-yellow-400 animate-pulse"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", animationDuration: "2s" }}
          />
          <div
            className="absolute top-8 left-20 w-8 h-8 bg-red-400 animate-pulse"
            style={{ animationDelay: "0.2s", animationDuration: "2.5s" }}
          />
          <div
            className="absolute top-8 left-32 w-8 h-8 bg-green-400 animate-pulse"
            style={{ animationDelay: "0.4s", animationDuration: "3s" }}
          />
          <div
            className="absolute top-20 left-8 w-8 h-8 bg-blue-400 animate-pulse"
            style={{ animationDelay: "0.6s", animationDuration: "2.8s" }}
          />
          <div
            className="absolute top-20 left-20 w-8 h-8 bg-purple-400 animate-pulse"
            style={{ animationDelay: "0.8s", animationDuration: "2.2s" }}
          />
          <div
            className="absolute top-20 left-32 w-8 h-8 bg-orange-400 animate-pulse"
            style={{ animationDelay: "1s", animationDuration: "2.7s" }}
          />
        </>
      )
    case "cassette-tape":
      return (
        <>
          <div
            className="absolute top-1/2 left-1/4 w-16 h-16 -translate-y-1/2 border-4 border-white/40 rounded-full animate-spin"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-16 h-16 -translate-y-1/2 border-4 border-white/40 rounded-full animate-spin"
            style={{ animationDuration: "3s", animationDirection: "reverse" }}
          />
          <div className="absolute top-1/2 left-1/4 right-1/4 h-1 bg-amber-600 -translate-y-1/2" />
          <div
            className="absolute top-1/2 left-1/4 w-4 h-4 -translate-y-1/2 bg-white/60 rounded-full animate-spin"
            style={{ animationDuration: "1s" }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-4 h-4 -translate-y-1/2 bg-white/60 rounded-full animate-spin"
            style={{ animationDuration: "1s", animationDirection: "reverse" }}
          />
        </>
      )
    case "paint-strokes":
      return (
        <>
          <div
            className="absolute top-8 left-8 w-32 h-4 bg-red-400/70 transform -rotate-12 animate-pulse"
            style={{ borderRadius: "50px", animationDuration: "3s" }}
          />
          <div
            className="absolute top-20 right-16 w-24 h-6 bg-blue-400/70 transform rotate-6 animate-pulse"
            style={{ borderRadius: "50px", animationDelay: "0.3s", animationDuration: "3.5s" }}
          />
          <div
            className="absolute bottom-16 left-20 w-40 h-3 bg-yellow-400/70 transform -rotate-3 animate-pulse"
            style={{ borderRadius: "50px", animationDelay: "0.6s", animationDuration: "4s" }}
          />
          <div
            className="absolute bottom-8 right-8 w-20 h-5 bg-green-400/70 transform rotate-8 animate-pulse"
            style={{ borderRadius: "50px", animationDelay: "0.9s", animationDuration: "3.2s" }}
          />
        </>
      )
    case "kaleidoscope":
      return (
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 animate-spin"
          style={{ animationDuration: "10s" }}
        >
          <div className="absolute top-0 left-1/2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-white/50 -translate-x-1/2" />
          <div className="absolute top-0 left-1/2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-white/50 -translate-x-1/2 rotate-60" />
          <div className="absolute top-0 left-1/2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-white/50 -translate-x-1/2 rotate-120" />
          <div className="absolute top-0 left-1/2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-white/50 -translate-x-1/2 rotate-180" />
          <div className="absolute top-0 left-1/2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-white/50 -translate-x-1/2 rotate-240" />
          <div className="absolute top-0 left-1/2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-white/50 -translate-x-1/2 rotate-300" />
        </div>
      )
    case "watercolor-blend":
      return (
        <>
          <div
            className="absolute top-8 left-8 w-24 h-24 bg-blue-300/60 rounded-full animate-pulse"
            style={{ filter: "blur(10px)", animationDuration: "3s" }}
          />
          <div
            className="absolute top-16 right-12 w-32 h-32 bg-purple-300/50 rounded-full animate-pulse"
            style={{ filter: "blur(15px)", animationDelay: "0.5s", animationDuration: "3.5s" }}
          />
          <div
            className="absolute bottom-12 left-16 w-20 h-20 bg-pink-300/70 rounded-full animate-pulse"
            style={{ filter: "blur(8px)", animationDelay: "1s", animationDuration: "4s" }}
          />
          <div
            className="absolute bottom-8 right-8 w-16 h-16 bg-cyan-300/40 rounded-full animate-pulse"
            style={{ filter: "blur(12px)", animationDelay: "1.5s", animationDuration: "3.2s" }}
          />
        </>
      )
    case "geometric-mandala":
      return (
        <div
          className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 animate-spin"
          style={{ animationDuration: "20s" }}
        >
          <div className="absolute inset-0 border-2 border-white/40 rounded-full" />
          <div className="absolute inset-4 border-2 border-white/30 rounded-full" />
          <div className="absolute inset-8 border-2 border-white/20 rounded-full" />
          <div className="absolute inset-12 border-2 border-white/10 rounded-full" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/30" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-white/30" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/20 transform rotate-45" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/20 transform -rotate-45" />
        </div>
      )
    case "abstract-shapes":
      return (
        <>
          <div
            className="absolute top-8 left-8 w-16 h-24 bg-white/40 transform rotate-45 animate-pulse"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", animationDuration: "3s" }}
          />
          <div
            className="absolute top-20 right-12 w-20 h-16 bg-white/35 transform -rotate-12 animate-pulse"
            style={{
              borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%",
              animationDelay: "0.3s",
              animationDuration: "3.5s",
            }}
          />
          <div
            className="absolute bottom-12 left-20 w-24 h-20 bg-white/45 transform rotate-30 animate-pulse"
            style={{
              borderRadius: "50% 50% 50% 50% / 60% 40% 60% 40%",
              animationDelay: "0.6s",
              animationDuration: "4s",
            }}
          />
          <div
            className="absolute bottom-8 right-8 w-12 h-18 bg-white/30 transform -rotate-20 animate-pulse"
            style={{
              borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%",
              animationDelay: "0.9s",
              animationDuration: "3.2s",
            }}
          />
        </>
      )
    case "spiral-galaxy":
      return (
        <div
          className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 animate-spin"
          style={{ animationDuration: "30s" }}
        >
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div
            className="absolute top-1/4 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-pulse"
            style={{ animationDuration: "2s" }}
          />
          <div
            className="absolute top-3/4 left-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
          />
          <div
            className="absolute top-1/4 right-1/4 w-1 h-1 bg-pink-300 rounded-full animate-pulse"
            style={{ animationDelay: "1s", animationDuration: "3s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/2 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"
            style={{ animationDelay: "1.5s", animationDuration: "2.8s" }}
          />
          <div
            className="absolute top-1/3 left-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"
            style={{ animationDelay: "2s", animationDuration: "2.2s" }}
          />
        </div>
      )
    default:
      return null
  }
}
