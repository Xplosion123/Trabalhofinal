// Inicializar EmailJS com sua public key
emailjs.init('PMsdnP3SJkvx3IDzT');

document.addEventListener("DOMContentLoaded", function () {
    console.log('scripts.js loaded');

    // Helper safe setters
    function safeTextById(id, text) { const el = document.getElementById(id); if (el) el.innerText = text; }
    function safeTextSelector(sel, text) { const el = document.querySelector(sel); if (el) el.innerText = text; }
    function safePlaceholder(id, text) { const el = document.getElementById(id); if (el) el.placeholder = text; }

    /* ---------------------- */
    /* MENU HAMBURGUER        */
    /* ---------------------- */
    function toggleMenu() { const menu = document.getElementById('menu'); const ham = document.getElementById('hamburger'); if (menu) menu.classList.toggle('open'); if (ham) ham.classList.toggle('open'); }
    const hamburger = document.getElementById('hamburger'); if (hamburger) hamburger.addEventListener('click', toggleMenu);
    document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => { const menu = document.getElementById('menu'); if (menu) menu.classList.remove('open'); }));

    /* ---------------------- */
    /* BOTÃO VOLTAR AO TOPO   */
    /* ---------------------- */
    window.addEventListener('scroll', () => { const btn = document.getElementById('toTop'); if (btn) btn.style.display = window.scrollY > 200 ? 'flex' : 'none'; });
    function scrollToTop(){ window.scrollTo({ top: 0, behavior: 'smooth' }); }
    window.scrollToTop = scrollToTop; // Expor globalmente
    const toTopBtn = document.getElementById('toTop'); if (toTopBtn) toTopBtn.addEventListener('click', scrollToTop);

    /* ---------------------- */
    /*        CARROSSEL       */
    /* ---------------------- */
    let index = 0; const carousel = document.getElementById('carousel');
    function updateSlide(){ if(!carousel) return; carousel.style.transform = `translateX(${-index * (100 / carousel.children.length)}%)`; }
    const nextBtn = document.getElementById('next'); const prevBtn = document.getElementById('prev');
    if(nextBtn && carousel) nextBtn.onclick = () => { index = (index + 1) % carousel.children.length; updateSlide(); };
    if(prevBtn && carousel) prevBtn.onclick = () => { index = (index - 1 + carousel.children.length) % carousel.children.length; updateSlide(); };
    if(carousel && carousel.children.length){ setInterval(()=>{ index = (index + 1) % carousel.children.length; updateSlide(); }, 3000); updateSlide(); }

    /* ---------------------- */
    /*    TROCAR IDIOMA       */
    /* ---------------------- */
    let en = false;
    function trocarIdioma(event){
        if(event) event.preventDefault(); en = !en; console.log('trocarIdioma ->', en);

        // HERO
        safeTextById('hero-title', en ? 'Learn Languages Easily' : 'Aprenda Idiomas com Facilidade');
        safeTextById('hero-text', en ? 'The fastest and most modern way to learn languages.' : 'O jeito mais moderno e rápido de aprender idiomas.');

        // LOGO + MENU + START BTN
        safeTextById('logo-text', en ? 'Easy Learn Languages' : 'Aprende Fácil Idiomas');
        safeTextById('nav-sobre', en ? 'About' : 'Sobre');
        safeTextById('nav-adquirir', en ? 'Acquire' : 'Adquirir');
        safeTextById('nav-metodo', en ? 'Method' : 'Método');
        safeTextById('nav-beneficios', en ? 'Benefits' : 'Benefícios');
        safeTextById('start-btn', en ? 'Start Now' : 'Começar Agora');

        // SEÇÃO SOBRE
        safeTextSelector('#sobre h2', en ? 'About Easy Learn Languages' : 'Sobre a Aprende Fácil Idiomas');
        const sobreP = document.querySelector('#sobre p'); if(sobreP) sobreP.innerText = en ? 'We are a school focused on making language learning easy and efficient. Our goal is to take you to fluency in a natural, clear, and uncomplicated way.' : 'Somos uma escola focada em transformar o aprendizado de idiomas em algo fácil e eficiente. Nosso objetivo é levar você à fluência de forma natural, clara e sem complicações.';

        // SEÇÃO CURSOS
        safeTextSelector('#cursos h2', en ? 'Choose Your Course' : 'Escolha seu Curso');

        // Missão, Visão, Valores
        safeTextById('missao-visao-valores-titulo', en ? 'Mission, Vision and Values' : 'Missão, Visão e Valores');
        safeTextById('visao-titulo', en ? 'Vision' : 'Visão');
        safeTextById('visao-desc', en ? 'Our commitment is to deliver quality, modern, and accessible education for all.' : 'Nosso compromisso é entregar um ensino de qualidade, moderno e acessível para todos.');
        safeTextById('missao-titulo', en ? 'Mission' : 'Missão');
        safeTextById('missao-desc', en ? 'Our commitment is to transform language learning into a practical and efficient experience.' : 'Nosso compromisso é transformar o aprendizado de idiomas em uma experiência prática e eficiente.');
        safeTextById('valores-titulo', en ? 'Values' : 'Valores');
        safeTextById('valores-desc', en ? 'Innovation, dedication, and quality in teaching, focused on student success.' : 'Inovação, dedicação e qualidade no ensino, focados no sucesso do aluno.');
        safeTextSelector('#missao-visao-valores h2', en ? 'Mission, Vision and Values' : 'Missão, Visão e Valores');
        const textos = {
            visao: en ? 'Our commitment is to deliver a quality, modern, and accessible education for all.' : 'Nosso compromisso é entregar um ensino de qualidade, moderno e acessível para todos.',
            missao: en ? 'Our commitment is to transform language learning into a practical and efficient experience.' : 'Nosso compromisso é transformar o aprendizado de idiomas em uma experiência prática e eficiente.',
            valores: en ? "Innovation, dedication, and quality in teaching, focused on the student's success." : 'Inovação, dedicação e qualidade no ensino, focados no sucesso do aluno.'
        };
        Object.keys(textos).forEach(k => { const parent = document.getElementById(k); if(parent){ const p = parent.querySelector('p'); if(p) p.innerText = textos[k]; }});

        // BENEFÍCIOS
        safeTextSelector('#beneficios h2', en ? 'Why choose our school?' : 'Por que escolher a nossa escola?');
        const benEn = ['Personalized lessons for each student','Easy-to-use platform, updated and focused on conversation','Modern and accessible content','Quick and natural learning','Specialized teachers','Direct support via WhatsApp'];
        const benPt = ['Aulas personalizadas para cada aluno','Plataforma fácil, atualizada e focada na conversação','Conteúdo moderno e acessível','Aprendizado rápido e natural','Professores especializados','Suporte direto pelo WhatsApp'];
        const bens = document.querySelectorAll('#beneficios p'); if(bens.length){ bens.forEach((p,i)=> p.innerText = en ? (benEn[i]||'') : (benPt[i]||'')); }

        // Cursos / Planos
        const h3s = document.querySelectorAll('.curso-card h3'); if(h3s.length >=3){ h3s[0].innerText = en ? 'Basic Plan Beginner' : 'Plano Básico Iniciante'; h3s[1].innerText = en ? 'Advanced Plan Masterclass' : 'Plano Avançado Masterclass'; h3s[2].innerText = en ? 'Intermediate Plan Progress' : 'Plano Intermediário Progresso'; }
        const precos = document.querySelectorAll('.curso-card .preco'); if(precos.length){ precos[0].innerText = en ? '$99/month' : 'R$ 99/mês'; precos[1].innerText = en ? '$299/month' : 'R$ 299/mês'; precos[2].innerText = en ? '$179/month' : 'R$ 179/mês'; }
        
        // Descrições dos cursos
        const curso1Desc = document.querySelectorAll('#curso1-lista li');
        if(curso1Desc.length >= 4){
            const descEn = ['Access to basic courses','Videos and interactive exercises','Weekly group classes','Access via Android and iOS'];
            const descPt = ['Acesso aos cursos básicos','Vídeos e exercícios interativos','Aulas em grupo semanais','Acesso via Android e iOS'];
            curso1Desc.forEach((li, i) => li.innerText = en ? descEn[i] : descPt[i]);
        }
        
        const curso2Desc = document.getElementById('curso2-desc'); 
        if(curso2Desc) curso2Desc.innerText = en ? 'Complete course with more content and focus on all aspects of the language.' : 'Curso completo, com mais conteúdos e foco em todos os aspectos do idioma.';
        
        const curso3Desc = document.getElementById('curso3-desc'); 
        if(curso3Desc) curso3Desc.innerText = en ? 'Advanced course with personalized classes and exclusive materials.' : 'Curso avançado, com aulas personalizadas e materiais exclusivos.';
        
        // Botões Adquirir
        const btns = document.querySelectorAll('.btn-adquirir'); 
        if(btns.length >= 3){ 
            btns.forEach(btn => btn.innerText = en ? 'Get Course' : 'Adquirir Curso'); 
        }

        // Método
        safeTextSelector('#metodo h2', en ? 'Our Method' : 'Nosso Método');
        const metodoP = document.querySelector('#metodo p'); if(metodoP) metodoP.innerText = en ? 'Our method combines technology, daily practice, and real-life situations to accelerate your fluency. You learn by speaking, listening, applying, and living the language — not just memorizing rules.' : 'Nosso método combina tecnologia, prática diária e situações reais para acelerar sua fluência. Você aprende conversando, ouvindo, aplicando e vivendo o idioma — não apenas decorando regras.';

        // Contato / Form
        safeTextById('contact-title', en ? 'Get in Touch' : 'Entre em Contato');
        safeTextById('contact-sub', en ? 'Want to know more or schedule a session? Talk to us.' : 'Quer saber mais ou agendar uma sessão? Fale conosco.');
        safePlaceholder('nome', en ? 'Your Name' : 'Seu Nome');
        safePlaceholder('telefone', en ? 'Your Phone Number' : 'Seu Número');
        safePlaceholder('email', en ? 'Your Email' : 'Seu Email');
        safePlaceholder('mensagem', en ? 'Write your message here' : 'Escreva sua mensagem aqui');
        safeTextById('btn-enviar', en ? 'Send Message' : 'Enviar Mensagem');

        // Labels
        safeTextById('label-tel', en ? 'Phone: (11) 95122-2827' : 'Telefone: (11) 95122-2827');
        safeTextById('label-email', en ? 'Email: henrimelo06@gmail.com' : 'E-mail: henrimelo06@gmail.com');
        safeTextById('label-social', en ? 'Social Media:' : 'Redes Sociais:');

        // Footer
        safeTextById('footer-menu', en ? 'About | Services | Portfolio | Blog | Contact' : 'Sobre | Serviços | Portfólio | Blog | Contato');
        safeTextById('footer-copy', en ? 'Easy Learn Languages © 2025 | Privacy Policy | Terms of Use' : 'Aprende Fácil Idiomas © 2025 | Política de Privacidade | Termos de Uso');

        // Flags opacity
        const fb = document.getElementById('flag-br'); const fu = document.getElementById('flag-uk'); if(fb) fb.style.opacity = en ? '0.4' : '1'; if(fu) fu.style.opacity = en ? '1' : '0.4';
    }
    window.trocarIdioma = trocarIdioma;

    /* ---------------------- */
    /*  AÇÃO DO BOTÃO "COMEÇAR AGORA" */
    /* ---------------------- */
    function setupStartButton(){
        const startBtn = document.getElementById('start-btn');
        if(startBtn){ 
            startBtn.addEventListener('click', function(e){ 
                console.log('Botão Começar Agora clicado!');
                e.preventDefault();
                const cursos = document.getElementById('cursos'); 
                if(cursos){ 
                    console.log('Scrollando para cursos...');
                    cursos.scrollIntoView({ behavior:'smooth', block:'start' }); 
                    setTimeout(() => window.scrollBy(0,-100), 500);
                } else { 
                    console.warn('#cursos not found'); 
                } 
            }); 
            console.log('Start button listener adicionado com sucesso');
        } else {
            console.warn('start-btn element not found');
        }
    }
    setupStartButton();

    /* ---------------------- */
    /*  ENVIO EMAIL COM EMAILJS */
    /* ---------------------- */
    function enviarEmail(event){
        if(event) event.preventDefault();
        console.log('enviarEmail chamado');
        
        const nome = document.getElementById('nome');
        const telefone = document.getElementById('telefone');
        const email = document.getElementById('email');
        const mensagem = document.getElementById('mensagem');
        
        if(!nome || !telefone || !email || !mensagem){
            alert('Erro: campos do formulário não encontrados!');
            return;
        }
        
        const params = { 
            nome: nome.value||'',
            telefone: telefone.value||'',
            email: email.value||'',
            mensagem: mensagem.value||''
        };
        
        console.log('Dados para enviar:', params);
        
        if(typeof emailjs === 'undefined'){
            console.error('EmailJS não carregou!');
            alert('Erro: EmailJS não carregou. Tente recarregar a página.');
            return;
        }
        
        console.log('Enviando email via EmailJS com service_u2uleks');
        emailjs.send('service_u2uleks','template_tda8a7i', params)
            .then(response => { 
                console.log('Email enviado com sucesso!', response);
                alert('Mensagem enviada com sucesso! ✔'); 
                const form = document.getElementById('formContato'); 
                if(form) form.reset(); 
            })
            .catch(err => { 
                console.error('Erro ao enviar EmailJS:', err); 
                alert('Erro ao enviar: ' + (err.text || err.message || 'Erro desconhecido')); 
            });
    }
    window.enviarEmail = enviarEmail; // Expor globalmente

});
