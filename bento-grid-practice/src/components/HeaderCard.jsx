import starImage from '../assets/illustration-five-stars.webp';

function HeaderCard() {
  return (
    <div className="header-card">
      <h1>
        Social Media <span className="highlight">10x</span> <em>Faster</em> with AI
      </h1>
      <img src={starImage} alt="Five star illustration"/>
      <p>Over 4,000 5-star reviews</p>
    </div>
  )
}

export default HeaderCard