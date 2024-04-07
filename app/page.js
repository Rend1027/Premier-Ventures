import Image from 'next/image';
import RootLayout from './layout';


const HomePage = () => {
  return (
    <div>
    <h1>Welcome to Premier Stay Ventures</h1>
      <p>Discover your next stay with us.</p>
    {/* Define inline styles or use a CSS/SCSS file for styling */}
    
        {/*<Image
          src="/images/download.jpg"
          alt="A beautiful house"
          width={500}
          height={500}
  />*/}
    </div>
  );
}


export default HomePage