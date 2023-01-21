import WhiteContainer from "@/components/Container/WhiteContainer"
import Image from "next/image"

export default function Stats() {
  return (
    <div className="stats">
      <div className="users">
        <h3>100.000+</h3>
        <span>Finsweet Users</span>
      </div>
      <div className="icons">
        <div className="icon">
          <Image src="stats-logo1.svg" alt="stats-logo1" fill />
        </div>
        <div className="icon">
          <Image src="stats-logo2.svg" alt="stats-logo2" fill />
        </div>
        <div className="icon">
          <Image src="stats-logo3.svg" alt="stats-logo3" fill />
        </div>
        <div className="icon">
          <Image src="stats-logo4.svg" alt="stats-logo4" fill />
        </div>
        <div className="icon">
          <Image src="stats-logo5.svg" alt="stats-logo5" fill />
        </div>
      </div>
    </div>
  )
}