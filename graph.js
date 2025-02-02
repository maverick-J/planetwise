// Get URL parameters and update title
const urlParams = new URLSearchParams(window.location.search);
const place = urlParams.get('place') || 'Unknown Place';
document.getElementById('graph-title').textContent = `SDG Completion Graph for ${place}`;

// Generate sample data for SDGs
const sdgLabels = Array.from({length: 17}, (_, i) => `SDG ${i + 1}`);
const sdgData = Array.from({length: 17}, () => Math.floor(Math.random() * 100));

// SDG descriptions
const sdgDescriptions = {
    'SDG 1': 'No Poverty',
    'SDG 2': 'Zero Hunger', 
    'SDG 3': 'Good Health and Well-being',
    'SDG 4': 'Quality Education',
    'SDG 5': 'Gender Equality',
    'SDG 6': 'Clean Water and Sanitation',
    'SDG 7': 'Affordable and Clean Energy',
    'SDG 8': 'Decent Work and Economic Growth',
    'SDG 9': 'Industry, Innovation and Infrastructure',
    'SDG 10': 'Reduced Inequalities',
    'SDG 11': 'Sustainable Cities and Communities',
    'SDG 12': 'Responsible Consumption and Production',
    'SDG 13': 'Climate Action',
    'SDG 14': 'Life Below Water',
    'SDG 15': 'Life on Land',
    'SDG 16': 'Peace, Justice and Strong Institutions',
    'SDG 17': 'Partnerships for the Goals'
};

// Initialize chart
const ctx = document.getElementById('sdgGraph').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: sdgLabels,
        datasets: [{
            label: 'SDG Completion (%)',
            data: sdgData,
            backgroundColor: sdgData.map(value => 
                value < 50 ? 'rgba(255, 0, 0, 0.8)' : 'rgba(244, 208, 63, 0.8)'
            ),
            borderColor: sdgData.map(value => 
                value < 50 ? 'rgb(200, 0, 0)' : 'rgb(142, 92, 38)'
            ),
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
            hoverBorderColor: 'rgb(75, 192, 192)'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'SDG Progress Overview',
                font: {
                    size: 16,
                    weight: 'bold'
                }
            },
            legend: {
                position: 'bottom'
            },
            tooltip: {
                callbacks: {
                    title: function(context) {
                        const label = context[0].label;
                        return `${label}: ${sdgDescriptions[label]}`;
                    },
                    label: function(context) {
                        return `Completion: ${context.raw}%`;
                    }
                }
            }
        },
        onHover: (event, elements) => {
            const chartElement = event.chart.canvas;
            chartElement.style.cursor = elements.length ? 'pointer' : 'default';
        }
    }
});
