SG CLIENT — WINDOWS BUILD KIT (v0.3)

BHAI, ISME GITHUB AUTOMATIC WINDOWS BUILD FILE ADD KI HAI.
Tumhe coding nahi karni. GitHub tumhare liye Windows installer banayega.

STEP 1 — GITHUB PAR PROJECT UPLOAD KARO
1. https://github.com par jao aur sign in / free account banao.
2. New repository banao. Naam: SG-Client
3. Repository ko Public ya Private rakh sakte ho.
4. "Add file" > "Upload files" chuno.
5. Is ZIP ke andar ke SG_Client_Desktop folder ke ANDAR ki saari files aur
   .github folder upload karo. Dhyan rahe .github folder bhi upload ho.
6. "Commit changes" dabao.

STEP 2 — AUTOMATIC EXE BUILD CHALAO
1. Repository ke upar Actions tab kholo.
2. Left side "Build SG Client for Windows" chuno.
3. "Run workflow" dabao, phir green "Run workflow" button dabao.
4. Build complete hone ka wait karo. Pehli baar kuch minute lag sakte hain.
5. Completed run kholo. Neeche Artifacts mein
   "SG-Client-Windows-Setup" download karo.
6. ZIP extract karo. Andar SG Client Setup.exe hoga.

AGAR ACTIONS TAB NA DIKHE
Repository ke Settings > Actions > General mein Actions allow honi chahiye.
GitHub par upload karte waqt hidden .github folder miss mat karna.

LOCAL PREVIEW (OPTIONAL)
Windows PC par Node.js LTS install karke RUN_SG_CLIENT.bat chala sakte ho.
Local installer ke liye BUILD_SG_CLIENT.bat chala sakte ho.

ABHI KYA KAAM KARTA HAI
- Black + red SG desktop app window.
- Home, Instances, Mod Store, Modpacks, Resource Packs, Shaders, Data Packs,
  Skins & Capes aur Settings ke custom screens.
- Screens ke beech navigation aur prototype notices.

ABHI KYA KAAM NAHI KARTA
- Microsoft/Minecraft login.
- Minecraft versions download ya game launch.
- Fabric, Forge, NeoForge install.
- Mods/modpacks download ya activate.
- Resource packs, shaders, datapacks, skins aur capes import/activate.
- In-game HUD mods.

IMPORTANT
Yeh abhi launcher ka UI prototype hai, complete/playable Minecraft launcher nahi.
GitHub Actions Windows runner par installer build karega; main is environment se
installer ko run/test nahi kar sakta. 4 GB RAM par Electron app thoda heavy ho sakta hai.
FPS PC aur Minecraft settings par depend karta hai; 100 FPS guarantee nahi kiya ja sakta.
Sirf official Microsoft authentication use karna.
