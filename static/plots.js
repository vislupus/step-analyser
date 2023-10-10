var trace1 = {
	x: [1, 2, 3, 4],
	y: [10, 15, 13, 17],
	mode: "markers",
	type: "scatter",
	marker: {
		color: "rgb(219, 64, 82)",
		size: 12,
	},
};

var trace2 = {
	x: [2, 3, 4, 5],
	y: [16, 5, 11, 9],
	mode: "lines",
	type: "scatter",
	line: {
		color: "rgb(55, 128, 191)",
		width: 3,
	},
};

var trace3 = {
	x: [1, 2, 3, 4],
	y: [12, 9, 15, 12],
	mode: "lines+markers",
	type: "scatter",
	marker: {
		color: "rgb(128, 0, 128)",
		size: 8,
		opacity: 0.5,
	},
	line: {
		color: "rgb(128, 0, 128)",
		width: 1,
	},
};

var layout = {
	// title: "My Plotly.js Graphic",
	// font: { size: 18 },
	// width: 500,
	// height: 500,
	autosize: true,
	margin: {
		l: 50,
		r: 50,
		t: 0,
		b: 50,
	},
	showlegend: false,
	scattermode: "group",
	scattergap: 0.7,
	xaxis: {
		range: [0.9, 5.1],
		title: "Country",
	},
	yaxis: {
		// 	range: [4, 18],
		title: "Medals",
	},
};

var config = {
	responsive: true,
	displayModeBar: false,
	// modeBarButtonsToRemove: ["toImage"],
	displaylogo: false,
	staticPlot: false,
};

var data = [trace1, trace2, trace3];

Plotly.newPlot("graphic-trend", data, layout, config);

var trace1 = {
	x: [1, 2, 3, 4],
	y: [5, 10, 2, 8],
	type: "bar",
	hovertemplate: "X: %{x}<br>Y: %{y}",
};

var data = [trace1];

var layout = {
	autosize: true,
	margin: {
		l: 50,
		r: 50,
		t: 0,
		b: 50,
	},
	showlegend: false,
};

var config = {
	responsive: true,
	displayModeBar: false,
	displaylogo: false,
	staticPlot: false,
};

Plotly.newPlot("graphic-mount-year", data, layout, config);

var trace1 = {
	x: ["giraffes", "orangutans", "monkeys"],
	y: [20, 14, 23],
	name: "SF Zoo",
	type: "bar",
};

var trace2 = {
	x: ["giraffes", "orangutans", "monkeys"],
	y: [12, 18, 29],
	name: "LA Zoo",
	type: "bar",
};

var data = [trace1, trace2];

var layout = {
	autosize: true,
	margin: {
		l: 50,
		r: 50,
		t: 0,
		b: 50,
	},
	barmode: "group",
	showlegend: false,
};

var config = {
	responsive: true,
	displayModeBar: false,
	displaylogo: false,
	staticPlot: false,
};

Plotly.newPlot("graphic-year", data, layout, config);

var data = [
	{
		x: [0, 10, 20, 30, 40, 50],
		y: [0, 10, 20, 30, 40, 50],
	},
];

var layout = {
	autosize: true,
	margin: {
		l: 50,
		r: 50,
		t: 0,
		b: 50,
	},
	showlegend: false,
};

var config = {
	responsive: true,
	displayModeBar: false,
	displaylogo: false,
	staticPlot: false,
};

Plotly.newPlot("graphic-mount", data, layout, config);

var trace1 = {
	x: [0, 1, 2, 3, 4, 5],
	y: [1.5, 1, 1.3, 0.7, 0.8, 0.9],
	type: "scatter",
};

var trace2 = {
	x: [0, 1, 2, 3, 4, 5],
	y: [1, 0.5, 0.7, -1.2, 0.3, 0.4],
	type: "bar",
};

var data = [trace1, trace2];

var layout = {
	autosize: true,
	margin: {
		l: 50,
		r: 50,
		t: 0,
		b: 50,
	},
	showlegend: false,
};

var config = {
	responsive: true,
	displayModeBar: false,
	displaylogo: false,
	staticPlot: false,
};

Plotly.newPlot("graphic-week", data, layout, config);
