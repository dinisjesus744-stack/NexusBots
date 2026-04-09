:root {
    --bg: #050507;
    --card-bg: rgba(255, 255, 255, 0.03);
    --primary: #00d2ff;
    --accent: #7d5fff;
    --text: #ffffff;
    --text-dim: #a0a0a5;
    --glass: rgba(15, 15, 25, 0.7);
}

* { margin: 0; padding: 0; box-sizing: border-box; }
body {
    background-color: var(--bg);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 25px; }

header {
    background: var(--glass);
    backdrop-filter: blur(15px);
    padding: 15px 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(255,255,255,0.05);
}

nav { display: flex; justify-content: space-between; align-items: center; }

.logo-group { display: flex; align-items: center; gap: 12px; }
.nav-logo { height: 45px; border-radius: 50%; border: 2px solid var(--primary); }
.logo-text { font-family: 'Orbitron', sans-serif; font-weight: 700; letter-spacing: 2px; font-size: 1.2rem; }
.logo-text span { color: var(--primary); }

.nav-links { display: flex; list-style: none; align-items: center; }
.nav-links li { margin-left: 30px; }
.nav-links a { text-decoration: none; color: var(--text-dim); font-size: 0.9rem; transition: 0.3s; }
.nav-links a:hover { color: var(--primary); }

.btn-nav { background: var(--primary); color: #000 !important; padding: 8px 20px; border-radius: 50px; font-weight: 700; }

/* HERO */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    background: radial-gradient(circle at 50% 50%, #10101a 0%, #050507 100%);
}

.hero-content { text-align: center; width: 100%; }
.hero-logo { width: 180px; height: 180px; border-radius: 50%; margin-bottom: 20px; border: 4px solid var(--primary); box-shadow: 0 0 30px rgba(0,210,255,0.3); }

.hero h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(2rem, 5vw, 3.5rem);
    background: linear-gradient(to right, #fff, var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
}

.hero p { color: var(--text-dim); font-size: 1.1rem; max-width: 700px; margin: 0 auto 40px; }

.btn { padding: 15px 35px; border-radius: 8px; text-decoration: none; font-weight: 700; transition: 0.3s; display: inline-flex; align-items: center; gap: 10px; }
.btn.primary { background: var(--primary); color: #000; box-shadow: 0 5px 20px rgba(0,210,255,0.4); }
.btn.secondary { border: 1px solid rgba(255,255,255,0.1); color: #fff; margin-left: 15px; background: rgba(255,255,255,0.02); }
.btn:hover { transform: translateY(-3px); filter: brightness(1.2); }

/* SERVICES */
.services { padding: 100px 0; }
.header-section { text-align: center; margin-bottom: 60px; }
.section-title { font-family: 'Orbitron', sans-serif; font-size: 2.5rem; margin-bottom: 10px; }
.section-subtitle { color: var(--primary); font-weight: 500; text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; }

.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; }
.service-card {
    background: var(--card-bg);
    padding: 40px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.05);
    transition: 0.3s;
    text-align: left;
}
.service-card:hover { background: rgba(255,255,255,0.06); border-color: var(--primary); transform: translateY(-10px); }
.icon-box { font-size: 2.5rem; color: var(--primary); margin-bottom: 20px; }
.service-card h3 { margin-bottom: 15px; font-family: 'Orbitron', sans-serif; font-size: 1.2rem; }
.service-card p { color: var(--text-dim); font-size: 0.95rem; }

/* PORTFOLIO */
.portfolio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 40px; }
.portfolio-item {
    height: 200px;
    background: linear-gradient(45deg, #10101a, #1a1a2e);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255,255,255,0.05);
    font-family: 'Orbitron', sans-serif;
}

/* FOOTER */
footer { padding: 60px 0 30px; border-top: 1px solid rgba(255,255,255,0.05); }
.footer-content { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
.copyright { text-align: center; color: var(--text-dim); font-size: 0.8rem; }

.floating-btn {
    position: fixed; bottom: 30px; right: 30px; background: #5865F2; width: 60px; height: 60px;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 1.8rem; color: #fff; text-decoration: none; z-index: 2000; box-shadow: 0 5px 20px rgba(0,0,0,0.4);
}

@media (max-width: 768px) {
    .nav-links { display: none; }
    .hero h1 { font-size: 2.5rem; }
    .btn.secondary { margin-left: 0; margin-top: 15px; width: 100%; }
    .btn.primary { width: 100%; }
}
