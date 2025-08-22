// Sample news data (simulating API response)
        const newsData = [
            {
                id: 1,
                title: "Global Summit Addresses Climate Change Crisis",
                category: "World News",
                date: "October 15, 2023",
                author: "Sarah Johnson",
                image: "https://images.unsplash.com/photo-1569163139394-de44aa9a21dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                excerpt: "World leaders gather to discuss urgent measures against climate change as temperatures continue to rise globally.",
                content: "<p>World leaders from over 100 countries convened in Geneva this week for an emergency climate summit. The meeting comes after a series of alarming reports from the Intergovernmental Panel on Climate Change (IPCC) showing that global temperatures are rising faster than previously projected.</p><p>UN Secretary-General Antonio Guterres opened the summit with a stark warning: 'We are on the edge of an abyss. The decisions we make today will determine whether we can preserve our planet for future generations.'</p><p>Key topics on the agenda include reducing carbon emissions by 50% by 2030, funding for green energy initiatives in developing nations, and creating an international framework for climate refugees.</p><p>Several countries have already made new commitments, including the United States pledging to double its climate finance contribution and China announcing an accelerated timeline for achieving carbon neutrality.</p>"
            },
            {
                id: 2,
                title: "Breakthrough in Quantum Computing Announced",
                category: "Technology",
                date: "October 14, 2023",
                author: "Michael Chen",
                image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                excerpt: "Scientists achieve quantum supremacy with new processor that solves problems in seconds instead of years.",
                content: "<p>Researchers at Quantum Technologies Inc. have announced a major breakthrough in quantum computing with their new 128-qubit processor, named 'Horizon'. The company claims this processor has achieved quantum supremacy by solving a problem in 200 seconds that would take the world's most powerful supercomputer 10,000 years to solve.</p><p>This development marks a significant milestone in the field of quantum computing, which promises to revolutionize industries from pharmaceuticals to cryptography.</p><p>Dr. Emma Rodriguez, lead scientist on the project, explained: 'What we've achieved here isn't just incremental progress. This is a leap forward that opens up possibilities we previously only theorized about.'</p><p>The company plans to make this technology available to research institutions by next year, with commercial applications expected within five years.</p>"
            },
            {
                id: 3,
                title: "New Educational Policy Focuses on Digital Literacy",
                category: "Education",
                date: "October 13, 2023",
                author: "James Wilson",
                image: "https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                excerpt: "Government unveils comprehensive plan to integrate digital skills into national curriculum starting next year.",
                content: "<p>The Department of Education has announced a sweeping new policy that will make digital literacy a core component of the national curriculum from elementary through high school. The initiative, called 'Future Ready Students', will roll out in phases beginning next academic year.</p><p>Education Secretary Linda Thompson stated: 'In today's world, digital literacy is as fundamental as reading and writing. This curriculum overhaul will ensure our students are prepared for the careers of tomorrow.'</p><p>The new curriculum will include coding fundamentals, digital citizenship, media literacy, and data analysis skills appropriate for each grade level. The government is allocating $500 million for teacher training and technology infrastructure in schools.</p><p>Education experts have largely praised the initiative, though some have raised concerns about implementation challenges, particularly in rural and underfunded school districts.</p>"
            },
            {
                id: 4,
                title: "Major Film Festival Announces Award Winners",
                category: "Entertainment",
                date: "October 12, 2023",
                author: "Sophia Martinez",
                image: "https://images.unsplash.com/photo-1489599102910-59206b8ca314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                excerpt: "Independent films dominate this year's awards ceremony, with several first-time directors taking top honors.",
                content: "<p>The 2023 International Film Festival concluded last night with its annual awards ceremony, celebrating the best in cinematic achievement from around the world. In a surprising turn, independent productions dominated the awards, taking home top honors in multiple categories.</p><p>'Voices of the Silent', a drama about a deaf family navigating a hearing world, won the prestigious Best Picture award. Its director, Maya Johnson, also received Best Director honors in her feature film debut.</p><p>Other major winners included 'Echoes of Tomorrow' for Best Documentary, and 'The Last Light' for Best Cinematography. Veteran actor Robert Fitzpatrick received a Lifetime Achievement Award for his contributions to the industry over five decades.</p><p>Festival director Claire Bennett noted: 'This year's selections demonstrate the incredible vitality of independent cinema. These films tell important stories with authenticity and creative vision that resonates with global audiences.'</p>"
            },
            {
                id: 5,
                title: "Revolutionary Cancer Treatment Shows Promise",
                category: "Health",
                date: "October 11, 2023",
                author: "Dr. Rebecca Simmons",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                excerpt: "Clinical trials indicate new immunotherapy approach could significantly improve survival rates for advanced cancer patients.",
                content: "<p>A groundbreaking cancer treatment has shown remarkable results in Phase III clinical trials, offering new hope for patients with advanced forms of the disease. The immunotherapy approach, called CAR-T-XR, demonstrated a 75% response rate in patients who had exhausted all other treatment options.</p><p>Dr. Benjamin Park, lead researcher on the study, explained: 'What makes this treatment different is how we've engineered the cells to overcome the defense mechanisms that cancers use to protect themselves. It's like we've given our immune cells a master key.'</p><p>In the trial of 150 patients with various advanced cancers, 45% achieved complete remission, with another 30% showing significant tumor reduction. The treatment was particularly effective against certain types of leukemia and lymphoma.</p><p>While researchers caution that more studies are needed, these results represent one of the most significant advances in cancer treatment in recent years. The therapy could receive FDA approval as early as next year.</p>"
            },
            {
                id: 6,
                title: "Space Agency Announces Mission to Jupiter's Moon",
                category: "Science",
                date: "October 10, 2023",
                author: "Alan Richter",
                image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                excerpt: "Ambitious mission to Europa aims to search for signs of life in the moon's subsurface ocean.",
                content: "<p>The International Space Exploration Agency has unveiled plans for an ambitious mission to Jupiter's moon Europa, believed to harbor a vast subsurface ocean that could potentially support life. The mission, named 'Europa Venture', is scheduled to launch in 2028 with arrival expected in 2034.</p><p>Dr. Elena Volkov, chief mission scientist, stated: 'Europa represents one of the best opportunities in our solar system to find evidence of extraterrestrial life. Its ocean contains twice as much water as all of Earth's oceans combined, and it has all the necessary ingredients for life as we know it.'</p><p>The spacecraft will be equipped with a suite of instruments including ice-penetrating radar, a mass spectrometer, and high-resolution cameras. Most notably, it will carry a lander designed to melt through the ice crust and deploy a submersible probe into the ocean below.</p><p>This mission represents a collaboration between NASA, ESA, and several other space agencies, with a total budget of $4.2 billion. If successful, it could fundamentally change our understanding of life in the universe.</p>"
            }
        ];

        // DOM elements
        const newsGrid = document.getElementById('newsGrid');
        const newsModal = document.getElementById('newsModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalCategory = document.getElementById('modalCategory');
        const modalDate = document.getElementById('modalDate');
        const modalAuthor = document.getElementById('modalAuthor');
        const modalImage = document.getElementById('modalImage');
        const modalBody = document.getElementById('modalBody');
        const modalClose = document.getElementById('modalClose');
        const currentDate = document.getElementById('currentDate');

        // Display current date
        function updateDate() {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            currentDate.textContent = now.toLocaleDateString('en-US', options);
        }

        // Generate news cards
        function renderNewsCards() {
            newsGrid.innerHTML = '';
            
            newsData.forEach(news => {
                const card = document.createElement('div');
                card.className = 'news-card';
                card.innerHTML = `
                    <img src="${news.image}" alt="${news.title}" class="news-image">
                    <div class="news-content">
                        <span class="news-category">${news.category}</span>
                        <h3 class="news-title">${news.title}</h3>
                        <p class="news-excerpt">${news.excerpt}</p>
                        <div class="news-meta">
                            <span>${news.date}</span>
                            <span>${news.author}</span>
                        </div>
                    </div>
                `;
                
                card.addEventListener('click', () => openNewsModal(news));
                newsGrid.appendChild(card);
            });
        }

        // Open modal with news details
        function openNewsModal(news) {
            modalTitle.textContent = news.title;
            modalCategory.textContent = news.category;
            modalDate.textContent = news.date;
            modalAuthor.textContent = `By ${news.author}`;
            modalImage.src = news.image;
            modalImage.alt = news.title;
            modalBody.innerHTML = news.content;
            
            newsModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        // Close modal
        function closeNewsModal() {
            newsModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Event listeners
        modalClose.addEventListener('click', closeNewsModal);
        newsModal.addEventListener('click', (e) => {
            if (e.target === newsModal) closeNewsModal();
        });

        // Initialize
        updateDate();
        renderNewsCards();