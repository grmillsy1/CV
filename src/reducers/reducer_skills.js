
export default function () {
  return [
    {title: 'About Me',
      subTitle1: JOKE,
      subTitle1Context: ANSWER,
      subTitle2Context: ABOUT_ME },
    {title: 'Skills',
      subTitle1: CREATIVE,
      subTitle1Context: CREATIVE_CONTEXT,
      subTitle2: CURIOUS,
      subTitle2Context: CURIOUS_CONTEXT,
      subTitle3: GREAT_PEAR,
      subTitle3Context: PEAR_CONTEXT
    },
    {title: 'Projects',
      subTitle1: GRACE,
      subTitle1Context: GRACE_INFO,
      subTitle2: FLARE,
      subTitle2Context: FLARE_INFO,
      subTitle3: BLOOM,
      subTitle3Context: BLOOM_INFO
    },
    {title: 'Education',
      subTitle1: MAKERS_ACADEMY,
      dates: MAKERS_DATE,
      subTitle1Context: MAKERS,
        bullet1: BULLET1,
        bullet2: BULLET2,
        bullet3: BULLET3,
        bullet4: BULLET4,
        bullet5: BULLET5,
      subTitle2: NEWCASTLE_UNI,
      dates2: BIO_DATE,
      subTitle2Context: BIOMED
    },
    {title: 'Experience',
      subTitle1: JOJA,
      dates: JOJA_DATE,
      subTitle1Context: JOJA_INFO,
      subTitle2: ROCK,
      dates2: ROCK_DATES,
      subTitle2Context: ROCK_INFO
    },
    {title: 'Interests',
    subTitle1Context: INTERESTS},
  ]
}

//about me
const JOKE = "Why did the developer quit his job?"
const ANSWER = "Because he didnt get arrays!!"
const ABOUT_ME = `Hello, I am a full-stack junior developer with a passion for user experience and design.
Being an unusual blend of logical and creative, I love working on every aspect of a project; from conceptualization, prototyping and design, right through to testing, development and launch.
Since learning to code at Makers Academy, Europe's leading Web Developer bootcamp, I have been exploring the world of both front-end and back-end programming in a number of languages, descrovering its endless learning curves and unlimited potential.`;

//skills
const CURIOUS = 'Curious'
const CURIOUS_CONTEXT = '"I am neither clever nor especially gifted, I am only very, very Curious" - Albert Einstein. My background in biomedicine has fine-tuned my curious gene, which has also been at the forefront in my drive to learn new things and expand my mind. Curiosity has allowed me to stay focused, leading me down the rabbit hole of new languages, clean code, and agile approaches.'
const CREATIVE = 'Creative'
const CREATIVE_CONTEXT = 'Creativity is the pod to Technologies pea. Without creativity, tech would be stuck in the stone ages.My own personal creative flair allows me to think outside the box and use my scientific, logical brain in a way that can be quite unique.'
const GREAT_PEAR = 'Great pear'
const PEAR_CONTEXT = 'I am a huge believer in team-work and the importance of getting on well as a community, whether that means being there for your pair on a bad day of JavaScript, keeping upbeat when team moral is low, or standing up to sing a christmas song in-front of your whole company.'

//projects
const GRACE = 'GracePrince'
const GRACE_INFO = `Grace Prince, a fresh young carpenter from London came to me with a unique challenge; she wanted a website to reflect her quirky side, whilst still showing her collection in a professional way. Together we worked towards an individual solution involving GSAP animations, allowing me to explore jquery and javascript in a new way, whilst fine tuning my css and html skills.
[See it in action here](https://www.graceprince.com/index)`
const FLARE = 'Flare'
const FLARE_INFO = `Flare, the love child of Pokemon go and Snapchat was born from a dislike of the social seclusion that has become all too normal in the world today, it aims to bring users out from behind their computers and back together again. Our small team of junior developers learnt swift from scratch, implemented agile development and TDD to complete our working MVP in just 8 days.
[Check it out on the app store here!](https://itunes.apple.com/us/app/flare-share-discover-spontaneous/id1166173727?mt=8)`
const BLOOM = 'Bloom'
const BLOOM_INFO = 'Participating in a 3 day hackathon, we were given a brief to create a platform for junior developers to receive tailored resources whilst tracking their progress. [Take a look here](http://bloomtracker.herokuapp.com). '

//Education
const MAKERS_ACADEMY = 'Makers Academy'
const MAKERS_LINK = '<a href="http://www.twitter.com" target="_new">Makers</a>'
const MAKERS = 'A 16-week software development bootcamp teaching:'
const MAKERS_DATE = 'June - October 2016'
const BULLET1 = '* Object-oriented programming'
const BULLET2 = '* Agile Methodologies'
const BULLET3 = '* Test-Driven Development'
const BULLET4 = '* Ruby, Rails, Javascript, Node.js'
const BULLET5 = '* Rspec, Jasmine, Mocha'
const NEWCASTLE_UNI = 'Newcastle University'
const BIOMED = 'BSc in Biomedical Sience'
const BIO_DATE = '2010 - 2013'

//Experience
const JOJA = 'JojaLondon'
const JOJA_DATE = '2015-2016'
const JOJA_ROLE = 'Co-founder'
const JOJA_INFO = 'A boutique bow-tie company that went from a small market stall I ran in my spare time, to a full blown company. We hand-make custom bow-ties and wedding accessories here in London, for customers all around the world. From creative director on photo-shoots and designer for special edditions, to accountant and sales rep, I have experienced many of the different roles required in a creative start-up.'
const ROCK = 'Rock Unlimited'
const ROCK_ROLE = 'Account coordinator'
const ROCK_DATES = '2014-2015'
const ROCK_INFO = 'Rock is a small medical communications company based in Richmond. In my role as account coordinator I had to be organised, professional and calm. I worked closely with the account manager on our two main accounts, and also brought new buisness in for the company.'

//interests
const INTERESTS = 'When I am not coding I can be found writing (I am currently finishing off a novel), sailing (I recently crossed the atlantic, and sank!), or diving (Unfortunatly not the olypic kind).'
