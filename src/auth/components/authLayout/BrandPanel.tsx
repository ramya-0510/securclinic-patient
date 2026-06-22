function BrandPanel() {
  return (
    <div
      className="flex-1 flex flex-col items-center justify-between p-10"
      style={{ background: "linear-gradient(160deg, #93c5fd 0%, #3b82f6 40%, #1d4ed8 100%)" }}
    >
      <div className="flex gap-3 justify-center w-full mt-4">
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
          📞 1-800-123-4567
        </div>
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
          ✉️ support@securoak.com
        </div>
      </div>

      
      <div className="flex flex-col items-center w-full max-w-xl gap-4">

        <div className="relative w-full">
          {/* Image card */}
          <div className="rounded-2xl overflow-hidden border-4 border-white/30 relative">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800"
              alt="Clinic"
              className="w-full object-cover"
              style={{ height: "420px" }}
            />
          </div>

          {/* Top-left square */}
          <div
            className="absolute -top-4 -left-5 w-12 h-12 rounded-xl border-2 border-white/30 z-10 rotate-12"
            style={{ background: "transparent" }}
          />

          {/* Bottom-right circle */}
          <div
            className="absolute -bottom-4 -right-4 w-11 h-11 border-2 border-white/30 rounded-full z-10"
            style={{ background: "transparent" }}
          />
        </div>

        {/* Slogan */}
        <p className="text-white text-center text-xl font-semibold mt-2">
          Add your own slogan in the settings page
        </p>

      </div>

      <div className="flex items-center justify-center gap-10">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white" />
            ))}
          </div>
          <span className="text-white text-sm font-medium">1000+ Users</span>
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} className="text-yellow-400 text-base">★</span>
          ))}
          <span className="text-white text-sm ml-1">4.9/5</span>
        </div>
      </div>

    </div>
  );
}

export default BrandPanel;