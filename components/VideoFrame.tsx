export default function VideoFrame() {
  return (
    <div className="editorFrame">
      <div className="editorTop">
        <div className="dots"><span className="red"></span><span className="yellowDot"></span><span className="green"></span></div>
        <p>ShahzaibEdit_Pro.prproj</p>
        <div className="tools">⚙︎ ⛶</div>
      </div>
      <div className="videoStage">
        <video src="/showreel.mp4" autoPlay muted loop playsInline />
        <div className="videoOverlay">
          <div className="timecode">00:01:23:12</div>
          <div className="playBtn">▶</div>
          <p>Add your video as public/showreel.mp4</p>
        </div>
      </div>
      <div className="renderPanel">
        <div className="renderTop"><span>Rendering Progress</span><strong>100%</strong></div>
        <div className="progress"><span></span></div>
        <div className="renderBottom"><button>▷ Render</button><p>4K • 60fps • ProRes 422</p></div>
      </div>
    </div>
  );
}
