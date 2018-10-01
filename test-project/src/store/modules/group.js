// import Cookies from 'js-cookie';

const group = {
  state: {
    allGroups: ['昌平','复兴门','燕园','申园','泰康仙林鼓楼医院',"TK000"],
    allRoles: ['超级管理员','管理员','普通用户','访客'],
  },
  getters: {
    groupCate: state => {
      return state.tabledata
    },
    // codecate: state => {
    //   var tmparray = [];
    //   for (const item in state.tabledata){
    //     tmparray.push(item.code)
    //   }
    //   return tmparray
    // }
  },
  mutations: {
    setGroupData(state, val) {
      state.tabledata = val;
    },
    // getGroupData: state => state.tabledata,
    getCodeCate: state => {
      var tmparray = [];
      for (const item in state.tabledata) {
        tmparray.push(item.code)
      }
      return tmparray
    }
  }
};

export default group;
