import '../styles/DotsLoader.css'

const DotsLoader = ({width, height, gap}) => {
  const dotSizing = {
    '--dot-width': width,
    '--dot-height': height,
    '--dot-gap': gap
  }

  return (
    <div className="dotsloader-container">
        <div className="dot" style={dotSizing}></div>
        <div className="dot" style={dotSizing}></div>
        <div className="dot" style={dotSizing}></div>
    </div>
  )
}

export default DotsLoader