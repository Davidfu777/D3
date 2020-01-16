let margin = {top: 20, right: 10, bottom: 20, left: 10}
d3.selectAll('svg#cars-scatter')
.attr('width', 600)
.attr('height', 400)
//.style('background-color','blue')
let mpglist = cars.map(d => d.mpg)    // or cars.map(d => d["map"])
d3.extent(mpglist)
console.log(d3.extent(mpglist))

let displist = cars.map(d => d.disp)
d3.extent(displist)
console.log(d3.extent(displist))

let wtlist = cars.map(d => d.wt)
d3.extent(wtlist)
console.log(d3.extent(wtlist))

let cyllist = cars.map(d => d.cyl)
d3.extent(cyllist)
console.log(d3.extent(cyllist))

let dispscale =
d3.scaleLinear()
.domain([0,500])
.range([50,550])


let mpgscale = 
d3.scaleLinear()
.domain([0,40])
.range([50,350])

let wtscale =
d3.scaleSqrt()
.domain([0,6])
.range([0,10])

let cylscale = 
d3.scaleLinear()
.domain([4,8])
.range(['green','blue'])

let carsplot = d3.selectAll('svg#cars-scatter')
.selectAll('circle')
.data(cars)
.enter()
.append('circle')
.attr('cx', (d) => dispscale(d.disp))
.attr('cy', (d) => mpgscale(d.mpg))
//.attr('cx',50)
//.attr('cy',50)
.attr('r', (d) => wtscale(d.wt))
.style('fill', (d) => cylscale(d.cyl))
.style('stroke','black')
console.log(dispscale(100))

let xAxis = d3.axisBottom(dispscale)
let yAxis = d3.axisLeft(mpgscale)

