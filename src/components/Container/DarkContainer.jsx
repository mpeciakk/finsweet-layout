export default function DarkContainer({ children, yPadding }) {
  return (
    <div className="wrapper">
      <div className={`container ${yPadding ? "y-padding" :""}`}>
        {children}
      </div>
    </div>
  )
}