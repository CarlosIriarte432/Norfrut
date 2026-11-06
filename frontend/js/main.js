document.addEventListener('DOMContentLoaded', () => {
    // Mostrar/Ocultar Navbar al scrollear fuera del Hero
    const nav = document.getElementById('main-nav');
    const heroHeight = window.innerHeight * 0.8; // 80% de la pantalla

    window.addEventListener('scroll', () => {
        if (window.scrollY > heroHeight) {
            // Mostrar Navbar
            nav.classList.remove('-translate-y-full', 'opacity-0');
        } else {
            // Ocultar Navbar
            nav.classList.add('-translate-y-full', 'opacity-0');
        }
    });
        // Configuración de datos. Añade las rutas de tus imágenes en 'img'
    const productosData = {
        mandarinas: {
            titulo: 'Mandarinas', color: 'text-norfrut-orange', img: './frontend/src/frutas/mandarinas.jpg',
            meses: ['Junio', 'Julio', 'Agosto', 'Septiembre'],
            variedades: [ { nombre: 'Murcott', disp: { 'Junio': [0,0,0,1], 'Julio': [1,1,1,1], 'Agosto': [1,1,1,1], 'Septiembre': [1,1,0,0] } } ]
        },
        naranjas: {
            titulo: 'Naranjas', color: 'text-norfrut-red', img: './frontend/src/frutas/naranjas.png',
            meses: ['Junio', 'Julio'],
            variedades: [
                { nombre: 'Cara Cara', disp: { 'Julio': [0,1,1,1] } },
                { nombre: 'Fujumoto', disp: { 'Junio': [0,1,1,1], 'Julio': [1,1,0,0] } },
                { nombre: 'Washington', disp: { 'Junio': [0,1,1,1], 'Julio': [1,1,1,0] } }
            ]
        },
        uvas: {
            titulo: 'Uvas', color: 'text-norfrut-green', img: './frontend/src/frutas/uvas.png',
            meses: ['Noviembre', 'Diciembre', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            variedades: [
                { categoria: 'Seedless Verde' },
                { nombre: 'Arra 15', disp: { 'Diciembre': [1,1,1,1], 'Enero': [1,1,1,1], 'Febrero': [1,1,1,0] } },
                { nombre: 'Great Green', disp: { 'Febrero': [1,1,1,0] } },
                { nombre: 'Pristine', disp: { 'Febrero': [0,0,0,1], 'Marzo': [1,1,1,0] } },
                { nombre: 'Thompson', disp: { 'Diciembre': [0,1,1,1], 'Enero': [1,1,1,0] } },
                { nombre: 'Itum 5', disp: {} },
                { categoria: 'Seedless Negra' },
                { nombre: 'Autum Royal', disp: { 'Marzo': [0,1,1,1] } },
                { categoria: 'Seedless Roja' },
                { nombre: 'Allison', disp: { 'Febrero': [0,1,1,1], 'Marzo': [1,1,1,1] } },
                { nombre: 'Arra 19', disp: { 'Enero': [0,1,1,1], 'Febrero': [1,1,1,1] } },
                { nombre: 'Crimson', disp: { 'Febrero': [1,1,1,1], 'Marzo': [1,1,1,0] } },
                { nombre: 'Timco', disp: { 'Enero': [0,1,1,1], 'Febrero': [1,1,1,1], 'Marzo': [1,1,1,1], 'Abril': [1,0,0,0] } },
                { nombre: 'Itum 7', disp: {} },
                { nombre: 'Itum 9', disp: {} },
                { categoria: 'Seeded Red Globe' },
                { nombre: 'Red Globe', disp: { 'Febrero': [0,1,1,1], 'Marzo': [1,1,1,1] } }
            ]
        },
        clementinas: {
            titulo: 'Clementinas', color: 'text-norfrut-orange', img: './frontend/src/frutas/clementinas.png',
            meses: ['Abril', 'Mayo', 'Junio'],
            variedades: [
                { nombre: 'Clemenules', disp: { 'Abril': [0,0,0,1], 'Mayo': [1,1,1,1], 'Junio': [1,1,0,0] } },
                { nombre: 'Orogrande', disp: { 'Mayo': [0,0,1,1], 'Junio': [1,0,0,0] } },
                { nombre: 'Oronule', disp: { 'Mayo': [0,0,1,1], 'Junio': [1,0,0,0] } }
            ]
        },
        cerezas: {
            titulo: 'Cerezas', color: 'text-red-700', img: './frontend/src/frutas/cerezas.png',
            meses: ['Octubre', 'Noviembre', 'Diciembre'],
            variedades: [
                { nombre: 'Lapins', disp: { 'Octubre': [0,0,0,1], 'Noviembre': [1,1,1,1], 'Diciembre': [1,0,0,0] } },
                { nombre: 'Santina', disp: { 'Octubre': [0,0,0,1], 'Noviembre': [1,1,1,1], 'Diciembre': [1,0,0,0] } },
                { nombre: 'Somerset', disp: { 'Octubre': [0,0,0,1], 'Noviembre': [1,1,1,1], 'Diciembre': [1,0,0,0] } }
            ]
        },
        arandanos: {
            titulo: 'Arándanos', color: 'text-norfrut-navy', img: './frontend/src/frutas/arandanos.png',
            meses: ['Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            variedades: [
                { nombre: 'Emerald', disp: { 'Octubre': [1,1,1,1], 'Noviembre': [1,1,1,1], 'Diciembre': [1,0,0,0] } },
                { nombre: 'Ventura', disp: { 'Septiembre': [0,0,0,1], 'Octubre': [1,1,1,1], 'Noviembre': [1,1,1,1], 'Diciembre': [1,0,0,0] } }
            ]
        }
    };

    const modal = document.getElementById('producto-modal');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const modalContent = modal.querySelector('.modal-content');
    const closeBtns = document.querySelectorAll('.close-modal, .modal-overlay');
    const tableContainer = document.getElementById('modal-table-container');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');

    // Generador visual estricto en verde (bg-[#54b90e])
    const generarSemanasHTML = (semanas) => {
        if (!semanas) return `<div class="flex gap-1 justify-center"><div class="w-3 h-3 rounded-full bg-gray-200"></div><div class="w-3 h-3 rounded-full bg-gray-200"></div><div class="w-3 h-3 rounded-full bg-gray-200"></div><div class="w-3 h-3 rounded-full bg-gray-200"></div></div>`;
        return `<div class="flex gap-1 justify-center">
            ${semanas.map(activa => `<div class="w-3 h-3 rounded-full ${activa ? 'bg-[#54b90e]' : 'bg-gray-200'}"></div>`).join('')}
        </div>`;
    };

    // Función para construir la tabla (optimizada)
    const construirTabla = (productoKey) => {
        const data = productosData[productoKey];
        modalTitle.textContent = data.titulo;
        modalTitle.className = `text-3xl leading-6 font-bold uppercase ${data.color}`;
        modalImage.src = data.img;

        // thead sticky para que al bajar en la tabla de uvas los meses sigan visibles
        let tableHTML = `<table class="min-w-full divide-y divide-gray-200 border text-sm relative">
            <thead class="bg-gray-50 sticky top-0 z-10 shadow-sm">
                <tr>
                    <th class="px-4 py-3 text-left font-semibold text-gray-600 border-r w-48 bg-gray-50">Variedad</th>
                    ${data.meses.map(mes => `<th class="px-2 py-3 text-center font-semibold text-gray-600 border-r bg-gray-50">${mes}</th>`).join('')}
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">`;

        data.variedades.forEach(varData => {
            if (varData.categoria) {
                tableHTML += `<tr class="bg-gray-100">
                    <td colspan="${data.meses.length + 1}" class="px-4 py-2 font-bold text-norfrut-navy text-xs uppercase">${varData.categoria}</td>
                </tr>`;
            } else {
                tableHTML += `<tr>
                    <td class="px-4 py-3 font-medium text-gray-800 border-r whitespace-nowrap">${varData.nombre}</td>
                    ${data.meses.map(mes => `<td class="px-2 py-3 border-r align-middle">${generarSemanasHTML(varData.disp[mes])}</td>`).join('')}
                </tr>`;
            }
        });

        tableHTML += `</tbody></table>`;
        tableContainer.innerHTML = tableHTML;
    };

// Manejo de eventos Modal optimizado
    const openModal = (productoKey) => {
        construirTabla(productoKey);
        modal.classList.remove('hidden');
        
        // Bloquear el scroll del body
        document.body.classList.add('overflow-hidden');
        
        // Forzar un reflow del navegador para que renderice la tabla ANTES de iniciar la animación CSS
        void modal.offsetWidth; 
        
        modalOverlay.classList.remove('opacity-0');
        modalContent.classList.remove('opacity-0', 'scale-95');
        modalContent.classList.add('scale-100');
    };

    const closeModal = () => {
        modalOverlay.classList.add('opacity-0');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('opacity-0', 'scale-95');
        
        // Devolver el scroll al body inmediatamente
        document.body.classList.remove('overflow-hidden');

        setTimeout(() => {
            modal.classList.add('hidden');
            // Limpiar la tabla para liberar memoria
            tableContainer.innerHTML = ''; 
        }, 200);
    };

    document.querySelectorAll('.producto-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const producto = e.currentTarget.getAttribute('data-producto');
            if (producto && productosData[producto]) openModal(producto);
        });
    });

    closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
});

