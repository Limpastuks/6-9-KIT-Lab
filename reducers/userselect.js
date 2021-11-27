const initialUserState = {
    friends: []
  };
  
  export default function(state = initialUserState, action) {
    switch (action.type) {
      case "User_ADD":
        const friendlist = state.friends;
        for (var i = 0; i < friendlist.length; i++) {
          if (action.payloader === friendlist[i]) {
            flag = 1;
          }
        }
        return {
          ...state,
          friends: [...state.friends, action.payloader]
        };
      case "User_Remove":
        return {
          ...state,
          friends: state.friends.filter(friends => friends !== action.payloader)
        };
  
      default:
        return state;
    }
  }
  