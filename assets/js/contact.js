// Display current date
        function updateDate() {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', options);
        }

        // Toggle accordion FAQ items
        function toggleAccordion(element) {
            const content = element.nextElementSibling;
            const isActive = content.classList.contains('active');
            
            // Close all accordions
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.classList.remove('active');
            });
            
            document.querySelectorAll('.accordion-header i').forEach(icon => {
                icon.className = 'fas fa-chevron-down';
            });
            
            // Open clicked accordion if it wasn't active
            if (!isActive) {
                content.classList.add('active');
                element.querySelector('i').className = 'fas fa-chevron-up';
            }
        }

        // Handle form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const rating = document.querySelector('input[name="rating"]:checked') ? 
                          document.querySelector('input[name="rating"]:checked').value : 'Not rated';
            
            // In a real application, you would send this data to a server
            // For this example, we'll just show a success message
            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';
            
            // Reset form
            this.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
            
            // Log the form data (for demonstration)
            console.log('Form submitted:', { name, email, subject, message, rating });
        });

        // Initialize page
        updateDate();