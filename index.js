const data = [
    [10,50, 'US'],
    [30,70, 'Russia'],
    [40,50, 'China'],
    [70,20, 'Belgim'],
    [80,80, 'UK'],
    [0,30, 'Korea'],
    [70,10, 'Japan']
];

const w = 1000;
const h = 1000;
const p = 50;

const xScale = d3.scaleLinear().domain([0, d3.max(data, (d) => d[0])+10]).range([p, w-p]);
const yScale = d3.scaleLinear().domain([0, d3.max(data, (d) => d[1])+10]).range([h-p, p]);
const svg =  d3.select('body')
               .append('svg')
               .attr('width', w)
               .attr('height', h)

 svg.selectAll('circle')
     .data(data)
     .enter()
     .append('circle')
     .attr('cx', d => xScale(d[0]))
     .attr('cy', d => yScale(d[1]))
     .attr('r', 5)
     .attr('class', 'dot')

svg.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    //.text(d => d[0] + ',' + d[1]+',' + d[2])
    .text(d => d[2])
    .attr('x', d => xScale(d[0]))
    .attr('y', d => yScale(d[1])-10)
const x_axis = d3.axisBottom(xScale);
const y_axis = d3.axisLeft(yScale);

svg.append('g').attr('transform', `translate(${0}, ${h-p})`).call(x_axis);
svg.append('g').attr('transform', `translate(${p}, 0)`).call(y_axis);

