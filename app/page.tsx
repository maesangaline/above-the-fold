'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const headerData = [
  {
    id: 1,
    title: "Gradient Wave",
    description: "Flowing gradient animation with wave effects",
    component: "GradientWave"
  },
  {
    id: 2,
    title: "Floating Particles",
    description: "Interactive particle system with smooth movements",
    component: "FloatingParticles"
  },
  {
    id: 3,
    title: "Typing Animation",
    description: "Dynamic text typing effect with cursor blink",
    component: "TypingAnimation"
  },
  {
    id: 4,
    title: "Morphing Shapes",
    description: "Geometric shapes that transform and rotate",
    component: "MorphingShapes"
  },
  {
    id: 5,
    title: "Neon Glow",
    description: "Cyberpunk-style neon text with pulsing effects",
    component: "NeonGlow"
  },
  {
    id: 6,
    title: "Matrix Rain",
    description: "Digital rain effect with falling characters",
    component: "MatrixRain"
  }
]

// Animated Header Components
const GradientWave = ({ isFullView = false }: { isFullView?: boolean }) => (
  <div className={`relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 ${isFullView ? 'h-64' : 'h-32'} rounded-md flex items-center justify-center`}>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-pulse"></div>
    <div className="absolute inset-0 opacity-50">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-[slide_3s_ease-in-out_infinite] transform -skew-x-12"></div>
    </div>
    <h2 className={`relative z-10 text-white font-bold ${isFullView ? 'text-4xl' : 'text-xl'}`}>
      Gradient Wave
    </h2>
    <style jsx>{`
      @keyframes slide {
        0% { transform: translateX(-100%) skewX(-12deg); }
        100% { transform: translateX(200%) skewX(-12deg); }
      }
    `}</style>
  </div>
)

const FloatingParticles = ({ isFullView = false }: { isFullView?: boolean }) => (
  <div className={`relative overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900 ${isFullView ? 'h-64' : 'h-32'} rounded-md flex items-center justify-center`}>
    {[...Array(isFullView ? 20 : 8)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-white rounded-full opacity-70"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`
        }}
      />
    ))}
    <h2 className={`relative z-10 text-white font-bold ${isFullView ? 'text-4xl' : 'text-xl'}`}>
      Floating Particles
    </h2>
    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
    `}</style>
  </div>
)

const TypingAnimation = ({ isFullView = false }: { isFullView?: boolean }) => {
  const [text, setText] = useState("")
  const fullText = "Welcome to the Future"
  
  useState(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        index = 0
      }
    }, 150)
    return () => clearInterval(timer)
  })

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-green-800 to-emerald-600 ${isFullView ? 'h-64' : 'h-32'} rounded-md flex items-center justify-center`}>
      <h2 className={`text-white font-mono font-bold ${isFullView ? 'text-4xl' : 'text-xl'}`}>
        {text}
        <span className="animate-pulse">|</span>
      </h2>
    </div>
  )
}

const MorphingShapes = ({ isFullView = false }: { isFullView?: boolean }) => (
  <div className={`relative overflow-hidden bg-gradient-to-br from-orange-600 to-red-600 ${isFullView ? 'h-64' : 'h-32'} rounded-md flex items-center justify-center`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 bg-white opacity-20 rounded-full animate-[morph_4s_ease-in-out_infinite]"></div>
      <div className="w-12 h-12 bg-white opacity-30 rounded-full animate-[morph_3s_ease-in-out_infinite_reverse] ml-4"></div>
    </div>
    <h2 className={`relative z-10 text-white font-bold ${isFullView ? 'text-4xl' : 'text-xl'}`}>
      Morphing Shapes
    </h2>
    <style jsx>{`
      @keyframes morph {
        0%, 100% { border-radius: 50%; transform: rotate(0deg) scale(1); }
        25% { border-radius: 0%; transform: rotate(90deg) scale(1.2); }
        50% { border-radius: 50%; transform: rotate(180deg) scale(0.8); }
        75% { border-radius: 0%; transform: rotate(270deg) scale(1.1); }
      }
    `}</style>
  </div>
)

const NeonGlow = ({ isFullView = false }: { isFullView?: boolean }) => (
  <div className={`relative overflow-hidden bg-black ${isFullView ? 'h-64' : 'h-32'} rounded-md flex items-center justify-center`}>
    <h2 className={`font-bold ${isFullView ? 'text-4xl' : 'text-xl'} text-cyan-400 animate-pulse`}
        style={{
          textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
          animation: 'neon 2s ease-in-out infinite alternate'
        }}>
      NEON GLOW
    </h2>
    <style jsx>{`
      @keyframes neon {
        from {
          text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
        }
        to {
          text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff;
        }
      }
    `}</style>
  </div>
)

const MatrixRain = ({ isFullView = false }: { isFullView?: boolean }) => (
  <div className={`relative overflow-hidden bg-black ${isFullView ? 'h-64' : 'h-32'} rounded-md flex items-center justify-center`}>
    {[...Array(isFullView ? 15 : 6)].map((_, i) => (
      <div
        key={i}
        className="absolute top-0 text-green-400 font-mono text-sm opacity-70"
        style={{
          left: `${i * (100 / (isFullView ? 15 : 6))}%`,
          animation: `matrix ${1 + Math.random() * 2}s linear infinite`,
          animationDelay: `${Math.random() * 2}s`
        }}
      >
        {Array.from({ length: 10 }, () => String.fromCharCode(0x30A0 + Math.random() * 96)).join('')}
      </div>
    ))}
    <h2 className={`relative z-10 text-green-400 font-mono font-bold ${isFullView ? 'text-4xl' : 'text-xl'}`}>
      MATRIX RAIN
    </h2>
    <style jsx>{`
      @keyframes matrix {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(200%); }
      }
    `}</style>
  </div>
)

const HeaderComponent = ({ component, isFullView = false }: { component: string, isFullView?: boolean }) => {
  switch (component) {
    case 'GradientWave':
      return <GradientWave isFullView={isFullView} />
    case 'FloatingParticles':
      return <FloatingParticles isFullView={isFullView} />
    case 'TypingAnimation':
      return <TypingAnimation isFullView={isFullView} />
    case 'MorphingShapes':
      return <MorphingShapes isFullView={isFullView} />
    case 'NeonGlow':
      return <NeonGlow isFullView={isFullView} />
    case 'MatrixRain':
      return <MatrixRain isFullView={isFullView} />
    default:
      return <div>Header not found</div>
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Above the Fold</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A tool to make header creation a breeze. Browse a list of animated headers and then fork your favorite to start building your own page with it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {headerData.map((header) => (
            <Dialog key={header.id}>
              <DialogTrigger asChild>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
                  <CardHeader>
                    <CardTitle>{header.title}</CardTitle>
                    <CardDescription>
                      {header.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <HeaderComponent component={header.component} />
                    </div>
                    <Button className="w-full" variant="outline">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{header.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <HeaderComponent component={header.component} isFullView={true} />
                  <p className="text-muted-foreground">{header.description}</p>
                  <div className="flex gap-2">
                    <Button className="flex-1">Fork This Header</Button>
                    <Button variant="outline" className="flex-1">View Code</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </main>
  )
}