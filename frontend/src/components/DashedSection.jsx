import "../styles/DashedSection.css"
import classNames from 'classnames';

const DashedSection = ({sectionLabel, fluid, children, className}) => {
  const containerClass = classNames({
    'dashedsection-container': !fluid,
  }, className);
  
  return (
    <div className={containerClass}>
      <h3><span>{sectionLabel}</span></h3>
      {children}
    </div>
  )
}

export default DashedSection