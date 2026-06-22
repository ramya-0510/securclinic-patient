import { useState, useEffect, useRef } from "react";
import { MicOff, Mic, VideoOff, Video, Circle, MonitorUp, MessageSquare, PhoneOff } from "lucide-react";

interface Props {
  onEndCall: () => void;
}

export default function VideoArea({ onEndCall }: Props) {
  const [micOn, setMicOn] = useState(false);
  const [camOn, setCamOn] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Request/stop camera+mic whenever toggles change
  useEffect(() => {
    if (!micOn && !camOn) {
      // Stop all tracks when both are off
      if (stream) {
        stream.getTracks().forEach((t) => t.stop());
        setStream(null);
      }
      return;
    }

    let currentStream: MediaStream | null = null;

    navigator.mediaDevices
      .getUserMedia({ video: camOn, audio: micOn })
      .then((s) => {
        currentStream = s;
        setStream(s);
        if (videoRef.current) {
          videoRef.current.srcObject = s;
        }
      })
      .catch((err) => {
        console.error("Media access denied:", err);
      });

    return () => {
      currentStream?.getTracks().forEach((t) => t.stop());
    };
  }, [micOn, camOn]);

  // When cam turns off, clear video element
  useEffect(() => {
    if (!camOn && videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }, [camOn]);

  const handleEndCall = () => {
    stream?.getTracks().forEach((t) => t.stop());
    setStream(null);
    setMicOn(false);
    setCamOn(false);
    onEndCall();
  };

  return (
    <div className="flex-1 rounded-xl border border-slate-200 bg-white flex flex-col overflow-hidden">

      {/* Video area */}
      <div className="flex-1 bg-slate-100 relative overflow-hidden">
        {camOn ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted // muted so you don't hear your own mic echo in the UI
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <div className="w-20 h-20 rounded-full bg-slate-300 flex items-center justify-center">
              <VideoOff size={32} className="text-slate-500" />
            </div>
            <p className="text-slate-400 text-sm">Camera is off</p>
          </div>
        )}

        {/* Mic indicator overlay — shown when mic is on */}
        {micOn && (
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Microphone active
          </div>
        )}
      </div>

      {/* Controls bar */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-white shrink-0">
        <div className="flex items-center gap-5">

          {/* Mic toggle */}
          <button
            onClick={() => setMicOn((v) => !v)}
            title={micOn ? "Mute microphone" : "Unmute microphone"}
            className={`p-2.5 rounded-full transition ${
              micOn
                ? "bg-blue-100 text-blue-600"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            {micOn ? <Mic size={20} /> : <MicOff size={20} />}
          </button>

          {/* Camera toggle */}
          <button
            onClick={() => setCamOn((v) => !v)}
            title={camOn ? "Stop camera" : "Start camera"}
            className={`p-2.5 rounded-full transition ${
              camOn
                ? "bg-blue-100 text-blue-600"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            {camOn ? <Video size={20} /> : <VideoOff size={20} />}
          </button>

          {/* Record */}
          <button
            title="Record"
            className="p-2.5 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition"
          >
            <Circle size={20} />
          </button>

          {/* Screen share */}
          <button
            title="Share screen"
            className="p-2.5 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition"
          >
            <MonitorUp size={20} />
          </button>

          {/* Chat */}
          <button
            title="Chat"
            className="p-2.5 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition"
          >
            <MessageSquare size={20} />
          </button>
        </div>

        {/* End call */}
        <button
          onClick={handleEndCall}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition"
        >
          <PhoneOff size={16} /> End Call
        </button>
      </div>
    </div>
  );
}