// Lógica para los Sliders de Plantaciones
    const sliders = document.querySelectorAll('.slider-container');
    
    sliders.forEach(slider => {
        const track = slider.querySelector('.slider-track');
        const slides = track.querySelectorAll('.slide');
        const btnNext = slider.querySelector('.btn-next');
        const btnPrev = slider.querySelector('.btn-prev');
        
        let currentIndex = 0;
        const totalSlides = slides.length; // 4 imágenes

        const updateSlider = () => {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        btnNext.addEventListener('click', () => {
            currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
            updateSlider();
        });

        btnPrev.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
            updateSlider();
        });
    });
    // --- Lógica de Tarjetas de Contacto ---
    const contactCards = document.querySelectorAll('.contact-card');
    const formWrapper = document.getElementById('form-wrapper');
    const inputTipoContacto = document.getElementById('tipo_contacto');
    const formTitulo = document.getElementById('form-titulo');
    
    const gruposDinamicos = {
        cotizacion: document.getElementById('grupo-cotizacion'),
        consulta: document.getElementById('grupo-consulta'),
        opinion: document.getElementById('grupo-opinion')
    };

    contactCards.forEach(card => {
        card.addEventListener('click', () => {
            const type = card.getAttribute('data-type');
            
            contactCards.forEach(c => {
                c.classList.remove('border-norfrut-green', 'border-norfrut-orange', 'border-norfrut-red', 'bg-gray-50');
                c.classList.add('border-gray-200', 'bg-white');
                c.querySelector('svg').classList.remove('text-norfrut-green', 'text-norfrut-orange', 'text-norfrut-red');
                c.querySelector('svg').classList.add('text-gray-400');
            });

            card.classList.remove('border-gray-200', 'bg-white');
            card.classList.add('bg-gray-50');
            
            if (type === 'cotizacion') {
                card.classList.add('border-norfrut-orange');
                card.querySelector('svg').classList.remove('text-gray-400');
                card.querySelector('svg').classList.add('text-norfrut-orange');
            } else if (type === 'consulta') {
                card.classList.add('border-norfrut-green');
                card.querySelector('svg').classList.remove('text-gray-400');
                card.querySelector('svg').classList.add('text-norfrut-green');
            } else if (type === 'opinion') {
                card.classList.add('border-norfrut-red');
                card.querySelector('svg').classList.remove('text-gray-400');
                card.querySelector('svg').classList.add('text-norfrut-red');
            }

            Object.values(gruposDinamicos).forEach(g => {
                g.classList.add('hidden');
                g.classList.remove('grid');
            });

            if (gruposDinamicos[type]) {
                gruposDinamicos[type].classList.remove('hidden');
                gruposDinamicos[type].classList.add('grid');
            }

            // ACTUALIZACIÓN DE TÍTULO PARA I18N
            inputTipoContacto.value = type;
            const llaveTraduccion = `contacto.form_${type}`;
            formTitulo.setAttribute('data-i18n', llaveTraduccion);
            
            const lang = localStorage.getItem('norfrut-idioma') || 'es';
            if (window.diccionario[lang] && window.diccionario[lang][llaveTraduccion]) {
                formTitulo.innerHTML = window.diccionario[lang][llaveTraduccion];
            }

            formWrapper.classList.remove('hidden');
            setTimeout(() => { formWrapper.classList.remove('opacity-0'); }, 50);
            formWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });