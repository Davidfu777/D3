
let simplepic = d3.selectAll("#simple-pic")

simplepic.style('background-color','skyblue')
for(let i = 0; i<10 ;i++){
    simplepic.append('circle')
    .attr('cx',280+i*10)
    .attr('cy',160+i)
    .attr('r',10)
    .style('fill','none')
    .style('stroke','green')
}
for (let i=0; i<3;i++){
    d3.selectAll('svg').append('rect')
    .attr('x',300+i*10)
    .attr('y',100)
    .attr('width',10)
    .attr('height',20)
    .style('fill','blue')
    .style('stroke','black')
}
for (let i=0; i<3;i++){
    simplepic.append('rect')
    .attr('x',330+i*10)
    .attr('y',100)
    .attr('width',10)
    .attr('height',20)
    .style('fill','green')
    .style('stroke','black')
}


let chessboard = d3.select("svg.chessboard")
for(let j = 0;j<8 ;j++){
    if(j%2==0){
        for (let i = 0; i <8; i++){
            if(i%2 == 0){
                chessboard.append('rect')
                .attr('x',0+i*300/8)
                .attr('y',0+j*300/8)
                .attr('width',300/8)
                .attr('height',300/8)
                .style('fill','white')
                .style('stroke','black')
            }
            if(i%2 != 0){
                chessboard.append('rect')
                .attr('x',0+i*300/8)
                .attr('y',0+j*300/8)
                .attr('width',300/8)
                .attr('height',300/8)
                .style('fill','black')
                .style('stroke','black')
            }
        }
    }
    if(j%2!=0){
        for (let i = 0; i <8; i++){
            if(i%2 == 0){
                chessboard.append('rect')
                .attr('x',0+i*300/8)
                .attr('y',0+j*300/8)
                .attr('width',300/8)
                .attr('height',300/8)
                .style('fill','black')
                .style('stroke','black')
            }
            if(i%2 != 0){
                chessboard.append('rect')
                .attr('x',0+i*300/8)
                .attr('y',0+j*300/8)
                .attr('width',300/8)
                .attr('height',300/8)
                .style('fill','white')
                .style('stroke','black')
            }
        }
    }
    
}
d3.select("#text").remove()
function chess(size){
    d3.select('body').append('h2')
    .text(`${size} X ${size}`)
    .append('br')
    d3.select('body').append('svg')
    .attr('width',size)
    .attr('height',size)
    .style('background-color','red')

}
chess('200')
console.log('Do you like this picture?')
