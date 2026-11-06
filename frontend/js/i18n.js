// --- SISTEMA DE IDIOMAS (i18n.js) ---

window.diccionario = {
    es: {
        // Nav
        "nav.inicio": "Inicio", "nav.empresa": "La Empresa", "nav.productos": "Productos",
        "nav.plantaciones": "Plantaciones", "nav.mercados": "Mercados", "nav.calidad": "Calidad",
        "nav.contacto": `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> Contacto`,
        // Hero
        "hero.titulo": "Fruta Fresca de Calidad <span class='text-norfrut-green block md:inline mt-2 md:mt-0'>Premium</span>",
        "hero.subtitulo": "Tradición y excelencia desde nuestros campos chilenos al mundo.",
        // Empresa
        "empresa.titulo": "Nuestra Historia",
        "empresa.historia1": "Desde nuestros inicios en 1983 con 70 hectáreas, hemos crecido hasta superar las 600 hectáreas propias en la III y IV Región. En 2002 nació <strong>Norfrut</strong> para exportar nuestra producción a 8 países y abastecer a más de 30 clientes globales.",
        "empresa.historia2": "Apasionados por la calidad premium, controlamos toda la cadena productiva y garantizamos una rigurosa cadena de frío mediante la moderna flota de nuestra empresa relacionada, <strong>Transportes SAE Ltda.</strong>, consolidándonos como un referente de confianza en el mercado internacional.",
        "empresa.mision_tit": "Misión",
        "empresa.mision_txt": "Proveer a nuestros clientes internacionales con fruta fresca y de excelente calidad, cumpliendo sus necesidades bajo estrictas normas de seguridad alimentaria.",
        "empresa.vision_tit": "Visión",
        "empresa.vision_txt": "Invertir sostenidamente en nuestros campos para responder a la demanda global, estableciendo relaciones a largo plazo basadas en la confianza y el respeto mutuo.",
        "empresa.stat_has": "Hectáreas plantadas", "empresa.stat_paises": "Países destino", "empresa.stat_flota": "Flota", "empresa.stat_frigo": "frigorífica",
        "empresa.compromiso": "Nuestro Compromiso",
        "empresa.val1_tit": "Trabajadores", "empresa.val1_txt": "La fuente indispensable de la empresa.",
        "empresa.val2_tit": "Alta Calidad", "empresa.val2_txt": "Mantenida en todo el proceso productivo.",
        "empresa.val3_tit": "Medio Ambiente", "empresa.val3_txt": "Fuente de origen de nuestros productos.",
        "empresa.val4_tit": "Cumplir Normas", "empresa.val4_txt": "En todos nuestros procesos y despachos.",
        // Productos
        "prod.titulo": "Nuestros Productos", "prod.mandarinas": "Mandarinas", "prod.naranjas": "Naranjas", "prod.uvas": "Uvas", "prod.clementinas": "Clementinas", "prod.cerezas": "Cerezas", "prod.arandanos": "Arándanos",
        // Modal
        "modal.subtitulo": "Disponibilidad por Variedad",
        "modal.th_variedad": "Variedad",
        // Plantaciones
        "plant.titulo": "Plantaciones", "plant.desc": "Más de 600 hectáreas de plantaciones propias en los valles de Copiapó y Ovalle. Contamos con salas de packing automatizadas y climatizadas, y un frigorífico estratégico en El Palqui (Ovalle).",
        "plant.reg3": "III Región", "plant.reg3_sub": "Uva de Mesa",
        "plant.reg4": "IV Región", "plant.reg4_sub": "Uva, Cítricos, Berries",
        // Mercados y Certificaciones
        "mercados.titulo": "Mercados de Exportación",
        "cert.titulo": "Seguridad Alimentaria", "cert.desc": "Contamos con 3 certificaciones internacionales, cuyas auditorías continuas aseguran la trazabilidad desde el cultivo hasta la recepción final por parte del consumidor.",
        "cert.c1": "Normas internacionalmente reconocidas sobre las buenas prácticas agrícolas gestionadas por Food Plus GmbH.", "cert.c2": "Método operativo estructurado para identificar riesgos de inocuidad alimentaria y evitar peligros.", "cert.c3": "Esquema de auditoría evaluado por Global Food Safety Initiative (GFSI) que cubre GAP y GMP.",
        // Contacto
        "contacto.titulo": "Contáctanos", 
        "contacto.desc": "Seleccione el tipo de requerimiento y nuestro equipo comercial se pondrá en contacto con usted a la brevedad.",
        "contacto.card_cotizacion": "Cotización",
        "contacto.card_consulta": "Consulta",
        "contacto.card_opinion": "Opinión / Comentario",
        "contacto.form_base": "Formulario de Contacto",
        "contacto.form_cotizacion": "Formulario de Cotización",
        "contacto.form_consulta": "Formulario de Consulta",
        "contacto.form_opinion": "Formulario de Opinión",
        "contacto.lbl_nombre": "Nombre completo *", 
        "contacto.lbl_email": "Correo electrónico *", 
        "contacto.lbl_telefono": "Teléfono", 
        "contacto.lbl_empresa": "Empresa", 
        "contacto.lbl_pais": "País", 
        "contacto.lbl_mensaje": "Mensaje detallado", 
        "contacto.lbl_producto": "Producto de interés",
        "contacto.lbl_volumen": "Volumen estimado",
        "contacto.ph_volumen": "Ej: 2 Contenedores",
        "contacto.opt_seleccione": "-- Seleccione --",
        "contacto.opt_citricos": "Cítricos",
        "contacto.lbl_departamento": "Departamento",
        "contacto.opt_comercial": "Comercial / Ventas",
        "contacto.opt_logistica": "Logística",
        "contacto.opt_admin": "Administración",
        "contacto.lbl_asunto": "Asunto",
        "contacto.lbl_tipo_opinion": "Tipo de comentario",
        "contacto.opt_sugerencia": "Sugerencia",
        "contacto.opt_felicitacion": "Felicitación",
        "contacto.opt_reclamo": "Reclamo",
        "contacto.btn_enviar": "Enviar Mensaje",
        // Footer
        "footer.desc": "Llevando la mejor fruta de Chile al mundo. Pasión por la calidad, respeto por el medio ambiente y compromiso con nuestros clientes internacionales.",
        "footer.sec_tit": "Secciones", "footer.cont_tit": "Contacto", "footer.dir": "Ruta 5 Norte Km. 471<br>La Serena, Región de Coquimbo",
        "footer.copyright": "&copy; 2026 Norfrut. Todos los derechos reservados.", "footer.developed": "Desarrollado por",
        
        // --- DICCIONARIO PARA JS (Modal) ---
        "mes.Enero": "Enero", "mes.Febrero": "Febrero", "mes.Marzo": "Marzo", "mes.Abril": "Abril", "mes.Mayo": "Mayo", "mes.Junio": "Junio", "mes.Julio": "Julio", "mes.Agosto": "Agosto", "mes.Septiembre": "Septiembre", "mes.Octubre": "Octubre", "mes.Noviembre": "Noviembre", "mes.Diciembre": "Diciembre",
        "cat.Seedless Verde": "Seedless Verde", "cat.Seedless Negra": "Seedless Negra", "cat.Seedless Roja": "Seedless Roja", "cat.Seeded Red Globe": "Seeded Red Globe"
    },
    en: {
        // Nav
        "nav.inicio": "Home", "nav.empresa": "Company", "nav.productos": "Products",
        "nav.plantaciones": "Plantations", "nav.mercados": "Markets", "nav.calidad": "Quality",
        "nav.contacto": `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> Contact`,
        // Hero
        "hero.titulo": "Premium Quality <span class='text-norfrut-green block md:inline mt-2 md:mt-0'>Fresh Fruit</span>",
        "hero.subtitulo": "Tradition and excellence from our Chilean fields to the world.",
        // Empresa
        "empresa.titulo": "Our History",
        "empresa.historia1": "Since our beginnings in 1983 with 70 hectares, we have grown to over 600 of our own hectares in the III and IV Regions. In 2002, <strong>Norfrut</strong> was born to export our production to 8 countries and supply more than 30 global clients.",
        "empresa.historia2": "Passionate about premium quality, we control the entire production chain and guarantee a rigorous cold chain through the modern fleet of our related company, <strong>Transportes SAE Ltda.</strong>, consolidating ourselves as a trusted reference in the international market.",
        "empresa.mision_tit": "Mission",
        "empresa.mision_txt": "To provide our international clients with fresh, excellent quality fruit, fulfilling their needs under strict food safety standards.",
        "empresa.vision_tit": "Vision",
        "empresa.vision_txt": "To invest sustainably in our fields to respond to global demand, establishing long-term relationships based on trust and mutual respect.",
        "empresa.stat_has": "Planted hectares", "empresa.stat_paises": "Destination countries", "empresa.stat_flota": "Refrigerated", "empresa.stat_frigo": "Fleet",
        "empresa.compromiso": "Our Commitment",
        "empresa.val1_tit": "Workers", "empresa.val1_txt": "The indispensable source of the company.",
        "empresa.val2_tit": "High Quality", "empresa.val2_txt": "Maintained throughout the production process.",
        "empresa.val3_tit": "Environment", "empresa.val3_txt": "Source of origin of our products.",
        "empresa.val4_tit": "Compliance", "empresa.val4_txt": "In all our processes and shipments.",
        // Productos
        "prod.titulo": "Our Products", "prod.mandarinas": "Mandarins", "prod.naranjas": "Oranges", "prod.uvas": "Grapes", "prod.clementinas": "Clementines", "prod.cerezas": "Cherries", "prod.arandanos": "Blueberries",
        // Modal
        "modal.subtitulo": "Availability by Variety",
        "modal.th_variedad": "Variety",
        // Plantaciones
        "plant.titulo": "Plantations", "plant.desc": "More than 600 hectares of our own plantations in the Copiapó and Ovalle valleys. We have automated and climate-controlled packing rooms, and a strategic cold storage facility in El Palqui (Ovalle).",
        "plant.reg3": "Region III", "plant.reg3_sub": "Table Grapes",
        "plant.reg4": "Region IV", "plant.reg4_sub": "Grapes, Citrus, Berries",
        // Mercados y Certificaciones
        "mercados.titulo": "Export Markets",
        "cert.titulo": "Food Safety", "cert.desc": "We hold 3 international certifications, whose continuous audits ensure traceability from cultivation to final receipt by the consumer.",
        "cert.c1": "Internationally recognized standards for good agricultural practices managed by Food Plus GmbH.", "cert.c2": "Structured operating method to identify food safety risks and prevent hazards.", "cert.c3": "Audit scheme evaluated by the Global Food Safety Initiative (GFSI) covering GAP and GMP.",
        // Contacto
        "contacto.titulo": "Contact Us", 
        "contacto.desc": "Select the type of request and our commercial team will contact you shortly.",
        "contacto.card_cotizacion": "Quote",
        "contacto.card_consulta": "Inquiry",
        "contacto.card_opinion": "Feedback / Comment",
        "contacto.form_base": "Contact Form",
        "contacto.form_cotizacion": "Quote Form",
        "contacto.form_consulta": "Inquiry Form",
        "contacto.form_opinion": "Feedback Form",
        "contacto.lbl_nombre": "Full name *", 
        "contacto.lbl_email": "Email address *", 
        "contacto.lbl_telefono": "Phone", 
        "contacto.lbl_empresa": "Company", 
        "contacto.lbl_pais": "Country", 
        "contacto.lbl_mensaje": "Detailed message", 
        "contacto.lbl_producto": "Product of interest",
        "contacto.lbl_volumen": "Estimated volume",
        "contacto.ph_volumen": "E.g. 2 Containers",
        "contacto.opt_seleccione": "-- Select --",
        "contacto.opt_citricos": "Citrus",
        "contacto.lbl_departamento": "Department",
        "contacto.opt_comercial": "Commercial / Sales",
        "contacto.opt_logistica": "Logistics",
        "contacto.opt_admin": "Administration",
        "contacto.lbl_asunto": "Subject",
        "contacto.lbl_tipo_opinion": "Feedback type",
        "contacto.opt_sugerencia": "Suggestion",
        "contacto.opt_felicitacion": "Compliment",
        "contacto.opt_reclamo": "Complaint",
        "contacto.btn_enviar": "Send Message",
        // Footer
        "footer.desc": "Bringing the best fruit from Chile to the world. Passion for quality, respect for the environment, and commitment to our international clients.",
        "footer.sec_tit": "Sections", "footer.cont_tit": "Contact", "footer.dir": "Route 5 North Km. 471<br>La Serena, Coquimbo Region",
        "footer.copyright": "&copy; 2026 Norfrut. All rights reserved.", "footer.developed": "Developed by",
        
        // --- DICCIONARIO PARA JS (Modal) ---
        "mes.Enero": "January", "mes.Febrero": "February", "mes.Marzo": "March", "mes.Abril": "April", "mes.Mayo": "May", "mes.Junio": "June", "mes.Julio": "July", "mes.Agosto": "August", "mes.Septiembre": "September", "mes.Octubre": "October", "mes.Noviembre": "November", "mes.Diciembre": "December",
        "cat.Seedless Verde": "Green Seedless", "cat.Seedless Negra": "Black Seedless", "cat.Seedless Roja": "Red Seedless", "cat.Seeded Red Globe": "Seeded Red Globe"
    }
};

