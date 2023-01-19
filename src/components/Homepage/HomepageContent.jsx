import Card from "@/components/Card"

export default function HomepageContent() {
  return (
    <div className="homepage-wrapper wrapper">
      <div className="homepage-content container">
        <div className="features-text">Features</div>
        <h2>Design that solves<br /> problems, one product at<br /> a time</h2>
        <div className="content">
          <Card icon="/icon2.svg" title="Uses Client First"
                content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
          <Card icon="/icon3.svg" title="Uses Client First"
                content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
          <Card icon="/icon1.svg" title="Uses Client First"
                content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
          <Card icon="/icon6.svg" title="Uses Client First"
                content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
          <Card icon="/icon4.svg" title="Uses Client First"
                content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
          <Card icon="/icon5.svg" title="Uses Client First"
                content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." />
        </div>
      </div>
    </div>
  )
}