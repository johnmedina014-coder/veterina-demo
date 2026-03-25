document.addEventListener('DOMContentLoaded', () => {
    // Testimonial Data Array
    const testimonials = [
        {
            quote: "El equipo de VetCare trató a Max con una ternura increíble. La Dra. García explicó cada paso del tratamiento con claridad y paciencia. ¡100% recomendado!",
            name: "Lucía Fernández",
            pet: "Dueña de Max, Golden Retriever",
            avatar: "https://i.pravatar.cc/150?img=5"
        },
        {
            quote: "Llevé a mi gata Luna para una urgencia de noche y nos atendieron maravillosamente. El profesionalismo de este lugar es incomparable. Recomendados sin duda.",
            name: "Carlos Rivera",
            pet: "Dueño de Luna, Gato Siamés",
            avatar: "https://i.pravatar.cc/150?img=11"
        },
        {
            quote: "Siempre han sido muy amables. La recuperación de la cirugía de Coco fue excelente gracias al cuidado del equipo. Siempre están disponibles cuando los necesitamos.",
            name: "Andrea Morales",
            pet: "Dueña de Coco, Bulldog Francés",
            avatar: "https://i.pravatar.cc/150?img=9"
        },
        {
            quote: "Rocky adora ir a la veterinaria, ¡lo cual es raro en un perro! Siempre sale feliz y sano. Las instalaciones son de primera y el personal es encantador.",
            name: "Miguel Torres",
            pet: "Dueño de Rocky, Labrador",
            avatar: "https://i.pravatar.cc/150?img=14"
        }
    ];

    // DOM Elements for Testimonial
    const activeQuote = document.getElementById('active-quote');
    const activeName = document.getElementById('active-name');
    const activePet = document.getElementById('active-pet');
    const tabs = document.querySelectorAll('.testimonial-tab');

    // Handle Tab Click
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get index and update data with a small fade effect
            const index = this.getAttribute('data-index');
            const data = testimonials[index];
            
            // Fade out
            activeQuote.style.opacity = 0;
            
            setTimeout(() => {
                activeQuote.innerText = data.quote;
                activeName.innerText = data.name;
                activePet.innerText = data.pet;
                
                // Fade in
                activeQuote.style.transition = 'opacity 0.3s ease';
                activeQuote.style.opacity = 1;
            }, 300);
        });
    });

    // Handle Contact Form
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect data (just for demo purposes)
            const nombre = document.getElementById('nombre').value;
            
            // Show success message
            alert(`¡Gracias ${nombre}! Hemos recibido tu solicitud de cita. Nos pondremos en contacto pronto.`);
            
            // Reset form
            contactForm.reset();
        });
    }

    // Add sticky header behavior on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            navbar.style.position = 'fixed';
            navbar.style.padding = '15px 0';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
            navbar.style.position = 'absolute';
            navbar.style.padding = '24px 0';
        }
    });
});
