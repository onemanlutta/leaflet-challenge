# leaflet-challenge I

![1-Logo](https://github.com/onemanlutta/leaflet-challenge/assets/118937365/1b483c1f-ae3a-47bf-8bb7-2d10c5dd5bfd)


## Overview
This project aims to create an interactive map using Leaflet.js and D3.js to visualize earthquake data sourced from the USGS GeoJSON feed. The map will display earthquake locations, magnitudes represented by marker sizes, and depths by marker colors. Optional integration includes plotting tectonic plate boundaries alongside earthquake data for additional context. Users can toggle between different base maps and overlays using layer controls. This visualization not only educates about seismic activity but also demonstrates the integration of geographic data using modern web mapping technologies.

## Repository Structure
- `Leaflet-I/`
  - `index.html`
  - `style.css`
  - `logic.js`


## Tasks

### Part 1: Create the Earthquake Visualization

1. **Set Up Repository**
   - Created a new repository on GitHub named `leaflet-challenge`.
   - Cloned the repository to local machine.
   - Created directories `Leaflet-1`

2. **Prepare Files**
   - Developed `index.html`, `style.css`, and `logic.js` for `Leaflet-Part-1`.
   - Incorporated Leaflet.js and D3.js for mapping and data visualization.

3. **Fetch and Visualize Data**
   - Utilized D3.js to fetch earthquake data from the USGS GeoJSON feed.

  ![4-JSON](https://github.com/onemanlutta/leaflet-challenge/assets/118937365/722b4576-1e7f-46ce-ad80-184a3b951de7)

     
   - Implemented Leaflet.js to create an interactive map centered on a specific location.
   - Added a tile layer to the map for base visualization.

4. **Enhance Markers**
   - Created markers reflecting earthquake magnitude (size) and depth (color).
   - Included popups displaying detailed earthquake information.

5. **Create Legend**
   - Developed a legend to provide context for earthquake data visualization.
  
![2-BasicMap](https://github.com/onemanlutta/leaflet-challenge/assets/118937365/04832917-76c0-4c02-bf7b-caa7b7c80d6a)



This project showcases the capabilities of web mapping technologies in visualizing and analyzing seismic activity data.


## References
Dataset created by [the United States Geological Survey](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).
