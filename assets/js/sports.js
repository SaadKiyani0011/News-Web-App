// Sample sports news data
        const sportsNews = [
            {
                id: 1,
                title: "National Team Wins Championship After Dramatic Final",
                category: "Soccer",
                date: "October 15, 2023",
                author: "James Wilson",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                excerpt: "Last-minute goal secures victory in international tournament final watched by millions worldwide.",
                content: "<p>In a stunning conclusion to the International Championship Cup, the national team scored a dramatic last-minute goal to secure a 3-2 victory against their longtime rivals. The match, played before a capacity crowd of 80,000, will be remembered as one of the most exciting finals in recent history.</p><p>Captain Maria Rodriguez scored the winning goal in the 92nd minute, completing her hat-trick and sending fans into a frenzy. 'I've never experienced anything like it,' Rodriguez said after the match. 'This is the culmination of years of hard work and dedication from the entire team.'</p><p>The victory marks the nation's first international trophy in 25 years, sparking celebrations across the country. Thousands of fans gathered in city centers to celebrate the historic win, with impromptu street parties continuing into the early hours.</p><p>Coach David Thompson praised his team's resilience: 'We were behind twice and showed incredible character to come back. These players never know when they're beaten. This victory belongs to everyone who supported us on this journey.'</p>"
            },
            {
                id: 2,
                title: "Underdog Team Stuns Champions in Season Opener",
                category: "Basketball",
                date: "October 14, 2023",
                author: "Michael Chen",
                image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                excerpt: "Rookie player scores 30 points in debut game to lead underrated team to unexpected victory.",
                content: "<p>In one of the biggest opening night surprises in recent memory, the underdog Wildcats defeated the defending champions 110-102 behind a spectacular debut performance from rookie point guard Alex Johnson. The 19-year-old phenom scored 30 points and dished out 12 assists in his first professional game.</p><p>Johnson, who was selected 15th in this year's draft, outperformed all expectations against the experienced championship team. 'I just wanted to come out and play my game,' Johnson said modestly. 'My teammates put me in great positions to succeed.'</p><p>The champions, who had won three of the last five titles, struggled to contain the youthful energy of the Wildcats. Despite a valiant 35-point effort from their star player, the defending champions couldn't overcome the 15-point deficit they faced entering the fourth quarter.</p><p>Wildcats coach Sarah Williams praised her team's performance: 'We knew we were underdogs coming in, but we believed in our game plan. Alex was phenomenal, but this was a complete team effort. Every player contributed to this victory.'</p>"
            },
            {
                id: 3,
                title: "Olympic Gold Medalist Breaks World Record",
                category: "Swimming",
                date: "October 13, 2023",
                author: "Sophia Martinez",
                image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                excerpt: "Reigning Olympic champion shatters 10-year-old record in spectacular fashion at world championships.",
                content: "<p>Olympic gold medalist Emma Wilson smashed the 200m butterfly world record at the World Aquatics Championships, clocking in at 2:03.12 and breaking the previous record that had stood for nearly a decade. The performance stunned the swimming world and cemented Wilson's status as one of the greatest swimmers of her generation.</p><p>Wilson led from start to finish, turning under world record pace at each interval and powering home in the final 50 meters to take 0.78 seconds off the previous mark. 'I knew I was in good form, but I never imagined breaking the record by that much,' an emotional Wilson said after the race.</p><p>The 22-year-old has now won 12 international gold medals and broken three world records in her career. Sports scientists have been studying her unique technique, which appears to be more efficient than traditional swimming styles.</p><p>National team coach Robert Kim praised Wilson's dedication: 'Emma's work ethic is unmatched. She's always the first one in the pool and the last to leave. This record is a testament to her commitment to excellence.' The swimming community is now looking ahead to next year's Olympics, where Wilson will be the heavy favorite in multiple events.</p>"
            },
            {
                id: 4,
                title: "New Stadium Design Revolutionizes Sports Architecture",
                category: "Facilities",
                date: "October 12, 2023",
                author: "David Kim",
                image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                excerpt: "Groundbreaking eco-friendly arena sets new standard for sustainable sports venues with innovative features.",
                content: "<p>The newly opened 'Eco-Arena' has been hailed as a revolution in sports stadium design, combining cutting-edge sustainable technology with fan-friendly features that enhance the spectator experience. The $1.2 billion venue, which will host its inaugural game next week, is the first stadium to achieve net-zero carbon emissions.</p><p>Architectural highlights include a retractable roof made of transparent solar panels, seating constructed from recycled materials, and a sophisticated water recycling system that collects rainwater for field irrigation. The stadium also features the largest 4K video board ever installed in a sports venue and 5G connectivity throughout.</p><p>Lead architect Maria Gonzalez explained the vision: 'We wanted to create a stadium that not only provides an incredible experience for fans but also respects the environment. Every aspect of the design was evaluated for its sustainability impact.'</p><p>The venue has already been selected to host next year's championship final and is being considered as a model for future stadium projects around the world. Several sports franchises have expressed interest in adopting similar sustainable designs for their own facilities.</p>"
            },
            {
                id: 5,
                title: "Revolutionary Training Method Improves Athletic Performance",
                category: "Science",
                date: "October 11, 2023",
                author: "Dr. Rebecca Simmons",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                excerpt: "New study reveals innovative approach to athlete training that significantly enhances endurance and recovery.",
                content: "<p>A groundbreaking study published in the Journal of Sports Science has revealed a revolutionary training method that can improve athletic performance by up to 15% while reducing injury risk. The research, conducted over three years with elite athletes, shows significant improvements in endurance, strength, and recovery times.</p><p>The method combines high-intensity interval training with specialized recovery protocols and cognitive exercises designed to enhance mental resilience. Athletes following the program showed marked improvements in VO2 max, lactate threshold, and reaction times compared to control groups.</p><p>Lead researcher Dr. James Thompson explained: 'Traditional training often focuses on either physical or mental aspects in isolation. Our approach integrates both, creating a holistic system that prepares athletes for competition more effectively.'</p><p>Several professional teams have already begun implementing elements of the program, with early results showing promise. The researchers are now working on developing accessible versions of the training method for amateur athletes and weekend warriors. Sports scientists predict this could represent the most significant advance in training methodology in decades.</p>"
            },
            {
                id: 6,
                title: "Esports Tournament Breaks Viewership Records",
                category: "Esports",
                date: "October 10, 2023",
                author: "Ryan O'Connell",
                image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                excerpt: "International gaming championship attracts over 5 million concurrent viewers, setting new esports milestone.",
                content: "<p>The World Gaming Championship concluded with record-breaking viewership numbers, attracting over 5 million concurrent viewers at its peak and cementing esports' place in the mainstream sports landscape. The tournament, which featured a $10 million prize pool, was won by underdog team 'Dark Horses' in a dramatic final match that went to overtime.</p><p>The event was held in a sold-out arena with 20,000 live spectators and broadcast in 15 languages to audiences worldwide. Viewership numbers surpassed those of many traditional sporting events, including the NBA Finals and World Series games.</p><p>Esports analyst Lisa Zhang commented: 'This tournament demonstrates how far competitive gaming has come. The production values, athlete skill level, and audience engagement now rival traditional sports. We're witnessing the maturation of an industry.'</p><p>The winning team took home $4 million, the largest prize in esports history. Tournament organizers have already announced plans for next year's event, which will feature an expanded format and increased prize pool. Mainstream sponsors are increasingly investing in esports, recognizing its appeal to the coveted 18-34 demographic.</p>"
            }
        ];

        // DOM elements
        const sportsGrid = document.getElementById('sportsGrid');
        const sportsModal = document.getElementById('sportsModal');
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

        // Generate sports news cards
        function renderSportsCards() {
            sportsGrid.innerHTML = '';
            
            sportsNews.forEach(news => {
                const card = document.createElement('div');
                card.className = 'sports-card';
                card.innerHTML = `
                    <img src="${news.image}" alt="${news.title}" class="sports-image">
                    <div class="sports-content">
                        <span class="sports-category">${news.category}</span>
                        <h3 class="sports-title">${news.title}</h3>
                        <p class="sports-excerpt">${news.excerpt}</p>
                        <div class="sports-meta">
                            <span>${news.date}</span>
                            <span>${news.author}</span>
                        </div>
                    </div>
                `;
                
                card.addEventListener('click', () => openNewsModal(news));
                sportsGrid.appendChild(card);
            });
        }
