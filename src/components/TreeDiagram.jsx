import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import styles from "./TreeDiagram.module.css";

function TreeDiagram({ data }) {
  const containerRef = useRef();
  const svgRef = useRef();

  useEffect(() => {
    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const baseWidth = 1920; // Base width for reference (or whatever your design base is)
    // const getScaleFactor = () => Math.min(width / baseWidth, 1);
    const scaleFactor = Math.min(width / baseWidth, 1);

    function highlightPath(node) {
      // Traverse up the hierarchy to find the ancestors
      const pathNodes = new Set();
      let current = node;
      while (current) {
        pathNodes.add(current); // Add the current node to the set
        current = current.parent; // Move up the hierarchy
      }

      // Highlight links corresponding to the path
      d3.selectAll(".link") // Select all links
        .transition()
        .duration(200)
        .style("stroke", (linkData) =>
          pathNodes.has(linkData.target) ? "white" : "darkgray"
        )
        .style("stroke-width", (linkData) =>
          pathNodes.has(linkData.target) ? 1.5 * scaleFactor : 1 * scaleFactor
        )
        .style("stroke-opacity", (linkData) =>
          pathNodes.has(linkData.target) ? 1 : 0.7
        );

      // Reduce opacity for all other text
      d3.selectAll("text")
        .transition()
        .duration(200)
        .style("opacity", (node) => (pathNodes.has(node) ? 1 : 0.3));
    }

    function resetPath() {
      d3.selectAll(".link")
        .transition()
        .duration(200)
        .style("stroke", "darkgray")
        .style("stroke-opacity", 0.7)
        .style("stroke-width", 1);

      d3.selectAll("text")
        .transition()
        .duration(200)
        .style("opacity", (d) => (d.data.confidence ? 0.3 : 1));
    }

    d3.json(data).then(function (input) {
      // Tree dimensions
      const diameter = height * 0.58;
      const radius = diameter / 2;

      // Create tree layout
      const tree = d3
        .tree()
        .size([2 * Math.PI, radius])
        .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth);

      const root = d3.hierarchy(input);
      const treeData = tree(root);

      // Retrieve nodes and links
      const nodes = treeData.descendants();
      const links = treeData.links();

      // Create SVG container
      const svg = d3
        .select(svgRef.current)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("width", width)
        .attr("height", height);
      // .attr("preserveAspectRatio", "xMidYMid meet");

      const graphGroup = svg
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2}) rotate(-15)`);

      // Draw links
      graphGroup
        .selectAll(".link")
        .data(links)
        .join("path")
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke", "darkgray")
        .attr("stroke-opacity", 0.7)
        .attr("stroke-width", 1 * scaleFactor)
        .attr(
          "d",
          d3
            .linkRadial()
            .angle((d) => d.x)
            .radius((d) => d.y)
        );

      // Draw nodes
      const node = graphGroup
        .selectAll(".node")
        .data(nodes)
        .join("g")
        .attr("class", "node")
        .attr("transform", (d) => {
          return `rotate(${(d.x * 180) / Math.PI - 90}) translate(${d.y}, 0)`;
        });

      node
        .append("circle")
        .attr("r", (d) => {
          //   console.log(d);
          let radius;

          if (d.data.confidence) {
            if (d.data.confidence === "high") radius = 28;
            else if (d.data.confidence === "medium") radius = 16;
            else if (d.data.confidence === "low") radius = 6;
          } else {
            if (d.data.name === "Earth") {
              radius = 24;
            } else if (
              d.data.name === "Ocean" ||
              d.data.name === "High Mountain\n and Polar Land\n Regions"
            ) {
              radius = 16;
            } else if (
              d.parent?.data.name === "Ocean" ||
              d.parent?.data.name === "High Mountain\n and Polar Land\n Regions"
            ) {
              radius = 12;
            } else {
              radius = 6;
            }
          }

          d.originalRadius = radius; // Store the original radius
          return radius * scaleFactor;
        })
        .attr("fill", (d) => {
          if (d.data.status === "pos" || d.data.status === "inc") {
            return "#1d3557";
          } else if (d.data.status === "neg" || d.data.status === "dec") {
            return "#e63946";
          } else if (
            d.data.status === "pos&neg" ||
            d.data.status === "inc&dec"
          ) {
            return "#b0b8b5";
          }

          if (d.data.name === "Earth") {
            return "#D6CCC2";
          } else if (
            d.data.name === "Ocean" ||
            d.parent?.data.name === "Ocean"
          ) {
            // console.log(d.parent.data);
            return "#89c2d9";
          } else if (
            d.data.name === "High Mountain\n and Polar Land\n Regions" ||
            d.parent?.data.name === "High Mountain\n and Polar Land\n Regions"
          ) {
            return "#8AA282";
          } else {
            if (d.parent?.parent?.data.name === "Ocean") {
              return "#2C5F75";
            } else {
              return "#4C5C38";
            }
          }
        })
        .attr("fill-opacity", (d) => {
          if (d.data.confidence === "high") return 0.85;
          if (d.data.confidence === "medium") return 0.5;
          if (d.data.confidence === "low") return 0.25;
          return 0.75;
        })
        .on("mouseover", function (event, d) {
          // Cancel ongoing transitions for the hovered node
          d3.select(this.parentNode).select("text").interrupt();
          d3.select(this).interrupt();

          // Highlight link
          highlightPath(d);

          d3.select(this.parentNode)
            // .interrupt()
            .select("text")
            .transition()
            .duration(200)
            .style("opacity", 1)
            .attr(
              "font-size",
              d.originalFontSize < 18
                ? d.originalFontSize * 1.6 * scaleFactor
                : d.originalFontSize * 1.2 * scaleFactor
            );
          d3.select(this)
            .interrupt()
            .transition()
            .duration(200)
            .attr(
              "r",
              d.originalRadius < 24
                ? d.originalRadius * 2 * scaleFactor
                : d.originalRadius * 1.4 * scaleFactor
            );
        })
        .on("mouseout", function (event, d) {
          // Cancel ongoing transitions for the hovered node
          d3.select(this.parentNode).select("text").interrupt();
          d3.select(this).interrupt();

          // Reset path
          resetPath();

          d3.select(this.parentNode)
            .select("text")
            .transition()
            .duration(200)
            .style("opacity", d.data.confidence ? 0.3 : 1)
            .attr("font-size", d.originalFontSize * scaleFactor);
          d3.select(this)
            .transition()
            .duration(200) // duration of the transition
            .attr("r", d.originalRadius * scaleFactor); // revert to the original radius
        });

      // Add node labels
      node
        .append("text")
        .attr("font-family", "Merriweather")
        .style("fill", "white")
        .style("opacity", (d) => (d.data.confidence ? 0.3 : 1))
        .attr("font-size", (d) => {
          let fontSize;
          if (d.data.confidence) {
            if (d.data.confidence === "high") {
              fontSize = 18;
            } else if (d.data.confidence === "medium") {
              fontSize = 12;
            } else if (d.data.confidence === "low") {
              fontSize = 8;
            }
          } else {
            fontSize = 12;
          }
          d.originalFontSize = fontSize; // Store the original font size
          return fontSize * scaleFactor;
        })
        .attr("text-anchor", (d) => (d.x < Math.PI ? "start" : "end"))
        .attr("transform", (d) => {
          if (d.data.name === "Earth") {
            return "rotate(270) translate(35, 50)";
          } else {
            if (d.x < Math.PI) {
              if (!d.data.confidence) {
                return "translate(2, 0)";
              } else {
                return "translate(20, 0)";
              }
            } else {
              if (!d.data.confidence) {
                return "rotate(180) translate(-2, 0)";
              } else {
                return "rotate(180) translate(-20, 0)";
              }
            }
          }
        })
        .each(function (d) {
          // Split the text on \n and add each line as a tspan
          let lines = d.data.name.split("\n");
          // let y = 0;
          for (let i = 0; i < lines.length; i++) {
            d3.select(this)
              .append("tspan")
              .attr("x", 0)
              .attr("dy", i ? "1.1em" : "0em")
              // .attr("text-anchor", "end")
              .attr("dx", function (d) {
                // Define the horizontal offset
                if (d.data.name === "Earth") {
                  //   return 88;
                } else if (
                  d.data.name === "Earth" ||
                  d.data.name === "Ocean" ||
                  d.data.name === "High Mountain\n and Polar Land\n Regions"
                ) {
                  return d.x < Math.PI ? 28 * scaleFactor : -28 * scaleFactor;
                }
                return d.x < Math.PI ? 16 * scaleFactor : -16 * scaleFactor;
              })
              .text(lines[i]);
            // y += 16; // Adjust the line height as needed
          }
        });
    });
  }, [data, containerRef, svgRef]);

  return (
    <div className={styles.treeContainer} style={{}} ref={containerRef}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default TreeDiagram;
