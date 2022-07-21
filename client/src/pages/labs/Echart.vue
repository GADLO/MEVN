<template>
  <div class="echart">
    <!-- <h1>Echart Lab</h1>

    <div id="main"></div> -->
    <div class="con">
      <div class="grid">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import * as echarts from 'echarts';

export default {
  data() {
    return {
      legendData: ['Email', 'Union', 'Video', 'Direct', 'Search'],
      xAxisData: [1, 2, 3, 4, 5, 6, 7],
      option: {
        title: {
          text: 'Echart Lab',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: this.legendData,
        },
        grid: {
          top: '10%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xAxisData,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      },
    };
  },
  mounted() {
    // const chartDom = document.querySelector('#main');
    // const myChart = echarts.init(chartDom);
    // (() => this.option && myChart.setOption(this.option))();
  },
};
</script>

<style lang="less" scoped>
.echart {
  //   //   width: 80vw;
  //   display: flex;
  //   justify-content: center;
  //   flex-direction: column;
  width: 100vw;
  height: 100vh;
}
#main {
  box-sizing: border-box;
  width: 90vw;
  height: 40vh;
  background-color: #fff;
  margin: 10px;
  display: flex;
  justify-content: center;
}

.con {
  width: 100vw;
  height: 100vh;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 100%;

  .item {
    border: 1px solid red;
  }
}
</style>
