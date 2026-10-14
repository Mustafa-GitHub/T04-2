d3.select("h1")
  .style("color", "green");

// "#content" instead of "div": the header has divs, and select() picks the first match.
d3.select("#content")
  .append("p")
  .text("Purchasing a low energy consumption TV will help with your energy bills!");

// "#chart" instead of "svg": the logo in the header is the first svg on the page.
d3.select("#chart")
  .append("rect");

d3.select("#chart")
  .append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("width", 100)
  .attr("height", 30)
  .style("fill", "green");