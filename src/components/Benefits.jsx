import Card from "@/components/Card"

export default function Benefits() {
  return (
    <div className="aboutus-benefits-wrapper wrapper">
      <div className="aboutus-benefits container">
        <h2>The benefits of working with us</h2>

        <div className="cards">
          <Card icon="/icon2.svg" title="Uses Client First"
                content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                background />
          <Card icon="/icon3.svg" title="Uses Client First"
                content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                background />
          <Card icon="/icon1.svg" title="Uses Client First"
                content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                background />
        </div>
      </div>
    </div>
  )
}