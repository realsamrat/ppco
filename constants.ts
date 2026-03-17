import { NavItem, Photographer, ProcessStep, Testimonial, BlogPost, FAQItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/#about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const generateGalleryImages = (seed: string, count: number = 30): string[] => {
  const dimensions = [
    { w: 800, h: 1000 },  // Portrait
    { w: 1000, h: 800 },  // Landscape
    { w: 800, h: 600 },   // Short landscape
    { w: 600, h: 900 },   // Tall portrait
    { w: 900, h: 900 },   // Square
    { w: 1000, h: 1200 }, // Extra tall
  ];

  return Array.from({ length: count }, (_, i) => {
    const dim = dimensions[i % dimensions.length];
    return `https://picsum.photos/seed/${seed}${i}/${dim.w}/${dim.h}`;
  });
};

export const GALLERY_DATA = {
  weddings: {
    serviceName: 'Weddings',
    heroImage: 'https://picsum.photos/seed/wedding-hero/1920/1080',
    galleryImages: generateGalleryImages('wedding-gallery-')
  },
  engagements: {
    serviceName: 'Engagements',
    heroImage: 'https://picsum.photos/seed/engagement-hero/1920/1080',
    galleryImages: generateGalleryImages('engagement-gallery-')
  },
  families: {
    serviceName: 'Families',
    heroImage: 'https://picsum.photos/seed/family-hero/1920/1080',
    galleryImages: generateGalleryImages('family-gallery-')
  },
  branding: {
    serviceName: 'Branding',
    heroImage: 'https://picsum.photos/seed/branding-hero/1920/1080',
    galleryImages: generateGalleryImages('branding-gallery-')
  },
  headshots: {
    serviceName: 'Headshots',
    heroImage: 'https://picsum.photos/seed/headshot-hero/1920/1080',
    galleryImages: generateGalleryImages('headshot-gallery-')
  },
  seniors: {
    serviceName: 'High School Seniors',
    heroImage: 'https://picsum.photos/seed/senior-hero/1920/1080',
    galleryImages: generateGalleryImages('senior-gallery-')
  }
};

export const PHOTOGRAPHERS: Photographer[] = [
  {
    name: 'Sarah Miller',
    role: 'Lead Photographer',
    image: 'https://picsum.photos/seed/sarah/600/900',
    bio: 'Sarah believes that the best photos happen when you forget the camera is there. With 10 years of experience in the PNW wilderness, she knows how to chase the light.',
    credentials: ['10+ Years Experience', 'Wilderness First Responder', 'Mom of two wild boys'],
  },
  {
    name: 'David Chen',
    role: 'Videographer & Associate',
    image: 'https://picsum.photos/seed/david/600/900',
    bio: 'David captures the movement and sounds of your family life. His films are like time capsules that bring you right back to the feeling of this season.',
    credentials: ['Documentary Filmmaker', 'Drone Certified', 'Professional fun-haver'],
  },
  {
    name: 'Emily Rodriguez',
    role: 'Portrait Specialist',
    image: 'https://picsum.photos/seed/emily/600/900',
    bio: 'Emily specializes in capturing authentic moments and genuine expressions. Her background in fine art brings a unique perspective to every shoot.',
    credentials: ['Fine Arts Degree', 'Published Photographer', 'Natural Light Expert'],
  },
  {
    name: 'Marcus Thompson',
    role: 'Commercial Photographer',
    image: 'https://picsum.photos/seed/marcus/600/900',
    bio: 'Marcus brings corporate and brand photography to life with creative vision and technical precision. He makes every client feel confident in front of the camera.',
    credentials: ['Brand Strategy Expert', 'Studio & On-Location', 'Fortune 500 Clients'],
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: '01. Request Individual Quote',
    content: 'Click the "Free Quote" button on our website to get started. Share details about your photography needs, and our team will reach out to you promptly with a personalized quote tailored to your vision.'
  },
  {
    title: '02. Session Day',
    content: 'We photograph tethered directly to a computer so you can see your images in real-time as we shoot. Review selections on the spot, choose your favorites, and provide custom editing requests to ensure every image matches your vision perfectly.'
  },
  {
    title: '03. Delivery',
    content: 'Your final images are delivered through a beautiful online gallery where you can download high-resolution files, order professional prints, and access different sizes optimized for websites, social media, or branding materials.'
  }
];

