# T04-2 to T04-7: D3 Bar Chart

This project builds a horizontal bar chart of TV model counts by brand from `data/tvBrandCount.csv` using D3 v7.

## Files
- `index.html` - page markup and script loading
- `styles.css` - page and chart container styles
- `energy-d3.js` - T04-2 demo, disabled
- `t04-3-bars.js` - T04-3 test SVG, disabled
- `t04-4-load.js` - loads and types the CSV
- `t04-5-bars.js` - draws the chart with scales and labels
- `data/tvBrandCount.csv` - TV model counts by brand

## What each exercise added
- T04-2: set up the page and initial D3 demo
- T04-3: added a responsive SVG test shape
- T04-4: loaded the CSV and converted count values to numbers
- T04-5: drew bars using the chart data
- T04-6: added scales and sized the bars
- T04-7: grouped bars with category and value labels

## Changes from the tutorial code
T04-2 used `#content` and `#chart` selectors because `d3.select()` returns the first match, and the header already contains a `div` and an `svg`. T04-7 shortened the `xScale` range so the longest bar and its value label fit inside the viewBox.

## How to view
Live site: https://t04-2-chi.vercel.app

To run it locally, open with Live Server, because `d3.csv` needs a server.

## Use of GenAI
GitHub Copilot applied the code from the tutorial steps, Claude helped review the output and spot the selector and range issues, and I tested and checked every step myself.