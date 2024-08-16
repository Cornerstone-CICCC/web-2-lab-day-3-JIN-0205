gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
// todo section 1
let sectionOneTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section1'
  }
})
sectionOneTl.from('.section1 span:first-child', {x:'-100vw'})
            .from('.section1 span:last-child', {x:'100vw'}, '<')
            .from('.section1 p', { transformOrigin:'0 0 0', opacity: 0, transform: 'rotate(90deg)'})
            .from('.section1 img', {y: '100vh'})
            .to('.section1 p', {opacity: 1, transform: 'rotate(0deg)'})

// todo section 2
let sectionTwoTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section2',
    markers: true,  
    start: 'top',
    end: 'bottom'
  }
})
sectionTwoTl.from('.section2 span', {y:'-100vw', stagger: .3})
            .from('.section2 p', {opacity: 0, transform: 'rotateY(-90deg)' })
            .to('.section2 p', {opacity: 1, transform: 'rotateY(360deg)', duration: .5})




// todo section horizontal
const horizontalSections = document.querySelector('.horizontal-sections')
const section = document.querySelectorAll('.horizontal-sections section')
gsap.set(horizontalSections,{width: section.length * 100 + "%"});
gsap.set(section,{width: 100 / section.length + "%"});
gsap.to(section, {
  xPercent: -100 * (section.length - 1),
  scrollTrigger: {
    trigger: horizontalSections,
    start: "top top",
    end: '+=' + horizontalSections.clientWidth,
    pin: true,
    scrub: true,
    // anticipatePin: 1,
  }
})

// let sections = gsap.utils.toArray(".horizontal-sections section");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".horizontal-sections",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     end: () => "+=" + document.querySelector(".horizontal-sections").offsetWidth
//   }
// });





// todo section 3
let sectionThreeTl = gsap.timeline({
  // xPercent: -100 * (section.length - 1),
  scrollTrigger: {
    trigger: '.section3',
    markers: true,  
    start: 'top top',
    end: 'clientWidth'
  }
})
sectionThreeTl.from('.section3 h2', {x: '-100vw', scale: 10})
              .from('.section3 span', {y: '100vh',backgroundColor: 'red', stagger: .2})
              // .to('.section3 span', { backgroundColor: 'white', color:black,}, '<')



// todo section4
let section4Tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section4',
    markers: true,  
    start: 'top',
    end: 'max'
  }
})
section4Tl.from('.portfolio-item', {x: '100vw', stagger: .3})

// todo section 5
const heading2 = document.querySelector('.section5 h2')

console.log(heading2.innerText)
const letter = heading2.innerText.split('')
const letters = heading2.innerText.split(' ')
let sectionFiveTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section5',
    markers: true,  
    scrub: true, 
    pin: true,
    start: 'top',
    end: 'bottom'
  }
})
sectionFiveTl.from(heading2, {y: '-100vh', stagger: .1})
            .from('.section5 p', {y: '10vh', opacity: 0})
            .from('.contact-btn', {scale:0})


            .from('.section5', {backgroundPosition: '150% 90%'})
            .to('.section5', { backgroundColor: 'black'}, '<')

            const h2 = document.querySelector('section5')
