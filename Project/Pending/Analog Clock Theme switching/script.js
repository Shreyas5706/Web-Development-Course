let hh=document.querySelector(".hour-hand");
let mh=document.querySelector(".min-hand");
let sh=document.querySelector(".sec-hand");
let dh=document.querySelector(".dh");
let dm=document.querySelector(".dm");
let ds=document.querySelector(".ds");
setInterval(()=>{
    let time=new Date();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();
    let hrotation=(30*h)+(h/2);
    let mrotation=6*m;
    let srotation=6*s;
    hh.style.transform=`rotate(${hrotation}deg)`
    mh.style.transform=`rotate(${mrotation}deg)`
    sh.style.transform=`rotate(${srotation}deg)`
    dh.innerHTML=(h<10?'0'+h:h)>12?h-=12:h; 
    dm.innerHTML=m<10?'0'+m:m;
    ds.innerHTML=s<10?'0'+s:s;
})

const modeSwitcher = document.getElementById('mode-switch');

modeSwitcher.addEventListener('change', () => {
  // document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('dark-theme');
});
// const toggleButton = document.getElementById('theme-toggle');
  
//   toggleButton.addEventListener('click', () => {
//     document.body.classList.toggle('dark-theme');
//   });

// Theme colors 
/* Day Mode Palette:
Background: Soft Off-White (#F5F5F5)
Primary Accent: Cool Cyan (#00B4D8)
Secondary Accent: Deep Indigo (#023E8A)
Digits/Numbers: Charcoal Gray (#333333)
Analog Hands: Dark Slate (#495057)
Borders/Hour Markings: Light Slate Gray (#6C757D)
Night Mode Palette:
Background: Deep Navy (#011627)
Primary Accent: Neon Green (#00FFB3)
Secondary Accent: Electric Blue (#3A86FF)
Digits/Numbers: Light Gray (#DDE2E6)
Analog Hands: Bright Cyan (#80FFDB)
Borders/Hour Markings: Soft Purple (#B388EB) */



// Clock hand colors 
/* Light Mode Clock Hand Colors:
Hour Hand: Deep Blue (#1E3A8A) – A strong, bold blue that contrasts well with light backgrounds.
Minute Hand: Forest Green (#228B22) – A natural, calming green that stands out but isn’t overpowering.
Second Hand: Bright Red (#E63946) – A striking red for the second hand, giving it high visibility.
Dark Mode Clock Hand Colors:
Hour Hand: Soft Lavender (#C084FC) – A light, soothing purple that contrasts well against a dark background.
Minute Hand: Neon Green (#39FF14) – A vibrant green that adds a futuristic glow effect in dark mode.
Second Hand: Electric Yellow (#FFD60A) – A bright, glowing yellow that stands out sharply against dark tones. */