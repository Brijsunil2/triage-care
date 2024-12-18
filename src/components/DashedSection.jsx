import "../styles/DashedSection.css";
import classNames from "classnames";

const DashedSection = ({
  sectionLabel,
  fluid,
  children,
  className,
  smallSection = false,
  required = false,
}) => {
  const containerClass = smallSection
    ? classNames(
        {
          "dashedsection-container-small": !fluid,
        },
        className
      )
    : classNames(
        {
          "dashedsection-container": !fluid,
        },
        className
      );

  return (
    <div className={containerClass}>
      <h3>
        <span>
          {required && <span style={{ color: "red" }}>*</span>} {sectionLabel}
        </span>
      </h3>
      {children}
    </div>
  );
};

export default DashedSection;