export const TESTIMONIAL: Testimonial = {
  quote: "I was worried my kids wouldn't sit still, but Sarah just let them run wild and captured their true spirits. These aren't just photos; they are memories of exactly who we are right now.",
  author: "The Harrison Family",
  location: "Columbia River Gorge",
  image: "https://picsum.photos/seed/testimonial/800/600"
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Why Rain is Actually Great for Photos",
    category: "Advice",
    date: "Nov 15, 2024",
    image: "https://picsum.photos/seed/rain/600/400",
    excerpt: "Don't reschedule just yet! Overcast skies and drizzle create the moodiest, most beautiful light.",
    slug: "why-rain-is-great-for-photos",
    content: "Living in the Pacific Northwest means rain is inevitable, especially during portrait season. But here's a secret: some of our most stunning photos happen on overcast, drizzly days.\n\nOvercast skies act like a giant softbox, diffusing harsh sunlight and creating even, flattering light on faces. No squinting, no harsh shadows—just soft, dreamy illumination that makes skin glow.\n\nLight rain adds atmosphere and mood to your photos. Wet pavement reflects light beautifully, creating mirror-like surfaces. Raindrops on leaves and grass add texture and interest. And there's something romantic about couples huddled under an umbrella or families splashing in puddles.\n\nSo next time the forecast calls for rain, don't panic. Embrace it! Bring colorful umbrellas, wear boots you don't mind getting muddy, and trust that we'll create something magical together."
  },
  {
    title: "What to Wear: Fall Edition",
    category: "Styling",
    date: "Oct 28, 2024",
    image: "https://picsum.photos/seed/clothes/600/400",
    excerpt: "Layers, textures, and earthy tones. Here is our guide to looking cozy and coordinated.",
    slug: "what-to-wear-fall-edition",
    content: "Fall is hands-down the best season for family photos in the Pacific Northwest. The colors, the light, the cozy vibes—it all comes together beautifully. But what should you actually wear?\n\n**Color Palette:** Think warm, earthy tones. Rust, mustard, olive green, cream, and burgundy all photograph beautifully against fall foliage. Avoid bright neons or all-black outfits, which can look harsh.\n\n**Layers and Textures:** This is where fall really shines. Chunky knit sweaters, denim jackets, scarves, and boots add visual interest and dimension to photos. Mix textures—pair a cable-knit sweater with a leather jacket, or a flowy dress with a structured coat.\n\n**Coordination, Not Matching:** Your family doesn't need to wear identical outfits. Instead, choose a color palette and let everyone pick pieces they feel comfortable in. Aim for a cohesive look rather than matchy-matchy.\n\n**Comfort is Key:** You'll be moving around, sitting on the ground, and possibly getting a little muddy. Choose clothes that fit well and that you can move in. If you're not comfortable, it'll show in the photos."
  },
  {
    title: "A Golden Hour Session at Mt. Hood",
    category: "Featured Session",
    date: "Oct 15, 2024",
    image: "https://picsum.photos/seed/mthood/600/400",
    excerpt: "See how the Thompson family explored Trillium Lake as the sun went down.",
    slug: "golden-hour-mt-hood-session",
    content: "When the Thompson family reached out about doing a fall session at Mt. Hood, I knew it would be special. We met at Trillium Lake just before sunset, and the light did not disappoint.\n\nThe kids immediately ran to the water's edge, skipping rocks and exploring. Rather than forcing poses, we let them play while we captured genuine moments of joy and connection. Mom and Dad joined in, and soon everyone was laughing and splashing.\n\nAs the sun dipped behind the mountain, the light turned golden and warm. We moved to a nearby meadow where the grasses glowed in the evening light. The family walked hand-in-hand, swung the kids between them, and just enjoyed being together.\n\nThese are the moments that matter—not perfect poses, but real connection. The Thompsons left with muddy shoes, tired kids, and a gallery full of images that truly capture who they are as a family.\n\nIf you're considering a mountain session, don't hesitate. The drive is worth it, and the memories you'll create are priceless."
  },
  {
    title: "5 Tips for Natural-Looking Headshots",
    category: "Business",
    date: "Sep 22, 2024",
    image: "https://picsum.photos/seed/headshot-tips/600/400",
    excerpt: "Professional doesn't have to mean stiff. Here's how to look confident and approachable in your headshots.",
    slug: "natural-looking-headshots-tips",
    content: "Your headshot is often the first impression potential clients or employers have of you. But 'professional' doesn't have to mean stiff or boring. Here's how to get headshots that look polished and approachable.\n\n**1. Choose the Right Outfit:** Stick with solid colors that complement your skin tone. Avoid busy patterns or logos. A blazer or button-down shirt works well, but don't be afraid to show personality with a pop of color.\n\n**2. Think About Your Expression:** Practice your smile in the mirror before the session. A genuine smile reaches your eyes—think about something that makes you happy, not just 'say cheese.'\n\n**3. Posture Matters:** Stand or sit up straight, but keep your shoulders relaxed. Slightly angle your body rather than facing the camera head-on for a more flattering look.\n\n**4. Natural Light is Your Friend:** We shoot headshots using natural light whenever possible. It's softer and more flattering than harsh studio lighting.\n\n**5. Relax and Trust the Process:** The best headshots happen when you're relaxed and comfortable. We'll chat, laugh, and take plenty of shots so you have options to choose from."
  },
  {
    title: "Behind the Scenes: A Portland Wedding",
    category: "Weddings",
    date: "Sep 8, 2024",
    image: "https://picsum.photos/seed/wedding-bts/600/400",
    excerpt: "Take a peek behind the lens at Emma and Jake's intimate Portland wedding at The Evergreen.",
    slug: "behind-scenes-portland-wedding",
    content: "Emma and Jake's wedding at The Evergreen was everything an intimate Portland wedding should be—personal, heartfelt, and full of genuine moments.\n\nThe day started with getting ready photos in the venue's cozy bridal suite. Emma's mom helped her into her dress while her bridesmaids popped champagne. Meanwhile, Jake and his groomsmen were cracking jokes and tying bow ties in the groom's room.\n\nThe ceremony took place in the venue's garden, surrounded by towering evergreens and string lights. As Emma walked down the aisle, Jake's eyes welled up—a moment I was honored to capture.\n\nAfter the ceremony, we snuck away for couples portraits in the nearby forest. The light filtering through the trees was magical, and Emma and Jake were so natural together. They laughed, kissed, and just enjoyed being newlyweds.\n\nThe reception was a dance party from start to finish. Toasts brought tears and laughter, the first dance was swoon-worthy, and the dance floor stayed packed all night.\n\nThis is why I love photographing weddings—every single one is unique, and every couple has their own story to tell."
  },
  {
    title: "How to Prepare for Your Branding Session",
    category: "Business",
    date: "Aug 30, 2024",
    image: "https://picsum.photos/seed/branding-prep/600/400",
    excerpt: "A comprehensive guide to getting ready for your brand photography session, from wardrobe to shot list.",
    slug: "prepare-for-branding-session",
    content: "Brand photography is an investment in your business, and a little preparation goes a long way in making sure you get images you'll love and actually use.\n\n**Define Your Brand:** Before the session, think about your brand's personality. Are you approachable and casual, or polished and professional? Your photos should reflect this.\n\n**Create a Shot List:** Make a list of the types of images you need—headshots, workspace shots, product photos, lifestyle images. Think about where you'll use these photos (website, social media, marketing materials) and plan accordingly.\n\n**Wardrobe Planning:** Bring 3-5 outfit options that align with your brand. Solid colors photograph best, and you'll want variety for different uses. Don't forget accessories!\n\n**Prep Your Space:** If we're shooting at your office or workspace, tidy up and add personal touches that reflect your brand. Plants, books, and meaningful objects add character.\n\n**Relax and Be Yourself:** The best branding photos show the real you. Don't try to be someone you're not—your ideal clients want to work with the authentic you."
  },
  {
    title: "The Best Portland Locations for Engagement Photos",
    category: "Engagement",
    date: "Aug 12, 2024",
    image: "https://picsum.photos/seed/pdx-locations/600/400",
    excerpt: "From the waterfront to Forest Park, discover our favorite spots for engagement sessions in Portland.",
    slug: "best-portland-engagement-locations",
    content: "Portland is packed with beautiful locations for engagement photos. Here are some of our favorites:\n\n**Forest Park:** For couples who love nature, Forest Park offers lush greenery and towering trees. The light filtering through the canopy is absolutely magical.\n\n**The Waterfront:** The Willamette River provides stunning backdrops, especially at sunset. We love the area near the Hawthorne Bridge for its mix of urban and natural elements.\n\n**Powell's Books:** For book-loving couples, Powell's City of Books is iconic and quintessentially Portland. The colorful book spines make for vibrant, unique photos.\n\n**The Pearl District:** Cobblestone streets, brick buildings, and modern architecture create an urban vibe that's perfect for stylish couples.\n\n**Mt. Tabor:** This extinct volcano offers panoramic city views, especially beautiful at golden hour. The reservoir and surrounding park provide variety in one location.\n\n**Pittock Mansion:** The mansion grounds offer stunning views of downtown Portland and Mt. Hood. It's a bit of a hike, but the views are worth it.\n\nThe best location is one that feels authentic to you as a couple. Where do you love to spend time together? That's where we should shoot."
  },
  {
    title: "Senior Portrait Trends for 2024",
    category: "Seniors",
    date: "Jul 25, 2024",
    image: "https://picsum.photos/seed/senior-trends/600/400",
    excerpt: "This year's high school seniors are bringing personality and authenticity to their portraits like never before.",
    slug: "senior-portrait-trends-2024",
    content: "Senior portraits have come a long way from the awkward studio photos of the past. Today's seniors want images that actually reflect who they are.\n\n**Authenticity Over Perfection:** Gone are the days of stiff poses and fake smiles. Seniors want photos that show their real personality—whether that's athletic, artistic, quirky, or all of the above.\n\n**Multiple Locations:** Rather than shooting in one spot, we're doing sessions that move through 2-3 locations. This gives variety and keeps things fun and dynamic.\n\n**Outfit Changes:** Bring your varsity jacket, your favorite band tee, your prom dress—whatever makes you feel like you. We'll do multiple outfit changes to show different sides of your personality.\n\n**Props and Hobbies:** Bring your guitar, your skateboard, your art supplies. Photos that include your hobbies and interests are way more meaningful than generic poses.\n\n**Natural Settings:** Urban locations, forests, fields—anywhere but a studio. Natural light and real environments create photos that feel alive and current.\n\nYour senior year is a big deal. Your photos should be too."
  },
  {
    title: "Family Photo Tips: Getting Kids to Cooperate",
    category: "Families",
    date: "Jul 10, 2024",
    image: "https://picsum.photos/seed/kids-tips/600/400",
    excerpt: "Tried and true strategies for keeping little ones happy and engaged during family photo sessions.",
    slug: "family-photo-tips-kids",
    content: "Let's be honest—getting kids to cooperate for photos can be challenging. But after years of photographing families, I've learned a few tricks.\n\n**Timing is Everything:** Schedule your session when kids are typically happy and well-rested. Avoid nap time, meal time, or the end of a long day.\n\n**Bring Snacks:** Hungry kids are grumpy kids. Pack some non-messy snacks and water to keep energy levels up.\n\n**Let Them Play:** The best photos happen when kids are just being kids. We'll incorporate games, running, jumping, and exploring into the session.\n\n**Keep It Short:** Little ones have short attention spans. We'll work efficiently and keep the session moving so kids don't get bored.\n\n**Bribe Strategically:** Sometimes a promise of ice cream after photos works wonders. No shame in that game.\n\n**Lower Your Expectations:** Not every kid will smile at the camera, and that's okay. Some of the best photos are the candid, in-between moments.\n\n**Trust the Process:** I've photographed hundreds of families with young kids. Even if it feels chaotic in the moment, I promise we'll get beautiful photos."
  },
  {
    title: "Choosing the Right Photography Package",
    category: "Advice",
    date: "Jun 28, 2024",
    image: "https://picsum.photos/seed/packages/600/400",
    excerpt: "Not sure which package is right for you? Here's how to decide what you really need.",
    slug: "choosing-right-photography-package",
    content: "With so many photography package options, how do you know which one is right for you? Here's a guide to help you decide.\n\n**Consider Your Needs:** Are you looking for just a few key images, or do you want comprehensive coverage? A headshot session might only need 30 minutes, while a wedding requires all-day coverage.\n\n**Think About Usage:** Where will you use these photos? If you need images for a website, social media, and print materials, you'll want a package with more variety.\n\n**Budget Realistically:** Photography is an investment. While it's tempting to go with the cheapest option, remember that you're paying for expertise, equipment, editing time, and years of experience.\n\n**Ask About What's Included:** Does the package include digital files? Prints? How many edited images will you receive? What's the turnaround time?\n\n**Room to Grow:** If you're unsure, it's often better to start with a smaller package and add on if needed. Most photographers offer à la carte options.\n\n**Trust Your Gut:** Beyond the package details, make sure you connect with your photographer. You'll be spending time together, so it's important that you feel comfortable.\n\nStill not sure? Reach out and let's chat about what you're looking for. I'm happy to help you find the perfect fit."
  },
  {
    title: "A Gorge Engagement Session",
    category: "Featured Session",
    date: "Jun 14, 2024",
    image: "https://picsum.photos/seed/gorge-engagement/600/400",
    excerpt: "Sarah and Michael's adventurous engagement session at Latourell Falls was pure magic.",
    slug: "gorge-engagement-session",
    content: "When Sarah and Michael told me they wanted to do their engagement session at Latourell Falls, I knew we were in for something special. These two are adventurous, outdoorsy, and totally in love.\n\nWe started at the base of the falls, where the mist created a dreamy, ethereal atmosphere. Sarah wore a flowy white dress that moved beautifully in the breeze, and Michael kept her laughing the entire time.\n\nAfter the falls, we hiked to a nearby viewpoint overlooking the Columbia River Gorge. The golden hour light was incredible, painting everything in warm, glowing tones. Sarah and Michael danced, kissed, and just soaked in the moment.\n\nWhat I love most about this session is how it perfectly captures who they are as a couple. They're not afraid to get a little muddy, they love being outside, and they're always up for an adventure.\n\nIf you're planning an engagement session, think about locations that are meaningful to you. Where did you have your first date? Where do you love to spend time together? Those personal touches make all the difference.\n\nCongratulations, Sarah and Michael! I can't wait to photograph your wedding next year."
  },
  {
    title: "The Value of Professional Photography",
    category: "Advice",
    date: "May 30, 2024",
    image: "https://picsum.photos/seed/value/600/400",
    excerpt: "Why investing in professional photography is worth it for your business, family, and life milestones.",
    slug: "value-of-professional-photography",
    content: "In a world where everyone has a camera in their pocket, why hire a professional photographer? Here's why it matters.\n\n**Expertise and Experience:** Professional photographers have spent years honing their craft. We know how to work with light, composition, and posing to create images that are technically excellent and emotionally resonant.\n\n**Quality Equipment:** Professional cameras, lenses, and lighting equipment make a difference. We also have backup equipment in case something fails.\n\n**Editing Skills:** The magic doesn't stop when the shutter clicks. Professional editing brings out the best in every image—adjusting exposure, color, and retouching while maintaining a natural look.\n\n**You're in the Photo:** When you hire a photographer, you get to be in the pictures. No more mom or dad behind the camera missing out on family photos.\n\n**Preserving Memories:** Life moves fast. Professional photos freeze moments in time—your kids at this exact age, your business at this stage, your love on your wedding day. These images become more valuable as time passes.\n\n**For Business:** Professional photos elevate your brand and help you stand out. They show potential clients that you take your business seriously.\n\nPhotography is an investment in memories, in your brand, in your story. And that's priceless."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What types of photography services do you offer?",
    answer: "We are a full-service studio specializing in Weddings, Engagements, Family Portraits, Branding & Corporate Photography, Professional Headshots, and High School Seniors. We capture every milestone and professional need."
  },
  {
    question: "Do you travel for shoots?",
    answer: "Yes! While we are based in Portland, we love to travel. Whether it's a wedding on the Coast, a branding session in Bend, or a destination engagement, we are available to travel throughout the PNW and beyond."
  },
  {
    question: "How far in advance should I book?",
    answer: "For Weddings, we recommend booking 12-18 months in advance. For Portraits, Branding, and Senior sessions, 1-3 months is usually sufficient. Fall dates fill up particularly fast!"
  },
  {
    question: "Do you offer packages for businesses?",
    answer: "Absolutely. We offer tailored branding packages that include headshots, team photos, office lifestyle imagery, and product photography to help elevate your business's visual identity."
  },
  {
    question: "What is your turnaround time for images?",
    answer: "For portrait and branding sessions, you will receive your online gallery within 2-3 weeks. For weddings, our turnaround time is typically 6-8 weeks to ensure every image is perfect."
  }
];