export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Hello World!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Welcome to your new Next.js application. This is a simple hello world page 
          built with modern React, TypeScript, and beautiful Tailwind CSS styling.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-8 backdrop-blur-sm border border-white/20">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🎉 Getting Started
          </h2>
          <p className="text-gray-600">
            Your application is now running successfully! You can start building 
            amazing features from here.
          </p>
        </div>
      </div>
    </div>
  );
}