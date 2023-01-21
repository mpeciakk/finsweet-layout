import Image from "next/image"
import WhiteContainer from "@/components/Container/WhiteContainer"
import GrayContainer from "@/components/Container/GrayContainer"

export default function AboutUsTeam() {
  return (
    <GrayContainer yPadding>
      <div className="aboutus-team">
        <h2>Meet our team</h2>

        <div className="people">
          <div className="person">
            <div className="avatar">
              <Image src="/team1.webp" alt="team-1" fill />
            </div>
            <h6 className="name">John Smith</h6>
            <span className="role">CEO</span>
          </div>

          <div className="person">
            <div className="avatar">
              <Image src="/team2.webp" alt="team-2" fill />
            </div>
            <h6 className="name">Simon Adams</h6>
            <span className="role">CTO</span>
          </div>

          <div className="person">
            <div className="avatar">
              <Image src="/team3.jpeg" alt="team-3" fill />
            </div>
            <h6 className="name">Paul Jones</h6>
            <span className="role">Design Lead</span>
          </div>

          <div className="person">
            <div className="avatar">
              <Image src="/team4.jpg" alt="team-4" fill />
            </div>
            <h6 className="name">Sara Hardin</h6>
            <span className="role">Project Manager</span>
          </div>
        </div>
      </div>
    </GrayContainer>
  )
}