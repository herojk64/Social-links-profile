import ProfileImage from './assets/avatar-jessica.jpeg';
import './App.css'

interface ProfileLink {
  name: string;
  url: string;
}

function App() {
  const profile:ProfileLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername"
    },
    {
      name: "Frontend Mentor",
      url: "https://www.frontendmentor.io/profile/yourusername"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yourusername"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/yourusername"
    }
    ];

  return (
    <div className="min-h-screen font-inter bg-grey-900 flex items-center justify-center">
      <main className='card__component'>
      <img src={ProfileImage} className='rounded-full mx-auto w-24 h-24 mb-6' alt="Jessica Profile Picture" />
      <h1 className='text-center text-[24px] font-bold text-White'>Jessica Randall</h1>
      <article className='text-center'>
       <address className='text-Green text-[14px] mb-6'>London, United Kingdom</address>
       <p className='text-[14px] text-White font-light opacity-75 mb-4'>"Front-end developer and avid reader."</p>
       <ul className='space-y-4'>
        {
        profile.map((info,index)=>{
         return (
         <li key={index} className='w-full rounded-md bg-grey-700 py-4 px-2 text-White font-bold'>
          <a href={info.url}>
          {info.name}
          </a>
         </li> 
         )
        })}
        </ul> 
      </article>
      
  

  
      </main>
    </div>
  )
}

export default App