window.cambiarIdioma = function(idioma) {
    // 1. Cambiar los textos (innerHTML)
    const elementos = document.querySelectorAll('[data-i18n]');
    elementos.forEach(el => {
        const clave = el.getAttribute('data-i18n');
        if (window.diccionario[idioma] && window.diccionario[idioma][clave]) {
            el.innerHTML = window.diccionario[idioma][clave];
        }
    });

    // 2. Cambiar los placeholders
    const elementosPlaceholder = document.querySelectorAll('[data-i18n-placeholder]');
    elementosPlaceholder.forEach(el => {
        const clave = el.getAttribute('data-i18n-placeholder');
        if (window.diccionario[idioma] && window.diccionario[idioma][clave]) {
            el.placeholder = window.diccionario[idioma][clave];
        }
    });

    // 3. Actualizar botones del Footer
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    if (btnEs && btnEn) {
        if (idioma === 'es') {
            btnEs.className = "lang-btn px-4 py-1 rounded-md text-sm font-bold text-white bg-norfrut-green shadow-sm transition-all";
            btnEn.className = "lang-btn px-4 py-1 rounded-md text-sm font-bold text-gray-400 hover:text-white transition-all bg-transparent";
        } else {
            btnEn.className = "lang-btn px-4 py-1 rounded-md text-sm font-bold text-white bg-norfrut-green shadow-sm transition-all";
            btnEs.className = "lang-btn px-4 py-1 rounded-md text-sm font-bold text-gray-400 hover:text-white transition-all bg-transparent";
        }
    }

    // 4. Actualizar Banderas del Navbar
    const navBtnEs = document.getElementById('nav-btn-es');
    const navBtnEn = document.getElementById('nav-btn-en');
    if (navBtnEs && navBtnEn) {
        if (idioma === 'es') {
            navBtnEs.className = "w-7 h-7 rounded-full overflow-hidden border-2 border-norfrut-green transition-all transform scale-110 shadow-md opacity-100";
            navBtnEn.className = "w-7 h-7 rounded-full overflow-hidden border-2 border-transparent opacity-50 hover:opacity-100 transition-all transform hover:scale-110";
        } else {
            navBtnEn.className = "w-7 h-7 rounded-full overflow-hidden border-2 border-norfrut-green transition-all transform scale-110 shadow-md opacity-100";
            navBtnEs.className = "w-7 h-7 rounded-full overflow-hidden border-2 border-transparent opacity-50 hover:opacity-100 transition-all transform hover:scale-110";
        }
    }

    // 5. Guardar preferencia
    localStorage.setItem('norfrut-idioma', idioma);
};