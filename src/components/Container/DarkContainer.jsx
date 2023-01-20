export default function DarkContainer({ children }) {
  return (
    <div className="wrapper">
      <div className="container">
        {children}
      </div>
    </div>
  )
}