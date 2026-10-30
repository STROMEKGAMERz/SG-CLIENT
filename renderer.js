const pages = ["home","instances","mods","modpacks","resourcepacks","shaders","datapacks","appearance","settings"];
const titles = {home:"HOME",instances:"INSTANCES",mods:"MOD STORE",modpacks:"MODPACKS",resourcepacks:"RESOURCE PACKS",shaders:"SHADERS",datapacks:"DATA PACKS",appearance:"SKINS & CAPES",settings:"SETTINGS"};
function navigate(name){
  if(!pages.includes(name)) return;
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active-page"));
  document.getElementById(`page-${name}`).classList.add("active-page");
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===name));
  document.getElementById("crumb").textContent=titles[name];
}
document.querySelectorAll("[data-page]").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.page)));
document.querySelectorAll("[data-goto]").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.goto)));
const toast=document.getElementById("toast");
let toastTimer;
function notice(message){
  toast.textContent=message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>toast.classList.remove("show"),3500);
}
document.querySelectorAll("[data-notice]").forEach(b=>b.addEventListener("click",()=>notice(b.dataset.notice)));
document.getElementById("play-btn").addEventListener("click",()=>notice("Minecraft launching is not connected yet. Next stage: official sign-in, version installation and game runtime."));
