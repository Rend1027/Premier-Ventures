import Image from 'next/image';


export default function Page() {
  return (
    <div>
    <h1>Explore Nearby Attractions</h1>
    <p>Discover attractions within a 50-mile radius of our property</p>
    {/* Define inline styles or use a CSS/SCSS file for styling */}
    
        <Image
          src="/images/download.jpg"
          alt="A beautiful house"
          width={500}
          height={500}
        />
    </div>
  );
}
