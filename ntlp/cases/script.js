// let data= [
//     {
//         id:"1"
//     },
//      {
//         id:"2"
//     },
//     {
//         id:"3"
//     },
//      {
//         id:"4"
//     },
//     {
//         id:"5"
//     },
//      {
//         id:"6"
//     },
//     {
//         id:"7"
//     },
//      {
//         id:"8"
//     },
//     {
//         id:"9"
//     },
//      {
//         id:"10"
//     },
//     {
//         id:"11"
//     },
//      {
//         id:"12"
//     },
//     {
//         id:"13"
//     },
//      {
//         id:"14"
//     },
//     {
//         id:"15"
//     },
//      {
//         id:"15"
//     },
//     {
//         id:"17"
//     },
//      {
//         id:"18"
//     },
//     {
//         id:"19"
//     },
//      {
//         id:"20"
//     },
//     {
//         id:"21"
//     },
//      {
//         id:"22"
//     },
//     {
//         id:"23"
//     },
//      {
//         id:"24"
//     },
// ]

let case_page =document.querySelector(".case-page")
let products=null
fetch('Details.json')
.then(response=>response.json())
.then(data =>{
    products=data
    showProduct()
})
function showProduct (){
    const parsedUrl = new URL(window.location.href);
    let productId=parsedUrl.searchParams.get("id")
   let thisProduct=products.filter(value=>{
    return value.id ==productId
   })
 
   if(!thisProduct){
    window.location.href="/"
   }
   console.log(thisProduct[0])
   let {id,logo,title,type,image,about,AboutDescription,location,secAbout,duscSecAbout ,DURATION,TECHNOLOGIES,
    screenshot,Challenges,ChallengesDusk,Appfunctionality,UserRegistration,UserRegistrationText,
    Dashboardmanagement,DashboardmanagementText,notification,Notificationstext,solutionPro,Userprofiles,solution,Projectresults,projectRes}=thisProduct[0]
   
case_page.innerHTML=`
<div class="font-hanken content max-w-[860px] mx-auto">
<div class="mb-20 xl:mb-[168px] case-content"><img class="company-img" src=${logo} alt="NTP Events" />
    <h1>${title}</h1>
    <p>${type}</p>
    <img src=${image} alt="NTP" />
    <br>
    <br>
    <h2>${about}</h2>
    <br>
    <br>
    <p>${AboutDescription}</p>
    <br>
    <br>
    <h2>LOCATION:&nbsp &nbsp ${location}</h2>
    <br>
    <br>
    <br>
    <br>
    <h2>${secAbout}</h2>
    <br>
    <br>
    <p>${duscSecAbout}</p>
    <br>
    <br>
    <h2>DURATION:&nbsp &nbsp ${DURATION} </h2>
    <br>
    <br>
    <h2>TECHNOLOGIES:&nbsp &nbsp ${TECHNOLOGIES} </h2>
    <br>
    <br>
    <p>
        <img src=${screenshot} alt="NTP" /></p>
    <h2>${Challenges}</h2>
    <p>${ChallengesDusk}</p>
    <h2>${Appfunctionality}</h2>
    <br>
    
  
    <h6>${UserRegistration}</h6>
    <br>
  
    <h6>${UserRegistrationText}</h6>
    <br>
    
    <h6>${Dashboardmanagement}</h6>
    <br>
  
    <h6>${DashboardmanagementText}</h6>
    <br>
   
    <h6>${notification}</h6>
    <br>
    
    <h6>${Notificationstext}</h6>
    <br>
   
    <h6>${Userprofiles}</h6>
    <br>
   
    <h2>${solutionPro}</h2>
    <br>
   
    <p>${solution}</p>
    <h2>${Projectresults}</h2>
    <p>${projectRes}</p>
    <br>
    <p>By using <a href="https://www.alchemy.com/">Alchemy</a>, we were able to query NFT data, make faster transactions and deliver a wallet experience to the end users.<br/><br/> Now, fans can purchase tickets, have a token-gated access
        to the event, and use the NFT to have access to communities and special experiences before, during and after the event.</p>
    <h2>Working with Threed</h2>
    <p>
        <blockquote class="italic">&quot;We launched a revamped version of our platform in <span class="highlight-text">less than a month</span>. From design to implementation, this team has done an incredible job with us.&quot; - Leandro Pontes • CEO</blockquote>
    </p>
</div>
<section id="hero" class="z-20 overflow-hidden">
    <div class="absolute bottom-0 left-0 w-full -z-10">
        <div class="relative mx-auto w-full max-w-[991px]"><img class="absolute bottom-0 left-0 rotate-180 object-contain w-full" src="../images/grid-bg-bottom.svg" /></div>
    </div>
    <div class="">
        <div>
            <div style="opacity:0;transform:translateX(-25px) translateZ(0)">
                <div class="flex justify-center flex-col">
                    <h2 class="max-w-[932px] mx-auto text-2xl xl:text-8xl font-bold text-center font-hanken text-neutral-200">From idea to product, one lesson at a time.</h2>
                    <p class="text-md xl:text-lg text-center mt-6 text-slate-600 font-medium max-w-[724px] mx-auto">How we can help you? Let’s create something epic. Together.</p>
                </div>
            </div>
        </div>
        <div>
            <div style="opacity:1">
                <div class="flex gap-2 mt-12 text-sm xl:mt-14">
                    <div class="flex justify-center flex-1 gap-5 font-hanken">
                        <a class="btn btn-default" href="mailto:usejustbuild@gmail.com">Get in touch</a>
                        <button class="btn-outline"><a href="https://calendly.com/justbuildstudio/30min">Book an intro call</a></button></div>
                </div>
                <div class="slider">
                    <div class="flex items-center flex-nowrap gap-2 xl:gap-3 justify-center mt-9 xl:mt-10 company-list relative">
                        <div class="w-8 h-8 xl:w-10 xl:h-10 rounded-full overflow-hidden relative"><img src="../images/cases/releap/logo.png" alt="Releap" class="object-contain w-full" /></div>
                        <div class="w-8 h-8 xl:w-10 xl:h-10 rounded-full overflow-hidden relative"><img src="../images/cases/ethereum-org/logo.png" alt="Ethereum Org" class="object-contain w-full" /></div>
                        <div class="w-8 h-8 xl:w-10 xl:h-10 rounded-full overflow-hidden relative"><img src="../images/cases/4k/logo.png" alt="4k" class="object-contain w-full" /></div>
                        <div class="w-8 h-8 xl:w-10 xl:h-10 rounded-full overflow-hidden relative"><img src="../images/cases/ntp/logo.png" alt="NTP Events" class="object-contain w-full" /></div>
                        <div class="w-8 h-8 xl:w-10 xl:h-10 rounded-full overflow-hidden relative"><img src="../images/cases/onshelf/logo.png" alt="OnShelf" class="object-contain w-full" /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
`
}
// data.map((item)=>{
//    products=item
// })



