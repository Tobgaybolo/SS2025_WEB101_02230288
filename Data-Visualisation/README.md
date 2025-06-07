### Practical 7
---
This practical demonstrates how to build an interactive analytics dashboard using React and popular charting libraries. The dashboard visualizes sales, customer, and visitor data through various chart types.

### Features
**Chart Components**
- Monthly Sales Performance: Interactive line chart (Recharts)

- Product Category Distribution: Pie/Doughnut chart (Recharts)

- Customer Acquisition: Stacked bar chart (Chart.js)

- Weekly Visitors: Area chart (Chart.js)

**Key Functionalities**
- Responsive design for all screen sizes

- Interactive tooltips and legends

- Data formatting and transformation

- Performance optimization

**Installation**
1. Clone the repository:
```
git clone https://github.com/syangche/Data-Visualisation.git
cd Data-Visualisation
```
2. Install dependencies:
```
npm install recharts react-chartjs-2 chart.js date-fns
```
3. Start the development server:
```
npm run dev
```
### Project Structure
```
src/
├── components/
│   ├── MonthlySalesChart.jsx
│   ├── ProductCategoryChart.jsx
│   ├── CustomerAcquisitionChart.jsx
│   └── WeeklyVisitorsChart.jsx
├── data/
│   └── salesData.js
├── App.jsx
└── App.css
```
### Implemented Charts
1. Monthly Sales Chart (Recharts)
- Displays sales, profit, and targets over time

- Features:

    - Multiple data series

    - Custom tooltip formatting

    - Reference lines

2. Product Category Chart (Recharts)
- Shows distribution of sales by product category

- Features:

    - Interactive legend

    - Percentage display

    - Responsive sizing

3. Customer Acquisition Chart (Chart.js)
- Visualizes new vs returning customers

- Features:

    - Stacked bar format

    - Date formatting

    - Custom color schemes

4. Weekly Visitors Chart (Chart.js)
- Tracks website visitor trends

- Features:

    - Area chart styling

    - Custom tooltips

    - Responsive scaling

### Customization Options
1. Data Formatting:

- Modify salesData.js to use your own dataset

- Adjust date formatting in chart components

2. Styling:

- Edit colors in chart configuration objects

- Modify App.css for layout changes

3. Chart Types:

- Swap chart types by changing component imports

- Add new chart variants from library documentation