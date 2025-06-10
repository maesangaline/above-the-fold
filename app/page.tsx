import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Above the Fold</h1>
          <p className="text-xl text-muted-foreground">
            A tool to make header creation a breeze. Browse a list of animated headers and then fork your favorite to start building your own page with it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Animated Header 1</CardTitle>
              <CardDescription>
                A sleek fade-in animation with gradient background
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">Preview</span>
              </div>
              <Button className="w-full">Fork This Header</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Animated Header 2</CardTitle>
              <CardDescription>
                Sliding text animation with modern typography
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-gradient-to-r from-green-500 to-teal-600 rounded-md mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">Preview</span>
              </div>
              <Button className="w-full">Fork This Header</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Animated Header 3</CardTitle>
              <CardDescription>
                Particle effect background with smooth transitions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-gradient-to-r from-orange-500 to-red-600 rounded-md mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">Preview</span>
              </div>
              <Button className="w-full">Fork This Header</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}