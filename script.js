
        // Video data - Easy to add more videos here
        const videos = [
            {
                title: "What Is Quantum Computing? Explained in Easy Language",
                description: "Quantum computing is one of the most powerful and futuristic technologies in the world. 🚀",
                thumbnail: "https://img.youtube.com/vi/AEuRlwWNCtI/maxresdefault.jpg",
                appUrl: "youtube.com/watch?v=AEuRlwWNCtI",
                webUrl: "https://www.youtube.com/watch?v=AEuRlwWNCtI",
                duration: "12:45",
                views: "1.2M views"
            },
            {
                title: "Artificial Intelligence Explained in 2 Minutes | Easy Way",
                description: "Artificial Intelligence, or AI, is changing the world around us. 🤖",
                thumbnail: "https://img.youtube.com/vi/78tVDc9xCvs/maxresdefault.jpg",
                appUrl: "youtube://watch?v=78tVDc9xCvs",
                webUrl: "https://www.youtube.com/watch?v=78tVDc9xCvs",
                duration: "18:32",
                views: "850K views"
            },
            {
                title: "BlockchainBlockchain Explained Simply | Beginner Friendly",
                description: "Blockchain is one of the most important technologies of the future 🚀",
                thumbnail: "https://img.youtube.com/vi/g9fic49tYRw/maxresdefault.jpg",
                appUrl: "youtube://watch?v=78tVDc9xCvs",
                webUrl: "https://www.youtube.com/watch?v=78tVDc9xCvs",
                duration: "1:45:22",
                views: "3.5M views"
            },
            {
                title: "Building a Responsive Website",
                description: "Step-by-step guide to creating a mobile-friendly responsive website from scratch.",
                thumbnail: "https://img.youtube.com/vi/78tVDc9xCvs/maxresdefault.jpg",
                appUrl: "youtube://watch?v=78tVDc9xCvs",
                webUrl: "https://www.youtube.com/watch?v=78tVDc9xCvs",
                duration: "24:18",
                views: "920K views"
            },
            {
                title: "React JS Tutorial for Beginners",
                description: "Learn React fundamentals, components, state, and hooks in this comprehensive guide.",
                thumbnail: "https://img.youtube.com/vi/78tVDc9xCvs/maxresdefault.jpg",
                appUrl: "youtube://watch?v=78tVDc9xCvs",
                webUrl: "https://www.youtube.com/watch?v=78tVDc9xCvs",
                duration: "2:15:42",
                views: "2.8M views"
            },
            {
                title: "Node.js and Express.js Tutorial",
                description: "Build a backend server with Node.js and Express.js for your web applications.",
                thumbnail: "https://img.youtube.com/vi/78tVDc9xCvs/maxresdefault.jpg",
                appUrl: "youtube://watch?v=78tVDc9xCvs",
                webUrl: "https://www.youtube.com/watch?v=78tVDc9xCvs",
                duration: "32:10",
                views: "1.1M views"
            }
        ];

        // DOM elements
        const videosContainer = document.getElementById('videosContainer');
        const linkModal = document.getElementById('linkModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const openAppBtn = document.getElementById('openAppBtn');
        const openWebBtn = document.getElementById('openWebBtn');
        const cancelBtn = document.getElementById('cancelBtn');

        // Current video selection
        let currentVideo = null;

        // Function to render videos
        function renderVideos() {
            videosContainer.innerHTML = '';
            
            videos.forEach((video, index) => {
                const videoCard = document.createElement('div');
                videoCard.className = 'video-card';
                videoCard.setAttribute('data-index', index);
                
                videoCard.innerHTML = `
                    <div class="thumbnail">
                        <img src="${video.thumbnail}" alt="${video.title}">
                        <div class="play-button">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">${video.title}</h3>
                        <p class="video-description">${video.description}</p>
                        <div class="video-meta">
                            <span><i class="far fa-clock"></i> ${video.duration}</span>
                            <span><i class="far fa-eye"></i> ${video.views}</span>
                        </div>
                    </div>
                `;
                
                videoCard.addEventListener('click', () => openVideoModal(index));
                videosContainer.appendChild(videoCard);
            });
        }

        // Function to open modal with video options
        function openVideoModal(index) {
            currentVideo = videos[index];
            modalTitle.textContent = currentVideo.title;
            modalDescription.textContent = currentVideo.description;
            linkModal.style.display = 'flex';
            
            // Set up button actions
            openAppBtn.onclick = () => {
                // Try to open the app, fall back to web if app is not available
                window.location.href = currentVideo.appUrl;
                setTimeout(() => {
                    window.location.href = currentVideo.webUrl;
                }, 500);
                linkModal.style.display = 'none';
            };
            
            openWebBtn.onclick = () => {
                window.open(currentVideo.webUrl, '_blank');
                linkModal.style.display = 'none';
            };
        }

        // Close modal when cancel button is clicked
        cancelBtn.addEventListener('click', () => {
            linkModal.style.display = 'none';
        });

        // Close modal when clicking outside of it
        window.addEventListener('click', (event) => {
            if (event.target === linkModal) {
                linkModal.style.display = 'none';
            }
        });

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            renderVideos();
            
            // Add a sample of how to add more videos via console
            console.log("To add more videos, edit the 'videos' array in the JavaScript section.");
            console.log("Each video needs: title, description, thumbnail, appUrl, webUrl");
        });
 