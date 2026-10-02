const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");
menuBtn.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const counters=document.querySelectorAll("[data-count]");
let counted=false;
const statsObserver=new IntersectionObserver(entries=>{
 if(entries[0].isIntersecting && !counted){
   counted=true;
   counters.forEach(el=>{
     const target=Number(el.dataset.count); let n=0;
     const step=Math.max(1,Math.ceil(target/45));
     const timer=setInterval(()=>{
       n+=step;
       if(n>=target){n=target;clearInterval(timer)}
       el.textContent=n+(target===100?"":"+");
     },25);
   });
 }
},{threshold:.5});
statsObserver.observe(document.querySelector(".stats"));

document.getElementById("quoteForm").addEventListener("submit",function(e){
 e.preventDefault();
 const msg=document.getElementById("formMessage");
 msg.textContent="Thank you! Your project request has been prepared successfully.";
 this.reset();
});

window.addEventListener("scroll",()=>{
 document.getElementById("navbar").style.boxShadow=window.scrollY>20?"0 8px 30px #0005":"none";
});
