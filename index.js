const handleFirstTab = (e) => {
    if(e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing')

        window.removeEventListener('keydown', handleFirstTab)
        window.addEventListener('mousedown', handleMouseDownOnce)
    }

}

const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing')

    window.removeEventListener('mousedown', handleMouseDownOnce)
    window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered
        ? "scale(1)"
        : "scale(0)";
};

window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
        isBackToTopRendered = true;
        alterStyles(isBackToTopRendered);
    } else {
        isBackToTopRendered = false;
        alterStyles(isBackToTopRendered);
    }
});

particlesJS('particles-js', {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
        },
    },
    retina_detect: true,
});

function toggleTimeline(element) {
    const content = element.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

const timelineWrapper = document.querySelector('.timeline-wrapper');
timelineWrapper.addEventListener('wheel', (e) => {
    e.preventDefault();
    timelineWrapper.scrollBy({
        left: e.deltaY < 0 ? -100 : 100,
    });
});

const timelineWrapper = document.querySelector(".timeline-wrapper");

timelineWrapper.addEventListener("scroll", () => {
    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            item.querySelector(".timeline-card").style.transform = "scale(1.1)";
        } else {
            item.querySelector(".timeline-card").style.transform = "scale(1)";
        }
    });
});

const timelineYears = document.querySelectorAll(".timeline-year");
const contentTitle = document.getElementById("content-title");
const contentDescription = document.getElementById("content-description");
const contentLink = document.getElementById("content-link");

// Define content for each milestone
const milestones = {
    "2017 - 2021": {
        title: "VIT (B.Tech in Computer Science)",
        description: "Graduated with a focus on AI and ML. Key projects include IoT-based freshness detection and CT scan diagnosis using deep learning.",
        link: "https://scholar.google.com/citations?hl=en&user=7ba_pt8AAAAJ",
    },
    "2019": {
        title: "YouTube Channel Launched",
        description: "Grew to 26.5K+ subscribers and over 2M views, creating engaging ML content.",
        link: "https://youtube.com/NachiketaHebbar",
    },
    "2021 - 2023": {
        title: "Awiros (AI Engineer)",
        description: "Optimized real-time facial recognition, deployed object detection pipelines, and improved model efficiency for edge devices.",
        link: "https://github.com/nachiketah",
    },
    "2023": {
        title: "CMU Master's Program",
        description: "Specialized in Generative AI, NLP, and Recommendation Systems. Worked on latent diffusion models and Secondary DAO capstone.",
        link: "#",
    },
    "2024 Summer": {
        title: "Superkind (ML Intern)",
        description: "Built an NLP-based chatbot, improving response accuracy by 40%, and designed recommendation models, boosting engagement by 15%.",
        link: "#",
    },
};

// Event listener for timeline year clicks
timelineYears.forEach((year) => {
    year.addEventListener("click", () => {
        const yearText = year.getAttribute("data-year");
        const milestone = milestones[yearText];
        contentTitle.textContent = milestone.title;
        contentDescription.textContent = milestone.description;
        if (milestone.link) {
            contentLink.href = milestone.link;
            contentLink.style.display = "inline-block";
        } else {
            contentLink.style.display = "none";
        }
    });
});

const timelineItems = document.querySelectorAll(".timeline-item");

const handleScroll = () => {
    timelineItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top >= 0 && rect.bottom <= windowHeight) {
            item.style.transform = "scale(1)";
            item.style.opacity = "1";
        } else {
            item.style.transform = "scale(0.8)";
            item.style.opacity = "0.6";
        }
    });
};

document.querySelector(".timeline-wrapper").addEventListener("scroll", handleScroll);

const timelineYears = document.querySelectorAll(".timeline-year");
const timelineDetails = document.querySelectorAll(".timeline-detail");
