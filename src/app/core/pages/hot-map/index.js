var heatmapInstance = h337.create({
    container: document.getElementById('heatmap-container')
});

var dataPoints = [
    { x: 100, y: 100, value: 10 },
    { x: 200, y: 200, value: 20 },
    { x: 300, y: 300, value: 30 }
];

heatmapInstance.setData({
    max: 30,
    data: dataPoints
});
